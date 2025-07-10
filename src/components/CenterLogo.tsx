'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function CenterLogo() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="w-56 h-56 mx-auto cursor-pointer transition-all duration-300 hover:scale-105 relative z-10"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ pointerEvents: 'auto' }}
    >
      <Image
        src={isHovered ? '/assets/logo_center_hover.png' : '/assets/logo_center.png'}
        alt="Made in Bugs Logo"
        width={224}
        height={224}
        className="w-full h-full object-contain"
        priority={true}
      />
    </div>
  );
}
