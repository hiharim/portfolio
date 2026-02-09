import { ExternalLink, Github } from "lucide-react";
import { useState } from "react";
import { ProjectModal } from "./ProjectModal";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

const sideProjects = [
  {
    title: "SingTogether",
    description: "노래방 앱",
    image: `${import.meta.env.BASE_URL}images/projects/singtogether/sing_1.png`,
    tags: ["Flutter", "Audio", "UI/UX"],
    github: "#",
    demo: "#",
    fullDescription: "노래방 기능을 제공하는 모바일 앱입니다.",
    screenshots: [
      `${import.meta.env.BASE_URL}images/projects/singtogether/sing_1.png`,
      `${import.meta.env.BASE_URL}images/projects/singtogether/sing_2.png`,
      `${import.meta.env.BASE_URL}images/projects/singtogether/sing_3.png`,
      `${import.meta.env.BASE_URL}images/projects/singtogether/sing_4.png`
    ],
    architecture: `${import.meta.env.BASE_URL}images/projects/singtogether/singtogether.svg`,
    features: [
      "노래 검색 및 재생",
      "녹음 기능",
      "점수 시스템",
      "플레이리스트 관리"
    ],
    duration: "1개월",
    team: "개인 프로젝트",
    contribution: "100%"
  },
];

export function SideProjects() {
  const [selectedProject, setSelectedProject] = useState<typeof sideProjects[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project: typeof sideProjects[0]) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <section className="container mx-auto px-4 py-16 max-w-6xl">
      <div className="text-center mb-12">
        <h2 className="mb-4">사이드 프로젝트</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
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
                {project.tags.map((tag) => (
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