import { ArrowLeft, Download } from "lucide-react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { useReactToPrint } from "react-to-print";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Button } from "../components/ui/button";
import { Separator } from "../components/ui/separator";

export function CareerPage() {
    const contentRef = useRef<HTMLDivElement>(null);

    const handlePrint = useReactToPrint({
        contentRef,
        documentTitle: "Career_Profile",
    });

    return (
        <div className="min-h-screen bg-muted/20 pb-20">
            {/* Top Navigation Bar */}
            <div className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b p-4">
                <div className="container mx-auto max-w-4xl flex justify-between items-center">
                    <Button variant="ghost" asChild>
                        <Link to="/">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back to Portfolio
                        </Link>
                    </Button>
                    <Button onClick={() => handlePrint()}>
                        <Download className="mr-2 h-4 w-4" />
                        Download PDF
                    </Button>
                </div>
            </div>

            {/* Printable Content Area */}
            <div className="container mx-auto max-w-[210mm] mt-8">
                <div
                    ref={contentRef}
                    className="bg-white p-[15mm] shadow-sm min-h-[297mm]"
                    style={{ margin: "0 auto" }}
                >
                    {/* Header / Profile */}
                    <div className="flex flex-col items-center mb-12 text-center">
                        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-muted mb-6 bg-muted">
                            {/* Placeholder for Photo - User can replace src */}
                            <ImageWithFallback
                                src="" // User can add their photo URL here
                                alt="Profile Photo"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <h1 className="text-3xl font-bold mb-2">하림 (Harim)</h1>
                        <p className="text-muted-foreground text-lg">Senior Mobile Developer</p>
                    </div>

                    <Separator className="my-8" />

                    {/* Motivation */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold mb-4 border-b pb-2">지원동기</h2>
                        <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                            저는 기술을 통해 사용자에게 더 나은 가치를 전달하는 데 깊은 열정을 가지고 있습니다.
                            끊임없이 변화하는 모바일 생태계에서 사용자 경험을 최적화하고, 안정적인 서비스를 구축하는 것에 보람을 느낍니다.
                            귀사의 혁신적인 비전과 함께 성장하며, 제 기술적 역량을 발휘하여 서비스의 성공에 기여하고자 지원하게 되었습니다.
                        </p>
                    </section>

                    {/* Self Introduction */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold mb-4 border-b pb-2">자기소개</h2>
                        <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                            6년 차 모바일 개발자로서 Flutter와 Native Android 개발에 전문성을 보유하고 있습니다.
                            스타트업부터 성장하는 조직까지 다양한 환경에서 주도적으로 프로젝트를 이끌었으며,
                            특히 코드 품질 향상과 개발 생산성 증대를 위한 아키텍처 설계에 강점이 있습니다.
                            팀원들과의 원활한 소통을 중요시하며, 함께 성장하는 문화를 만드는 데 기여하고 싶습니다.
                        </p>
                    </section>

                    {/* Projects */}
                    <section>
                        <h2 className="text-2xl font-bold mb-6 border-b pb-2">주요 프로젝트</h2>

                        {/* Project 1 */}
                        <div className="mb-8 break-inside-avoid">
                            <h3 className="text-xl font-bold mb-2">1. 팝팝 (PopPop) - 기프트카드 거래 플랫폼</h3>
                            <p className="text-sm text-muted-foreground mb-3">2024.10 ~ (Flutter)</p>
                            <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                                <li>Riverpod 상태 관리 도입으로 복잡한 결제 로직을 비즈니스 로직과 UI로 완벽히 분리 및 모듈화</li>
                                <li>이미지 캐싱 및 리사이징 서버 도입으로 리스트 스크롤 성능 60fps 유지 및 최적화</li>
                                <li>Toss Payments 연동 및 결제 검증 로직 구현으로 안정적인 결제 시스템 구축</li>
                            </ul>
                        </div>

                        {/* Project 2 */}
                        <div className="mb-8 break-inside-avoid">
                            <h3 className="text-xl font-bold mb-2">2. CPASS - 종합 피트니스 & 월렛 앱</h3>
                            <p className="text-sm text-muted-foreground mb-3">2023.01 ~ 2024.09 (Flutter / Android)</p>
                            <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                                <li>기존 네이티브 앱을 Flutter로 마이그레이션하여 개발 생산성 200% 향상</li>
                                <li>Socket.io 기반 실시간 채팅 시스템 구축 및 오프라인 메시지 큐잉 구현으로 데이터 유실 방지</li>
                                <li>다국어 지원(i18n) 시스템 구축으로 글로벌 서비스 확장 기반 마련</li>
                            </ul>
                        </div>

                        {/* Project 3 */}
                        <div className="break-inside-avoid">
                            <h3 className="text-xl font-bold mb-2">3. BRK Foundation - 기부 플랫폼</h3>
                            <p className="text-sm text-muted-foreground mb-3">2022.05 ~ 2022.08 (Flutter)</p>
                            <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                                <li>Google Maps Clustering 적용으로 수천 개의 마커 렌더링 성능 최적화</li>
                                <li>Offline-first 아키텍처 도입으로 네트워크 불안정 환경에서도 앱 사용성 보장</li>
                                <li>Retrofit 및 Dio 인터셉터를 활용한 견고한 에러 핸들링 및 재시도 로직 구현</li>
                            </ul>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
