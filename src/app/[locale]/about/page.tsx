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
			<div className="space-y-8">
				{/* Page Header */}
				<div className="text-center space-y-4">
					<h1 className="heading-crayon">
						{t.pages.about.title}
					</h1>
					<p className="font-body text-lg text-gray-600 max-w-2xl mx-auto">
						{t.pages.about.description}
					</p>
				</div>

				{/* About Content */}
				<div className="prose prose-lg mx-auto">
					<div className="content-card">
						<h2 className="font-h2 text-2xl font-bold mb-4">
							{locale === 'en' ? 'Our Story' : 'Nossa História'}
						</h2>
						<p className="font-body text-gray-600 mb-6">
							{locale === 'en'
								? 'Made in Bugs is an indie game studio founded on the belief that the best games come from embracing the chaotic, iterative nature of development. Our mascot, Sisyphus the dung beetle, represents our philosophy of persistent creativity and turning obstacles into opportunities.'
								: 'Made in Bugs é um estúdio de jogos indie fundado na crença de que os melhores jogos vêm de abraçar a natureza caótica e iterativa do desenvolvimento. Nosso mascote, Sísifo o besouro, representa nossa filosofia de criatividade persistente e transformar obstáculos em oportunidades.'
							}
						</p>

						<h3 className="font-h2 text-xl font-semibold mb-3">
							{locale === 'en' ? 'Our Mission' : 'Nossa Missão'}
						</h3>
						<p className="font-body text-gray-600">
							{locale === 'en'
								? 'To create meaningful, handcrafted gaming experiences that celebrate the art of game development and the communities that form around them.'
								: 'Criar experiências de jogos significativas e artesanais que celebram a arte do desenvolvimento de jogos e as comunidades que se formam ao seu redor.'
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
			</div>
		</ContentLayout>
	);
}
