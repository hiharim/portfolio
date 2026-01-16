import { ExternalLink, Github as GithubIcon } from "lucide-react";
import { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ProjectModal } from "./ProjectModal";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

const projects = [
  {
    title: "팝팝",
    description: "기프트카드 거래 및 커머스 앱",
    image: "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzY1ODQ5MjIxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Flutter", "Firebase", "riverpod", "goRouter", "mockito"],
    github: "#",
    demo: "#",
    fullDescription: "사용자들이 기프트카드를 구매하고, 교환하고, 선물할 수 있는 플랫폼",

    problemSolvings: [
      {
        problem: "기존 MVC 패턴에서는 화면과 비즈니스 로직이 강하게 결합되어 있어, 결제 로직 수정 시 UI 코드까지 영향을 받는 문제가 있었습니다.",
        solution: "Riverpod + ViewModel 패턴을 도입하여 UI와 로직을 철저히 분리했습니다. 결제 로직은 별도의 Provider로 관리하여 유지보수성을 높였습니다.",
        conclusion: "이 프로젝트를 통해 상태 관리 패턴의 중요성을 깊이 이해하게 되었습니다."
      },
      {
        problem: "많은 이미지를 로딩하는 리스트 화면에서 스크롤 버벅임(Jank) 현상이 발생하여 사용자 경험을 저하시켰습니다.",
        solution: "리스트 화면에는 cached_network_image와 전용 이미지 리사이징 캐시 서버를 연동하여 스크롤 성능을 60fps로 최적화했습니다.",
        conclusion: "대규모 트래픽 상황에서도 안정적인 결제 시스템을 구축하는 경험을 쌓았습니다."
      },
      {
        problem: "복잡한 상태 관리로 인해 기능 확장이 어려웠습니다.",
        solution: "상태 관리 로직을 모듈화하여 재사용성을 극대화했습니다.",
        conclusion: "리팩토링 후 앱의 크래시율이 0.1% 미만으로 감소하는 성과를 달성했습니다."
      }
    ],
    duration: "2024.10 ~",
    team: "2명 (Flutter 개발자)",
    contribution: "100%",
    rating: "4.8/5.0",
    screenshots: [
      "https://images.unsplash.com/photo-1729860649884-40ec104f9dfd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwZGVsaXZlcnklMjBhcHB8ZW58MXx8fHwxNzY1ODczNDM1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzY1ODQ5MjIxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXltZW50JTIwYXBwfGVufDF8fHx8MTc2NTk1MTIzNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    ],
    architecture: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NjU5NDU1Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    contributions: [
      "Riverpod을 활용한 전역 상태 관리 및 비즈니스 로직 분리",
      "GoRouter를 이용한 딥링크 처리 및 네비게이션 구조 설계",
      "Firebase Cloud Messaging(FCM) 기반 푸시 알림 시스템 구축",
      "복잡한 결제 프로세스 및 외부 결제 모듈 연동"
    ]
  },
  {
    title: "CPASS",
    description: "기존 네이티브 안드로이드 앱을 Flutter로 재개발하여 출시 및 디자인 개편, 채팅, 코인 거래 등 커뮤니티 기능을 추가하여 리뉴얼",
    image: "https://images.unsplash.com/photo-1634403665481-74948d815f03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHBob25lJTIwbW9ja3VwfGVufDF8fHx8MTc2NTg3Mzc4M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Flutter", "riverpod", "dio", "Hive", "Dart"],
    github: "#",
    demo: "#",
    fullDescription: "개인 맞춤형 운동 계획과 건강 데이터 분석을 제공하는 종합 피트니스 앱입니다. Apple Health와 연동하여 일일 활동량, 심박수, 칼로리 소모량 등을 추적합니다.",

    problemSolvings: [
      {
        problem: "기존 네이티브 앱은 유지보수가 어렵고, iOS/Android 각각 개발 인력이 필요하여 비용 효율이 낮았습니다.",
        solution: "Flutter 크로스 플랫폼을 도입하여 하나의 코드베이스로 양대 마켓을 대응하여 개발 생산성을 200% 향상시켰습니다.",
        conclusion: "레거시 코드를 현대적인 크로스 플랫폼 기술로 성공적으로 전환한 사례입니다."
      },
      {
        problem: "실시간 채팅 기능 구현 시 웹소켓 연결 불안정 문제가 빈번히 발생했습니다.",
        solution: "채팅 기능에는 Socket.io와 함께 재연결(Reconnection) 로직과 오프라인 큐잉 시스템을 직접 구현하여 메시지 유실을 방지했습니다.",
        conclusion: "마이그레이션 과정에서 기존 비즈니스 로직을 재분석하며 도메인 지식을 깊게 쌓았습니다."
      },
      {
        problem: "대용량 데이터 처리에 성능 저하 이슈가 있었습니다.",
        solution: "Hive DB를 도입하여 로컬 데이터 캐싱을 최적화했습니다.",
        conclusion: "유지보수 비용을 절감하는 데 크게 기여했습니다."
      }
    ],
    duration: "4개월",
    team: "2명 (Flutter 개발자 2명)",
    contribution: "80%",
    rating: "4.6/5.0",
    screenshots: [
      "https://images.unsplash.com/photo-1748280621226-91f9530fc329?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwd29ya291dCUyMGFwcHxlbnwxfHx8fDE3NjU4NDA3MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1634403665481-74948d815f03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHBob25lJTIwbW9ja3VwfGVufDF8fHx8MTc2NTg3Mzc4M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    ],
    architecture: "https://images.unsplash.com/photo-1544197150-b99a580bbcbf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcHAlMjBkZXZlbG9wbWVudHxlbnwxfHx8fDE3NjU5NDU1Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    contributions: [
      "기존 Android 네이티브 앱을 Flutter로 마이그레이션",
      "WebSocket을 활용한 실시간 채팅 기능 구현",
      "Hive DB를 이용한 로컬 데이터 캐싱 및 오프라인 모드 지원",
      "다국어 지원(i18n) 적용으로 글로벌 서비스 대응"
    ]
  },
  {
    title: "BRK Foundation",
    description: "코인으로 기부 기능과 기부 금액 집계 기능을 제공하는 필리핀 기부 단체 NGO 재단 앱",
    image: "https://images.unsplash.com/photo-1758786977080-a5e60a3f843c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpb3MlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzY1OTQwNDMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Flutter", "riverpod", "Dart", "retrofit"],
    github: "#",
    demo: "#",
    fullDescription: "언제 어디서나 학습할 수 있는 모바일 학습 플랫폼입니다. HD 비디오 강의, 인터랙티브 퀴즈, 진도 추적 기능을 제공합니다.",

    problemSolvings: [
      {
        problem: "수천 개의 기부처 위치 데이터를 지도에 한 번에 표시할 때 렌더링 성능 저하와 메모리 과다 문제가 발생했습니다.",
        solution: "Google Maps Clustering(ClusterManager)을 도입하여 줌 레벨에 따라 마커를 그룹화함으로써 렌더링 부하를 최소화했습니다.",
        conclusion: "기술이 실제 사회적 가치를 창출하는 데 어떻게 기여할 수 있는지 배운 프로젝트입니다."
      },
      {
        problem: "열악한 현지 네트워크 환경으로 인해 데이터 로딩 실패가 잦았습니다.",
        solution: "네트워크 문제 해결을 위해 Retrofit에 Retry Interceptor를 적용하고, 중요한 데이터는 Room DB에 로컬 캐싱하여 오프라인 우선(Offline-First) 아키텍처를 구현했습니다.",
        conclusion: "지리 정보 시스템(GIS)을 모바일 앱에 최적화하여 통합하는 기술적 역량을 확보했습니다."
      },
      {
        problem: "복잡한 기부 프로세스를 단순화해야 했습니다.",
        solution: "사용자 경험(UX)을 고려하여 기부 프로세스를 단계별로 간소화했습니다.",
        conclusion: "오프라인 우선 아키텍처의 중요성을 체감했습니다."
      }
    ],
    duration: "3개월",
    team: "2명 (Flutter 개발자)",
    contribution: "70%",
    rating: "4.7/5.0",
    screenshots: [
      "https://images.unsplash.com/photo-1610484826967-09c5720778c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjBsZWFybmluZ3xlbnwxfHx8fDE3NjU4NDIxMjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1758786977080-a5e60a3f843c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpb3MlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzY1OTQwNDMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    ],
    architecture: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NjU5NDU1Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    contributions: [
      "Retrofit을 이용한 RESTful API 통신 모듈 설계",
      "Google Maps API 연동 및 커스텀 마커 클러스터링 구현",
      "앱 성능 최적화 및 메모리 누수 방지",
      "사용자 경험(UX) 개선을 위한 애니메이션 및 인터랙션 구현"
    ]
  },
  {
    title: "CPASS",
    description: "지갑 생성, 송금, 스왑, QR 결제 등의 전반적인 코인 월렛 기능을 제공하는 블록체인 월렛",
    image: "https://images.unsplash.com/photo-1595675024853-0f3ec9098ac7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcHAlMjBkZXZlbG9wbWVudCUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjU4NjkyNzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Android", "Kotlin", "MVVM", "MPAndroidChart", "Retrofit2", "Coroutine"],
    github: "#",
    demo: "#",
    fullDescription: "AI가 추천하는 맞춤형 여행 일정과 현지 정보를 제공하는 스마트 여행 도우미입니다. 실시간 날씨, 교통편, 숙박 정보를 한곳에서 관리합니다.",

    problemSolvings: [
      {
        problem: "블록체인 트랜잭션 처리는 비동기적이고 실패 가능성이 높아 사용자에게 명확한 피드백을 주기 어려웠습니다.",
        solution: "비동기 트랜잭션 상태를 폴링(Polling)하며 단계별 진행 상황을 UI에 실시간으로 반영하는 상태 머신을 구현했습니다.",
        conclusion: "높은 보안 수준과 신뢰성이 요구되는 핀테크 앱을 처음부터 끝까지 혼자 구축하며 Android 프레임워크에 대한 깊은 이해를 얻었습니다."
      },
      {
        problem: "개인 키와 니모닉 코드를 안전하게 관리해야 하는 보안 요구사항이 매우 까다로웠습니다.",
        solution: "보안을 위해 Android Keystore System을 활용하여 중요 데이터를 암호화 저장하고, 루팅 탐지 및 화면 캡처 방지 기능을 적용했습니다.",
        conclusion: "출시 후 사용자 피드백을 반영하며 앱을 고도화하는 과정에서 큰 보람을 느꼈습니다."
      },
      {
        problem: "복잡한 암호화 로직 처리로 인한 성능 저하가 우려되었습니다.",
        solution: "백그라운드 스레드에서 암호화 작업을 처리하여 UI 응답성을 유지했습니다.",
        conclusion: "보안 코딩의 중요성을 깊이 인식하게 되었습니다."
      }
    ],
    duration: "7개월",
    team: "1명 (Android 개발자)",
    contribution: "100%",
    rating: "4.5/5.0",
    screenshots: [
      "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBwbGFubmluZ3xlbnwxfHx8fDE3NjU5NDU1Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1595675024853-0f3ec9098ac7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcHAlMjBkZXZlbG9wbWVudCUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjU4NjkyNzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    ],
    architecture: "https://images.unsplash.com/photo-1544197150-b99a580bbcbf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcHAlMjBkZXZlbG9wbWVudHxlbnwxfHx8fDE3NjU5NDU1Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    contributions: [
      "MVVM 아키텍처 패턴 도입으로 유지보수성 향상",
      "Coroutine을 활용한 비동기 작업 처리 및 UI 스레드 최적화",
      "블록체인 지갑 생성 및 트랜잭션 처리 로직 구현",
      "생체 인증(지문, FaceID) 로그인 연동"
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
                    <GithubIcon className="mr-1 h-3 w-3" />
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