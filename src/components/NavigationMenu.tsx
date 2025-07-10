'use client';

import NavButton from './NavButton';
import type { Translations } from '../lib/i18n';

interface NavigationMenuProps {
  translations: Translations['navigation'];
}

export default function NavigationMenu({ translations }: NavigationMenuProps) {
  // Configuration for logo and button positioning
  const logoTopOffset = 280; // Should match the top offset in page.tsx
  const logoSize = 224; // 56 * 4 = 224px (w-56 h-56)
  const logoCenterY = logoTopOffset + (logoSize / 2); // Center Y of the logo
  const logoCenterX = '50%'; // Horizontally centered
  
  // Star positioning - pixel offsets from logo center
  const starRadius = 270; // Distance from logo center to buttons (increased for better spacing)
  const buttonSize = 120; // Size of each button
  const buttonOffset = buttonSize / 2; // Half button size for centering

  const buttons = [
    {
      key: 'team',
      href: '/team',
      imageSrc: '/assets/team_button_idle.png',
      hoverImageSrc: '/assets/team_button_hover.png',
      label: translations.team,
      // Top position (12 o'clock)
      style: {
        position: 'absolute' as const,
        top: `${logoCenterY - starRadius - buttonOffset}px`,
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 20,
        pointerEvents: 'auto' as const
      }
    },
    {
      key: 'illustrations',
      href: '/illustrations',
      imageSrc: '/assets/illustrations_button_idle.png',
      hoverImageSrc: '/assets/illustrations_button_hover.png',
      label: translations.illustrations,
      // Top-right position (2 o'clock) - 60 degrees
      style: {
        position: 'absolute' as const,
        top: `${logoCenterY - (starRadius * Math.cos(Math.PI / 3)) - buttonOffset}px`,
        right: `calc(50% - ${starRadius * Math.sin(Math.PI / 3) + buttonOffset}px)`,
        zIndex: 20,
        pointerEvents: 'auto' as const
      }
    },
    {
      key: 'games',
      href: '/games',
      imageSrc: '/assets/games_button_idle.png',
      hoverImageSrc: '/assets/games_button_hover.png',
      label: translations.games,
      // Bottom-right position (4 o'clock) - 120 degrees
      style: {
        position: 'absolute' as const,
        top: `${logoCenterY + (starRadius * Math.cos(Math.PI / 4)) - buttonOffset}px`,
        right: `calc(50% - ${starRadius * Math.sin(Math.PI / 4) + buttonOffset}px)`,
        zIndex: 20,
        pointerEvents: 'auto' as const
      }
    },
    {
      key: 'about',
      href: '/about',
      imageSrc: '/assets/about_button_idle.png',
      hoverImageSrc: '/assets/about_button_hover.png',
      label: translations.about,
      // Bottom-left position (8 o'clock) - 240 degrees
      style: {
        position: 'absolute' as const,
        top: `${logoCenterY + (starRadius * Math.cos(Math.PI / 4)) - buttonOffset}px`,
        left: `calc(50% - ${starRadius * Math.sin(Math.PI / 4) + buttonOffset}px)`,
        zIndex: 20,
        pointerEvents: 'auto' as const
      }
    },
    {
      key: 'contact',
      href: '/contact',
      imageSrc: '/assets/contact_button_idle.png',
      hoverImageSrc: '/assets/contact_button_hover.png',
      label: translations.contact,
      // Top-left position (10 o'clock) - 300 degrees
      style: {
        position: 'absolute' as const,
        top: `${logoCenterY - (starRadius * Math.cos(Math.PI / 3)) - buttonOffset}px`,
        left: `calc(50% - ${starRadius * Math.sin(Math.PI / 3) + buttonOffset}px)`,
        zIndex: 20,
        pointerEvents: 'auto' as const
      }
    }
  ];

  return (
    <div style={{ 
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 15,
      pointerEvents: 'none'
    }}>
      {buttons.map((button) => (
        <div key={button.key} style={button.style}>
          <NavButton
            href={button.href}
            imageSrc={button.imageSrc}
            hoverImageSrc={button.hoverImageSrc}
            labelTextKey={button.label}
          />
        </div>
      ))}
    </div>
  );
}
