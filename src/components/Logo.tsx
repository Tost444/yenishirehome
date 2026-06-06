import React from 'react';

export function Logo({ className = '' }: { className?: string }) {
  return (
    <img 
      src="/logo.png" 
      alt="Yenishire Home Logo" 
      className={`w-full h-full object-contain ${className}`} 
    />
  );
}
