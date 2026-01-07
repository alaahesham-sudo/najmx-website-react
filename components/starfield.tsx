"use client";

import { useEffect, useRef } from "react";

export default function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: false }); // Disable alpha for better performance
    if (!ctx) return;

    // Use requestIdleCallback for resize to avoid blocking
    let resizeTimeout: NodeJS.Timeout;
    const resizeCanvas = () => {
      if (resizeTimeout) clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }, 150); // Debounce resize
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas, { passive: true });

    // Mouse position for subtle interaction (throttled for performance)
    const mouse = { x: -1000, y: -1000 };
    let mouseUpdateTime = 0;
    const handleMouseMove = (e: MouseEvent) => {
      const now = performance.now();
      if (now - mouseUpdateTime > 16) { // Throttle to ~60fps
        mouse.x = e.clientX;
        mouse.y = e.clientY;
        mouseUpdateTime = now;
      }
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // Star types with realistic properties
    interface Star {
      x: number;
      y: number;
      size: number;
      brightness: number;
      twinkleSpeed: number;
      twinklePhase: number;
      color: { r: number; g: number; b: number };
      glowRadius: number;
      driftX: number;
      driftY: number;
      driftSpeed: number;
      originalX: number;
      originalY: number;
    }

    const stars: Star[] = [];

    // Generate realistic stars - fewer but more meaningful
    // Small distant stars (subtle background)
    for (let i = 0; i < 120; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      stars.push({
        x,
        y,
        originalX: x,
        originalY: y,
        size: Math.random() * 0.8 + 0.3,
        brightness: Math.random() * 0.15 + 0.1, // Much more subtle
        twinkleSpeed: Math.random() * 0.002 + 0.001,
        twinklePhase: Math.random() * Math.PI * 2,
        color: { r: 255, g: 255, b: 255 }, // White for distant stars
        glowRadius: 1.2,
        driftX: (Math.random() - 0.5) * 0.05, // Noticeable horizontal drift
        driftY: (Math.random() - 0.5) * 0.04, // Noticeable vertical drift
        driftSpeed: Math.random() * 0.002 + 0.001,
      });
    }

    // Medium stars (visible but not overwhelming)
    for (let i = 0; i < 25; i++) {
      const colorType = Math.random();
      let color;
      if (colorType < 0.7) {
        // Blue-white stars (most common)
        color = { r: 200, g: 220, b: 255 };
      } else if (colorType < 0.9) {
        // Yellow stars (like our sun)
        color = { r: 255, g: 245, b: 200 };
      } else {
        // Gold stars (NajmX brand accent)
        color = { r: 255, g: 215, b: 100 };
      }
      
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      stars.push({
        x,
        y,
        originalX: x,
        originalY: y,
        size: Math.random() * 1.2 + 0.8,
        brightness: Math.random() * 0.2 + 0.15, // More subtle
        twinkleSpeed: Math.random() * 0.003 + 0.002,
        twinklePhase: Math.random() * Math.PI * 2,
        color,
        glowRadius: 2.5,
        driftX: (Math.random() - 0.5) * 0.04,
        driftY: (Math.random() - 0.5) * 0.035,
        driftSpeed: Math.random() * 0.0025 + 0.0015,
      });
    }

    // Bright stars (few, strategic placement)
    for (let i = 0; i < 8; i++) {
      const isGold = i < 3; // First 3 are gold (NajmX brand)
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      stars.push({
        x,
        y,
        originalX: x,
        originalY: y,
        size: Math.random() * 1.5 + 1.2,
        brightness: Math.random() * 0.15 + 0.25, // Visible but professional
        twinkleSpeed: Math.random() * 0.004 + 0.003,
        twinklePhase: Math.random() * Math.PI * 2,
        color: isGold 
          ? { r: 255, g: 215, b: 100 } // NajmX Gold
          : { r: 240, g: 245, b: 255 }, // Bright blue-white
        glowRadius: 4,
        driftX: (Math.random() - 0.5) * 0.03,
        driftY: (Math.random() - 0.5) * 0.025,
        driftSpeed: Math.random() * 0.003 + 0.002,
      });
    }

    // Constellation lines (subtle connections between key stars)
    const constellationPairs: Array<[number, number]> = [];
    const brightStarIndices = stars.length - 8; // Last 8 are bright
    for (let i = 0; i < 5; i++) {
      const idx1 = brightStarIndices + Math.floor(Math.random() * 4);
      const idx2 = brightStarIndices + 4 + Math.floor(Math.random() * 4);
      if (idx1 !== idx2) {
        constellationPairs.push([idx1, idx2]);
      }
    }

    // Meteors (falling stars)
    interface Meteor {
      x: number;
      y: number;
      vx: number;
      vy: number;
      length: number;
      life: number;
      maxLife: number;
      brightness: number;
      color: { r: number; g: number; b: number };
    }

    const meteors: Meteor[] = [];
    let lastMeteorTime = 0;
    const meteorInterval = 1500 + Math.random() * 2000; // 1.5-3.5 seconds between meteors (more frequent)

    const createMeteor = () => {
      // Start from random point on top or right edge
      const startSide = Math.random();
      let startX, startY;
      
      if (startSide < 0.5) {
        // Start from top
        startX = Math.random() * canvas.width;
        startY = -50;
      } else {
        // Start from right
        startX = canvas.width + 50;
        startY = Math.random() * canvas.height * 0.6;
      }
      
      // Direction (downward and slightly left)
      const angle = Math.random() * 0.4 + 0.6; // 0.6 to 1.0 radians (34-57 degrees)
      const speed = 400 + Math.random() * 300; // 400-700 pixels per second (much faster)
      
      const colorType = Math.random();
      let color;
      if (colorType < 0.5) {
        // Blue-white (most common)
        color = { r: 200, g: 220, b: 255 };
      } else if (colorType < 0.75) {
        // Gold (NajmX brand) - more frequent
        color = { r: 255, g: 215, b: 100 };
      } else {
        // Bright white
        color = { r: 255, g: 255, b: 255 };
      }
      
      meteors.push({
        x: startX,
        y: startY,
        vx: -Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        length: 80 + Math.random() * 120, // Longer trails
        life: 1,
        maxLife: 1,
        brightness: 0.8 + Math.random() * 0.2, // Brighter
        color,
      });
    };

    // Animation time for smooth effects
    let time = 0;
    let constellationPulse = 0;
    let lastTime = performance.now();

    // Draw subtle space background
    const drawBackground = () => {
      // Deep space gradient
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, "#0a0a0f");
      gradient.addColorStop(0.5, "#050508");
      gradient.addColorStop(1, "#000000");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Very subtle cosmic clouds (barely visible)
      const clouds = [
        { x: canvas.width * 0.2, y: canvas.height * 0.3, size: 800, opacity: 0.08 },
        { x: canvas.width * 0.8, y: canvas.height * 0.7, size: 900, opacity: 0.06 },
      ];

      clouds.forEach((cloud) => {
        const gradient = ctx.createRadialGradient(
          cloud.x,
          cloud.y,
          0,
          cloud.x,
          cloud.y,
          cloud.size
        );
        gradient.addColorStop(0, `rgba(30, 40, 60, ${cloud.opacity})`);
        gradient.addColorStop(0.5, `rgba(20, 30, 50, ${cloud.opacity * 0.5})`);
        gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      });

      // Subtle milky way (very faint)
      const milkyWay = ctx.createLinearGradient(
        canvas.width * 0.3,
        0,
        canvas.width * 0.7,
        canvas.height
      );
      milkyWay.addColorStop(0, "rgba(0, 0, 0, 0)");
      milkyWay.addColorStop(0.3, "rgba(25, 35, 50, 0.04)");
      milkyWay.addColorStop(0.5, "rgba(30, 40, 55, 0.06)");
      milkyWay.addColorStop(0.7, "rgba(25, 35, 50, 0.04)");
      milkyWay.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = milkyWay;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    drawBackground();

    // Animation loop
    let animationFrame: number;
    const animate = () => {
      const currentTime = performance.now();
      const deltaTime = (currentTime - lastTime) / 1000; // Delta in seconds
      lastTime = currentTime;
      time += deltaTime * 0.5; // Smooth time progression
      constellationPulse = Math.sin(time * 2) * 0.05 + 0.15; // More noticeable pulse
      
      drawBackground();

      // Very subtle mouse interaction (professional, not distracting)
      if (mouse.x > 0 && mouse.y > 0) {
        const distance = Math.sqrt(
          Math.pow(mouse.x - canvas.width / 2, 2) + 
          Math.pow(mouse.y - canvas.height / 2, 2)
        );
        const maxDistance = Math.sqrt(canvas.width * canvas.width + canvas.height * canvas.height) / 2;
        const intensity = 1 - (distance / maxDistance) * 0.3; // Fade based on distance from center
        
        const gradient = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          200
        );
        gradient.addColorStop(0, `rgba(255, 245, 220, ${0.08 * intensity})`);
        gradient.addColorStop(0.5, `rgba(255, 240, 200, ${0.04 * intensity})`);
        gradient.addColorStop(1, "rgba(255, 235, 180, 0)");
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 200, 0, Math.PI * 2);
        ctx.fill();
      }

      // Create new meteors occasionally
      if (currentTime - lastMeteorTime > meteorInterval) {
        createMeteor();
        lastMeteorTime = currentTime;
      }

      // Update and draw meteors
      for (let i = meteors.length - 1; i >= 0; i--) {
        const meteor = meteors[i];
        const dt = deltaTime || 0.016; // Fallback to ~60fps
        
        // Update position
        meteor.x += meteor.vx * dt;
        meteor.y += meteor.vy * dt;
        
        // Update life (slower fade for more visibility)
        meteor.life -= dt * 0.3; // Fade out over ~3 seconds
        
        // Remove if dead or off screen
        if (meteor.life <= 0 || meteor.y > canvas.height + 100 || meteor.x < -100) {
          meteors.splice(i, 1);
          continue;
        }
        
        // Calculate velocity magnitude for trail
        const velMag = Math.sqrt(meteor.vx * meteor.vx + meteor.vy * meteor.vy);
        const dirX = meteor.vx / velMag;
        const dirY = meteor.vy / velMag;
        
        // Draw main meteor trail (longer and brighter)
        const alpha = meteor.life * meteor.brightness;
        const trailLength = meteor.length * (0.8 + meteor.life * 0.2); // Dynamic length
        
        // Main bright trail
        const gradient = ctx.createLinearGradient(
          meteor.x,
          meteor.y,
          meteor.x - dirX * trailLength,
          meteor.y - dirY * trailLength
        );
        gradient.addColorStop(0, `rgba(${meteor.color.r}, ${meteor.color.g}, ${meteor.color.b}, ${alpha * 1.2})`);
        gradient.addColorStop(0.2, `rgba(${meteor.color.r}, ${meteor.color.g}, ${meteor.color.b}, ${alpha})`);
        gradient.addColorStop(0.5, `rgba(${meteor.color.r}, ${meteor.color.g}, ${meteor.color.b}, ${alpha * 0.6})`);
        gradient.addColorStop(0.8, `rgba(${meteor.color.r}, ${meteor.color.g}, ${meteor.color.b}, ${alpha * 0.3})`);
        gradient.addColorStop(1, `rgba(${meteor.color.r}, ${meteor.color.g}, ${meteor.color.b}, 0)`);
        
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 3 + Math.sin(time * 5 + i) * 0.5; // Animated width
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(meteor.x, meteor.y);
        ctx.lineTo(meteor.x - dirX * trailLength, meteor.y - dirY * trailLength);
        ctx.stroke();
        
        // Secondary glow trail (wider, more visible)
        const glowGradient = ctx.createLinearGradient(
          meteor.x,
          meteor.y,
          meteor.x - dirX * trailLength * 0.6,
          meteor.y - dirY * trailLength * 0.6
        );
        glowGradient.addColorStop(0, `rgba(${meteor.color.r}, ${meteor.color.g}, ${meteor.color.b}, ${alpha * 0.4})`);
        glowGradient.addColorStop(0.5, `rgba(${meteor.color.r}, ${meteor.color.g}, ${meteor.color.b}, ${alpha * 0.2})`);
        glowGradient.addColorStop(1, `rgba(${meteor.color.r}, ${meteor.color.g}, ${meteor.color.b}, 0)`);
        
        ctx.strokeStyle = glowGradient;
        ctx.lineWidth = 8;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(meteor.x, meteor.y);
        ctx.lineTo(meteor.x - dirX * trailLength * 0.6, meteor.y - dirY * trailLength * 0.6);
        ctx.stroke();
        
        // Bright pulsing head with larger glow
        const headPulse = Math.sin(time * 10 + i) * 0.2 + 1;
        const headGlow = ctx.createRadialGradient(
          meteor.x,
          meteor.y,
          0,
          meteor.x,
          meteor.y,
          8 * headPulse
        );
        headGlow.addColorStop(0, `rgba(${meteor.color.r}, ${meteor.color.g}, ${meteor.color.b}, ${alpha * 2 * headPulse})`);
        headGlow.addColorStop(0.3, `rgba(${meteor.color.r}, ${meteor.color.g}, ${meteor.color.b}, ${alpha * 1.2 * headPulse})`);
        headGlow.addColorStop(0.6, `rgba(${meteor.color.r}, ${meteor.color.g}, ${meteor.color.b}, ${alpha * 0.6 * headPulse})`);
        headGlow.addColorStop(1, `rgba(${meteor.color.r}, ${meteor.color.g}, ${meteor.color.b}, 0)`);
        ctx.fillStyle = headGlow;
        ctx.beginPath();
        ctx.arc(meteor.x, meteor.y, 8 * headPulse, 0, Math.PI * 2);
        ctx.fill();
        
        // Bright core
        ctx.fillStyle = `rgba(${meteor.color.r}, ${meteor.color.g}, ${meteor.color.b}, ${alpha * 2.5})`;
        ctx.beginPath();
        ctx.arc(meteor.x, meteor.y, 2, 0, Math.PI * 2);
        ctx.fill();
        
        // Sparkle particles behind the meteor
        for (let j = 0; j < 3; j++) {
          const sparkleDist = (1 - meteor.life) * trailLength * (0.3 + j * 0.2);
          const sparkleX = meteor.x - dirX * sparkleDist + (Math.random() - 0.5) * 4;
          const sparkleY = meteor.y - dirY * sparkleDist + (Math.random() - 0.5) * 4;
          const sparkleAlpha = (1 - meteor.life) * alpha * 0.6;
          
          ctx.fillStyle = `rgba(${meteor.color.r}, ${meteor.color.g}, ${meteor.color.b}, ${sparkleAlpha})`;
          ctx.beginPath();
          ctx.arc(sparkleX, sparkleY, 1, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Draw constellation lines with visible pulse and wave animation
      ctx.strokeStyle = `rgba(150, 180, 220, ${constellationPulse})`;
      ctx.lineWidth = 0.5 + Math.sin(time * 1.5) * 0.2; // Animated line width
      constellationPairs.forEach(([idx1, idx2], index) => {
        const star1 = stars[idx1];
        const star2 = stars[idx2];
        if (star1 && star2) {
          // Visible wave effect along the line
          const lineLength = Math.sqrt(
            Math.pow(star2.x - star1.x, 2) + 
            Math.pow(star2.y - star1.y, 2)
          );
          const segments = Math.max(5, Math.floor(lineLength / 15));
          
          ctx.beginPath();
          ctx.moveTo(star1.x, star1.y);
          
          for (let i = 1; i <= segments; i++) {
            const t = i / segments;
            const x = star1.x + (star2.x - star1.x) * t;
            const y = star1.y + (star2.y - star1.y) * t;
            // More visible wave animation
            const wave = Math.sin(time * 1.5 + index * 2 + t * 3) * 2;
            const perpX = -(star2.y - star1.y) / lineLength;
            const perpY = (star2.x - star1.x) / lineLength;
            ctx.lineTo(x + perpX * wave, y + perpY * wave);
          }
          
          ctx.stroke();
        }
      });

      // Draw stars with realistic properties and animations
      stars.forEach((star, index) => {
        star.twinklePhase += star.twinkleSpeed;
        const twinkle = Math.sin(star.twinklePhase) * 0.08 + 0.92; // Subtle twinkle
        
        // Visible drift animation (circular motion)
        const driftOffset = time * star.driftSpeed * 10;
        star.x = star.originalX + Math.sin(driftOffset) * star.driftX * 80;
        star.y = star.originalY + Math.cos(driftOffset) * star.driftY * 80;
        
        // Noticeable size variation for depth effect
        const sizeVariation = Math.sin(time * 1.5 + index * 0.5) * 0.15 + 1;
        const currentSize = star.size * sizeVariation;
        const currentBrightness = star.brightness * twinkle;
        
        // More noticeable parallax effect based on star size
        const parallaxFactor = star.size / 1.5;
        const parallaxX = (mouse.x - canvas.width / 2) * parallaxFactor * 0.0003;
        const parallaxY = (mouse.y - canvas.height / 2) * parallaxFactor * 0.0003;
        const displayX = star.x + parallaxX;
        const displayY = star.y + parallaxY;

        // Realistic glow effect with animated radius (more visible)
        const animatedGlowRadius = star.glowRadius * (1 + Math.sin(time * 2 + index) * 0.25);
        const glow = ctx.createRadialGradient(
          displayX,
          displayY,
          0,
          displayX,
          displayY,
          animatedGlowRadius
        );
        glow.addColorStop(0, `rgba(${star.color.r}, ${star.color.g}, ${star.color.b}, ${currentBrightness})`);
        glow.addColorStop(0.3, `rgba(${star.color.r}, ${star.color.g}, ${star.color.b}, ${currentBrightness * 0.6})`);
        glow.addColorStop(0.6, `rgba(${star.color.r}, ${star.color.g}, ${star.color.b}, ${currentBrightness * 0.3})`);
        glow.addColorStop(1, `rgba(${star.color.r}, ${star.color.g}, ${star.color.b}, 0)`);
        
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(displayX, displayY, animatedGlowRadius, 0, Math.PI * 2);
        ctx.fill();

        // Star core (realistic point with visible rotation effect)
        const rotation = time * 2 + index;
        const sparkle = Math.sin(rotation * 3) * 0.2 + 1;
        ctx.fillStyle = `rgba(${star.color.r}, ${star.color.g}, ${star.color.b}, ${currentBrightness * 1.2 * sparkle})`;
        ctx.beginPath();
        ctx.arc(displayX, displayY, currentSize * 0.5, 0, Math.PI * 2);
        ctx.fill();
        
        // Animated cross-hair effect for brighter stars (professional touch)
        if (star.size > 1.5) {
          const crossPulse = Math.sin(time * 3 + index) * 0.1 + 0.4;
          ctx.strokeStyle = `rgba(${star.color.r}, ${star.color.g}, ${star.color.b}, ${currentBrightness * crossPulse})`;
          ctx.lineWidth = 0.3 + Math.sin(time * 2 + index) * 0.1;
          const crossSize = currentSize * (0.8 + Math.sin(time * 2.5 + index) * 0.2);
          ctx.beginPath();
          ctx.moveTo(displayX - crossSize, displayY);
          ctx.lineTo(displayX + crossSize, displayY);
          ctx.moveTo(displayX, displayY - crossSize);
          ctx.lineTo(displayX, displayY + crossSize);
          ctx.stroke();
        }
      });

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (resizeTimeout) clearTimeout(resizeTimeout);
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-50 pointer-events-none opacity-90"
      style={{ mixBlendMode: 'normal' }}
    />
  );
}
