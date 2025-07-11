import { getTranslations, normalizeLocale } from '../../../lib/i18n';
import ContentLayout from '../../../components/ContentLayout';

interface Props {
	params: Promise<{ locale: string }>;
}

export default async function ContactPage({ params }: Props) {
	const { locale: rawLocale } = await params;
	const locale = normalizeLocale(rawLocale);

	// Load translations
	const t = await getTranslations(locale);

	return (
		<ContentLayout translations={t} locale={locale}>
			<div className="space-y-8">
				{/* Page Header */}
				<div className="text-center space-y-4">
					<h1 className="text-4xl font-bold heading-crayon text-shadow-strong">
						{t.pages.contact.title}
					</h1>
				</div>

				{/* Contact Content */}
				<div className="max-w-2xl mx-auto">
					<div className="bg-white rounded-lg shadow-sm p-8">
						<div className="text-center space-y-6">
							<div className="text-6xl">📧</div>
							<h2 className="font-h2 text-2xl font-bold">
								{locale === 'en' ? 'Get in Touch' : 'Entre em Contato'}
							</h2>
							<p className="font-body text-gray-600">
								{locale === 'en'
									? 'We\'d love to hear from you! Whether you have questions about our games, want to collaborate, or just want to say hello.'
									: 'Adoraríamos ouvir de você! Seja para fazer perguntas sobre nossos jogos, colaborar ou apenas dizer olá.'
								}
							</p>

							<div className="space-y-4">
								<div className="bg-gray-50 rounded-lg p-4">
									<h3 className="font-h2 font-semibold mb-2">Email</h3>
									<p className="font-body text-blue-600">hello@madeinbugs.com</p>
								</div>

								<div className="bg-gray-50 rounded-lg p-4">
									<h3 className="font-h2 font-semibold mb-2">
										{locale === 'en' ? 'Social Media' : 'Redes Sociais'}
									</h3>
									<p className="font-body text-gray-600">
										{locale === 'en' ? 'Follow us for updates!' : 'Nos siga para atualizações!'}
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</ContentLayout>
	);
}
