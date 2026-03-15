import { Github, Linkedin, Mail, Smartphone } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";

export function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative container mx-auto px-4 pt-32 pb-16 max-w-4xl min-h-[90vh] flex flex-col items-center justify-center">
      {/* Central Large App Icon - like the App Store "A" icon */}
      <div className="relative z-10 mb-10">
        <div className="relative group">
          {/* Multi-layered Glow effect */}
          <div className="absolute inset-0 rounded-[22%] bg-primary/10 blur-3xl scale-150 animate-pulse" />
          <div className="absolute inset-0 rounded-[22%] bg-gradient-to-br from-primary/20 to-transparent blur-xl group-hover:scale-110 transition-transform duration-700" />
          
          <Avatar className="relative w-40 h-40 md:w-48 md:h-48 shadow-2xl !rounded-[22%] overflow-hidden">
            <AvatarImage
              src="images/hero.gif"
              alt={t("profile.name")}
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <AvatarFallback className="text-4xl !rounded-[22%] bg-zinc-100 dark:bg-zinc-800">
              {t("profile.name").substring(0, 3)}
            </AvatarFallback>
          </Avatar>
        </div>
      </div>

      {/* Title text - centered below the icon */}
      <div className="relative z-10 flex flex-col items-center text-center">
        <div className="flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-zinc-100 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700/50 shadow-sm">
          <Smartphone className="w-3 h-3 text-primary animate-pulse" />
          <p className="text-primary font-bold tracking-[0.2em] uppercase text-[10px] md:text-xs">
            Mobile Ecosystem
          </p>
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70">
          {t("profile.name")}
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground font-semibold mb-6">
          {t("profile.title")}
        </p>
        
        <p className="max-w-xl text-base md:text-lg text-gray-600 dark:text-gray-400 whitespace-pre-line leading-relaxed mt-2 font-medium">
          {t("selfIntroduction.content")}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-10">
          <Button
            variant="default"
            size="lg"
            className="h-12 md:h-14 rounded-full px-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-primary text-primary-foreground font-bold"
            onClick={() => {
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <Mail className="mr-2 h-5 w-5" />
            {t("nav.contact")}
          </Button>
          
          <div className="flex gap-3">
            <Button variant="outline" size="icon" className="w-12 h-12 md:w-14 md:h-14 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1" asChild>
              <a
                href="https://github.com/hiharim"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">Github</span>
              </a>
            </Button>
            <Button variant="outline" size="icon" className="w-12 h-12 md:w-14 md:h-14 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1" asChild>
              <a
                href="https://www.linkedin.com/in/%ED%95%98%EB%A6%BC-%EC%A1%B0-572866258/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </Button>
          </div>
        </div>
      </div>


    </section>
  );
}
