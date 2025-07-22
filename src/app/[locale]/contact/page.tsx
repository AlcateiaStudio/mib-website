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
					<h1 className="heading-crayon">
						{t.pages.contact.title}
					</h1>
				</div>

				{/* Contact Content */}
				<div className="max-w-4xl mx-auto">
					<div className="grid md:grid-cols-2 gap-8">
						{/* Contact Information */}
						<div className="content-card">
							<div className="text-center space-y-6">
								<div className="text-6xl">📧</div>
								<h2 className="font-h2 text-2xl font-bold">
									{locale === 'en' ? 'Get in Touch' : 'Entre em Contato'}
								</h2>
								<p className="font-body text-gray-600">
									{locale === 'en'
										? 'We\'d love to hear from you! Whether you have questions about our games, want to share feedback, or just want to say hello.'
										: 'Adoraríamos ouvir de você! Seja para fazer perguntas sobre nossos jogos, compartilhar feedback ou apenas dizer olá.'
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

						{/* Work with Us / Collaboration */}
						<div className="content-card">
							<div className="text-center space-y-6">
								<div className="text-6xl">🤝</div>
								<h2 className="font-h2 text-2xl font-bold">
									{locale === 'en' ? 'Work with Us' : 'Trabalhe Conosco'}
								</h2>
								<p className="font-body text-gray-600">
									{locale === 'en'
										? 'Interested in collaborating or joining our team? We\'re always looking for talented developers, artists, and creators who share our passion for indie games.'
										: 'Interessado em colaborar ou se juntar à nossa equipe? Estamos sempre procurando por desenvolvedores, artistas e criadores talentosos que compartilham nossa paixão por jogos indie.'
									}
								</p>

								<div className="space-y-4">
									<div className="bg-blue-50 rounded-lg p-4">
										<h3 className="font-h2 font-semibold mb-2">
											{locale === 'en' ? 'Opportunities' : 'Oportunidades'}
										</h3>
										<ul className="font-body text-gray-600 text-left space-y-1">
											<li>• {locale === 'en' ? 'Game Development' : 'Desenvolvimento de Jogos'}</li>
											<li>• {locale === 'en' ? 'Art & Animation' : 'Arte e Animação'}</li>
											<li>• {locale === 'en' ? 'Sound Design' : 'Design de Som'}</li>
											<li>• {locale === 'en' ? 'Marketing & Community' : 'Marketing e Comunidade'}</li>
										</ul>
									</div>

									<div className="bg-blue-50 rounded-lg p-4">
										<h3 className="font-h2 font-semibold mb-2">
											{locale === 'en' ? 'Send us your portfolio!' : 'Envie seu portfólio!'}
										</h3>
										<p className="font-body text-blue-600">careers@madeinbugs.com</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</ContentLayout>
	);
}
