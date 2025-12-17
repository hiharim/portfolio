import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink, Github as GithubIcon } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ProjectModal } from "./ProjectModal";
import { useState } from "react";

const projects = [
  {
    title: "팝팝",
    description: "기프트카드 거래 및 커머스 앱",
    image: "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzY1ODQ5MjIxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Flutter", "Firebase", "riverpod", "goRouter", "mockito"],
    github: "#",
    demo: "#",
    fullDescription: "사용자들이 기프트카드를 구매하고, 교환하고, 선물할 수 있는 플랫폼",
    features: [
     " Provider → Riverpod + ViewModel 전환으로 화면·로직 결합도 낮추고, 결제 화면에 부분 리렌더를 적용해 쿠폰·포인트 변경 시 전체 리빌드 제거",
"Riverpod Family 기반 커스텀 페이징 레이어(키 캐시·프리패치·디바운스)로 리스트/페이징 로딩 속도 평균 3–6배, 초기 진입 최대 10배 성능 개선",
"상품·계정 검색 API 호출에 디바운스를 적용해 불필요한 네트워크 트래픽을 줄이고 검색 응답 성능 및 서버 부하를 최적화",
"Toss Payments 연동 시 merchant_uid 고유 관리·웹훅 서명 검증·주문 상태 동기화로 중복 결제 방지 및 환불/취소 플로우 안정화",
"선물하기,교환,쿠폰 적용,구매 확정,바코드 확인,결제 취소,환불,결제 내역 관리,팔로우·리뷰 작성,문의,공지사항 등 주요 플로우 전반 구현",
"Flutter Method Channel 기반 연락처 선택, 권한 획득 네이티브 기능(iOS/Android) 연동",
"Sentry 도입 및 크래시 모니터링 체계 구축으로 로컬 재현 불가 이슈 추적 및 장애 대응 시간 단축",
"Mockito 기반 Mock Repository 환경을 구축해 네트워크 의존성을 제거하고 단위 테스트를 통해 회귀 버그를 사전에 방지"
    ],
    challenges: "",
    solution: "",
    duration: "2024.10 ~",
    team: "2명 (Flutter 개발자)",
    rating: "4.8/5.0",
    screenshots: [
      "https://images.unsplash.com/photo-1729860649884-40ec104f9dfd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwZGVsaXZlcnklMjBhcHB8ZW58MXx8fHwxNzY1ODczNDM1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzY1ODQ5MjIxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
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
    features: [
       "Next Pay 결제 시스템을 연동하여 코인 충전 기능 구현",
"Riverpod 패턴을 사용하여 상태관리 개선",
"KYC(Know Your Customer) 인증 기능 구현으로 사용자 신원 확인 및 보안 강화",
"FCM(Firebase Cloud Messaging)을 이용한 푸시 알림 기능 구현",
"Mock 데이터를 활용하여 신규 사용자를 위한 웰컴 스크린, 튜토리얼, 툴팁 등으로 구성된 온보딩 프로세스를 설계 및 구현하여 앱의 주요 기능과 사용 방법을 안내",
"사용자 잔액 및 코인 시세를 도넛차트와 라인차트로 구현하여 데이터 시각화",
"CustomPainter를 사용해 채팅 말풍선 UI 개선",
"한국어, 영어, 중국어, 일본어 등 다국어 지원 Localization 기능과 달러, 원화, 엔화, 페소 등 다양한 통화 지원 기능을 적용"
    ],
    challenges: "",
    solution: "",
    duration: "4개월",
    team: "2명 (Flutter 개발자 2명)",
    rating: "4.6/5.0",
    screenshots: [
      "https://images.unsplash.com/photo-1748280621226-91f9530fc329?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwd29ya291dCUyMGFwcHxlbnwxfHx8fDE3NjU4NDA3MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1634403665481-74948d815f03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHBob25lJTIwbW9ja3VwfGVufDF8fHx8MTc2NTg3Mzc4M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
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
    features: [
     "기부한 지역을 표시하기 위해 Google Maps API 통합 하여 커스텀 마커와 클러스터링 기능을 포함한 사용자 위치 기반 서비스 제공",
"서버에서 동적으로 가져온 HTML 콘텐츠를 WebView를 사용해 동적 높이 조정과 함께 자연스럽게 렌더링하여 앱 UI에 표시하는 기능 구현",
"Firebase Dynamic Link를 통한 앱 실행 및 특정 페이지 이동 구현",
"버튼, 스낵바, 바텀 시트, 텍스트 입력 필드, 스위치 버튼, 다이얼로그 등의 위젯을 컴포넌트화하여 재사용성 및 개발 효율성 향상"
    ],
    challenges: "",
    solution: "",
    duration: "3개월",
    team: "2명 (Flutter 개발자)",
    rating: "4.7/5.0",
    screenshots: [
      "https://images.unsplash.com/photo-1610484826967-09c5720778c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjBsZWFybmluZ3xlbnwxfHx8fDE3NjU4NDIxMjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1758786977080-a5e60a3f843c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpb3MlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzY1OTQwNDMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
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
    features: [
    " 다양한 코인 결제 프로세스(송금, 스왑, 충전, 출금, 안전 거래, QR결제)를 위한 RESTful API를 클라이언트 앱에 통합",
"이메일, 핀 번호, 생체 인증, 구글, 애플을 통한 다양한 로그인 방식 지원으로 회원가입 및 로그인 기능 구현",
"JWT 토큰을 활용하여 중복 로그인 방지 기능 구현",
"MVVM 아키텍처를 사용하여 코드의 재사용성과 유지 보수성 향상",
"성과 : 신규 블록체인 월렛 서비스 구축 및 플레이 스토어 출시"
    ],
    challenges: "",
    solution: "",
    duration: "7개월",
    team: "1명 (Android 개발자)",
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