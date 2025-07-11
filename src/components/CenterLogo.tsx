'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function CenterLogo() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="text-center space-y-4 relative z-20" style={{ pointerEvents: 'auto' }}>
      {/* Logo */}
      <div
        className="w-56 h-56 mx-auto cursor-pointer transition-all duration-300 hover:scale-105"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
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

      {/* Studio Name */}
      <h1 className="font-logo text-2xl md:text-3xl font-medium text-gray-800 tracking-wide">
        Made in Bugs
      </h1>
    </div>
  );
}
