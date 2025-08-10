import React from 'react';

interface FuturisticGridProps {
  className?: string;
  opacity?: number;
}

const FuturisticGrid: React.FC<FuturisticGridProps> = ({ 
  className = "", 
  opacity = 0.1 
}) => {
  return (
    <div className={`absolute inset-0 ${className}`}>
      {/* Grid pattern */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--ti-orange) / ${opacity}) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--ti-orange) / ${opacity}) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />
      
      {/* Floating elements */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-ti-orange/30 rounded-full animate-pulse" />
      <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-ti-orange-light/40 rounded-full animate-pulse delay-1000" />
      <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-ti-orange/20 rounded-full animate-pulse delay-500" />
      
      {/* Animated lines */}
      <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-ti-orange/20 to-transparent" />
      <div className="absolute left-0 top-1/2 w-full h-px bg-gradient-to-r from-transparent via-ti-orange/20 to-transparent" />
    </div>
  );
};

export default FuturisticGrid;