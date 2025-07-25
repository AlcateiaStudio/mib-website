'use client';

import { useState } from 'react';
import Image from 'next/image';
import { getImagePath } from '../lib/imagePaths';

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
          src={getImagePath(isHovered ? '/assets/logo_center_hover.png' : '/assets/logo_center.png')}
          alt="Made in Bugs Logo"
          width={224}
          height={224}
          className="w-full h-full object-contain"
          priority={true}
        />
      </div>
    </div>
  );
}
