import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink, Github } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ProjectModal } from "./ProjectModal";
import { useState } from "react";

const projects = [
  {
    title: "FoodDelivery App",
    description: "실시간 주문 추적과 결제 시스템을 갖춘 음식 배달 앱입니다. 사용자 친화적인 UI/UX로 높은 평점을 받았습니다.",
    image: "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzY1ODQ5MjIxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["React Native", "Firebase", "Stripe", "Google Maps API", "Redux"],
    github: "#",
    demo: "#",
    fullDescription: "음식 주문부터 배달까지 전 과정을 원활하게 관리하는 종합 배달 플랫폼입니다. 실시간 위치 추적, 다양한 결제 옵션, 사용자 리뷰 시스템을 통해 최상의 사용자 경험을 제공합니다.",
    features: [
      "실시간 주문 추적 및 GPS 기반 배달원 위치 확인",
      "Stripe를 이용한 안전한 결제 시스템",
      "레스토랑 검색 및 필터링 기능",
      "주문 히스토리 및 즐겨찾기 관리",
      "푸시 알림을 통한 주문 상태 업데이트"
    ],
    challenges: "실시간 위치 추적과 동시 다발적인 주문 처리에서 성능 최적화가 필요했습니다.",
    solution: "Redux를 활용한 상태 관리와 Firebase의 실시간 데이터베이스를 결합하여 효율적인 데이터 동기화를 구현했습니다.",
    duration: "6개월",
    team: "5명 (iOS/Android 개발자)",
    rating: "4.8/5.0",
    screenshots: [
      "https://images.unsplash.com/photo-1729860649884-40ec104f9dfd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwZGVsaXZlcnklMjBhcHB8ZW58MXx8fHwxNzY1ODczNDM1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzY1ODQ5MjIxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    ]
  },
  {
    title: "Fitness Tracker",
    description: "운동 루틴 관리와 건강 데이터 분석 기능을 제공하는 피트니스 앱입니다. 월 활성 사용자 10만명 달성.",
    image: "https://images.unsplash.com/photo-1634403665481-74948d815f03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHBob25lJTIwbW9ja3VwfGVufDF8fHx8MTc2NTg3Mzc4M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Flutter", "HealthKit", "Charts", "SQLite", "Dart"],
    github: "#",
    demo: "#",
    fullDescription: "개인 맞춤형 운동 계획과 건강 데이터 분석을 제공하는 종합 피트니스 앱입니다. Apple Health와 연동하여 일일 활동량, 심박수, 칼로리 소모량 등을 추적합니다.",
    features: [
      "커스텀 운동 루틴 생성 및 관리",
      "HealthKit 연동으로 자동 데이터 수집",
      "주간/월간 운동 통계 및 그래프",
      "운동 영상 가이드 제공",
      "목표 설정 및 달성 알림"
    ],
    challenges: "다양한 헬스 데이터를 효율적으로 시각화하고 오프라인에서도 작동하도록 만드는 것이 과제였습니다.",
    solution: "SQLite로 로컬 캐싱을 구현하고, Recharts를 활용하여 직관적인 데이터 시각화를 제공했습니다.",
    duration: "4개월",
    team: "3명 (개발자 2명, 디자이너 1명)",
    rating: "4.6/5.0",
    screenshots: [
      "https://images.unsplash.com/photo-1748280621226-91f9530fc329?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwd29ya291dCUyMGFwcHxlbnwxfHx8fDE3NjU4NDA3MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1634403665481-74948d815f03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHBob25lJTIwbW9ja3VwfGVufDF8fHx8MTc2NTg3Mzc4M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    ]
  },
  {
    title: "E-Learning Platform",
    description: "비디오 강의와 퀴즈 기능을 갖춘 온라인 학습 플랫폼입니다. 오프라인 다운로드 지원.",
    image: "https://images.unsplash.com/photo-1758786977080-a5e60a3f843c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpb3MlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzY1OTQwNDMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["React Native", "Video.js", "Redux", "Node.js", "MongoDB"],
    github: "#",
    demo: "#",
    fullDescription: "언제 어디서나 학습할 수 있는 모바일 학습 플랫폼입니다. HD 비디오 강의, 인터랙티브 퀴즈, 진도 추적 기능을 제공합니다.",
    features: [
      "HD 비디오 스트리밍 및 오프라인 다운로드",
      "코스별 진도 추적 및 수료증 발급",
      "인터랙티브 퀴즈 및 과제 제출",
      "강사와의 Q&A 채팅 기능",
      "북마크 및 노트 작성 기능"
    ],
    challenges: "대용량 비디오 스트리밍의 성능 최적화와 오프라인 모드 구현이 필요했습니다.",
    solution: "적응형 비트레이트 스트리밍을 구현하고, 암호화된 로컬 스토리지로 오프라인 콘텐츠를 안전하게 관리했습니다.",
    duration: "8개월",
    team: "7명 (풀스택 개발팀)",
    rating: "4.7/5.0",
    screenshots: [
      "https://images.unsplash.com/photo-1610484826967-09c5720778c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjBsZWFybmluZ3xlbnwxfHx8fDE3NjU4NDIxMjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1758786977080-a5e60a3f843c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpb3MlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzY1OTQwNDMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    ]
  },
  {
    title: "Travel Planner",
    description: "AI 기반 여행 추천과 일정 관리 기능을 제공하는 여행 계획 앱입니다.",
    image: "https://images.unsplash.com/photo-1595675024853-0f3ec9098ac7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcHAlMjBkZXZlbG9wbWVudCUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjU4NjkyNzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Swift", "CoreML", "MapKit", "SwiftUI", "CoreData"],
    github: "#",
    demo: "#",
    fullDescription: "AI가 추천하는 맞춤형 여행 일정과 현지 정보를 제공하는 스마트 여행 도우미입니다. 실시간 날씨, 교통편, 숙박 정보를 한곳에서 관리합니다.",
    features: [
      "AI 기반 여행지 및 코스 추천",
      "MapKit을 활용한 경로 최적화",
      "실시간 날씨 및 교통 정보 통합",
      "예산 관리 및 환율 계산기",
      "여행 사진 자동 정리 및 공유"
    ],
    challenges: "복잡한 여행 데이터를 직관적으로 보여주고, ML 모델을 모바일에서 효율적으로 실행하는 것이 과제였습니다.",
    solution: "CoreML로 경량화된 추천 모델을 구현하고, SwiftUI로 인터랙티브한 UI를 설계했습니다.",
    duration: "5개월",
    team: "4명 (iOS 개발자 2명, ML 엔지니어 1명)",
    rating: "4.5/5.0",
    screenshots: [
      "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBwbGFubmluZ3xlbnwxfHx8fDE3NjU5NDU1Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1595675024853-0f3ec9098ac7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcHAlMjBkZXZlbG9wbWVudCUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjU4NjkyNzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    ]
  }
];

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <section className="container mx-auto px-4 py-16 max-w-6xl">
      <div className="text-center mb-12">
        <h2 className="mb-4">프로젝트</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          다양한 도메인에서 사용자 경험을 개선하고 비즈니스 가치를 창출한 프로젝트들입니다.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {projects.map((project) => (
          <Card 
            key={project.title} 
            className="overflow-hidden flex flex-col cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => handleProjectClick(project)}
          >
            <div className="aspect-[4/3] overflow-hidden bg-muted">
              <ImageWithFallback
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                query="mobile app"
              />
            </div>
            <CardHeader className="p-4 pb-3">
              <CardTitle className="text-base">{project.title}</CardTitle>
              <CardDescription className="text-sm line-clamp-2">{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="p-4 pt-0 mt-auto">
              <div className="flex flex-wrap gap-1.5 mb-3">
                {project.tags.slice(0, 3).map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
              <div className="flex gap-2">
                <Button 
                  size="sm" 
                  variant="default" 
                  className="flex-1"
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
                  variant="outline" 
                  className="flex-1"
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