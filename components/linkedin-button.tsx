"use client";

import { useState, useEffect } from "react";

export default function LinkedInButton() {
  const linkedinUrl = "https://www.linkedin.com/in/alaa-hesham-244995189/";
  const [isHovered, setIsHovered] = useState(false);
  const [pulseScale, setPulseScale] = useState(1);
  
  useEffect(() => {
    // Continuous pulse animation to show presence
    const interval = setInterval(() => {
      setPulseScale(prev => {
        if (prev >= 1.15) return 1;
        return prev + 0.02;
      });
    }, 50);
    return () => clearInterval(interval);
  }, []);
  
  const handleClick = () => {
    window.open(linkedinUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <button
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Connect on LinkedIn"
    >
      <div className="relative">
        {/* Notification Badge - Dynamic Presence Indicator */}
        <div className="absolute -top-1 -right-1 z-20 flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br from-green-400 to-emerald-500 shadow-lg border-2 border-gray-900">
          <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-75"></div>
          <div className="relative h-2 w-2 rounded-full bg-white"></div>
        </div>
        
        {/* Main Button Container - Bigger Size */}
        <div 
          className="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600/95 via-indigo-700/95 to-blue-700/95 shadow-2xl border border-indigo-500/40 overflow-hidden transition-all duration-300 hover:scale-110 hover:shadow-indigo-500/50"
          style={{ transform: `scale(${pulseScale})` }}
        >
          {/* Animated Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-blue-600 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          {/* Shimmer Effect */}
          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          
          {/* LinkedIn Icon - Bigger */}
          <svg
            className="relative z-10 h-10 w-10 text-white transition-transform duration-300 group-hover:scale-110"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
          
          {/* Subtle Glow on Hover */}
          <div className="absolute inset-0 rounded-2xl bg-indigo-400/0 group-hover:bg-indigo-400/20 transition-all duration-300 blur-xl"></div>
          
          {/* Continuous Pulse Ring - Presence Indicator */}
          <div className="absolute inset-0 rounded-2xl border-2 border-indigo-400/20 animate-pulse"></div>
        </div>
        
        {/* Tooltip */}
        <div className={`absolute bottom-full right-0 mb-3 px-3 py-1.5 rounded-lg bg-gray-900/95 backdrop-blur-sm border border-gray-700/50 shadow-xl text-xs text-gray-200 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ${isHovered ? 'translate-y-0' : 'translate-y-2'}`}>
          Connect on LinkedIn
          <div className="absolute top-full right-4 -mt-1 w-2 h-2 bg-gray-900 border-r border-b border-gray-700/50 rotate-45"></div>
        </div>
      </div>
    </button>
  );
}
