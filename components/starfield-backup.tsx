"use client";

import { useEffect, useRef } from "react";

export default function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Mouse position
    const mouse = { x: -1000, y: -1000 };
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Small stars
    const smallStars: Array<{
      x: number;
      y: number;
      brightness: number;
      twinkleSpeed: number;
      twinklePhase: number;
    }> = [];

    // Medium bright stars
    const mediumStars: Array<{
      x: number;
      y: number;
      brightness: number;
      twinkleSpeed: number;
      twinklePhase: number;
    }> = [];

    // Super bright stars with GOLD ones!
    const superBrightStars: Array<{
      x: number;
      y: number;
      brightness: number;
      twinkleSpeed: number;
      twinklePhase: number;
      isGold: boolean;
    }> = [];

    // Generate small stars (280)
    for (let i = 0; i < 280; i++) {
      smallStars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        brightness: Math.random() * 0.4 + 0.5,
        twinkleSpeed: Math.random() * 0.004 + 0.002,
        twinklePhase: Math.random() * Math.PI * 2,
      });
    }

    // Generate medium bright stars (35)
    for (let i = 0; i < 35; i++) {
      mediumStars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        brightness: Math.random() * 0.3 + 0.7,
        twinkleSpeed: Math.random() * 0.006 + 0.003,
        twinklePhase: Math.random() * Math.PI * 2,
      });
    }

    // Generate super bright stars (15) - some GOLD!
    for (let i = 0; i < 15; i++) {
      superBrightStars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        brightness: Math.random() * 0.15 + 0.85,
        twinkleSpeed: Math.random() * 0.007 + 0.004,
        twinklePhase: Math.random() * Math.PI * 2,
        isGold: i < 5, // First 5 are GOLD!
      });
    }

    // Draw background
    const drawBackground = () => {
      ctx.fillStyle = "#000000";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Cosmic clouds
      const clouds = [
        { x: canvas.width * 0.3, y: canvas.height * 0.4, size: 600, color: "rgba(15, 20, 40, 0.25)" },
        { x: canvas.width * 0.7, y: canvas.height * 0.6, size: 700, color: "rgba(20, 15, 35, 0.2)" },
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
        gradient.addColorStop(0, cloud.color);
        gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      });

      // Milky Way
      const milkyWay = ctx.createLinearGradient(
        0,
        canvas.height,
        canvas.width,
        0
      );
      milkyWay.addColorStop(0, "rgba(0, 0, 0, 0)");
      milkyWay.addColorStop(0.4, "rgba(40, 50, 70, 0.12)");
      milkyWay.addColorStop(0.5, "rgba(50, 60, 85, 0.18)");
      milkyWay.addColorStop(0.6, "rgba(40, 50, 70, 0.12)");
      milkyWay.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = milkyWay;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    drawBackground();

    // Animation
    let animationFrame: number;
    const animate = () => {
      drawBackground();

      // Mouse skylight with gold tint
      if (mouse.x > 0 && mouse.y > 0) {
        const gradient = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          150
        );
        gradient.addColorStop(0, "rgba(255, 245, 220, 0.22)");
        gradient.addColorStop(0.4, "rgba(255, 240, 200, 0.12)");
        gradient.addColorStop(0.7, "rgba(255, 235, 180, 0.05)");
        gradient.addColorStop(1, "rgba(255, 235, 180, 0)");
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 150, 0, Math.PI * 2);
        ctx.fill();
      }

      // Draw small stars
      smallStars.forEach((star) => {
        star.twinklePhase += star.twinkleSpeed;
        const twinkle = Math.sin(star.twinklePhase) * 0.1 + 0.9;
        const brightness = star.brightness * twinkle;

        const glow = ctx.createRadialGradient(
          star.x,
          star.y,
          0,
          star.x,
          star.y,
          1.5
        );
        glow.addColorStop(0, `rgba(255, 255, 255, ${brightness})`);
        glow.addColorStop(0.7, `rgba(240, 245, 255, ${brightness * 0.3})`);
        glow.addColorStop(1, "rgba(230, 240, 255, 0)");
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(star.x, star.y, 1.5, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = `rgba(255, 255, 255, ${brightness})`;
        ctx.fillRect(star.x - 0.5, star.y - 0.5, 1, 1);
      });

      // Draw medium bright stars
      mediumStars.forEach((star) => {
        star.twinklePhase += star.twinkleSpeed;
        const twinkle = Math.sin(star.twinklePhase) * 0.15 + 0.85;
        const brightness = star.brightness * twinkle;

        const glow = ctx.createRadialGradient(
          star.x,
          star.y,
          0,
          star.x,
          star.y,
          3.5
        );
        glow.addColorStop(0, `rgba(255, 255, 255, ${brightness})`);
        glow.addColorStop(0.5, `rgba(245, 250, 255, ${brightness * 0.5})`);
        glow.addColorStop(1, "rgba(235, 245, 255, 0)");
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(star.x, star.y, 3.5, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = `rgba(255, 255, 255, ${brightness})`;
        ctx.fillRect(star.x - 1, star.y - 1, 2, 2);
      });

      // Draw SUPER BRIGHT stars (some GOLD for NajmX brand!)
      superBrightStars.forEach((star) => {
        star.twinklePhase += star.twinkleSpeed;
        const twinkle = Math.sin(star.twinklePhase) * 0.12 + 0.88;
        const brightness = star.brightness * twinkle;

        // Gold stars for brand!
        const starColor = star.isGold 
          ? { r: 244, g: 168, b: 23 }  // NajmX Gold
          : { r: 255, g: 255, b: 255 }; // White

        // Large bright glow
        const glow = ctx.createRadialGradient(
          star.x,
          star.y,
          0,
          star.x,
          star.y,
          star.isGold ? 8 : 7
        );
        glow.addColorStop(0, `rgba(${starColor.r}, ${starColor.g}, ${starColor.b}, ${brightness})`);
        glow.addColorStop(0.25, `rgba(${starColor.r}, ${starColor.g}, ${starColor.b}, ${brightness * 0.8})`);
        glow.addColorStop(0.5, `rgba(${starColor.r}, ${starColor.g}, ${starColor.b}, ${brightness * 0.5})`);
        glow.addColorStop(0.75, `rgba(${starColor.r}, ${starColor.g}, ${starColor.b}, ${brightness * 0.25})`);
        glow.addColorStop(1, `rgba(${starColor.r}, ${starColor.g}, ${starColor.b}, 0)`);
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.isGold ? 8 : 7, 0, Math.PI * 2);
        ctx.fill();

        // Bright center point
        ctx.fillStyle = `rgba(${starColor.r}, ${starColor.g}, ${starColor.b}, ${brightness})`;
        ctx.fillRect(star.x - 1.5, star.y - 1.5, 3, 3);
      });

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-50 pointer-events-none"
    />
  );
}