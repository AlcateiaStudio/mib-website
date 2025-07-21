'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface FloatingCardProps {
	children: React.ReactNode;
	speed?: number;           // Base animation speed multiplier
	delay?: number;           // Initial delay before animation starts
	direction?: 'left' | 'right'; // Initial rotation direction
	className?: string;
}

export default function FloatingCard({
	children,
	speed = 0.5,
	delay = 200,
	direction = 'left',
	className = ''
}: FloatingCardProps) {
	const cardRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!cardRef.current) return;

		const randomSeed = Math.random();
		// Set initial direction: left starts at 0, right starts at π (180°)
		const basePhaseOffset = direction === 'right' ? Math.PI : 0;
		const phaseOffset = basePhaseOffset + (randomSeed * 0.4 - 0.2); // Add small random variation
		const speedVariation = 0.7 + (randomSeed * 0.6);
		const effectiveSpeed = speed * speedVariation;
		const orbitDuration = (15000 + randomSeed * 10000) / effectiveSpeed;

		const startTimeout = setTimeout(() => {
			if (!cardRef.current) return;

			cardRef.current.style.setProperty('--orbit-duration', `${orbitDuration}ms`);
			cardRef.current.style.setProperty('--phase-offset', `${phaseOffset}rad`);
			cardRef.current.style.setProperty('--animation-direction', direction === 'right' ? 'reverse' : 'normal');

			cardRef.current.classList.add('floating-active');
		}, delay);

		return () => {
			clearTimeout(startTimeout);
		};
	}, [speed, delay, direction]);

	return (
		<div
			ref={cardRef}
			className={`floating-card ${className}`}
			style={{
				transformOrigin: 'center center',
			}}
		>
			{children}
		</div>
	);
}
