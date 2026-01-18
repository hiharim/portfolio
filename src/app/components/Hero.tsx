import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Github, Linkedin, Mail } from "lucide-react";

export function Hero() {
  return (
    <section className="container mx-auto px-4 py-16 max-w-4xl">
      <div className="flex flex-col items-center text-center space-y-4">
        {/* 프로필 사진 */}
        <Avatar className="w-32 h-32 mb-4 border-4 border-background shadow-xl">
          <AvatarImage src="images/hero.gif" alt="조하림" />
          <AvatarFallback className="text-2xl">조하림</AvatarFallback>
        </Avatar>

        <Badge variant="secondary" className="mb-2">Mobile App Developer</Badge>
        <h1>안녕하세요, 조하림입니다</h1>
        <p className="max-w-2xl text-muted-foreground">
          사용자 중심의 직관적인 모바일 앱을 만듭니다. React Native와 Flutter를 활용하여 iOS와 Android 플랫폼에서 동작하는 고품질 애플리케이션을 개발합니다.
        </p>
        <div className="flex gap-3 pt-4">
          <Button variant="default">
            <Mail className="mr-2 h-4 w-4" />
            연락하기
          </Button>
          <Button variant="outline" asChild>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              Github
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Linkedin className="mr-2 h-4 w-4" />
              LinkedIn
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
