import { Github, Linkedin, Mail } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";

export function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative container mx-auto px-4 pt-32 pb-16 max-w-4xl min-h-[85vh] flex flex-col items-center justify-center">
      {/* Central Large App Icon - like the App Store "A" icon */}
      <div className="relative z-10 mb-8">
        <div className="relative">
          {/* Glow effect behind the icon */}
          <div className="absolute inset-0 rounded-[22%] bg-primary/20 blur-2xl scale-150 animate-pulse" />
          <Avatar className="relative w-36 h-36 md:w-44 md:h-44 shadow-2xl !rounded-[22%]">
            <AvatarImage
              src="images/hero.gif"
              alt={t("profile.name")}
              className="object-cover"
            />
            <AvatarFallback className="text-3xl !rounded-[22%]">
              {t("profile.name").substring(0, 3)}
            </AvatarFallback>
          </Avatar>
        </div>
      </div>

      {/* Title text - centered below the icon */}
      <div className="relative z-10 flex flex-col items-center text-center">
        <p className="text-primary font-bold tracking-[0.2em] uppercase text-[10px] md:text-xs mb-3 bg-primary/5 px-3 py-1 rounded-full border border-primary/10">
          Mobile Ecosystem
        </p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-3">
          {t("profile.name")}
        </h1>
        <p className="text-lg text-muted-foreground font-medium">
          {t("profile.title")}
        </p>
        <p className="max-w-xl text-base text-gray-600 dark:text-gray-400 whitespace-pre-line leading-relaxed mt-2">
          {t("selfIntroduction.content")}
        </p>

        {/* CTA Buttons */}
        <div className="flex gap-3 pt-6">
          <Button
            variant="default"
            size="lg"
            className="rounded-full px-6 shadow-lg hover:shadow-xl transition-shadow"
            onClick={() => {
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <Mail className="mr-2 h-4 w-4" />
            {t("nav.contact")}
          </Button>
          <Button variant="outline" size="lg" className="rounded-full px-6" asChild>
            <a
              href="https://github.com/hiharim"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="mr-2 h-4 w-4" />
              Github
            </a>
          </Button>
          <Button variant="outline" size="lg" className="rounded-full px-6" asChild>
            <a
              href="https://www.linkedin.com/in/%ED%95%98%EB%A6%BC-%EC%A1%B0-572866258/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="mr-2 h-4 w-4" />
              LinkedIn
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
