import { Blocks, Code2, Rocket, Smartphone, Wrench } from "lucide-react";
import { type ReactNode } from "react";

interface SkillCategory {
  title: string;
  subtitle: string;
  icon: ReactNode;
  gradient: string;
  iconColor: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Mobile Frameworks",
    subtitle: "크로스 플랫폼 모바일 앱 개발",
    icon: <Smartphone className="w-6 h-6" />,
    gradient: "from-[#027DFD]/18 to-[#54C5F8]/12",
    iconColor: "text-[#027DFD] bg-[#027DFD]/15",
    skills: ["Flutter", "Android (Kotlin)", "Jetpack Compose"],
  },
  {
    title: "Languages",
    subtitle: "주력 프로그래밍 언어",
    icon: <Code2 className="w-6 h-6" />,
    gradient: "from-[#027DFD]/14 to-[#54C5F8]/8",
    iconColor: "text-[#0288D1] bg-[#0288D1]/12",
    skills: ["Dart", "Kotlin", "Java", "TypeScript"],
  },
  {
    title: "State & Architecture",
    subtitle: "상태관리와 아키텍처 패턴",
    icon: <Blocks className="w-6 h-6" />,
    gradient: "from-[#027DFD]/10 to-[#54C5F8]/6",
    iconColor: "text-[#039BE5] bg-[#039BE5]/10",
    skills: ["Riverpod", "Provider", "MVVM", "Clean Architecture"],
  },
  {
    title: "DevOps & Tools",
    subtitle: "개발 도구 및 배포 환경",
    icon: <Wrench className="w-6 h-6" />,
    gradient: "from-[#027DFD]/4 to-[#54C5F8]/2",
    iconColor: "text-[#4FC3F7] bg-[#4FC3F7]/8",
    skills: ["Git", "CI/CD", "Sentry", "Figma", "App Store Deploy"],
  },
];

export function Skills() {
  return (
    <section className="container mx-auto px-4 py-16 max-w-6xl">
      <div className="mb-10">
        <p className="text-sm font-semibold text-primary/80 uppercase tracking-widest mb-2">
          Expertise
        </p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          기술 스택
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {skillCategories.map((category) => (
          <div
            key={category.title}
            className={`group relative bg-gradient-to-br ${category.gradient} rounded-2xl p-6 border border-border/50 hover:border-border transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}
          >
            <div className="flex items-start gap-4 mb-5">
              <div
                className={`flex items-center justify-center w-11 h-11 rounded-xl ${category.iconColor} transition-transform duration-300 group-hover:scale-110`}
              >
                {category.icon}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-base font-bold text-foreground leading-tight">
                  {category.title}
                </h3>
                <p className="text-xs text-muted-foreground mt-0.5">
                  {category.subtitle}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 text-sm font-medium rounded-lg bg-background/60 text-foreground/80 border border-border/40"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
