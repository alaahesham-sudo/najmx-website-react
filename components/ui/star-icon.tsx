export default function StarIcon({ className = "w-3 h-3", glow = false }: { className?: string; glow?: boolean }) {
  return (
    <svg 
      className={className}
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="starGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFD700" stopOpacity="1" />
          <stop offset="50%" stopColor="#FFA500" stopOpacity="1" />
          <stop offset="100%" stopColor="#FF8C00" stopOpacity="0.9" />
        </linearGradient>
        {glow && (
          <filter id="starGlow">
            <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        )}
      </defs>
      <path
        d="M12 2L14.5 8.5L21.5 9.5L16.5 14L18 21L12 17.5L6 21L7.5 14L2.5 9.5L9.5 8.5L12 2Z"
        fill="url(#starGradient)"
        stroke="#FFD700"
        strokeWidth="0.5"
        strokeLinejoin="round"
        filter={glow ? "url(#starGlow)" : undefined}
        style={{
          filter: glow ? "drop-shadow(0 0 3px rgba(255, 215, 0, 0.6))" : undefined
        }}
      />
      <path
        d="M12 2L14.5 8.5L21.5 9.5L16.5 14L18 21L12 17.5L6 21L7.5 14L2.5 9.5L9.5 8.5L12 2Z"
        fill="none"
        stroke="#FFA500"
        strokeWidth="0.3"
        strokeLinejoin="round"
        opacity="0.6"
      />
    </svg>
  );
}

