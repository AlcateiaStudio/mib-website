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
    images: [
      '/assets/projects/asumi/asumi-1.png',
      '/assets/projects/asumi/asumi-2.png',
      '/assets/projects/asumi/asumi-3.png'
    ],
    cycleDuration: 0.8,
    featured: true,
    year: 2025,
    category: 'unity'
  },
    {
    id: 'phora',
    title: {
      en: 'Roblox Phora Lab',
      'pt-BR': 'Roblox Phora Lab'
    },
    subtitle: {
      en: 'Roblox Fashion Game',
      'pt-BR': 'Roblox Fashion Game',
    },
    images: [
      '/assets/projects/phora/phora-1.jpg',
      '/assets/projects/phora/phora-2.jpg',
    ],
    cycleDuration: 4,
    year: 2025,
    category: 'roblox'
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
    category: 'unity'
  },
    {
    id: 'animunch',
    title: {
      en: 'Animunch',
      'pt-BR': 'Animunch'
    },
    subtitle: {
      en: 'Mobile Arcade Puzzle Game',
      'pt-BR': 'Jogo Mobile Puzzle Arcade'
    },
    images: [
      '/assets/projects/animunch/animunch-1.jpg',
      '/assets/projects/animunch/animunch-2.jpg'
    ],
    cycleDuration: 4,
    year: 2023,
    category: 'unity'
  },
];

// Helper functions for project data
export function getProjectById(id: string): ProjectData | undefined {
  return projectsDatabase.find(project => project.id === id);
}

export function getProjectsByCategory(category: string): ProjectData[] {
  return projectsDatabase.filter(project => project.category === category);
}

export function getFeaturedProjects(): ProjectData[] {
  return projectsDatabase.filter(project => project.featured);
}

export function getAllProjects(): ProjectData[] {
  return projectsDatabase;
}

// Get localized project data
export function getLocalizedProject(project: ProjectData, locale: 'en' | 'pt-BR') {
  return {
    ...project,
    title: project.title[locale],
    subtitle: project.subtitle[locale]
  };
}
