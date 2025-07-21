'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function CenterLogo() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="text-center relative z-10" style={{ pointerEvents: 'auto' }}>
      {/* Logo - Responsive sizing */}
      <div
        className="responsive-logo mx-auto cursor-pointer transition-all duration-300 hover:scale-105 relative z-10"
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

      {/* Studio Name - Positioned very close to logo with lower z-index */}
      <h1
        className="font-logo text-2xl md:text-3xl font-medium text-gray-800 tracking-wide relative z-5"
        style={{
          marginTop: '4px',
          pointerEvents: 'none'
        }}
      >
        Made in Bugs
      </h1>
    </div>
  );
}
