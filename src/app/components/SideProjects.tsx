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
  {
    title: "Todo Manager",
    description: "오프라인 지원 할일 관리 앱",
    image: "https://images.unsplash.com/photo-1581913229425-9c6b993fc107?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXZlbG9wZXIlMjBsYXB0b3B8ZW58MXx8fHwxNzY1OTQ1MjYyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Flutter", "SQLite", "Provider"],
    github: "#",
    demo: "#",
    fullDescription: "SQLite 로컬 저장소를 활용한 오프라인 우선 할일 관리 앱입니다.",
    features: [
      "오프라인에서 완벽하게 동작",
      "카테고리별 할일 분류",
      "우선순위 및 마감일 설정",
      "완료율 통계"
    ],
    duration: "3주",
    team: "개인 프로젝트",
    contribution: "100%"
  },
  {
    title: "Recipe Finder",
    description: "재료 기반 레시피 검색 앱",
    image: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudHxlbnwxfHx8fDE3NjU5MjkzNDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["React Native", "REST API", "AsyncStorage"],
    github: "#",
    demo: "#",
    fullDescription: "냉장고에 있는 재료로 만들 수 있는 레시피를 찾아주는 실용적인 앱입니다.",
    features: [
      "재료 기반 레시피 검색",
      "영양 정보 표시",
      "즐겨찾기 및 쇼핑 리스트",
      "레시피 단계별 가이드"
    ],
    duration: "1개월",
    team: "개인 프로젝트",
    contribution: "100%"
  },
  {
    title: "Expense Tracker",
    description: "지출 관리 및 통계 앱",
    image: "https://images.unsplash.com/photo-1569693799105-4eb645d89aea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjBwcm9qZWN0fGVufDF8fHx8MTc2NTg3NjExMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Swift", "CoreData", "Charts"],
    github: "#",
    demo: "#",
    fullDescription: "일상 지출을 기록하고 분석하여 합리적인 소비를 돕는 가계부 앱입니다.",
    features: [
      "카테고리별 지출 추적",
      "월별/연별 통계 그래프",
      "예산 설정 및 알림",
      "영수증 사진 저장"
    ],
    duration: "3주",
    team: "개인 프로젝트",
    contribution: "100%"
  },
  {
    title: "Quote Generator",
    description: "매일 새로운 명언을 제공하는 앱",
    image: "https://images.unsplash.com/photo-1581913229425-9c6b993fc107?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXZlbG9wZXIlMjBsYXB0b3B8ZW58MXx8fHwxNzY1OTQ1MjYyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["React Native", "Firebase", "Push Notifications"],
    github: "#",
    demo: "#",
    fullDescription: "매일 아침 새로운 명언으로 하루를 시작하는 동기부여 앱입니다.",
    features: [
      "일일 명언 푸시 알림",
      "명언 북마크 기능",
      "SNS 공유 기능",
      "다양한 카테고리 (동기부여, 성공, 사랑 등)"
    ],
    duration: "2주",
    team: "개인 프로젝트",
    contribution: "100%"
  },
  {
    title: "Music Player",
    description: "커스텀 음악 플레이어 UI",
    image: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudHxlbnwxfHx8fDE3NjU5MjkzNDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Kotlin", "MediaPlayer", "Material Design"],
    github: "#",
    demo: "#",
    fullDescription: "직관적인 제스처와 세련된 UI를 갖춘 음악 플레이어 앱입니다.",
    features: [
      "제스처 기반 컨트롤",
      "플레이리스트 관리",
      "이퀄라이저 지원",
      "슬립 타이머 기능"
    ],
    duration: "1개월",
    team: "개인 프로젝트",
    contribution: "100%"
  }
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