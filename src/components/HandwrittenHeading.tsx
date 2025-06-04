import React from 'react';

interface HandwrittenHeadingProps {
  children: React.ReactNode;
  className?: string;
  size?: 'small' | 'medium' | 'large';
}

export function HandwrittenHeading({ children, className = '', size = 'large' }: HandwrittenHeadingProps) {
  const sizeClasses = {
    small: 'text-base sm:text-lg lg:text-xl',
    medium: 'text-xl sm:text-2xl lg:text-3xl',
    large: 'text-3xl sm:text-4xl lg:text-5xl'
  };

  return (
    <div className={`font-shadows-into-light ${sizeClasses[size]} ${className}`}>
      {children}
    </div>
  );
} 