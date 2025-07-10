import LanguageSwitcher from '@/components/LanguageSwitcher';
import NavigationMenu from '@/components/NavigationMenu';
import { getTranslations, normalizeLocale } from '../../lib/i18n';

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
      <div className="relative w-full h-screen max-w-6xl mx-auto">
        {/* Navigation Menu with 5-point star layout - positioned first */}
        <NavigationMenu translations={t.navigation} />
        
        {/* Central content area */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-center space-y-6">
            {/* Temporary placeholder for the mascot - 10% smaller */}
            <div className="w-56 h-56 mx-auto bg-primary-200 rounded-crayon border-4 border-primary-400 flex items-center justify-center">
            </div>
            
            {/* Title only */}
            <div>
              <h1 className="text-4xl font-bold heading-crayon text-shadow-strong">
                {t.homepage.title}
              </h1>
            </div>

            {/* Functional language switcher */}
            <LanguageSwitcher translations={t.common.language_switcher} />
          </div>
        </div>
      </div>
    </div>
  );
}
