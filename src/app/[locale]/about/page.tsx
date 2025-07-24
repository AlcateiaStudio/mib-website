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
				</div>

				{/* About Content */}
				<div className="prose prose-lg mx-auto">
					<div className="content-card">
						<h2 className="font-h2 text-2xl font-bold mb-4">
							{locale === 'en' ? 'Our Story' : 'Nossa História'}
						</h2>
						<p className="font-body text-gray-600 mb-6">
							{locale === 'en'
								? 'Made in Bugs was born in early 2024, founded by Andress and Bela. For us, games are a chaotic and cooperative art form. We seek people from different backgrounds to join our team, as we believe there are small potential sparks of creativity scattered around the world, and each individual\'s backstory brings something new.'
								: 'Made in Bugs nasceu no comecinho de 2024, fundada por Andress e Bela. Para nós, o que fazemos é uma arte caótica e compartilhada. Buscamos pessoas de backgrounds distintos para incorporar o nosso time, pois cremos que existem pequenos brilhos potenciais de criatividade espalhados, e a história de cada indivíduo traz algo novo.'
							}
						</p>

						<h3 className="font-h2 text-xl font-semibold mb-3">
							{locale === 'en' ? 'Our Values' : 'Nossos Valores'}
						</h3>
						<ul className="font-body text-gray-600 mb-6 list-disc list-inside space-y-2">
							<li>
								{locale === 'en'
									? 'Team communication and harmony'
									: 'Comunicação e sintonia do time'
								}
							</li>
							<li>
								{locale === 'en'
									? 'Sharing risks, responsibilities and profits'
									: 'Compartilhamento de riscos, responsabilidades e lucros'
								}
							</li>
							<li>
								{locale === 'en'
									? 'Players first, always'
									: 'A vontade do jogador vem primeiro'
								}
							</li>
							<li>
								{locale === 'en'
									? 'Calm, pursuit of excellence and knowledge sharing'
									: 'Calma, busca pela excelência e compartilhamento de conhecimento'
								}
							</li>
						</ul>

						<h3 className="font-h2 text-xl font-semibold mb-3">
							{locale === 'en' ? 'Our Approach' : 'Nossa Abordagem'}
						</h3>
						<p className="font-body text-gray-600">
							{locale === 'en'
								? 'Making games is difficult and we embrace this difficulty through organization, synchronization and empowerment. We have constant shared design sessions, do lots of playtesting and are always improving our methodology to increase the time we spend doing what we love. We daily seek to discover how to provide the most memorable experiences, without fear of having to redo or lose work. We don\'t make simple games, but we are always trying to simplify the process.'
								: 'Fazer jogos é difícil e nós abraçamos essa dificuldade através da organização, sincronização e capacitação. Temos constantes sessões de design compartilhado, fazemos muito playtesting e estamos sempre melhorando nossa metodologia para crescer o tempo que a gente passa fazendo o que gosta. Nós buscamos diariamente descobrir como proporcionar as experiências mais memoráveis, sem medo de ter que refazer ou perder trabalho. Não fazemos jogos simples, mas estamos sempre tentando simplificar o processo.'
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

				{/* Nature Section */}
				<div className="content-card">
					<h2 className="font-h2 text-2xl font-bold mb-6 text-center">
						{locale === 'en' ? 'Love for Nature' : 'Amor pela Natureza'}
					</h2>
					<p className="font-body text-gray-600 mb-8 text-center max-w-3xl mx-auto">
						{locale === 'en'
							? 'Our studio was also born from our love for animals'
							: 'Nosso estúdio também nasceu do nosso amor pelos animais.'
						}
					</p>

					{/* Pets Gallery Section */}
					<div className="space-y-6">
						<h2 className="font-h2 text-xl font-semibold text-center">
							{locale === 'en'
								? 'To all the pets and rescues that passed through our lives and guided us'
								: 'A todos os pets e resgates que passaram por nossas vidas e nos guiaram'
							}
						</h2>

						{/* TODO: Add pets gallery component here */}
						<div className="text-center text-gray-500 py-8">
							<p className="font-body">
								{locale === 'en'
									? 'Pet gallery coming soon...'
									: 'Galeria de pets em breve...'
								}
							</p>
						</div>
					</div>
				</div>
			</div>
		</ContentLayout>
	);
}
