// Project data structure and management
export interface ProjectData {
	id: string;
	title: {
		en: string;
		'pt-BR': string;
	};
	subtitle: {
		en: string;
		'pt-BR': string;
	};
	images: string[]; // Array of image paths
	cycleDuration: number; // Seconds to cycle through images
	featured?: boolean; // Whether to highlight this project
	year?: number;
	category?: string;
	hide?: boolean; // Whether to hide this project from public listings

	// Header images for project pages
	bannerImage?: string; // Wide banner image (1600x400) for background behind title
	titleImage?: string; // Alternative to text title/subtitle - shows as main image

	// Extended project information - easily customizable per project
	description?: {
		en: string;
		'pt-BR': string;
	};
	longDescription?: {
		en: string;
		'pt-BR': string;
	};
	platform?: string[]; // ["Windows", "Mac", "Web", "Mobile"]
	platformLinks?: { // Links specific to platforms - if no link, platform shows as "coming soon"
		[platform: string]: string;
	};
	platformMessages?: { // Custom messages for platforms without links
		[platform: string]: {
			en: string;
			'pt-BR': string;
		};
	};
	status?: 'development' | 'released' | 'prototype' | 'cancelled';
	releaseDate?: string;
	teamSize?: number;
	links?: {
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
	gallery?: string[]; // Additional images beyond the main cycling ones
	videos?: string[]; // YouTube/Vimeo embed codes or video file paths
	awards?: {
		en: string[];
		'pt-BR': string[];
	};
	challenges?: {
		en: string[];
		'pt-BR': string[];
	};
	features?: {
		en: string[];
		'pt-BR': string[];
	};
}

// Projects database - Add new projects here
export const projectsDatabase: ProjectData[] = [
	{
		id: 'asumi',
		title: {
			en: 'Asumi',
			'pt-BR': 'Asumi'
		},
		subtitle: {
			en: 'Little Things',
			'pt-BR': 'Pequenas Coisas'
		},
		description: {
			en: 'A charming adventure game where small actions create big changes in a beautifully hand-drawn world.',
			'pt-BR': 'Um jogo de aventura encantador onde pequenas ações criam grandes mudanças em um mundo lindamente desenhado à mão.'
		},
		longDescription: {
			en: 'Asumi is our latest project that explores the beauty of small moments and their cumulative impact. Players guide Asumi through a world where every interaction matters, from watering flowers to helping forest creatures.\n\nThe game features:\n- Hand-drawn 2D animation\n- Emotional storytelling\n- Environmental puzzles\n- Multiple endings based on player choices',
			'pt-BR': 'Asumi é nosso projeto mais recente que explora a beleza dos pequenos momentos e seu impacto cumulativo. Os jogadores guiam Asumi através de um mundo onde cada interação importa, desde regar flores até ajudar criaturas da floresta.\n\nO jogo apresenta:\n- Animação 2D desenhada à mão\n- Narrativa emocional\n- Quebra-cabeças ambientais\n- Múltiplos finais baseados nas escolhas do jogador'
		},
		platform: ['Android', 'iOS'],
		platformMessages: {
			android: {
				en: 'Coming later this year...',
				'pt-BR': 'Chegando ainda este ano...'
			},
			ios: {
				en: 'Coming later this year...',
				'pt-BR': 'Chegando ainda este ano...'
			}
		},
		status: 'development',
		releaseDate: '2025 Q3',
		teamSize: 6,
		links: {
			steam: 'https://store.steampowered.com/app/asumi',
			website: 'https://madeinbugs.com/asumi',
			figma: 'https://figma.com/asumi-design'
		},
		features: {
			en: [
				'Beautiful hand-drawn animations',
				'Emotional storytelling with multiple endings',
				'Environmental puzzles that affect the world',
				'Relaxing gameplay focused on small interactions',
				'Original soundtrack by indie composers'
			],
			'pt-BR': [
				'Belas animações desenhadas à mão',
				'Narrativa emocional com múltiplos finais',
				'Quebra-cabeças ambientais que afetam o mundo',
				'Jogabilidade relaxante focada em pequenas interações',
				'Trilha sonora original por compositores independentes'
			]
		},
		gallery: [
			'/assets/projects/asumi/gallery-1.jpg',
		],
		images: [
			'/assets/projects/asumi/asumi-1.png',
			'/assets/projects/asumi/asumi-2.png',
			'/assets/projects/asumi/asumi-3.png'
		],
		cycleDuration: 1.8,
		featured: true,
		year: 2025,
		category: 'unity',
		bannerImage: '/assets/projects/asumi/banner2.png',
		titleImage: '/assets/projects/asumi/title.png',
	},
	{
		id: 'phora',
		title: {
			en: 'Roblox Phora Lab',
			'pt-BR': 'Roblox Phora Lab'
		},
		subtitle: {
			en: 'Haircare Makeup Lab Saloon Game',
			'pt-BR': 'Jogo de Salão de Beleza e Maquiagem',
		},
		description: {
			en: 'A haircare makeup lab saloon game in Roblox where players can experiment with different styles and treatments.',
			'pt-BR': 'Um jogo de salão de beleza e maquiagem no Roblox onde jogadores podem experimentar diferentes estilos e tratamentos.'
		},
		images: [
			'/assets/projects/phora/phora-1.jpg',
			'/assets/projects/phora/phora-2.jpg',
		],
		cycleDuration: 4,
		year: 2025,
		category: 'roblox',
		platform: ['Roblox'],
		platformLinks: {
			roblox: 'https://roblox.com/games/phora-lab'
		},
		links: {
			github: 'https://github.com/madeinbugs/phora-lab',
			website: 'https://madeinbugs.com/phora'
		}
	},
	{
		id: 'pizza',
		title: {
			en: 'Nik & Mussarela',
			'pt-BR': 'Nik & Mussarela'
		},
		subtitle: {
			en: 'Arcade Catching Mobile Game',
			'pt-BR': 'Jogo Mobile de Captura Arcade'
		},
		images: [
			'/assets/projects/pizza/pizza-1.jpg',
			'/assets/projects/pizza/pizza-2.jpg',
		],
		cycleDuration: 2.5,
		year: 2024,
		category: 'unity',
		platform: ['Android', 'iOS'],
		hide: true, // Hidden from public listings
		links: {
			itchio: 'https://madeinbugs.itch.io/nik-mussarela',
			playStore: 'https://play.google.com/store/apps/details?id=com.madeinbugs.pizza'
		}
	},
	{
		id: 'animunch',
		title: {
			en: 'Animunch',
			'pt-BR': 'Animunch'
		},
		subtitle: {
			en: 'Retro-Inspired Mobile Puzzle Game',
			'pt-BR': 'Jogo Mobile Puzzle Inspirado em Clássicos'
		},
		description: {
			en: 'A game inspired by retro puzzle games with modern mobile gameplay mechanics.',
			'pt-BR': 'Um jogo inspirado em quebra-cabeças retrô com mecânicas modernas para mobile.'
		},
		features: {
			en: [
				'Online multiplayer',
				'Cosmetics system',
				'Five challenging levels',
				'Endless mode for infinite fun'
			],
			'pt-BR': [
				'Multijogador online',
				'Sistema de cosméticos',
				'Cinco níveis desafiadores',
				'Modo infinito para diversão sem fim'
			]
		},
		images: [
			'/assets/projects/animunch/animunch-1.jpg',
			'/assets/projects/animunch/animunch-2.jpg'
		],
		cycleDuration: 4,
		year: 2023,
		category: 'unity',
		platform: ['Android', 'iOS'],
		teamSize: 4
	},
	{
		id: 'elementales',
		title: {
			en: 'Elementales',
			'pt-BR': 'Elementales'
		},
		subtitle: {
			en: 'Monster Catcher Mobile Game',
			'pt-BR': 'Jogo Mobile de Captura de Monstros'
		},
		images: [
			'/assets/projects/elementales/elementales-1.jpg',
			'/assets/projects/elementales/elementales-2.png',
		],
		cycleDuration: 2.5,
		year: 2022,
		category: 'unity',
		platform: ['Android'],
		platformLinks: {
			android: 'https://play.google.com/store/apps/details?id=com.madeinbugs.elementales'
		},
		teamSize: 3
	},
	{
		id: 'monster girls',
		title: {
			en: 'monstergirls',
			'pt-BR': 'monstergirls'
		},
		subtitle: {
			en: 'Monster Catcher Mobile game',
			'pt-BR': 'Jogo Mobile de Captura de Monstros'
		},
		images: [
			'/assets/projects/monstergirls/monstergirls-1.jpg',
			'/assets/projects/monstergirls/monstergirls-2.jpg',
		],
		cycleDuration: 2.7,
		year: 2022,
		category: 'unity',
		platform: ['Android'],
		hide: true // Hidden from public listings
	}
];

// Helper functions for project data
export function getProjectById(id: string): ProjectData | undefined {
	return projectsDatabase.find(project => project.id === id);
}

export function getProjectsByCategory(category: string): ProjectData[] {
	return projectsDatabase.filter(project => project.category === category && !project.hide);
}

export function getFeaturedProjects(): ProjectData[] {
	return projectsDatabase.filter(project => project.featured && !project.hide);
}

export function getAllProjects(): ProjectData[] {
	return projectsDatabase.filter(project => !project.hide);
}

// Get localized project data
export function getLocalizedProject(project: ProjectData, locale: 'en' | 'pt-BR') {
	return {
		...project,
		title: project.title[locale],
		subtitle: project.subtitle[locale]
	};
}
