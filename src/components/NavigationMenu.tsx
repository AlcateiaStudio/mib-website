'use client';

import NavButton from './NavButton';
import FloatingCard from './FloatingCard';
import type { Translations } from '../lib/i18n';

interface NavigationMenuProps {
	translations: Translations['navigation'];
}

export default function NavigationMenu({ translations }: NavigationMenuProps) {
	// Floating animation configuration - easy for designers to tweak!
	const floatingConfig = {
		portfolio: { radius: 35, speed: 0.9, intensity: 0.7, delay: 0 },
		about: { radius: 30, speed: 0.8, intensity: 0.6, delay: 500 },
		contact: { radius: 32, speed: 0.7, intensity: 0.65, delay: 1000 }
	};

	const buttons = [
		{
			key: 'portfolio',
			href: '/portfolio',
			imageSrc: '/assets/portfolio_button_idle.png',
			hoverImageSrc: '/assets/portfolio_button_hover.png',
			label: translations.portfolio,
			floating: floatingConfig.portfolio
		},
		{
			key: 'about',
			href: '/about',
			imageSrc: '/assets/about_button_idle.png',
			hoverImageSrc: '/assets/about_button_hover.png',
			label: translations.about,
			floating: floatingConfig.about
		},
		{
			key: 'contact',
			href: '/contact',
			imageSrc: '/assets/contact_button_idle.png',
			hoverImageSrc: '/assets/contact_button_hover.png',
			label: translations.contact,
			floating: floatingConfig.contact
		}
	];

	return (
		<div className="responsive-nav-container">
			<div className="responsive-nav-buttons">
				{buttons.map((button) => (
					<div key={button.key} className="responsive-nav-button">
						<FloatingCard
							radius={button.floating.radius}
							speed={button.floating.speed}
							intensity={button.floating.intensity}
							delay={button.floating.delay}
							rotationSpeed={0.3}
							pulseIntensity={0.08}
						>
							<NavButton
								href={button.href}
								imageSrc={button.imageSrc}
								hoverImageSrc={button.hoverImageSrc}
								labelTextKey={button.label}
							/>
						</FloatingCard>
					</div>
				))}
			</div>
		</div>
	);
}
