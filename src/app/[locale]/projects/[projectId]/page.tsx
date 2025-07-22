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
					<h1 className="heading-crayon">
						{localizedTitle}
					</h1>
					<p className="font-body text-xl text-gray-600">
						{localizedSubtitle}
					</p>
					{project.year && (
						<p className="font-body text-sm text-gray-500">
							{project.year}
						</p>
					)}
				</div>



				{/* Project Details */}
				<div className="grid md:grid-cols-2 gap-8">
					{/* Left Column - Description */}
					<div className="space-y-6">
						{project.description && (
							<div className="bg-white rounded-lg shadow-sm p-6">
								<h3 className="font-h2 text-xl font-bold mb-3">
									{locale === 'en' ? 'About' : 'Sobre'}
								</h3>
								<p className="font-body text-gray-600 leading-relaxed">
									{project.description[locale as 'en' | 'pt-BR']}
								</p>
							</div>
						)}

						{project.longDescription && (
							<div className="bg-white rounded-lg shadow-sm p-6">
								<h3 className="font-h2 text-xl font-bold mb-3">
									{locale === 'en' ? 'Detailed Description' : 'Descrição Detalhada'}
								</h3>
								<div className="font-body text-gray-600 leading-relaxed whitespace-pre-line">
									{project.longDescription[locale as 'en' | 'pt-BR']}
								</div>
							</div>
						)}

						{project.features && project.features[locale as 'en' | 'pt-BR']?.length > 0 && (
							<div className="bg-white rounded-lg shadow-sm p-6">
								<h3 className="text-xl font-bold mb-3">
									{locale === 'en' ? 'Features' : 'Características'}
								</h3>
								<ul className="space-y-2">
									{project.features[locale as 'en' | 'pt-BR'].map((feature, index) => (
										<li key={index} className="flex items-start">
											<span className="text-blue-500 mr-2">•</span>
											<span className="text-gray-600">{feature}</span>
										</li>
									))}
								</ul>
							</div>
						)}
					</div>

					{/* Right Column - Technical Info */}
					<div className="space-y-6">
						{/* Only show Project Info if there's meaningful content */}
						{(project.status || project.releaseDate || project.teamSize) && (
							<div className="bg-white rounded-lg shadow-sm p-6">
								<h3 className="font-h2 text-xl font-bold mb-4">
									{locale === 'en' ? 'Project Info' : 'Informações do Projeto'}
								</h3>
								<div className="space-y-3">
									{project.status && (
										<div className="flex justify-between">
											<span className="font-body font-medium text-gray-700">
												{locale === 'en' ? 'Status:' : 'Status:'}
											</span>
											<span className={`font-body capitalize px-2 py-1 rounded text-sm ${project.status === 'released' ? 'bg-green-100 text-green-800' :
												project.status === 'development' ? 'bg-blue-100 text-blue-800' :
													project.status === 'prototype' ? 'bg-yellow-100 text-yellow-800' :
														'bg-gray-100 text-gray-800'
												}`}>
												{project.status}
											</span>
										</div>
									)}

									{project.releaseDate && (
										<div className="flex justify-between">
											<span className="font-body font-medium text-gray-700">
												{locale === 'en' ? 'Release Date:' : 'Data de Lançamento:'}
											</span>
											<span className="font-body text-gray-600">{project.releaseDate}</span>
										</div>
									)}

									{project.teamSize && (
										<div className="flex justify-between">
											<span className="font-medium text-gray-700">
												{locale === 'en' ? 'Team Size:' : 'Tamanho da Equipe:'}
											</span>
											<span className="text-gray-600">{project.teamSize}</span>
										</div>
									)}
								</div>
							</div>
						)}

						{project.links && Object.keys(project.links).length > 0 && (
							<div className="bg-white rounded-lg shadow-sm p-6">
								<h3 className="text-xl font-bold mb-3">
									{locale === 'en' ? 'Links' : 'Links'}
								</h3>
								<div className="space-y-2">
									{project.links.website && (
										<a href={project.links.website} target="_blank" rel="noopener noreferrer"
											className="block text-blue-600 hover:text-blue-800 underline">
											🌐 Website
										</a>
									)}
									{project.links.steam && (
										<a href={project.links.steam} target="_blank" rel="noopener noreferrer"
											className="block text-blue-600 hover:text-blue-800 underline">
											� Steam
										</a>
									)}
									{project.links.github && (
										<a href={project.links.github} target="_blank" rel="noopener noreferrer"
											className="block text-blue-600 hover:text-blue-800 underline">
											💻 GitHub
										</a>
									)}
									{project.links.itchio && (
										<a href={project.links.itchio} target="_blank" rel="noopener noreferrer"
											className="block text-blue-600 hover:text-blue-800 underline">
											🎯 itch.io
										</a>
									)}
								</div>
							</div>
						)}

						{project.platform && project.platform.length > 0 && (
							<div className="bg-white rounded-lg shadow-sm p-6">
								<h3 className="text-xl font-bold mb-3">
									{locale === 'en' ? 'Platforms' : 'Plataformas'}
								</h3>
								<div className="flex flex-wrap gap-2">
									{project.platform.map((platform, index) => (
										<span key={index} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
											{platform}
										</span>
									))}
								</div>
							</div>
						)}
					</div>
				</div>

				{/* Gallery - Includes both thumbnail and additional gallery images */}
				{(() => {
					// Combine project images with gallery images, avoiding duplicates
					const allImages = [...project.images];
					if (project.gallery) {
						project.gallery.forEach(galleryImage => {
							if (!allImages.includes(galleryImage)) {
								allImages.push(galleryImage);
							}
						});
					}

					return allImages.length > 0 && (
						<div className="space-y-4">
							<h3 className="text-2xl font-bold text-center">
								{locale === 'en' ? 'Gallery' : 'Galeria'}
							</h3>
							<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
								{allImages.map((image, index) => (
									<div key={index} className="aspect-[4/3] relative overflow-hidden shadow-lg">
										<Image
											src={image}
											alt={`${localizedTitle} - Gallery ${index + 1}`}
											fill
											className="object-cover hover:scale-105 transition-transform duration-300"
											sizes="(max-width: 768px) 100vw, 33vw"
										/>
									</div>
								))}
							</div>
						</div>
					);
				})()}
			</div>
		</ContentLayout>
	);
}
