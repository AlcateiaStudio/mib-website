'use client';

import React from 'react';
import {
	FaWindows,
	FaApple,
	FaLinux,
	FaAndroid,
	FaGlobe
} from 'react-icons/fa';
import { SiRoblox, SiIos } from 'react-icons/si';

interface PlatformTagsProps {
	platforms: string[];
	locale: string;
}

// Map platform names to their corresponding icons and colors
const platformConfig = {
	windows: {
		icon: FaWindows,
		label: { en: 'Windows', 'pt-BR': 'Windows' },
		color: 'text-blue-600',
		bgColor: 'bg-blue-100',
		borderColor: 'border-blue-200'
	},
	mac: {
		icon: FaApple,
		label: { en: 'Mac', 'pt-BR': 'Mac' },
		color: 'text-gray-800',
		bgColor: 'bg-gray-100',
		borderColor: 'border-gray-200'
	},
	linux: {
		icon: FaLinux,
		label: { en: 'Linux', 'pt-BR': 'Linux' },
		color: 'text-yellow-600',
		bgColor: 'bg-yellow-100',
		borderColor: 'border-yellow-200'
	},
	ios: {
		icon: SiIos,
		label: { en: 'iOS', 'pt-BR': 'iOS' },
		color: 'text-gray-700',
		bgColor: 'bg-gray-100',
		borderColor: 'border-gray-200'
	},
	android: {
		icon: FaAndroid,
		label: { en: 'Android', 'pt-BR': 'Android' },
		color: 'text-green-600',
		bgColor: 'bg-green-100',
		borderColor: 'border-green-200'
	},
	web: {
		icon: FaGlobe,
		label: { en: 'Web', 'pt-BR': 'Web' },
		color: 'text-blue-500',
		bgColor: 'bg-blue-100',
		borderColor: 'border-blue-200'
	},
	roblox: {
		icon: SiRoblox,
		label: { en: 'Roblox', 'pt-BR': 'Roblox' },
		color: 'text-red-600',
		bgColor: 'bg-red-100',
		borderColor: 'border-red-200'
	},
	steam: {
		icon: FaGlobe, // Using globe as fallback for Steam platform
		label: { en: 'Steam', 'pt-BR': 'Steam' },
		color: 'text-blue-700',
		bgColor: 'bg-blue-100',
		borderColor: 'border-blue-200'
	},
	mobile: {
		icon: FaAndroid, // Using Android icon as generic mobile
		label: { en: 'Mobile', 'pt-BR': 'Mobile' },
		color: 'text-purple-600',
		bgColor: 'bg-purple-100',
		borderColor: 'border-purple-200'
	}
};

// Function to normalize platform names
function normalizePlatformName(platform: string): string {
	return platform.toLowerCase().replace(/\s+/g, '');
}

export default function PlatformTags({ platforms, locale }: PlatformTagsProps) {
	if (!platforms || platforms.length === 0) {
		return null;
	}

	return (
		<div className="content-card-sm">
			<h3 className="font-h2 text-xl font-bold mb-4">
				{locale === 'en' ? 'Platforms' : 'Plataformas'}
			</h3>
			<div className="flex flex-wrap gap-3">
				{platforms.map((platform, index) => {
					const normalizedPlatform = normalizePlatformName(platform);
					const config = platformConfig[normalizedPlatform as keyof typeof platformConfig];

					// Fallback for unknown platforms
					if (!config) {
						return (
							<span
								key={index}
								className="inline-flex items-center gap-2 px-3 py-2 rounded-full text-sm font-medium
								text-gray-700 bg-gray-100 border border-gray-200"
							>
								{platform}
							</span>
						);
					}

					const Icon = config.icon;
					const label = config.label[locale as 'en' | 'pt-BR'] || config.label.en;

					return (
						<span
							key={index}
							className={`
								inline-flex items-center gap-2 px-3 py-2 rounded-full text-sm font-medium
								transition-all duration-200 hover:scale-105 cursor-default
								${config.color} ${config.bgColor} border ${config.borderColor}
								hover:shadow-md
							`}
						>
							<Icon className="text-base flex-shrink-0" />
							<span className="font-body">{label}</span>
						</span>
					);
				})}
			</div>
		</div>
	);
}
