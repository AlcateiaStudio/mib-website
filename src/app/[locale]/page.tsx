import LanguageSwitcher from '@/components/LanguageSwitcher';

interface Props {
  params: Promise<{ locale: string }>;
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  
  // Simple translations object for testing
  const translations = {
    'pt-BR': {
      title: 'Made in Bugs',
      subtitle: 'Estúdio de Jogos Indie',
      description: 'Abraçando a natureza caótica do desenvolvimento de jogos com perseverança e criatividade.',
      nav: {
        team: 'Equipe',
        illustrations: 'Ilustrações',
        games: 'Jogos',
        about: 'Sobre',
        contact: 'Contato'
      }
    },
    'en': {
      title: 'Made in Bugs',
      subtitle: 'Indie Game Studio',
      description: 'Embracing the chaotic nature of game development with perseverance and creativity.',
      nav: {
        team: 'Team',
        illustrations: 'Illustrations',
        games: 'Games',
        about: 'About',
        contact: 'Contact'
      }
    }
  };

  const t = translations[locale as keyof typeof translations] || translations['pt-BR'];

  return (
    <div className="homepage-layout center-content">
      <div className="text-center space-y-8">
        {/* Temporary placeholder for the mascot */}
        <div className="w-64 h-64 mx-auto bg-primary-200 rounded-crayon border-4 border-primary-400 flex items-center justify-center">
          <div className="text-6xl">🪲</div>
        </div>
        
        {/* Title and subtitle */}
        <div className="space-y-4">
          <h1 className="text-6xl font-bold heading-crayon text-shadow-strong">
            {t.title}
          </h1>
          <h2 className="text-2xl text-primary-600 text-shadow-crayon">
            {t.subtitle}
          </h2>
          <p className="text-lg text-neutral-700 max-w-md mx-auto">
            {t.description}
          </p>
        </div>

        {/* Temporary navigation buttons */}
        <div className="flex flex-wrap justify-center gap-4 mt-12">
          <button className="btn-crayon">{t.nav.team}</button>
          <button className="btn-crayon">{t.nav.illustrations}</button>
          <button className="btn-crayon">{t.nav.games}</button>
          <button className="btn-crayon">{t.nav.about}</button>
          <button className="btn-crayon">{t.nav.contact}</button>
        </div>

        {/* Functional language switcher */}
        <LanguageSwitcher />
      </div>
    </div>
  );
}
