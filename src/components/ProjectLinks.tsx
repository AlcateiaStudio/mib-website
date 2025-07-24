'use client';

import React from 'react';
import { 
	FaGlobe, 
	FaGithub, 
	FaSteam, 
	FaGamepad,
	FaAppStore,
	FaGooglePlay,
	FaYoutube,
	FaTwitter,
	FaDiscord,
	FaLinkedin,
	FaFigma
} from 'react-icons/fa';
import { SiItchdotio, SiUnity, SiUnrealengine, SiRoblox } from 'react-icons/si';interface ProjectLinksProps {
	links: {
		website?: string;
		steam?: string;
		itchio?: string;
		github?: string;
		playStore?: string;
		appStore?: string;
		youtube?: string;
		twitter?: string;
		discord?: string;
		linkedin?: string;
		figma?: string;
		roblox?: string;
	};
	locale: string;
}

// Map link types to their corresponding icons and labels
const linkConfig = {
	website: {
		icon: FaGlobe,
		label: { en: 'Website', 'pt-BR': 'Website' },
		color: 'text-blue-600 hover:text-blue-800',
		bgColor: 'hover:bg-blue-50'
	},
	github: {
		icon: FaGithub,
		label: { en: 'GitHub', 'pt-BR': 'GitHub' },
		color: 'text-gray-800 hover:text-black',
		bgColor: 'hover:bg-gray-50'
	},
	steam: {
		icon: FaSteam,
		label: { en: 'Steam', 'pt-BR': 'Steam' },
		color: 'text-blue-700 hover:text-blue-900',
		bgColor: 'hover:bg-blue-50'
	},
	itchio: {
		icon: SiItchdotio,
		label: { en: 'itch.io', 'pt-BR': 'itch.io' },
		color: 'text-red-600 hover:text-red-800',
		bgColor: 'hover:bg-red-50'
	},
	playStore: {
		icon: FaGooglePlay,
		label: { en: 'Google Play', 'pt-BR': 'Google Play' },
		color: 'text-green-600 hover:text-green-800',
		bgColor: 'hover:bg-green-50'
	},
	appStore: {
		icon: FaAppStore,
		label: { en: 'App Store', 'pt-BR': 'App Store' },
		color: 'text-blue-600 hover:text-blue-800',
		bgColor: 'hover:bg-blue-50'
	},
	youtube: {
		icon: FaYoutube,
		label: { en: 'YouTube', 'pt-BR': 'YouTube' },
		color: 'text-red-600 hover:text-red-800',
		bgColor: 'hover:bg-red-50'
	},
	twitter: {
		icon: FaTwitter,
		label: { en: 'Twitter', 'pt-BR': 'Twitter' },
		color: 'text-blue-400 hover:text-blue-600',
		bgColor: 'hover:bg-blue-50'
	},
	discord: {
		icon: FaDiscord,
		label: { en: 'Discord', 'pt-BR': 'Discord' },
		color: 'text-indigo-600 hover:text-indigo-800',
		bgColor: 'hover:bg-indigo-50'
	},
	linkedin: {
		icon: FaLinkedin,
		label: { en: 'LinkedIn', 'pt-BR': 'LinkedIn' },
		color: 'text-blue-700 hover:text-blue-900',
		bgColor: 'hover:bg-blue-50'
	},
	figma: {
		icon: FaFigma,
		label: { en: 'Figma', 'pt-BR': 'Figma' },
		color: 'text-purple-600 hover:text-purple-800',
		bgColor: 'hover:bg-purple-50'
	},
	roblox: {
		icon: SiRoblox,
		label: { en: 'Roblox', 'pt-BR': 'Roblox' },
		color: 'text-red-600 hover:text-red-800',
		bgColor: 'hover:bg-red-50'
	}
};

export default function ProjectLinks({ links, locale }: ProjectLinksProps) {
	// Filter out empty links
	const availableLinks = Object.entries(links).filter(([_, url]) => url && url.trim() !== '');

	if (availableLinks.length === 0) {
		return null;
	}

	return (
		<div className="content-card-sm">
			<h3 className="font-h2 text-xl font-bold mb-4">
				{locale === 'en' ? 'Links' : 'Links'}
			</h3>
			<div className="space-y-3">
				{availableLinks.map(([linkType, url]) => {
					const config = linkConfig[linkType as keyof typeof linkConfig];
					if (!config) return null;

					const Icon = config.icon;
					const label = config.label[locale as 'en' | 'pt-BR'] || config.label.en;

					return (
						<a
							key={linkType}
							href={url}
							target="_blank"
							rel="noopener noreferrer"
							className={`
								flex items-center gap-3 p-3 rounded-lg transition-all duration-200
								${config.color} ${config.bgColor}
								border border-transparent hover:border-current/20
								group
							`}
						>
							<Icon
								className="text-xl flex-shrink-0 group-hover:scale-110 transition-transform duration-200"
							/>
							<span className="font-body font-medium group-hover:underline">
								{label}
							</span>
							<svg
								className="w-4 h-4 ml-auto opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
							</svg>
						</a>
					);
				})}
			</div>
		</div>
	);
}
