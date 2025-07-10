'use client';

import NavButton from './NavButton';
import type { Translations } from '../lib/i18n';

interface NavigationMenuProps {
  translations: Translations['navigation'];
}

export default function NavigationMenu({ translations }: NavigationMenuProps) {
  console.log('NavigationMenu render:', translations);

  const buttons = [
    {
      key: 'team',
      href: '/team',
      imageSrc: '/assets/team_button_idle.png',
      hoverImageSrc: '/assets/team_button_hover.png',
      label: translations.team,
      className: 'nav-button-team' // Top position
    },
    {
      key: 'illustrations',
      href: '/illustrations',
      imageSrc: '/assets/illustrations_button_idle.png',
      hoverImageSrc: '/assets/illustrations_button_hover.png',
      label: translations.illustrations,
      className: 'nav-button-illustrations' // Top-right position
    },
    {
      key: 'games',
      href: '/games',
      imageSrc: '/assets/games_button_idle.png',
      hoverImageSrc: '/assets/games_button_hover.png',
      label: translations.games,
      className: 'nav-button-games' // Bottom-right position
    },
    {
      key: 'about',
      href: '/about',
      imageSrc: '/assets/about_button_idle.png',
      hoverImageSrc: '/assets/about_button_hover.png',
      label: translations.about,
      className: 'nav-button-about' // Bottom-left position
    },
    {
      key: 'contact',
      href: '/contact',
      imageSrc: '/assets/contact_button_idle.png',
      hoverImageSrc: '/assets/contact_button_hover.png',
      label: translations.contact,
      className: 'nav-button-contact' // Left position
    }
  ];

  return (
    <div style={{ 
      position: 'absolute',
      top: '10%',
      left: '18%',
      right: '18%',
      bottom: '16%',
      border: '3px solid blue', 
      backgroundColor: 'rgba(0,0,255,0.1)',
      zIndex: 15
    }}>
      <div style={{ 
        position: 'absolute', 
        top: '10px', 
        left: '10px', 
        background: 'yellow', 
        padding: '4px', 
        zIndex: 1000,
        fontSize: '12px'
      }}>
        Debug: NavigationMenu Active - {buttons.length} buttons
      </div>
      
      {/* Team button - Top */}
      <div style={{
        position: 'absolute',
        top: '30px',
        left: '50%',
        transform: 'translateX(-50%)',
        backgroundColor: 'rgba(255,0,0,0.5)', 
        border: '2px solid red',
        zIndex: 20
      }}>
        <NavButton
          href={buttons[0].href}
          imageSrc={buttons[0].imageSrc}
          hoverImageSrc={buttons[0].hoverImageSrc}
          labelTextKey={buttons[0].label}
        />
      </div>
      
      {/* Illustrations button - Top-right */}
      <div style={{
        position: 'absolute',
        top: '200px',
        right: '30px',
        backgroundColor: 'rgba(255,0,0,0.5)', 
        border: '2px solid red',
        zIndex: 20
      }}>
        <NavButton
          href={buttons[1].href}
          imageSrc={buttons[1].imageSrc}
          hoverImageSrc={buttons[1].hoverImageSrc}
          labelTextKey={buttons[1].label}
        />
      </div>
      
      {/* Games button - Bottom-right */}
      <div style={{
        position: 'absolute',
        bottom: '40px',
        right: '110px',
        backgroundColor: 'rgba(255,0,0,0.5)', 
        border: '2px solid red',
        zIndex: 20
      }}>
        <NavButton
          href={buttons[2].href}
          imageSrc={buttons[2].imageSrc}
          hoverImageSrc={buttons[2].hoverImageSrc}
          labelTextKey={buttons[2].label}
        />
      </div>
      
      {/* About button - Bottom-left */}
      <div style={{
        position: 'absolute',
        bottom: '40px',
        left: '110px',
        backgroundColor: 'rgba(255,0,0,0.5)', 
        border: '2px solid red',
        zIndex: 20
      }}>
        <NavButton
          href={buttons[3].href}
          imageSrc={buttons[3].imageSrc}
          hoverImageSrc={buttons[3].hoverImageSrc}
          labelTextKey={buttons[3].label}
        />
      </div>
      
      {/* Contact button - Top-left */}
      <div style={{
        position: 'absolute',
        top: '200px',
        left: '30px',
        backgroundColor: 'rgba(255,0,0,0.5)', 
        border: '2px solid red',
        zIndex: 20
      }}>
        <NavButton
          href={buttons[4].href}
          imageSrc={buttons[4].imageSrc}
          hoverImageSrc={buttons[4].hoverImageSrc}
          labelTextKey={buttons[4].label}
        />
      </div>
    </div>
  );
}
