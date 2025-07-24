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
	images: string[];
	cycleDuration: number;
	featured?: boolean;
	year?: number;
	category?: string;
	hide?: boolean;
	bannerImage?: string;
	titleImage?: string;
	description?: {
		en: string;
		'pt-BR': string;
	};
	longDescription?: {
		en: string;
		'pt-BR': string;
	};
	platform?: string[];
	platformLinks?: {
		[platform: string]: string;
	};
	platformMessages?: {
		[platform: string]: {
			en: string;
			'pt-BR': string;
		};
	};
	status?: 'development' | 'released' | 'prototype' | 'cancelled';
	releaseDate?: string;
	teamSize?: number;
	projectType?: 'studio' | 'client';
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
	gallery?: string[];
	videos?: string[];
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

// Projects database
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
		projectType: 'studio',
		links: {
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
			'/assets/projects/asumi/gallery-1.png',
		],
		images: [
			'/assets/projects/asumi/asumi-1.png',
			'/assets/projects/asumi/asumi-2.png',
			'/assets/projects/asumi/asumi-3.jpg'
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
			en: 'Your Own Makeup Lab',
			'pt-BR': 'Seu Próprio Laboratório de Maquiagem'
		},
		description: {
			en: 'A makeup lab experience in Roblox where players can experiment with different styles and treatments.',
			'pt-BR': 'Uma experiência Roblox de salão de beleza e maquiagem onde jogadores podem experimentar diferentes estilos e tratamentos.'
		},
		images: [
			'/assets/projects/phora/phora-1.jpg',
			'/assets/projects/phora/phora-2.jpg',
		],
		cycleDuration: 4,
		year: 2024,
		category: 'roblox',
		platform: ['Roblox'],
		projectType: 'client',
		status: 'released',
		teamSize: 1,
		platformLinks: {
			roblox: 'https://roblox.com/games/phora-lab'
		},
		links: {
			github: 'https://github.com/madeinbugs/phora-lab',
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
		hide: true,
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
				'Five challenging story levels',
				'Extra puzzle levels',
				'Endless mode'
			],
			'pt-BR': [
				'Multijogador online',
				'Sistema de cosméticos',
				'Cinco níveis de história desafiadores',
				'Níveis puzzle extras',
				'Modo infinito'
			]
		},
		images: [
			'/assets/projects/animunch/animunch-6.png',
			'/assets/projects/animunch/animunch-7.png',
		],
		cycleDuration: 4,
		year: 2024,
		category: 'unity',
		platform: ['Android', 'iOS'],
		featured: true,
		teamSize: 4,
		projectType: 'client',
		status: 'development',
		bannerImage: '/assets/projects/animunch/banner.png',
		titleImage: '/assets/projects/animunch/title.png',
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
		teamSize: 3,
		projectType: 'client',
		status: 'released'
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
		hide: true
	}
];

// Helper functions
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
