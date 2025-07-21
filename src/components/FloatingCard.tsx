'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface FloatingCardProps {
	children: React.ReactNode;
	// Animation customization props - easy for designers to tweak!
	radius?: number;          // How far from starting point (px)
	speed?: number;           // Base animation speed multiplier
	intensity?: number;       // How dramatic the movement is (0-1)
	rotationSpeed?: number;   // Rotation speed multiplier
	pulseIntensity?: number;  // Breathing/pulse effect intensity
	delay?: number;           // Initial delay before animation starts
	className?: string;
}

export default function FloatingCard({
	children,
	radius = 20,
	speed = 0.5,
	intensity = 0.3,
	rotationSpeed = 0.5,
	pulseIntensity = 0.02,
	delay = 200,
	className = ''
}: FloatingCardProps) {
	const cardRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!cardRef.current) return;

		// Generate unique random values for this card instance
		const randomSeed = Math.random();
		const phaseOffset = randomSeed * Math.PI * 2; // Random starting phase
		const speedVariation = 0.7 + (randomSeed * 0.6); // 0.7x to 1.3x speed variation
		const radiusVariation = 0.8 + (randomSeed * 0.4); // 0.8x to 1.2x radius variation

		// Calculate actual animation parameters
		const effectiveRadius = radius * radiusVariation * intensity;
		const effectiveSpeed = speed * speedVariation;

		// Animation timing (in milliseconds)
		const orbitDuration = (15000 + randomSeed * 10000) / effectiveSpeed; // 15-25 seconds base
		const pulseDuration = (3000 + randomSeed * 2000) / effectiveSpeed;   // 3-5 seconds base
		const rotationDuration = (20000 + randomSeed * 15000) / rotationSpeed; // 20-35 seconds base

		// Start animation after delay
		const startTimeout = setTimeout(() => {
			if (!cardRef.current) return;

			// Apply the floating animation via CSS custom properties
			cardRef.current.style.setProperty('--float-radius', `${effectiveRadius}px`);
			cardRef.current.style.setProperty('--orbit-duration', `${orbitDuration}ms`);
			cardRef.current.style.setProperty('--pulse-duration', `${pulseDuration}ms`);
			cardRef.current.style.setProperty('--rotation-duration', `${rotationDuration}ms`);
			cardRef.current.style.setProperty('--phase-offset', `${phaseOffset}rad`);
			cardRef.current.style.setProperty('--pulse-intensity', `${pulseIntensity}`);

			cardRef.current.classList.add('floating-active');
		}, delay);

		return () => {
			clearTimeout(startTimeout);
		};
	}, [radius, speed, intensity, rotationSpeed, pulseIntensity, delay]);

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
