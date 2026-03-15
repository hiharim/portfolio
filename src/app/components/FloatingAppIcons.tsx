import { AppIcon } from "@/app/components/AppIcon";
import { motion, useSpring, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";

// Project icons
import brkIcon from "/images/projects/brk/thumbnail_brk.jpg";
import cpassIcon from "/images/projects/cpass/thumbnail_cpass.jpeg";
import digilabIcon from "/images/projects/digilab/thumbnail_digilab.png";
import poppopIcon from "/images/projects/poppop/thumbnail_poppop.jpg";
import singIcon from "/images/projects/singtogether/thumbnail_singtogether.png";

// Tech Logos (using reliable CDN URLs for professional look)
const techIcons = {
  flutter: "https://www.vectorlogo.zone/logos/flutterio/flutterio-icon.svg",
  dash: "https://www.vectorlogo.zone/logos/flutterio/flutterio-icon.svg", // Use Flutter Bird icon for stability
  kotlin: "https://www.vectorlogo.zone/logos/kotlinlang/kotlinlang-icon.svg",
  firebase: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
  android: "https://www.vectorlogo.zone/logos/android/android-icon.svg",
  apple: "https://www.vectorlogo.zone/logos/apple/apple-icon.svg", // Apple logo instead of Swift
  figma: "https://www.vectorlogo.zone/logos/figma/figma-icon.svg",
  git: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg",
  dart: "https://www.vectorlogo.zone/logos/dartlang/dartlang-icon.svg",
};

interface IconConfig {
  src: string;
  alt: string;
  size: "sm" | "md" | "lg" | "xl";
  x: number; // % from center
  y: number; // % from center
  opacity: number;
  isProject?: boolean;
}

const iconConfigs: IconConfig[] = [
  // CORE PROJECTS - Key projects kept relatively central but safe
  { src: poppopIcon, alt: "poppop", size: "md", x: -32, y: -22, opacity: 0.8, isProject: true },
  { src: cpassIcon, alt: "CPASS", size: "md", x: 32, y: -25, opacity: 0.8, isProject: true },
  { src: digilabIcon, alt: "DigiLab", size: "md", x: -34, y: 15, opacity: 0.8, isProject: true },
  { src: brkIcon, alt: "BRK", size: "md", x: 34, y: 12, opacity: 0.8, isProject: true },
  { src: singIcon, alt: "SingTogether", size: "md", x: 0, y: -38, opacity: 0.7, isProject: true },

  // ECOSYSTEM & TOOLS - Pushed slightly more inwards than before
  { src: techIcons.android, alt: "Android", size: "md", x: -42, y: -8, opacity: 0.6 },
  { src: techIcons.dash, alt: "Flutter", size: "md", x: 42, y: -10, opacity: 0.6 },
  { src: techIcons.firebase, alt: "Firebase", size: "md", x: -22, y: 32, opacity: 0.5 },
  { src: techIcons.dart, alt: "Dart", size: "md", x: 25, y: 30, opacity: 0.5 },
  { src: techIcons.git, alt: "Git", size: "md", x: -44, y: -32, opacity: 0.4 },
  { src: techIcons.figma, alt: "Figma", size: "md", x: 44, y: -28, opacity: 0.4 },

  // OUTER DECORATION
  { src: techIcons.kotlin, alt: "Kotlin", size: "md", x: -40, y: 25, opacity: 0.3 },
  { src: techIcons.apple, alt: "Apple", size: "md", x: 40, y: 22, opacity: 0.3 },
  { src: techIcons.flutter, alt: "Flutter", size: "md", x: -25, y: -45, opacity: 0.25 },
  { src: techIcons.firebase, alt: "Firebase", size: "md", x: 35, y: -42, opacity: 0.25 },
];

export const FloatingAppIcons = () => {
  const [isMoved, setIsMoved] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Smooth springs for mouse position
  const springConfig = { damping: 25, stiffness: 150 };
  const mouseXSpring = useSpring(0, springConfig);
  const mouseYSpring = useSpring(0, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isMoved) setIsMoved(true);
      const nx = (e.clientX / window.innerWidth) * 2 - 1;
      const ny = (e.clientY / window.innerHeight) * 2 - 1;
      mouseXSpring.set(nx);
      mouseYSpring.set(ny);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isMoved, mouseXSpring, mouseYSpring]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0"
      style={{
        // Add a radial mask to hide icons in the center where text is
        maskImage: 'radial-gradient(circle at center, transparent 10%, black 50%)',
        WebkitMaskImage: 'radial-gradient(circle at center, transparent 10%, black 50%)',
      }}
    >
      {/* Background focus gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.01),transparent_70%)] dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.01),transparent_70%)] z-[1]" />

      {iconConfigs.map((config, index) => (
        <IconItem
          key={index}
          config={config}
          mouseX={mouseXSpring}
          mouseY={mouseYSpring}
          isMoved={isMoved}
        />
      ))}
    </div>
  );
};

const IconItem = ({ config, mouseX, mouseY, isMoved }: { config: IconConfig, mouseX: any, mouseY: any, isMoved: boolean }) => {
  // Interactive "Wave" effect: Distance-based scaling and positioning
  // We use the raw mouse values to calculate a multiplier for the wave
  const scale = useTransform([mouseX, mouseY], ([mx, my]: any) => {
    if (!isMoved) return 1;
    // Calculate distance from mouse to icon center in NDC-like coordinates
    const dx = (mx * 50) - config.x;
    const dy = (my * 50) - config.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    // Increase scale if close to mouse
    return Math.max(1, 1.2 - (distance / 80));
  });

  const xTrans = useTransform(mouseX, (v: any) => `calc(50% + ${config.x}% + ${v * 30 * (config.opacity)}px)`);
  const yTrans = useTransform(mouseY, (v: any) => `calc(50% + ${config.y}% + ${v * 20 * (config.opacity)}px)`);

  return (
    <motion.div
      className="absolute z-[2]"
      style={{
        left: xTrans,
        top: yTrans,
        scale: isMoved ? scale : 1,
        opacity: config.opacity,
        x: "-50%",
        y: "-50%",
      }}
    >
      <AppIcon
        src={config.src}
        alt={config.alt}
        size={config.size}
        variant="minimal"
        className={config.isProject ? "" : "grayscale-[30%] opacity-80"}
      />
    </motion.div>
  );
};

export default FloatingAppIcons;
