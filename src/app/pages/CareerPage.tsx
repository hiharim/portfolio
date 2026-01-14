import { ArrowLeft, Download } from "lucide-react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { useReactToPrint } from "react-to-print";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Button } from "../components/ui/button";

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
                        <h1 className="text-3xl font-bold mb-2">조하림 (Harim Cho)</h1>
                        <p className="text-xl text-muted-foreground mb-4">Mobile App Developer</p>
                        <div className="flex gap-4 text-sm text-muted-foreground">
                            <span>📧 hastein96@gmail.com</span>
                            <span>📍 Seoul, Korea</span>
                        </div>
                    </div>

                    {/* Work Experience */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold mb-6 border-b pb-2">Work Experience</h2>
                        <div className="space-y-8">
                            <div>
                                <div className="flex justify-between items-baseline mb-2">
                                    <h3 className="text-lg font-bold">Company Name</h3>
                                    <span className="text-sm text-muted-foreground">2023.01 - Present</span>
                                </div>
                                <p className="text-muted-foreground font-medium mb-2">Senior Flutter Developer</p>
                                <ul className="list-disc list-outside ml-5 text-muted-foreground space-y-1">
                                    <li>Led the migration of the legacy Android app to Flutter, reducing codebase size by 40%.</li>
                                    <li>Implemented CI/CD pipelines using GitHub Actions, cutting deployment time by 50%.</li>
                                    <li>Mentored 2 junior developers and conducted code reviews.</li>
                                </ul>
                            </div>
                        </div>
                    </section>

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
                    <section className="mb-12">
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

                    {/* Education */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold mb-6 border-b pb-2">Education</h2>
                        <div className="space-y-4">
                            <div>
                                <div className="flex justify-between items-baseline mb-1">
                                    <h3 className="text-lg font-bold">University Name</h3>
                                    <span className="text-sm text-muted-foreground">2016.03 - 2022.02</span>
                                </div>
                                <p className="text-muted-foreground">Bachelor of Computer Science</p>
                            </div>
                        </div>
                    </section>

                    {/* Certifications */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold mb-6 border-b pb-2">Certifications</h2>
                        <ul className="space-y-2">
                            <li className="flex justify-between items-baseline">
                                <span className="font-medium">Information Processing Engineer (정보처리기사)</span>
                                <span className="text-sm text-muted-foreground">2022.06</span>
                            </li>
                            <li className="flex justify-between items-baseline">
                                <span className="font-medium">SQLD (SQL Developer)</span>
                                <span className="text-sm text-muted-foreground">2021.09</span>
                            </li>
                        </ul>
                    </section>

                    {/* Language Scores */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold mb-6 border-b pb-2">Languages</h2>
                        <ul className="space-y-2">
                            <li className="flex justify-between items-baseline">
                                <span className="font-medium">OPIc</span>
                                <span className="text-sm text-muted-foreground">IM2 (2023.05)</span>
                            </li>
                            <li className="flex justify-between items-baseline">
                                <span className="font-medium">TOEIC</span>
                                <span className="text-sm text-muted-foreground">850 (2022.12)</span>
                            </li>
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    );
}
