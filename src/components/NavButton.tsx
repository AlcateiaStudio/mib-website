'use client';

import { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Image from 'next/image';

interface NavButtonProps {
  href: string;
  imageSrc: string;
  hoverImageSrc: string;
  labelTextKey: string;
  className?: string;
}

export default function NavButton({ 
  href, 
  imageSrc, 
  hoverImageSrc, 
  labelTextKey,
  className = ''
}: NavButtonProps) {
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = () => {
    // Extract current locale from pathname
    const locale = pathname.split('/')[1];
    const fullHref = `/${locale}${href}`;
    router.push(fullHref);
  };

  return (
    <button
      className={`nav-button-container ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
      title={labelTextKey}
      style={{
        position: 'relative',
        display: 'block',
        width: '120px',
        height: '120px',
        border: '2px solid green',
        backgroundColor: 'rgba(0,255,0,0.2)',
        zIndex: 25
      }}
    >
      {/* Temporary: using regular img instead of Next.js Image */}
      <img
        src={isHovered ? hoverImageSrc : imageSrc}
        alt={labelTextKey}
        width={120}
        height={120}
        style={{
          display: 'block',
          width: '100%',
          height: '100%',
          objectFit: 'contain'
        }}
      />
      {/* Debug text */}
      <div style={{
        position: 'absolute',
        bottom: '-20px',
        left: '0',
        right: '0',
        fontSize: '10px',
        color: 'black',
        backgroundColor: 'white',
        textAlign: 'center'
      }}>
        {labelTextKey}
      </div>
    </button>
  );
}
