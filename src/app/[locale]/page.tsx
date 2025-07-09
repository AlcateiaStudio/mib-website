import LanguageSwitcher from '@/components/LanguageSwitcher';
import { getTranslations, normalizeLocale } from '@/lib/i18n';

interface Props {
  params: Promise<{ locale: string }>;
}

export default async function HomePage({ params }: Props) {
  const { locale: rawLocale } = await params;
  const locale = normalizeLocale(rawLocale);
  
  // Load translations from JSON files
  const t = await getTranslations(locale);

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
            {t.homepage.title}
          </h1>
          <h2 className="text-2xl text-primary-600 text-shadow-crayon">
            {t.homepage.subtitle}
          </h2>
          <p className="text-lg text-neutral-700 max-w-md mx-auto">
            {t.homepage.description}
          </p>
        </div>

        {/* Temporary navigation buttons */}
        <div className="flex flex-wrap justify-center gap-4 mt-12">
          <button className="btn-crayon">{t.navigation.team}</button>
          <button className="btn-crayon">{t.navigation.illustrations}</button>
          <button className="btn-crayon">{t.navigation.games}</button>
          <button className="btn-crayon">{t.navigation.about}</button>
          <button className="btn-crayon">{t.navigation.contact}</button>
        </div>

        {/* Functional language switcher */}
        <LanguageSwitcher translations={t.common.language_switcher} />
      </div>
    </div>
  );
}
