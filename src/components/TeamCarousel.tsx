'use client';

import { useState } from 'react';
import Image from 'next/image';

// Simple arrow icons as SVG components
const ChevronLeft = () => (
	<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
		<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
	</svg>
);

const ChevronRight = () => (
	<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
		<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
	</svg>
);

interface TeamMember {
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

export default function TeamCarousel({ teamMembers, locale }: TeamCarouselProps) {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [clickedArrow, setClickedArrow] = useState<'left' | 'right' | null>(null);
	const maxVisible = 6;
	const showArrows = teamMembers.length > maxVisible;

	// Helper function to get localized title
	const getLocalizedTitle = (title: { en: string; 'pt-BR': string }) => {
		return title[locale as keyof typeof title] || title.en;
	};

	const handlePrevious = () => {
		setClickedArrow('left');

		setCurrentIndex((prev) => {
			// Move left by 1, wrap around to end if at beginning
			return prev === 0 ? teamMembers.length - 1 : prev - 1;
		});

		// Reset animation state quickly
		setTimeout(() => {
			setClickedArrow(null);
		}, 150);
	};

	const handleNext = () => {
		setClickedArrow('right');

		setCurrentIndex((prev) => {
			// Move right by 1, wrap around to beginning if at end
			return prev === teamMembers.length - 1 ? 0 : prev + 1;
		});

		// Reset animation state quickly
		setTimeout(() => {
			setClickedArrow(null);
		}, 150);
	};

	// Create circular array of visible members
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
				{/* Left Arrow */}
				{showArrows && (
					<button
						onClick={handlePrevious}
						className={`flex-shrink-0 transition-all duration-150 transform relative ${clickedArrow === 'left'
							? 'scale-[2] -rotate-15 animate-pulse'
							: 'hover:scale-125 hover:-rotate-6'
							}`}
						aria-label="Previous team members"
					>
						<svg
							className="w-8 h-8 transition-all duration-300"
							fill="none"
							viewBox="0 0 24 24"
						>
							{/* Outer golden outline */}
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={5}
								stroke="#d97706"
								d="M15 19l-7-7 7-7"
							/>
							{/* Inner golden outline (semi-transparent) */}
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={4}
								stroke="rgba(217, 119, 6, 0.4)"
								d="M15 19l-7-7 7-7"
							/>
							{/* Main black arrow */}
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={3}
								stroke="#1f2937"
								d="M15 19l-7-7 7-7"
							/>
						</svg>
					</button>
				)}

				{/* Team Members Container */}
				<div className="flex-1">
					<div className="flex justify-center space-x-6 py-4" style={{ paddingTop: '60px' }}>
						{visibleMembers.map((member) => (
							<div
								key={member.id}
								className="group relative flex-shrink-0 z-50"
							>
								{/* Team Member Image */}
								<div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl bg-gray-200">
									{member.image ? (
										<Image
											src={member.image}
											alt={`${member.name} - ${getLocalizedTitle(member.title)}`}
											fill
											className="object-cover"
											sizes="(max-width: 768px) 96px, 128px"
											onError={(e) => {
												// Show placeholder when image fails to load
												const placeholder = e.currentTarget.nextElementSibling as HTMLElement;
												if (placeholder) {
													placeholder.style.display = 'flex';
												}
												e.currentTarget.style.display = 'none';
											}}
										/>
									) : null}

									{/* Placeholder Avatar - only show when no image or image fails */}
									<div
										className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary-400 to-primary-600"
										style={{ display: member.image ? 'none' : 'flex' }}
									>
										<div className="text-white font-bold text-lg md:text-2xl">
											{member.name.charAt(0).toUpperCase()}
										</div>
									</div>
								</div>

								{/* Hover Tooltip - Magical Tarot Card Style with Fixed Card Aspect Ratio */}
								<div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-4 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out pointer-events-none z-[9999] group-hover:scale-105 group-hover:-translate-y-2">
									<div className="relative bg-gray-900 text-white rounded-xl shadow-2xl border-2 border-amber-300 transform rotate-6 group-hover:rotate-0 transition-transform duration-200 w-32 h-44 flex flex-col justify-center items-center p-3">
										{/* Corner decorations */}
										<div className="absolute -top-1 -left-1 w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
										<div className="absolute -top-1 -right-1 w-2 h-2 bg-orange-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
										<div className="absolute -bottom-1 -left-1 w-2 h-2 bg-amber-400 rounded-full animate-pulse" style={{ animationDelay: '0.25s' }}></div>

										{/* Inner decorative border */}
										<div className="absolute inset-1 border border-amber-200 rounded-lg opacity-50"></div>

										{/* Content - Centered in card */}
										<div className="relative z-10 text-center flex flex-col justify-center h-full">
											<div className="font-bold text-amber-300 mb-2 font-h2 text-shadow-crayon text-sm">
												{member.name || 'No Name'}
											</div>
											<div className="text-amber-200 text-xs font-body italic leading-tight">
												"{getLocalizedTitle(member.title) || 'No Title'}"
											</div>
										</div>

										{/* Mystical arrow */}
										<div className="absolute top-full left-1/2 transform -translate-x-1/2">
											<div className="w-0 h-0 border-l-[8px] border-r-[8px] border-t-[8px] border-transparent border-t-amber-300"></div>
											<div className="absolute top-0 left-1/2 transform -translate-x-1/2 translate-y-[-6px] w-0 h-0 border-l-[6px] border-r-[6px] border-t-[6px] border-transparent border-t-gray-900"></div>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>

				{/* Right Arrow */}
				{showArrows && (
					<button
						onClick={handleNext}
						className={`flex-shrink-0 transition-all duration-150 transform relative ${clickedArrow === 'right'
							? 'scale-[2] rotate-15 animate-pulse'
							: 'hover:scale-125 hover:rotate-6'
							}`}
						aria-label="Next team members"
					>
						<svg
							className="w-8 h-8 transition-all duration-300"
							fill="none"
							viewBox="0 0 24 24"
						>
							{/* Outer golden outline */}
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={5}
								stroke="#d97706"
								d="M9 5l7 7-7 7"
							/>
							{/* Inner golden outline (semi-transparent) */}
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={4}
								stroke="rgba(217, 119, 6, 0.4)"
								d="M9 5l7 7-7 7"
							/>
							{/* Main black arrow */}
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={3}
								stroke="#1f2937"
								d="M9 5l7 7-7 7"
							/>
						</svg>
					</button>
				)}
			</div>
		</div>
	);
}
