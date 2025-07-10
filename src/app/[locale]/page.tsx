import LanguageSwitcher from '@/components/LanguageSwitcher';
import NavigationMenu from '@/components/NavigationMenu';
import CenterLogo from '@/components/CenterLogo';
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
        <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
          <div className="text-center space-y-6 pointer-events-auto">
            {/* Center logo with hover effect */}
            <CenterLogo />
            
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
