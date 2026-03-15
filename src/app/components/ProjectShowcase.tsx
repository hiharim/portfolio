import { motion } from "motion/react";
import { Pause, Play } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ProjectModal } from "./ProjectModal";


// Gradient overlays for the project cards (App Store style)
const cardGradients = [
  "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
  "linear-gradient(135deg, #0d1b2a 0%, #1b263b 50%, #415a77 100%)",
  "linear-gradient(135deg, #2d1b69 0%, #11998e 100%)",
  "linear-gradient(135deg, #1f1c2c 0%, #928dab 100%)",
  "linear-gradient(135deg, #0c0c1d 0%, #1a1a40 50%, #4e4376 100%)",
];

// Top label colors for each card
const labelColors = [
  "#60a5fa",
  "#34d399",
  "#a78bfa",
  "#f472b6",
  "#fbbf24",
];

interface ShowcaseProject {
  id: string;
  title: string;
  description: string;
  fullDescription?: string;
  image: string;
  tags: string[];
  github: string;
  demo: string;
  duration?: string;
  team?: string;
  contribution?: string;
  rating?: string;
  screenshots?: string[];
  architecture?: string;
  contributions?: string[];
  problemSolvings?: {
    problem: string;
    solution: string;
    conclusion: string;
  }[];
  period?: string;
}

const CARD_WIDTH = 380;
const CARD_GAP = 24;
const SCROLL_SPEED = 60; // pixels per second (normal)
const SLOW_SPEED = 8; // pixels per second (hover)

export function ProjectShowcase() {
  const { t } = useTranslation();
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const trackRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const positionRef = useRef(0);
  const lastTimeRef = useRef<number | null>(null);

  // i18n에서 프로젝트 데이터 가져오기
  const projectsData = t("projects", { returnObjects: true }) as Record<
    string,
    any
  >;
  const sideProjectsData = t("sideProjects", {
    returnObjects: true,
  }) as Array<any>;

  // 모든 프로젝트 합치기 - showcaseDescription 제외
  const allProjects: ShowcaseProject[] = [
    ...Object.entries(projectsData)
      .filter(([id]) => id !== "showcaseDescription")
      .map(([id, project]) => ({
        ...project,
        id,
        image: `${import.meta.env.BASE_URL}${project.image}`,
        screenshots: project.screenshots?.map(
          (s: string) => `${import.meta.env.BASE_URL}${s}`
        ),
        architecture: project.architecture
          ? `${import.meta.env.BASE_URL}${project.architecture}`
          : undefined,
      })),
    ...sideProjectsData.map((project) => ({
      ...project,
      image: `${import.meta.env.BASE_URL}${project.image}`,
      screenshots: project.screenshots?.map(
        (s: string) => `${import.meta.env.BASE_URL}${s}`
      ),
      architecture: project.architecture
        ? `${import.meta.env.BASE_URL}${project.architecture}`
        : undefined,
    })),
  ];

  // Duplicate items for infinite scroll
  const displayProjects = [...allProjects, ...allProjects, ...allProjects];
  const singleSetWidth = allProjects.length * (CARD_WIDTH + CARD_GAP);

  const animate = useCallback(
    (timestamp: number) => {
      if (!lastTimeRef.current) {
        lastTimeRef.current = timestamp;
      }

      const delta = timestamp - lastTimeRef.current;
      lastTimeRef.current = timestamp;

      if (isPlaying) {
        const currentSpeed = isHovered ? SLOW_SPEED : SCROLL_SPEED;
        positionRef.current += (currentSpeed * delta) / 1000;

        // Reset position when we've scrolled past one full set
        if (positionRef.current >= singleSetWidth) {
          positionRef.current -= singleSetWidth;
        }

        if (trackRef.current) {
          trackRef.current.style.transform = `translateX(-${positionRef.current}px)`;
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    },
    [isPlaying, isHovered, singleSetWidth]
  );

  useEffect(() => {
    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [animate]);

  const handleProjectClick = (project: ShowcaseProject) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    lastTimeRef.current = null;
  };

  return (
    <section className="relative py-24 overflow-hidden" id="project-showcase">
      {/* Section Header */}
      <div className="container mx-auto px-4 max-w-6xl mb-16">
        <div className="flex flex-col items-center text-center">
          <div className="px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest mb-4">
            Curated Works
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            {t("nav.projects")}
          </h2>
          <p className="text-muted-foreground text-base max-w-lg">
            {t("projects.showcaseDescription")}
          </p>
        </div>
      </div>

      {/* Carousel Container */}
      <div
        className="relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Left fade overlay */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 z-10 pointer-events-none bg-gradient-to-r from-background to-transparent" />
        {/* Right fade overlay */}
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 z-10 pointer-events-none bg-gradient-to-l from-background to-transparent" />

        {/* Scrolling Track */}
        <div
          ref={trackRef}
          className="flex will-change-transform"
          style={{
            gap: `${CARD_GAP}px`,
            paddingLeft: "48px",
          }}
        >
          {displayProjects.map((project, index) => {
            const colorIndex = index % allProjects.length;
            return (
              <motion.div
                key={`${project.id}-${index}`}
                className="flex-shrink-0 cursor-pointer group"
                style={{
                  width: `${CARD_WIDTH}px`,
                }}
                whileHover={{ scale: 1.03, y: -8 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
                onClick={() => handleProjectClick(project)}
              >
                {/* App Store Style Card */}
                <div
                  className="relative rounded-2xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-shadow duration-500"
                  style={{
                    background: cardGradients[colorIndex % cardGradients.length],
                    height: "460px",
                  }}
                >
                  {/* Top text overlay gradient for readability */}
                  <div
                    className="absolute top-0 left-0 right-0 h-[50%] z-[5] pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)",
                    }}
                  />

                  {/* Top Label */}
                  <div className="absolute top-0 left-0 right-0 p-5 z-10">
                    <p
                      className="text-xs font-bold uppercase tracking-widest mb-1"
                      style={{
                        color:
                          labelColors[colorIndex % labelColors.length],
                      }}
                    >
                      {project.period || project.duration || "Project"}
                    </p>
                    <h3 className="text-xl font-bold text-white leading-tight drop-shadow-md">
                      {project.title}
                    </h3>
                    <p className="text-sm text-white/80 mt-1 line-clamp-2 drop-shadow-sm">
                      {project.description}
                    </p>
                  </div>

                  {/* Project Image / Screenshot Area */}
                  <div className="absolute bottom-0 left-0 right-0 h-[58%] flex items-end justify-center overflow-hidden">
                    {/* Gradient overlay for blending */}
                    <div
                      className="absolute inset-0 z-10"
                      style={{
                        background:
                          "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.1) 100%)",
                      }}
                    />

                    {/* Screenshots spread */}
                    {project.screenshots && project.screenshots.length > 0 ? (
                      <div className="relative w-full h-full flex items-end justify-center">
                        {/* Center screenshot */}
                        <div
                          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[55%] rounded-t-xl overflow-hidden shadow-2xl z-20 transition-transform duration-700 group-hover:translate-y-[-4px]"
                          style={{
                            maxHeight: "85%",
                          }}
                        >
                          <ImageWithFallback
                            src={project.screenshots[0]}
                            alt={project.title}
                            className="w-full h-full object-cover object-top"
                          />
                        </div>
                        {/* Left screenshot */}
                        {project.screenshots.length > 1 && (
                          <div
                            className="absolute bottom-0 left-[5%] w-[45%] rounded-t-xl overflow-hidden shadow-xl z-10 opacity-60 transition-all duration-700 group-hover:opacity-80 group-hover:translate-y-[-2px]"
                            style={{
                              maxHeight: "70%",
                              transform: "rotate(-5deg)",
                            }}
                          >
                            <ImageWithFallback
                              src={project.screenshots[1]}
                              alt={project.title}
                              className="w-full h-full object-cover object-top"
                            />
                          </div>
                        )}
                        {/* Right screenshot */}
                        {project.screenshots.length > 2 && (
                          <div
                            className="absolute bottom-0 right-[5%] w-[45%] rounded-t-xl overflow-hidden shadow-xl z-10 opacity-60 transition-all duration-700 group-hover:opacity-80 group-hover:translate-y-[-2px]"
                            style={{
                              maxHeight: "70%",
                              transform: "rotate(5deg)",
                            }}
                          >
                            <ImageWithFallback
                              src={project.screenshots[2]}
                              alt={project.title}
                              className="w-full h-full object-cover object-top"
                            />
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="w-[60%] flex items-center justify-center mb-8">
                        <ImageWithFallback
                          src={project.image}
                          alt={project.title}
                          className="w-32 h-32 rounded-3xl shadow-2xl"
                        />
                      </div>
                    )}
                  </div>
                </div>

                {/* Bottom Info (App Store style) */}
                <div className="flex items-center gap-3 mt-4 px-3 py-2 rounded-2xl bg-zinc-50/50 dark:bg-zinc-900/50 backdrop-blur-sm border border-zinc-100 dark:border-zinc-800/50">
                  <div className="w-10 h-10 rounded-xl overflow-hidden shadow-sm flex-shrink-0 border border-zinc-200 dark:border-zinc-700">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold truncate text-foreground">
                      {project.title}
                    </p>
                    <p className="text-xs text-muted-foreground truncate">
                      {project.description}
                    </p>
                  </div>
                  <button
                    className="flex-shrink-0 px-4 py-1.5 rounded-full bg-primary/10 hover:bg-primary/20 text-primary text-xs font-bold transition-colors"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleProjectClick(project);
                    }}
                  >
                    보기
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Play/Pause Button */}
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex justify-end mt-6">
          <button
            onClick={togglePlay}
            className="flex items-center justify-center w-9 h-9 rounded-full bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-all duration-300 shadow-sm hover:shadow-md"
            aria-label={isPlaying ? "일시정지" : "재생"}
          >
            {isPlaying ? (
              <Pause className="w-4 h-4 text-foreground" />
            ) : (
              <Play className="w-4 h-4 text-foreground ml-0.5" />
            )}
          </button>
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
      />
    </section>
  );
}
