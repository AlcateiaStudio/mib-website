'use client';

import NavButton from './NavButton';
import FloatingCard from './FloatingCard';
import type { Translations } from '../lib/i18n';

interface NavigationMenuProps {
	translations: Translations['navigation'];
}

export default function NavigationMenu({ translations }: NavigationMenuProps) {
	const floatingConfig = {
		portfolio: { speed: 2.0, delay: 0, direction: 'left' as const },
		about: { speed: 1.8, delay: 900, direction: 'left' as const },
		contact: { speed: 2.1, delay: 600, direction: 'right' as const }
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
							speed={button.floating.speed}
							delay={button.floating.delay}
							direction={button.floating.direction}
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
