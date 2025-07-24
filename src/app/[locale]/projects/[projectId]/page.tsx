import { notFound } from 'next/navigation';
import { getTranslations, normalizeLocale } from '../../../../lib/i18n';
import { getProjectById } from '../../../../lib/projects';
import ContentLayout from '../../../../components/ContentLayout';
import Image from 'next/image';
import ProjectLinks from '../../../../components/ProjectLinks';
import PlatformTags from '../../../../components/PlatformTags';

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
		<>
			{/* Full-width Banner Section */}
			{project.bannerImage && (
				<div className="relative h-[200px] w-full overflow-hidden">
					{/* Banner Background */}
					<Image
						src={project.bannerImage}
						alt={`${localizedTitle} Banner`}
						fill
						className="object-cover"
						sizes="100vw"
						priority
					/>
					{/* Dark overlay for better text readability */}
					<div className="absolute inset-0 bg-black/40" />

					{/* Content over banner */}
					<div className="absolute inset-0 flex items-center justify-center">
						<div className="text-center space-y-3 text-white px-4">
							{project.titleImage ? (
								<div className="flex justify-center">
									<Image
										src={project.titleImage}
										alt={localizedTitle}
										width={300}
										height={120}
										className="object-contain max-h-32"
										priority
									/>
								</div>
							) : (
								<>
									<h1 className="heading-crayon text-white drop-shadow-lg">
										{localizedTitle}
									</h1>
									<p className="font-body text-xl text-white/90 drop-shadow-md">
										{localizedSubtitle}
									</p>
								</>
							)}
						</div>
					</div>
				</div>
			)}

			<ContentLayout translations={t} locale={locale}>
				<div className="space-y-8">
					{/* Project Header (only shown if no banner) */}
					{!project.bannerImage && (
						<div className="text-center space-y-4">
							{project.titleImage ? (
								<div className="flex justify-center mb-6">
									<Image
										src={project.titleImage}
										alt={localizedTitle}
										width={400}
										height={200}
										className="object-contain max-h-48"
										priority
									/>
								</div>
							) : (
								<>
									<h1 className="heading-crayon">
										{localizedTitle}
									</h1>
									<p className="font-body text-xl text-gray-600">
										{localizedSubtitle}
									</p>
								</>
							)}
							{project.year && (
								<p className="font-body text-sm text-gray-500">
									{project.year}
								</p>
							)}
						</div>
					)}

					{/* Project Details */}
					<div className="grid md:grid-cols-2 gap-8">
						{/* Left Column - Description */}
						<div className="space-y-6">
							{project.description && (
								<div className="content-card-sm">
									<h3 className="font-h2 text-xl font-bold mb-3">
										{locale === 'en' ? 'About' : 'Sobre'}
									</h3>
									<p className="font-body text-gray-600 leading-relaxed">
										{project.description[locale as 'en' | 'pt-BR']}
									</p>
								</div>
							)}

							{project.longDescription && (
								<div className="content-card-sm">
									<h3 className="font-h2 text-xl font-bold mb-3">
										{locale === 'en' ? 'Detailed Description' : 'Descrição Detalhada'}
									</h3>
									<div className="font-body text-gray-600 leading-relaxed whitespace-pre-line">
										{project.longDescription[locale as 'en' | 'pt-BR']}
									</div>
								</div>
							)}

							{project.features && project.features[locale as 'en' | 'pt-BR']?.length > 0 && (
								<div className="content-card-sm">
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
								<div className="content-card-sm">
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
								<ProjectLinks links={project.links} locale={locale} />
							)}

							{project.platform && project.platform.length > 0 && (
								<PlatformTags platforms={project.platform} locale={locale} />
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
		</>
	);
}
