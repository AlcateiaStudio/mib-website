'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { getImagePath } from '../lib/imagePaths';

// Types
export interface TeamMember {
	id: number;
	name: string;
	title: {
		en: string;
		'pt-BR': string;
	};
	image: string;
}

interface TeamCarouselProps {
	teamMembers: TeamMember[];
	locale: string;
}

// Carousel Arrow Component
const CarouselArrow = ({
	direction,
	onClick,
	isClicked,
	'aria-label': ariaLabel
}: {
	direction: 'left' | 'right';
	onClick: () => void;
	isClicked: boolean;
	'aria-label': string;
}) => {
	const [isHovered, setIsHovered] = useState(false);
	const pathData = direction === 'left' ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7";

	// Calculate transform based on state
	const getTransform = () => {
		if (isClicked) {
			return `scale(2) rotate(${direction === 'left' ? '-12' : '12'}deg)`;
		}
		if (isHovered) {
			return `scale(1.25) rotate(${direction === 'left' ? '-6' : '6'}deg)`;
		}
		return 'scale(1) rotate(0deg)';
	};

	const buttonStyle = {
		transform: getTransform(),
		transition: 'all 0.15s ease',
		flexShrink: 0,
		position: 'relative' as const,
		animation: isClicked ? 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite' : undefined
	};

	return (
		<button
			onClick={onClick}
			style={buttonStyle}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			aria-label={ariaLabel}
		>
			<svg style={{ width: '2rem', height: '2rem', transition: 'all 0.3s ease' }} fill="none" viewBox="0 0 24 24">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={5} stroke="#d97706" d={pathData} />
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} stroke="rgba(217, 119, 6, 0.4)" d={pathData} />
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} stroke="#1f2937" d={pathData} />
			</svg>
		</button>
	);
};

// Team Member Avatar Component
const TeamMemberAvatar = ({
	member,
	index,
	isInitialLoad,
	getLocalizedTitle
}: {
	member: TeamMember;
	index: number;
	isInitialLoad: boolean;
	getLocalizedTitle: (title: { en: string; 'pt-BR': string }) => string;
}) => {
	return (
		<div
			className={`group relative flex-shrink-0 z-50 transition-all duration-500 ease-out ${isInitialLoad ? 'opacity-0 transform translate-x-[-120px]' : 'opacity-100 transform translate-x-0'
				}`}
			style={{ transitionDelay: `${index * 100}ms` }}
		>
			{/* Avatar Image */}
			<div
				className={`relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden shadow-lg transition-all duration-200 ease-out group-hover:scale-125 group-hover:shadow-2xl bg-gray-200 ${isInitialLoad ? 'transform rotate-[-120deg]' : 'transform rotate-0'
					}`}
				style={{
					transition: 'transform 0.25s cubic-bezier(0.68, -0.55, 0.265, 1.55), box-shadow 0.25s ease-out',
					transitionDelay: isInitialLoad ? `${index * 100}ms` : '0ms',
				}}
			>
				{member.image ? (
					<Image
						src={getImagePath(member.image)}
						alt={`${member.name} - ${getLocalizedTitle(member.title)}`}
						fill
						className="object-cover"
						sizes="(max-width: 768px) 96px, 128px"
						onError={(e) => {
							const placeholder = e.currentTarget.nextElementSibling as HTMLElement;
							if (placeholder) placeholder.style.display = 'flex';
							e.currentTarget.style.display = 'none';
						}}
					/>
				) : null}

				{/* Placeholder for missing images */}
				<div
					className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary-400 to-primary-600"
					style={{ display: member.image ? 'none' : 'flex' }}
				>
					<div className="text-white font-bold text-lg md:text-2xl">
						{member.name.charAt(0).toUpperCase()}
					</div>
				</div>
			</div>

			{/* Tarot Card Tooltip */}
			<div
				className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-4 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out pointer-events-none z-[9999] group-hover:scale-110 group-hover:-translate-y-3"
				style={{ transition: 'opacity 0.3s ease-out, transform 0.35s cubic-bezier(0.68, -0.55, 0.265, 1.55)' }}
			>
				<div className="relative bg-gray-900 text-white rounded-xl shadow-2xl border-2 border-amber-300 transform rotate-6 group-hover:rotate-0 transition-transform duration-200 w-32 h-44 flex flex-col justify-center items-center p-3">
					{/* Decorative elements */}
					<div className="absolute -top-1 -left-1 w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
					<div className="absolute -top-1 -right-1 w-2 h-2 bg-orange-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
					<div className="absolute -bottom-1 -left-1 w-2 h-2 bg-amber-400 rounded-full animate-pulse" style={{ animationDelay: '0.25s' }}></div>
					<div className="absolute inset-1 border border-amber-200 rounded-lg opacity-50"></div>

					{/* Content */}
					<div className="relative z-10 text-center flex flex-col justify-center h-full">
						<div className="font-bold text-amber-300 mb-2 font-h2 text-shadow-crayon text-sm">
							{member.name || 'No Name'}
						</div>
						<div className="text-amber-200 text-xs font-body italic leading-tight">
							"{getLocalizedTitle(member.title) || 'No Title'}"
						</div>
					</div>

					{/* Arrow pointer */}
					<div className="absolute top-full left-1/2 transform -translate-x-1/2">
						<div className="w-0 h-0 border-l-[8px] border-r-[8px] border-t-[8px] border-transparent border-t-amber-300"></div>
						<div className="absolute top-0 left-1/2 transform -translate-x-1/2 translate-y-[-6px] w-0 h-0 border-l-[6px] border-r-[6px] border-t-[6px] border-transparent border-t-gray-900"></div>
					</div>
				</div>
			</div>
		</div>
	);
};

// Main TeamCarousel Component
export default function TeamCarousel({ teamMembers, locale }: TeamCarouselProps) {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [clickedArrow, setClickedArrow] = useState<'left' | 'right' | null>(null);
	const [isInitialLoad, setIsInitialLoad] = useState(true);

	const maxVisible = 6;
	const showArrows = teamMembers.length > maxVisible;

	const getLocalizedTitle = (title: { en: string; 'pt-BR': string }) => {
		return title[locale as keyof typeof title] || title.en;
	};

	// Initialize entrance animation
	useEffect(() => {
		const timer = setTimeout(() => setIsInitialLoad(false), 100);
		return () => clearTimeout(timer);
	}, []);

	const handleNavigation = (direction: 'left' | 'right') => {
		setClickedArrow(direction);

		setCurrentIndex((prev) => {
			if (direction === 'left') {
				return prev === 0 ? teamMembers.length - 1 : prev - 1;
			} else {
				return prev === teamMembers.length - 1 ? 0 : prev + 1;
			}
		});

		setTimeout(() => setClickedArrow(null), 150);
	};

	// Get currently visible team members in circular array
	const getVisibleMembers = () => {
		const visibleMembers = [];
		for (let i = 0; i < Math.min(maxVisible, teamMembers.length); i++) {
			const memberIndex = (currentIndex + i) % teamMembers.length;
			visibleMembers.push(teamMembers[memberIndex]);
		}
		return visibleMembers;
	};

	const visibleMembers = getVisibleMembers();

	return (
		<div className="relative">
			<div className="flex items-center justify-center space-x-4">
				{/* Left Navigation Arrow */}
				{showArrows && (
					<CarouselArrow
						direction="left"
						onClick={() => handleNavigation('left')}
						isClicked={clickedArrow === 'left'}
						aria-label="Previous team members"
					/>
				)}

				{/* Team Members Display */}
				<div className="flex-1">
					<div className="flex justify-center space-x-6 py-4" style={{ paddingTop: '60px' }}>
						{visibleMembers.map((member, index) => (
							<TeamMemberAvatar
								key={member.id}
								member={member}
								index={index}
								isInitialLoad={isInitialLoad}
								getLocalizedTitle={getLocalizedTitle}
							/>
						))}
					</div>
				</div>

				{/* Right Navigation Arrow */}
				{showArrows && (
					<CarouselArrow
						direction="right"
						onClick={() => handleNavigation('right')}
						isClicked={clickedArrow === 'right'}
						aria-label="Next team members"
					/>
				)}
			</div>
		</div>
	);
}
