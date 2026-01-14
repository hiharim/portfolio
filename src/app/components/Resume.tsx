import { ArrowRight, Building2, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

const experiences = [
    {
        company: "(주)비단팝팝",
        position: "Flutter Developer",
        period: "2024.10 - Present",
        location: "Seoul, South Korea",
        type: "Full-time",
        description: "핀테크 모바일 앱 개발 리딩 및 아키텍처 설계",
        achievements: [
            "Riverpod/MVVM 패턴 도입으로 코드 유지보수성 40% 향상",
            "결제 프로세스 최적화로 결제 성공률 15% 증가",
            "신입 개발자 온보딩 및 코드 리뷰 프로세스 구축"
        ],
        skills: ["Flutter", "Dart", "Firebase", "CI/CD"]
    },
    {
        company: "주식회사 콰가(quaggainc.)",
        position: "Android Developer & Flutter Developer",
        period: "2022.03 - 2023.06",
        location: "Seoul, South Korea",
        type: "Full-time",
        description: "초기 멤버로서 서비스 출시부터 운영까지 전과정 참여",
        achievements: [
            "Google Play Store 평점 4.8 달성",
            "실시간 채팅 기능 구현 및 안정화",
            "레거시 Java 코드 100% Kotlin 마이그레이션"
        ],
        skills: ["Android", "Kotlin", "Flutter", "Dart", "Socket.io"]
    }
];


export function Resume() {
    return (
        <section className="container mx-auto px-4 py-16 max-w-6xl">
            <div className="text-center mb-12">
                <h2 className="mb-4">Work Experience</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    6+ years of specialized mobile development experience building scalable applications.
                </p>
            </div>

            <div className="space-y-8 mb-12">
                {experiences.map((exp, index) => (
                    <Card key={index} className="border-none shadow-sm bg-card hover:bg-accent/5 transition-colors">
                        <CardContent className="p-8">
                            <div className="flex flex-col md:flex-row gap-8">
                                {/* Left Column: Metadata */}
                                <div className="md:w-[240px] flex-shrink-0 space-y-3">
                                    <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary/10 text-primary hover:bg-primary/20">
                                        {exp.period.includes("Present") ? "Current" : exp.period.split(" - ")[0]}
                                    </div>
                                    <div className="font-semibold text-lg">{exp.period}</div>
                                    <div className="flex items-center text-muted-foreground text-sm gap-2">
                                        <Building2 className="w-4 h-4" />
                                        <span>{exp.company}</span>
                                    </div>
                                </div>

                                {/* Right Column: Content */}
                                <div className="flex-1 space-y-4">
                                    <div>
                                        <h3 className="text-2xl font-bold text-foreground mb-1">{exp.position}</h3>
                                        <div className="flex items-center text-sm text-muted-foreground gap-2">
                                            <MapPin className="w-3.5 h-3.5" />
                                            <span>{exp.location}</span>
                                            <span>•</span>
                                            <span>{exp.type}</span>
                                        </div>
                                    </div>

                                    <ul className="space-y-3 list-disc pl-4 marker:text-muted-foreground">
                                        {exp.achievements.map((achievement, i) => (
                                            <li key={i} className="text-muted-foreground leading-relaxed pl-1">
                                                {achievement}
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="flex flex-wrap gap-2 pt-2">
                                        {exp.skills.map((skill) => (
                                            <Badge key={skill} variant="secondary" className="px-2.5 py-0.5 text-xs font-normal bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground transition-colors">
                                                {skill}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <div className="flex justify-center">
                <Button size="lg" asChild className="group">
                    <Link to="/career">
                        View Full Career Profile
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                </Button>
            </div>
        </section>
    );
}
