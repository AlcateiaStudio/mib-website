import LanguageSwitcher from '@/components/LanguageSwitcher';
import NavigationMenu from '@/components/NavigationMenu';
import CenterLogo from '@/components/CenterLogo';
import { getTranslations, normalizeLocale } from '../../lib/i18n';
import { globalStyles } from '../../lib/styles';

interface Props {
  params: Promise<{ locale: string }>;
}

export default async function HomePage({ params }: Props) {
  const { locale: rawLocale } = await params;
  const locale = normalizeLocale(rawLocale);
  
  // Load translations from JSON files
  const t = await getTranslations(locale);

  return (
    <div className={`homepage-layout center-content bg-gradient-to-br ${globalStyles.backgroundColor}`}>
      <div className="relative w-full h-screen max-w-6xl mx-auto">
        {/* Navigation Menu with 5-point star layout - positioned first */}
        <NavigationMenu translations={t.navigation} />
        
        {/* Central content area */}
        <div className="absolute w-full pointer-events-none" style={{ top: '265px' }}>
          <div className="text-center space-y-6 pointer-events-auto">
            {/* Center logo with hover effect */}
            <CenterLogo />

            {/* Functional language switcher */}
            <LanguageSwitcher translations={t.common.language_switcher} />
          </div>
        </div>
      </div>
    </div>
  );
}
