import { notFound } from 'next/navigation';
import { getTranslations, normalizeLocale } from '../../../../lib/i18n';
import { getProjectById } from '../../../../lib/projects';
import ProjectPageClient from './ProjectPageClient';

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

	return <ProjectPageClient project={project} locale={locale} translations={t} />;
}
