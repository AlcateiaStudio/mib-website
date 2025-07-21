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
		<div
			className={`homepage-layout center-content bg-gradient-to-br ${globalStyles.backgroundColor}`}
		>
			{/* Language switcher - Fixed position at top-right */}
			<LanguageSwitcher translations={t.common.language_switcher} />

			<div className="responsive-homepage-container">
				{/* Navigation Menu with responsive horizontal layout */}
				<NavigationMenu translations={t.navigation} />

				{/* Central content area - responsive positioning */}
				<div className="responsive-center-content">
					<div className="text-center space-y-6 pointer-events-auto">
						{/* Center logo with hover effect */}
						<CenterLogo />
					</div>
				</div>
			</div>
		</div>
	);
}
