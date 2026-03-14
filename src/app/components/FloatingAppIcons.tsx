import { AppIcon } from "@/app/components/AppIcon";
import { useEffect, useRef, useState } from "react";

// Project icons
import poppopIcon from "/images/projects/poppop/thumbnail_poppop.jpg";
import cpassIcon from "/images/projects/cpass/thumbnail_cpass.jpeg";
import brkIcon from "/images/projects/brk/thumbnail_brk.jpg";
import digilabIcon from "/images/projects/digilab/thumbnail_digilab.png";
import singIcon from "/images/projects/singtogether/sing_1.png";

// Generic context icons (to fill space)
import appIcon1 from "/icons/app-icon-1.png";
import appIcon2 from "/icons/app-icon-2.png";
import appIcon3 from "/icons/app-icon-3.png";
import appIcon4 from "/icons/app-icon-4.png";
import appIcon5 from "/icons/app-icon-5.png";
import appIcon6 from "/icons/app-icon-6.png";

interface IconConfig {
  src: string;
  alt: string;
  size: "sm" | "md" | "lg" | "xl";
  x: number; // % from center
  y: number; // % from center
  opacity: number;
  animation: string;
  delay: string;
  isProject?: boolean;
}

const iconConfigs: IconConfig[] = [
  // === CORE PROJECTS: Nearest to center, high visibility ===
  { src: poppopIcon, alt: "poppop", size: "md", x: -30, y: -22, opacity: 1, animation: "animate-float-slow", delay: "0s", isProject: true },
  { src: cpassIcon, alt: "CPASS", size: "md", x: 30, y: -24, opacity: 1, animation: "animate-float", delay: "0.5s", isProject: true },
  { src: digilabIcon, alt: "DigiLab", size: "md", x: -32, y: 14, opacity: 1, animation: "animate-float-fast", delay: "1s", isProject: true },
  { src: brkIcon, alt: "BRK", size: "md", x: 32, y: 12, opacity: 1, animation: "animate-float-slow", delay: "0.3s", isProject: true },
  { src: singIcon, alt: "SingTogether", size: "md", x: 0, y: -38, opacity: 0.9, animation: "animate-float", delay: "0.8s", isProject: true },

  // === ECOSYSTEM & TOOLS: Mid ring, slightly faded ===
  { src: appIcon1, alt: "Flutter", size: "md", x: -44, y: -12, opacity: 0.7, animation: "animate-float", delay: "0.2s" },
  { src: appIcon2, alt: "Kotlin", size: "md", x: 44, y: -14, opacity: 0.7, animation: "animate-float-slow", delay: "1.2s" },
  { src: appIcon3, alt: "Firebase", size: "md", x: -16, y: 30, opacity: 0.65, animation: "animate-float", delay: "0.6s" },
  { src: appIcon4, alt: "Riverpod", size: "md", x: 20, y: 28, opacity: 0.65, animation: "animate-float-fast", delay: "0.9s" },
  { src: appIcon5, alt: "Git", size: "md", x: -48, y: -30, opacity: 0.5, animation: "animate-float-slow", delay: "1.3s" },
  { src: appIcon6, alt: "Figma", size: "md", x: 48, y: -28, opacity: 0.5, animation: "animate-float", delay: "1.1s" },

  // === OUTER DECORATION: Very faded context ===
  { src: appIcon1, alt: "App 1", size: "md", x: -46, y: 24, opacity: 0.35, animation: "animate-float-fast", delay: "0.7s" },
  { src: appIcon3, alt: "App 3", size: "md", x: 46, y: 22, opacity: 0.35, animation: "animate-float-slow", delay: "0.4s" },
  { src: appIcon5, alt: "App 5", size: "md", x: -22, y: -42, opacity: 0.3, animation: "animate-float", delay: "0.1s" },
  { src: appIcon2, alt: "App 2", size: "md", x: 34, y: -40, opacity: 0.3, animation: "animate-float-fast", delay: "1.5s" },
];

export const FloatingAppIcons = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const nx = (e.clientX / window.innerWidth) * 2 - 1;
      const ny = (e.clientY / window.innerHeight) * 2 - 1;
      setMousePos({ x: nx, y: ny });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none select-none">
      {/* Radial Gradient for focus */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_100%)] z-[1]" />

      {iconConfigs.map((config, index) => {
        const parallaxIntensity = 0.5 + (Math.sqrt(config.x ** 2 + config.y ** 2) * 0.005);
        const groupX = mousePos.x * 25 * parallaxIntensity;
        const groupY = mousePos.y * 15 * parallaxIntensity;

        const waveX = Math.sin((mousePos.x * 2) + (index * 0.5)) * 6;
        const waveY = Math.cos((mousePos.y * 2) + (index * 0.5)) * 4;

        const dist = Math.sqrt(config.x ** 2 + config.y ** 2);
        const blur = dist > 45 ? 2 : dist > 35 ? 1 : 0;

        return (
          <div
            key={index}
            className={`absolute ${config.animation} transition-transform duration-1000 ease-out z-[2]`}
            style={{
              left: `calc(50% + ${config.x}%)`,
              top: `calc(50% + ${config.y}%)`,
              transform: `translate(-50%, -50%) translate(${groupX + waveX}px, ${groupY + waveY}px)`,
              animationDelay: config.delay,
              opacity: config.opacity,
              filter: blur > 0 ? `blur(${blur}px)` : undefined,
            }}
          >
            <AppIcon
              src={config.src}
              alt={config.alt}
              size={config.size}
              isProject={config.isProject}
              className={config.isProject ? "shadow-2xl ring-2 ring-primary/20" : "grayscale-[20%]"}
            />
          </div>
        );
      })}
    </div>
  );
};

export default FloatingAppIcons;
