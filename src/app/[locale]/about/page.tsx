import { getTranslations, normalizeLocale } from '../../../lib/i18n';
import ContentLayout from '../../../components/ContentLayout';
import TeamCarousel from '../../../components/TeamCarousel';
import teamData from '../../../data/team.json';

interface Props {
	params: Promise<{ locale: string }>;
}

export default async function AboutPage({ params }: Props) {
	const { locale: rawLocale } = await params;
	const locale = normalizeLocale(rawLocale);

	// Load translations
	const t = await getTranslations(locale);

	return (
		<ContentLayout translations={t} locale={locale}>
			<div className="space-y-12">
				{/* Hero Section */}
				<div className="text-center space-y-8">
					<h1 className="heading-crayon">
						{t.pages.about.title}
					</h1>

					{/* Main message */}
					<div className="max-w-4xl mx-auto space-y-6">
						<p className="text-2xl md:text-3xl font-bold text-gray-800">
							{locale === 'en'
								? 'Made in Bugs is a Brazilian indie game studio founded in 2024. We may be small, but our creativity is boundless!'
								: 'Made in Bugs é um estúdio indie brasileiro fundado em 2024. Podemos ser pequenos, mas nossa criatividade é infinita!'
							}
						</p>
						<p className="text-xl md:text-2xl text-gray-600 font-medium">
							{locale === 'en'
								? "Let's create memorable games together."
								: 'Vamos criar jogos memoráveis juntos.'
							}
						</p>
					</div>
				</div>

				{/* Values Cards */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
					<div className="content-card text-center">
						<div className="text-4xl mb-4">💬</div>
						<h3 className="font-h2 text-lg font-bold mb-2">
							{locale === 'en' ? 'Communication' : 'Comunicação'}
						</h3>
						<p className="text-sm text-gray-600">
							{locale === 'en'
								? 'Always in sync'
								: 'Sempre em sintonia'
							}
						</p>
					</div>

					<div className="content-card text-center">
						<div className="text-4xl mb-4">🎮</div>
						<h3 className="font-h2 text-lg font-bold mb-2">
							{locale === 'en' ? 'Players First' : 'Jogadores Primeiro'}
						</h3>
						<p className="text-sm text-gray-600">
							{locale === 'en'
								? 'Always'
								: 'Sempre'
							}
						</p>
					</div>

					<div className="content-card text-center">
						<div className="text-4xl mb-4">🚀</div>
						<h3 className="font-h2 text-lg font-bold mb-2">
							{locale === 'en' ? 'No Fear of Risk' : 'Sem Medo de Risco'}
						</h3>
						<p className="text-sm text-gray-600">
							{locale === 'en'
								? 'Excellence through bold choices'
								: 'Excelência através de escolhas ousadas'
							}
						</p>
					</div>

					<div className="content-card text-center">
						<div className="text-4xl mb-4">🌱</div>
						<h3 className="font-h2 text-lg font-bold mb-2">
							{locale === 'en' ? 'Always Growing' : 'Sempre Crescendo'}
						</h3>
						<p className="text-sm text-gray-600">
							{locale === 'en'
								? 'Excellence & knowledge sharing'
								: 'Excelência e compartilhamento'
							}
						</p>
					</div>
				</div>

				{/* Victories Section */}
				<div className="content-card">
					<h2 className="font-h2 text-2xl font-bold mb-8 text-center">
						{locale === 'en' ? 'Our Victories' : 'Nossas Vitórias'}
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{/* Paulo Gustavo Grant */}
						<div className="text-center space-y-4">
							<div className="bg-gray-100 rounded-lg p-8 aspect-square flex items-center justify-center">
								<div className="text-4xl">🏆</div>
								{/* TODO: Add Paulo Gustavo grant image here */}
							</div>
							<h3 className="font-h2 text-lg font-bold">
								{locale === 'en' ? 'Paulo Gustavo Grant Winner' : 'Ganhamos o Edital Paulo Gustavo'}
							</h3>
						</div>

						{/* Investment */}
						<div className="text-center space-y-4">
							<div className="bg-gray-100 rounded-lg p-8 aspect-square flex items-center justify-center">
								<div className="text-4xl">💰</div>
							</div>
							<h3 className="font-h2 text-lg font-bold">
								{locale === 'en' ? 'Received R$30,000 Investment' : 'Recebemos R$30.000 de Investimento'}
							</h3>
						</div>

						{/* Sebrae Mentorship */}
						<div className="text-center space-y-4">
							<div className="bg-gray-100 rounded-lg p-8 aspect-square flex items-center justify-center">
								<div className="text-4xl">🎓</div>
								{/* TODO: Add Sebrae mentorship image here */}
							</div>
							<h3 className="font-h2 text-lg font-bold">
								{locale === 'en' ? 'Mentored by Sebrae Crie Games' : 'Fomos Mentorados pela Sebrae Crie Games'}
							</h3>
						</div>
					</div>
				</div>

				{/* Team Section */}
				<div className="content-card">
					<h2 className="font-h2 text-2xl font-bold mb-6 text-center">
						{locale === 'en' ? 'Meet Our Team' : 'Conheça Nossa Equipe'}
					</h2>
					<TeamCarousel teamMembers={teamData.teamMembers} locale={locale} />
				</div>

				{/* Nature Section */}
				<div className="content-card text-center">
					<div className="text-6xl mb-4">🐛</div>
					<h2 className="font-h2 text-2xl font-bold mb-4">
						{locale === 'en' ? 'Love for Nature' : 'Amor pela Natureza'}
					</h2>
					<p className="font-body text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
						{locale === 'en'
							? 'Our studio was born from our love for animals, especially insects and their incredible diversity.'
							: 'Nosso estúdio nasceu do nosso amor pelos animais, especialmente insetos e sua incrível diversidade.'
						}
					</p>

					{/* Pets Gallery Section */}
					<div className="space-y-6">
						<h3 className="font-h2 text-lg font-semibold">
							{locale === 'en'
								? 'To all the pets and rescues that guided us'
								: 'A todos os pets e resgates que nos guiaram'
							}
						</h3>

						{/* TODO: Add pets gallery component here */}
						<div className="text-center text-gray-500 py-8 bg-gray-50 rounded-lg">
							<div className="text-4xl mb-2">📸</div>
							<p className="font-body">
								{locale === 'en'
									? 'Pet gallery coming soon...'
									: 'Galeria de pets em breve...'
								}
							</p>
						</div>
					</div>
				</div>

				{/* Call to Action */}
				<div className="content-card text-center bg-gradient-to-br from-purple-50 to-blue-50">
					<h2 className="font-h2 text-2xl font-bold mb-4">
						{locale === 'en' ? 'Ready to Create Something Amazing?' : 'Pronto para Criar Algo Incrível?'}
					</h2>
					<p className="font-body text-lg text-gray-600 mb-6">
						{locale === 'en'
							? 'We\'re always looking for passionate people to join our creative journey.'
							: 'Estamos sempre procurando pessoas apaixonadas para se juntar à nossa jornada criativa.'
						}
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<a
							href={`/${locale}/contact`}
							className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors"
						>
							{locale === 'en' ? 'Work With Us' : 'Trabalhe Conosco'}
						</a>
						<a
							href={`/${locale}/portfolio`}
							className="inline-block border border-purple-600 text-purple-600 px-6 py-3 rounded-lg font-medium hover:bg-purple-50 transition-colors"
						>
							{locale === 'en' ? 'See Our Games' : 'Veja Nossos Jogos'}
						</a>
					</div>
				</div>
			</div>
		</ContentLayout>
	);
}
