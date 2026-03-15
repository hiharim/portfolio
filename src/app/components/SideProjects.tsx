import { ExternalLink, Github } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ProjectModal } from "./ProjectModal";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

export function SideProjects() {
  const { t } = useTranslation();
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // i18n에서 사이드 프로젝트 데이터 가져오기
  const sideProjectsData = t('sideProjects', { returnObjects: true }) as Array<any>;

  const sideProjects = sideProjectsData.map(project => ({
    ...project,
    image: `${import.meta.env.BASE_URL}${project.image}`,
    screenshots: project.screenshots?.map((s: string) => `${import.meta.env.BASE_URL}${s}`),
    architecture: project.architecture ? `${import.meta.env.BASE_URL}${project.architecture}` : undefined,
  }));

  const handleProjectClick = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <section className="container mx-auto px-4 py-24 max-w-6xl">
      <div className="flex flex-col items-center text-center mb-16">
        <div className="px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest mb-4">
          Experiments
        </div>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          사이드 프로젝트
        </h2>
        <p className="text-muted-foreground text-base max-w-lg">
          새로운 기술을 탐구하고 실험하며 만든 개인 프로젝트들입니다.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {sideProjects.map((project) => (
          <Card
            key={project.title}
            className="flex flex-col cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => handleProjectClick(project)}
          >
            <CardHeader className="pb-3">
              <CardTitle className="text-base">{project.title}</CardTitle>
              <CardDescription className="text-sm">{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="mt-auto">
              <div className="flex flex-wrap gap-1.5 mb-3">
                {project.tags.map((tag: string) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant="ghost"
                  className="flex-1 h-8"
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                  asChild
                >
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-1 h-3 w-3" />
                    Demo
                  </a>
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  className="flex-1 h-8"
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                  asChild
                >
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-1 h-3 w-3" />
                    Code
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
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