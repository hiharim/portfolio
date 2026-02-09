import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ProjectModal } from "./ProjectModal";
import { Badge } from "./ui/badge";

export function Projects() {
  const { t } = useTranslation();
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // i18n에서 프로젝트 데이터 가져오기 (객체 형태)
  const projectsData = t('projects', { returnObjects: true }) as Record<string, any>;

  // 객체를 배열로 변환하고 필요한 경로 처리
  const projects = Object.entries(projectsData).map(([id, project]) => ({
    ...project,
    id,
    image: `${import.meta.env.BASE_URL}${project.image}`,
    screenshots: project.screenshots?.map((s: string) => `${import.meta.env.BASE_URL}${s}`),
    architecture: project.architecture ? `${import.meta.env.BASE_URL}${project.architecture}` : undefined,
  }));

  const handleProjectClick = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <section className="container mx-auto px-4 py-16 max-w-6xl">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold">프로젝트</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div
            key={project.title}
            className="group bg-white dark:bg-zinc-900 rounded-[1.5rem] p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] border border-gray-100 dark:border-zinc-800 cursor-pointer transition-all duration-300 hover:-translate-y-2 flex flex-col items-center text-center"
            onClick={() => handleProjectClick(project)}
          >
            {/* Image Container */}
            <div className="relative w-24 h-24 mb-4 rounded-2xl overflow-hidden shadow-md group-hover:shadow-lg transition-shadow duration-300">
              <ImageWithFallback
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col items-center flex-1 w-full">
              <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed w-full">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap justify-center gap-1.5 mt-auto">
                {project.tags.slice(0, 3).map((tag: string) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="px-3 py-1 rounded-full bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-300 hover:bg-slate-200 dark:hover:bg-zinc-700 font-medium border-0 transition-colors text-xs"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <ProjectModal
        project={selectedProject}
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
      />
    </section>
  );
}