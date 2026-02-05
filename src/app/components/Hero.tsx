import { Github, Linkedin, Mail } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

export function Hero() {
  const { t } = useTranslation();

  return (
    <section className="container mx-auto px-4 pt-64 pb-20 max-w-4xl min-h-[60vh] flex items-center justify-center">
      <div className="flex flex-col items-center text-center space-y-4">
        {/* 프로필 사진 */}
        <Avatar className="w-32 h-32 mb-4 border-4 border-background shadow-xl !rounded-[22%]">
          <AvatarImage src="images/hero.gif" alt={t('profile.name')} className="object-cover" />
          <AvatarFallback className="text-2xl !rounded-[22%]">{t('profile.name').substring(0, 3)}</AvatarFallback>
        </Avatar>

        <Badge variant="secondary" className="mb-2">{t('profile.title')}</Badge>
        <h1>{t('profile.name')}</h1>
        <p className="max-w-2xl text-muted-foreground whitespace-pre-line">
          {t('selfIntroduction.content')}
        </p>
        <div className="flex gap-3 pt-4">
          <Button
            variant="default"
            onClick={() => {
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <Mail className="mr-2 h-4 w-4" />
            {t('nav.contact')}
          </Button>
          <Button variant="outline" asChild>
            <a href="https://github.com/hiharim" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              Github
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href="https://www.linkedin.com/in/%ED%95%98%EB%A6%BC-%EC%A1%B0-572866258/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="mr-2 h-4 w-4" />
              LinkedIn
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
