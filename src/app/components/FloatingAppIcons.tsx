import { AppIcon } from "@/app/components/AppIcon";
import { useEffect, useRef, useState } from "react";

// Import all app icons
import appIcon1 from "/icons/app-icon-1.png";
import appIcon10 from "/icons/app-icon-10.png";
import appIcon11 from "/icons/app-icon-11.png";
import appIcon12 from "/icons/app-icon-12.png";
import appIcon2 from "/icons/app-icon-2.png";
import appIcon3 from "/icons/app-icon-3.png";
import appIcon4 from "/icons/app-icon-4.png";
import appIcon5 from "/icons/app-icon-5.png";
import appIcon6 from "/icons/app-icon-6.png";
import appIcon7 from "/icons/app-icon-7.png";
import appIcon8 from "/icons/app-icon-8.png";
import appIcon9 from "/icons/app-icon-9.png";

interface IconConfig {
  src: string;
  alt: string;
  size: "sm" | "md" | "lg" | "xl";
  position: { top?: string; left?: string; right?: string; bottom?: string };
  animation: string;
  delay: string;
  isProject?: boolean;
}

const iconConfigs: IconConfig[] = [
  // --- Row 1: Top (7 icons, Widest) ---
  {
    src: appIcon1,
    alt: "Fitness App",
    size: "lg",
    position: { top: "2%", left: "2%" },
    animation: "animate-float-slow",
    delay: "0s",
    isProject: true,
  },
  {
    src: appIcon2,
    alt: "Weather App",
    size: "md",
    position: { top: "5%", left: "18%" },
    animation: "animate-float",
    delay: "0.5s",
  },
  {
    src: appIcon3,
    alt: "Music App",
    size: "xl",
    position: { top: "2%", left: "34%" },
    animation: "animate-float-fast",
    delay: "1s",
    isProject: true,
  },
  {
    src: appIcon4,
    alt: "Finance App",
    size: "md",
    position: { top: "6%", left: "50%" },
    animation: "animate-float-slow",
    delay: "0.3s",
  },
  {
    src: appIcon5,
    alt: "Chat App",
    size: "lg",
    position: { top: "1%", left: "66%" },
    animation: "animate-float",
    delay: "0.8s",
    isProject: true,
  },
  {
    src: appIcon6,
    alt: "Camera App",
    size: "md",
    position: { top: "5%", left: "82%" },
    animation: "animate-float-fast",
    delay: "0.2s",
  },
  {
    src: appIcon7,
    alt: "Todo App",
    size: "sm",
    position: { top: "3%", left: "96%" },
    animation: "animate-float-slow",
    delay: "1.2s",
  },

  // --- Row 2: Middle (5 icons, Spread away from center-bottom) ---
  {
    src: appIcon8,
    alt: "Food App",
    size: "md",
    position: { top: "15%", left: "10%" },
    animation: "animate-float",
    delay: "0.6s",
  },
  {
    src: appIcon9,
    alt: "Travel App",
    size: "sm",
    position: { top: "12%", left: "28%" },
    animation: "animate-float-fast",
    delay: "0.9s",
  },
  {
    src: appIcon2,
    alt: "Weather App 2",
    size: "sm",
    position: { top: "14%", left: "72%" },
    animation: "animate-float-slow",
    delay: "1.3s",
  },
  {
    src: appIcon11,
    alt: "Meditation App",
    size: "md",
    position: { top: "16%", left: "90%" },
    animation: "animate-float",
    delay: "1.1s",
  },

  // --- Row 3: Bottom (4 icons, Framing the center) ---
  {
    src: appIcon12,
    alt: "Shopping App",
    size: "sm",
    position: { top: "24%", left: "20%" },
    animation: "animate-float-fast",
    delay: "0.7s",
  },
  {
    src: appIcon10,
    alt: "Gaming App",
    size: "md",
    position: { top: "22%", left: "38%" },
    animation: "animate-float-slow",
    delay: "0.4s",
  },
  {
    src: appIcon4,
    alt: "Finance App 2",
    size: "sm",
    position: { top: "22%", left: "62%" },
    animation: "animate-float",
    delay: "0.1s",
  },
  {
    src: appIcon6,
    alt: "Camera App 2",
    size: "sm",
    position: { top: "24%", left: "80%" },
    animation: "animate-float-fast",
    delay: "1.5s",
  }
];

export const FloatingAppIcons = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse position to range [-1, 1]
      const nx = (e.clientX / window.innerWidth) * 2 - 1;
      const ny = (e.clientY / window.innerHeight) * 2 - 1;
      setMousePos({ x: nx, y: ny });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none">
      {iconConfigs.map((config, index) => {
        // Coordinated group movement towards mouse direction
        const groupX = mousePos.x * 50;
        const groupY = mousePos.y * 30;

        // Wave offset: icons move differently based on their index and mouse position
        // This creates a "staggered" follow effect that looks like a wave
        const waveX = Math.sin((mousePos.x * 2) + (index * 0.5)) * 15;
        const waveY = Math.cos((mousePos.y * 2) + (index * 0.5)) * 10;

        return (
          <div
            key={index}
            className={`absolute ${config.animation} pointer-events-auto transition-transform duration-1000 ease-out`}
            style={{
              ...config.position,
              animationDelay: config.delay,
              transform: `translate(${groupX + waveX}px, ${groupY + waveY}px) scale(${1 + Math.abs(mousePos.x * 0.05)})`,
            }}
          >
            <AppIcon
              src={config.src}
              alt={config.alt}
              size={config.size}
              isProject={config.isProject}
            />
          </div>
        );
      })}
    </div>
  );
};

export default FloatingAppIcons;
