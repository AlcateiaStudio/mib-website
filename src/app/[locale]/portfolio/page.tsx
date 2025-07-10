import { getTranslations, normalizeLocale } from '../../../lib/i18n';
import { getAllProjects } from '../../../lib/projects';
import ContentLayout from '../../../components/ContentLayout';
import ProjectThumbnail from '../../../components/ProjectThumbnail';

interface Props {
  params: Promise<{ locale: string }>;
}

export default async function PortfolioPage({ params }: Props) {
  const { locale: rawLocale } = await params;
  const locale = normalizeLocale(rawLocale);
  
  // Load translations
  const t = await getTranslations(locale);
  
  // Get all projects
  const projects = getAllProjects();

  return (
    <ContentLayout translations={t} locale={locale}>
      <div className="space-y-8">
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectThumbnail
              key={project.id}
              project={project}
              locale={locale as 'en' | 'pt-BR'}
              className="hover:z-10"
            />
          ))}
        </div>

        {/* Empty state if no projects */}
        {projects.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🎨</div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              {locale === 'en' ? 'No Projects Yet' : 'Ainda Não Há Projetos'}
            </h3>
            <p className="text-gray-500">
              {locale === 'en' 
                ? 'Projects will appear here as they are added to the portfolio.' 
                : 'Os projetos aparecerão aqui conforme forem adicionados ao portfólio.'
              }
            </p>
          </div>
        )}
      </div>
    </ContentLayout>
  );
}
