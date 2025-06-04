import React from 'react';

interface OrganicBackgroundProps {
  className?: string;
  dotCount?: number;
  primaryColor?: string;
  secondaryColor?: string;
  accentColor?: string;
}

export function OrganicBackground({
  className = '',
  dotCount = 20,
  primaryColor = 'primary-30',
  secondaryColor = 'secondary-30',
  accentColor = 'accent-30',
}: OrganicBackgroundProps) {
  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`}>
      {/* Organic shapes */}
      <div className={`absolute w-[800px] h-[800px] -top-96 -right-96 bg-${primaryColor}/10 rounded-[60%_40%_25%_75%] blur-3xl animate-morph`}></div>
      <div className={`absolute w-[600px] h-[600px] -bottom-64 -left-64 bg-${secondaryColor}/10 rounded-[35%_65%_50%_50%] blur-3xl animate-morph`} style={{ animationDelay: '2s' }}></div>
      <div className={`absolute w-[400px] h-[400px] top-1/2 left-1/4 bg-${accentColor}/10 rounded-[45%_55%_70%_30%] blur-3xl animate-morph`} style={{ animationDelay: '3s' }}></div>
      
      {/* Scattered dots */}
      <div className="absolute inset-0 mix-blend-overlay opacity-20">
        {[...Array(dotCount)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 bg-${primaryColor} rounded-full animate-float`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              transform: `scale(${Math.random() * 2 + 1})`
            }}
          ></div>
        ))}
      </div>
    </div>
  );
} 