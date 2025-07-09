import { useTranslations } from 'next-intl';

export default function HomePage() {
  const t = useTranslations('homepage');

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
            {t('title')}
          </h1>
          <h2 className="text-2xl text-primary-600 text-shadow-crayon">
            {t('subtitle')}
          </h2>
          <p className="text-lg text-neutral-700 max-w-md mx-auto">
            {t('description')}
          </p>
        </div>

        {/* Temporary navigation buttons */}
        <div className="flex flex-wrap justify-center gap-4 mt-12">
          <button className="btn-crayon">Team</button>
          <button className="btn-crayon">Illustrations</button>
          <button className="btn-crayon">Games</button>
          <button className="btn-crayon">About</button>
          <button className="btn-crayon">Contact</button>
        </div>

        {/* Language switcher placeholder */}
        <div className="language-switcher">
          <div className="flag-button bg-green-500 flex items-center justify-center text-white font-bold">
            BR
          </div>
          <div className="flag-button bg-blue-500 flex items-center justify-center text-white font-bold">
            EN
          </div>
        </div>
      </div>
    </div>
  );
}
