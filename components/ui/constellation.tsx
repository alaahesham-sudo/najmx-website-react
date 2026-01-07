"use client";

export default function Constellation({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <div className={`relative ${className} flex items-center justify-center`}>
      <svg
        viewBox="0 0 120 120"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Primary star gradient - golden to indigo */}
          <radialGradient id="primaryStarGrad" cx="50%" cy="50%">
            <stop offset="0%" stopColor="#FFD700" stopOpacity="1" />
            <stop offset="40%" stopColor="#FFA500" stopOpacity="0.9" />
            <stop offset="70%" stopColor="#6366F1" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.4" />
          </radialGradient>
          
          {/* Secondary star gradient - indigo to purple */}
          <radialGradient id="secondaryStarGrad" cx="50%" cy="50%">
            <stop offset="0%" stopColor="#6366F1" stopOpacity="1" />
            <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#A78BFA" stopOpacity="0.5" />
          </radialGradient>
          
          {/* Tertiary star gradient - subtle glow */}
          <radialGradient id="tertiaryStarGrad" cx="50%" cy="50%">
            <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#6366F1" stopOpacity="0.4" />
          </radialGradient>
          
          {/* Enhanced glow effect */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          
          {/* Stronger glow for primary star */}
          <filter id="strongGlow">
            <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          
          {/* Constellation line gradient - representing connections */}
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6366F1" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#A78BFA" stopOpacity="0.3" />
          </linearGradient>
          
          {/* Pulse animation for connection lines */}
          <linearGradient id="pulseLineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6366F1" stopOpacity="0.8">
              <animate attributeName="stop-opacity" values="0.3;0.8;0.3" dur="3s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.6">
              <animate attributeName="stop-opacity" values="0.2;0.6;0.2" dur="3s" repeatCount="indefinite" begin="0.5s" />
            </stop>
          </linearGradient>
        </defs>
        
        {/* Constellation lines - forming a network/communication pattern */}
        <g stroke="url(#lineGrad)" strokeWidth="1" fill="none" opacity="0.7">
          {/* Central hub connections - representing your central platform */}
          <line x1="60" y1="60" x2="40" y2="30" />
          <line x1="60" y1="60" x2="80" y2="30" />
          <line x1="60" y1="60" x2="90" y2="60" />
          <line x1="60" y1="60" x2="80" y2="90" />
          <line x1="60" y1="60" x2="40" y2="90" />
          <line x1="60" y1="60" x2="30" y2="60" />
          
          {/* Secondary connections - representing client networks */}
          <line x1="40" y1="30" x2="30" y2="20" />
          <line x1="80" y1="30" x2="90" y2="20" />
          <line x1="90" y1="60" x2="100" y2="50" />
          <line x1="80" y1="90" x2="90" y2="100" />
          <line x1="40" y1="90" x2="30" y2="100" />
          <line x1="30" y1="60" x2="20" y2="50" />
          
          {/* Inter-client connections - showing communication flow */}
          <line x1="40" y1="30" x2="50" y2="20" />
          <line x1="80" y1="30" x2="70" y2="20" />
          <line x1="90" y1="60" x2="100" y2="70" />
          <line x1="80" y1="90" x2="70" y2="100" />
        </g>
        
        {/* Primary center star - NajmX platform (brightest) */}
        <circle cx="60" cy="60" r="4.5" fill="url(#primaryStarGrad)" filter="url(#strongGlow)">
          <animate
            attributeName="opacity"
            values="0.9;1;0.9"
            dur="2s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="r"
            values="4.5;5;4.5"
            dur="3s"
            repeatCount="indefinite"
          />
        </circle>
        {/* Inner core of primary star */}
        <circle cx="60" cy="60" r="2" fill="#FFD700" opacity="1">
          <animate
            attributeName="opacity"
            values="1;0.8;1"
            dur="1.5s"
            repeatCount="indefinite"
          />
        </circle>
        
        {/* Secondary stars - Major clients/regions (Egypt, UK, US) */}
        <circle cx="40" cy="30" r="3.5" fill="url(#secondaryStarGrad)" filter="url(#glow)">
          <animate
            attributeName="opacity"
            values="0.7;1;0.7"
            dur="2.5s"
            repeatCount="indefinite"
            begin="0.3s"
          />
          <animate
            attributeName="r"
            values="3.5;4;3.5"
            dur="2.8s"
            repeatCount="indefinite"
            begin="0.2s"
          />
        </circle>
        <circle cx="40" cy="30" r="1.5" fill="#6366F1" opacity="0.9" />
        
        <circle cx="80" cy="30" r="3.5" fill="url(#secondaryStarGrad)" filter="url(#glow)">
          <animate
            attributeName="opacity"
            values="0.7;1;0.7"
            dur="2.3s"
            repeatCount="indefinite"
            begin="0.5s"
          />
          <animate
            attributeName="r"
            values="3.5;4;3.5"
            dur="3.2s"
            repeatCount="indefinite"
            begin="0.4s"
          />
        </circle>
        <circle cx="80" cy="30" r="1.5" fill="#6366F1" opacity="0.9" />
        
        <circle cx="90" cy="60" r="3.5" fill="url(#secondaryStarGrad)" filter="url(#glow)">
          <animate
            attributeName="opacity"
            values="0.7;1;0.7"
            dur="2.7s"
            repeatCount="indefinite"
            begin="0.7s"
          />
          <animate
            attributeName="r"
            values="3.5;4;3.5"
            dur="2.5s"
            repeatCount="indefinite"
            begin="0.6s"
          />
        </circle>
        <circle cx="90" cy="60" r="1.5" fill="#6366F1" opacity="0.9" />
        
        {/* Tertiary stars - Additional clients/connections */}
        <circle cx="80" cy="90" r="2.5" fill="url(#tertiaryStarGrad)" filter="url(#glow)">
          <animate
            attributeName="opacity"
            values="0.6;0.95;0.6"
            dur="3s"
            repeatCount="indefinite"
            begin="0.9s"
          />
          <animate
            attributeName="r"
            values="2.5;3;2.5"
            dur="3.5s"
            repeatCount="indefinite"
            begin="0.8s"
          />
        </circle>
        
        <circle cx="40" cy="90" r="2.5" fill="url(#tertiaryStarGrad)" filter="url(#glow)">
          <animate
            attributeName="opacity"
            values="0.6;0.95;0.6"
            dur="2.9s"
            repeatCount="indefinite"
            begin="1.1s"
          />
          <animate
            attributeName="r"
            values="2.5;3;2.5"
            dur="3.1s"
            repeatCount="indefinite"
            begin="1s"
          />
        </circle>
        
        <circle cx="30" cy="60" r="2.5" fill="url(#tertiaryStarGrad)" filter="url(#glow)">
          <animate
            attributeName="opacity"
            values="0.6;0.95;0.6"
            dur="2.6s"
            repeatCount="indefinite"
            begin="1.3s"
          />
          <animate
            attributeName="r"
            values="2.5;3;2.5"
            dur="2.9s"
            repeatCount="indefinite"
            begin="1.2s"
          />
        </circle>
        
        {/* Smaller stars - Individual clients */}
        <circle cx="30" cy="20" r="2" fill="url(#tertiaryStarGrad)" filter="url(#glow)" opacity="0.7">
          <animate
            attributeName="opacity"
            values="0.5;0.85;0.5"
            dur="3.2s"
            repeatCount="indefinite"
            begin="1.5s"
          />
        </circle>
        
        <circle cx="90" cy="20" r="2" fill="url(#tertiaryStarGrad)" filter="url(#glow)" opacity="0.7">
          <animate
            attributeName="opacity"
            values="0.5;0.85;0.5"
            dur="2.8s"
            repeatCount="indefinite"
            begin="1.7s"
          />
        </circle>
        
        <circle cx="100" cy="50" r="2" fill="url(#tertiaryStarGrad)" filter="url(#glow)" opacity="0.7">
          <animate
            attributeName="opacity"
            values="0.5;0.85;0.5"
            dur="3.1s"
            repeatCount="indefinite"
            begin="1.9s"
          />
        </circle>
        
        <circle cx="100" cy="70" r="2" fill="url(#tertiaryStarGrad)" filter="url(#glow)" opacity="0.7">
          <animate
            attributeName="opacity"
            values="0.5;0.85;0.5"
            dur="2.7s"
            repeatCount="indefinite"
            begin="2.1s"
          />
        </circle>
        
        <circle cx="90" cy="100" r="2" fill="url(#tertiaryStarGrad)" filter="url(#glow)" opacity="0.7">
          <animate
            attributeName="opacity"
            values="0.5;0.85;0.5"
            dur="3.3s"
            repeatCount="indefinite"
            begin="2.3s"
          />
        </circle>
        
        <circle cx="30" cy="100" r="2" fill="url(#tertiaryStarGrad)" filter="url(#glow)" opacity="0.7">
          <animate
            attributeName="opacity"
            values="0.5;0.85;0.5"
            dur="2.9s"
            repeatCount="indefinite"
            begin="2.5s"
          />
        </circle>
        
        <circle cx="20" cy="50" r="2" fill="url(#tertiaryStarGrad)" filter="url(#glow)" opacity="0.7">
          <animate
            attributeName="opacity"
            values="0.5;0.85;0.5"
            dur="3s"
            repeatCount="indefinite"
            begin="2.7s"
          />
        </circle>
        
        <circle cx="50" cy="20" r="1.5" fill="url(#tertiaryStarGrad)" filter="url(#glow)" opacity="0.6">
          <animate
            attributeName="opacity"
            values="0.4;0.8;0.4"
            dur="2.4s"
            repeatCount="indefinite"
            begin="2.9s"
          />
        </circle>
        
        <circle cx="70" cy="20" r="1.5" fill="url(#tertiaryStarGrad)" filter="url(#glow)" opacity="0.6">
          <animate
            attributeName="opacity"
            values="0.4;0.8;0.4"
            dur="2.6s"
            repeatCount="indefinite"
            begin="3.1s"
          />
        </circle>
        
        <circle cx="70" cy="100" r="1.5" fill="url(#tertiaryStarGrad)" filter="url(#glow)" opacity="0.6">
          <animate
            attributeName="opacity"
            values="0.4;0.8;0.4"
            dur="2.5s"
            repeatCount="indefinite"
            begin="3.3s"
          />
        </circle>
      </svg>
    </div>
  );
}
