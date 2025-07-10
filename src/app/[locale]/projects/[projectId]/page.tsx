import { notFound } from 'next/navigation';
import { getTranslations, normalizeLocale } from '../../../../lib/i18n';
import { getProjectById } from '../../../../lib/projects';
import ContentLayout from '../../../../components/ContentLayout';
import Image from 'next/image';

interface Props {
	params: Promise<{ locale: string; projectId: string }>;
}

export default async function ProjectPage({ params }: Props) {
	const { locale: rawLocale, projectId } = await params;
	const locale = normalizeLocale(rawLocale);

	// Load translations
	const t = await getTranslations(locale);

	// Get project data
	const project = getProjectById(projectId);

	if (!project) {
		notFound();
	}

	const localizedTitle = project.title[locale as 'en' | 'pt-BR'];
	const localizedSubtitle = project.subtitle[locale as 'en' | 'pt-BR'];

	return (
		<ContentLayout translations={t} locale={locale}>
			<div className="space-y-8">
				{/* Project Header */}
				<div className="text-center space-y-4">
					<h1 className="text-4xl font-bold heading-crayon text-shadow-strong">
						{localizedTitle}
					</h1>
					<p className="text-xl text-gray-600">
						{localizedSubtitle}
					</p>
					{project.year && (
						<p className="text-sm text-gray-500">
							{project.year}
						</p>
					)}
				</div>

				{/* Project Images */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					{project.images.map((image, index) => (
						<div key={index} className="aspect-[4/3] relative rounded-lg overflow-hidden shadow-lg">
							<Image
								src={image}
								alt={`${localizedTitle} - Image ${index + 1}`}
								fill
								className="object-cover"
								sizes="(max-width: 768px) 100vw, 50vw"
							/>
						</div>
					))}
				</div>

				{/* Placeholder for future content */}
				<div className="bg-gray-50 rounded-lg p-8 text-center">
					<h3 className="text-lg font-semibold text-gray-700 mb-2">
						{locale === 'en' ? 'Project Details Coming Soon' : 'Detalhes do Projeto em Breve'}
					</h3>
					<p className="text-gray-500">
						{locale === 'en'
							? 'Detailed project information, development process, and more images will be added here.'
							: 'Informações detalhadas do projeto, processo de desenvolvimento e mais imagens serão adicionadas aqui.'
						}
					</p>
				</div>
			</div>
		</ContentLayout>
	);
}
