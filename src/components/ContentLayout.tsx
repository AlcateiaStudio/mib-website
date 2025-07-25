'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import LanguageSwitcher from './LanguageSwitcher';
import { globalStyles } from '../lib/styles';
import { getImagePath } from '../lib/imagePaths';
import type { Translations } from '../lib/i18n';

interface ContentLayoutProps {
	children: React.ReactNode;
	translations: Translations;
	locale: string;
}

// Header navigation button component
interface NavButtonHeaderProps {
	href: string;
	imageSrc: string;
	hoverImageSrc: string;
	label: string;
	isActive: boolean;
	isMobile?: boolean;
}

function NavButtonHeader({ href, imageSrc, hoverImageSrc, label, isActive, isMobile = false }: NavButtonHeaderProps) {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<Link
			href={href}
			className={`
        relative transition-all duration-200 hover:scale-105
        ${isMobile ? 'w-20 h-20' : 'w-28 h-28'}
        ${isActive ? 'ring-2 ring-blue-500 ring-offset-2' : ''}
      `}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			title={label}
		>
			<Image
				src={isHovered ? hoverImageSrc : imageSrc}
				alt={label}
				width={isMobile ? 64 : 96}
				height={isMobile ? 64 : 96}
				className="w-full h-full object-contain"
			/>
		</Link>
	);
}

export default function ContentLayout({ children, translations, locale }: ContentLayoutProps) {
	const pathname = usePathname();

	// Header navigation items with button images (same as homepage navigation)
	const navItems = [
		{
			key: 'about',
			href: `/${locale}/about`,
			label: translations.navigation.about,
			imageSrc: getImagePath('/assets/about_button_idle.png'),
			hoverImageSrc: getImagePath('/assets/about_button_hover.png')
		},
		{
			key: 'portfolio',
			href: `/${locale}/portfolio`,
			label: translations.navigation.portfolio,
			imageSrc: getImagePath('/assets/portfolio_button_idle.png'),
			hoverImageSrc: getImagePath('/assets/portfolio_button_hover.png')
		},
		{
			key: 'contact',
			href: `/${locale}/contact`,
			label: translations.navigation.contact,
			imageSrc: getImagePath('/assets/contact_button_idle.png'),
			hoverImageSrc: getImagePath('/assets/contact_button_hover.png')
		}
	];

	return (
		<div
			className={`min-h-screen bg-gradient-to-br ${globalStyles.backgroundColor}`}
		>
			{/* Header - seamless with background, 50% larger */}
			<header className="static z-50 pt-9 pb-6">
				<div className="max-w-6xl mx-auto px-6">
					<div className="flex items-center justify-between">
						{/* Logo - left aligned and larger */}
						<Link href={`/${locale}`} className="flex-shrink-0">
							<div className="w-24 h-24 relative hover:scale-105 transition-transform duration-200">
								<Image
									src={getImagePath('/assets/logo-no-title.png')}
									alt="Made in Bugs Logo"
									width={96}
									height={96}
									className="w-full h-full object-contain"
									priority
								/>
							</div>
						</Link>

						{/* Navigation Buttons - centered */}
						<nav className="hidden md:flex items-center space-x-12 absolute left-1/2 transform -translate-x-1/2">
							{navItems.map((item) => (
								<NavButtonHeader
									key={item.key}
									href={item.href}
									imageSrc={item.imageSrc}
									hoverImageSrc={item.hoverImageSrc}
									label={item.label}
									isActive={pathname === item.href}
								/>
							))}
						</nav>

						{/* Language Switcher - right aligned */}
						<div className="flex-shrink-0">
							<LanguageSwitcher translations={translations.common.language_switcher} />
						</div>
					</div>

					{/* Mobile Navigation - centered */}
					<nav className="md:hidden mt-6 flex justify-center">
						<div className="grid grid-cols-5 gap-6">
							{navItems.map((item) => (
								<NavButtonHeader
									key={item.key}
									href={item.href}
									imageSrc={item.imageSrc}
									hoverImageSrc={item.hoverImageSrc}
									label={item.label}
									isActive={pathname === item.href}
									isMobile={true}
								/>
							))}
						</div>
					</nav>
				</div>
			</header>

			{/* Main Content */}
			<main className="max-w-6xl mx-auto px-6 py-0">
				{children}
			</main>

			{/* Footer */}
			<footer className="bg-gray-900 text-white py-8 mt-16">
				<div className="max-w-6xl mx-auto px-6 text-center">
					<p className="text-gray-400">
						© 2025 Made in Bugs Studio. All rights reserved.
					</p>
				</div>
			</footer>
		</div>
	);
}
