'use client';

import { useEffect } from 'react';
import { logVersionToConsole } from '../lib/version';

export default function VersionLogger() {
	useEffect(() => {
		// Log version info to console when component mounts
		logVersionToConsole();
	}, []);

	// This component renders nothing
	return null;
}
