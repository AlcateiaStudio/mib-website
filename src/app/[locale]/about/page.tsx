import { getTranslations, normalizeLocale } from '../../../lib/i18n';
import ContentLayout from '../../../components/ContentLayout';
import TeamCarousel from '../../../components/TeamCarousel';
import teamData from '../../../data/team.json';
import Image from 'next/image';

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
								? 'Made in Bugs is a Brazilian indie game studio founded in 2024'
								: 'Made in Bugs é um estúdio indie brasileiro fundado em 2024'
							}
						</p>
						<p className="text-xl md:text-2xl text-gray-600 font-medium">
							{locale === 'en'
								? "With just one year of existence..."
								: 'Com apenas um ano de existência...'
							}
						</p>
					</div>
				</div>

				{/* Team Section */}
				<div className="content-card">
					<h2 className="font-h2 text-2xl font-bold mb-6 text-center">
						{locale === 'en' ? 'Meet Our Team' : 'Conheça Nossa Equipe'}
					</h2>
					<TeamCarousel teamMembers={teamData.teamMembers} locale={locale} />
				</div>

				{/* Achievements Cards */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
					<div className="text-center relative group">
						<div className="rounded-lg overflow-hidden h-48 flex items-center justify-center cursor-pointer">
							<Image
								src="/assets/about-us/paulo-gustavo.png"
								alt={locale === 'en' ? 'Paulo Gustavo Grant Certificate' : 'Certificado Edital Paulo Gustavo'}
								width={400}
								height={300}
								className="w-full h-full object-contain"
							/>
							{/* Tooltip */}
							<div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-black text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10">
								{locale === 'en' ? 'Paulo Gustavo Grant Winner' : 'Ganhamos o Edital Paulo Gustavo'}
							</div>
						</div>
					</div>

					<div className="text-center flex items-center justify-center pb-20">
						<h3 className="font-h2 text-2xl font-bold">
							{locale === 'en' ? (
								<span>Received <span className="text-green-600">R$30,000</span> Investment!</span>
							) : (
								<span>Recebemos <span className="text-green-600">R$30.000</span> de Investimento!</span>
							)}
						</h3>
					</div>

					<div className="text-center relative group">
						<div className="rounded-lg overflow-hidden h-48 flex items-center justify-center cursor-pointer">
							<Image
								src="/assets/about-us/crie-games.png"
								alt={locale === 'en' ? 'Sebrae Crie Games Mentorship Certificate' : 'Certificado Mentoria Sebrae Crie Games'}
								width={400}
								height={300}
								className="w-full h-full object-contain"
							/>
							{/* Tooltip */}
							<div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-black text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10">
								{locale === 'en' ? 'Mentored by Sebrae Crie Games' : 'Mentoria da Sebrae Crie Games'}
							</div>
						</div>
					</div>
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
