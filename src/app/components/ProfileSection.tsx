import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button_float";

export const ProfileSection = () => {
    return (
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 pt-32">
            {/* Profile Avatar */}
            <div className="w-28 h-28 rounded-[28%] bg-gradient-to-br from-primary to-accent shadow-app-icon-hover mb-6 flex items-center justify-center">
                <span className="text-4xl font-bold text-primary-foreground">개발</span>
            </div>

            {/* Name & Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2 tracking-tight">
                Mobile Developer
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-center max-w-md">
                iOS & Android 앱을 만드는 개발자입니다
            </p>

            {/* Stats */}
            <div className="flex gap-8 mb-8">
                <div className="text-center">
                    <span className="block text-3xl font-bold text-gradient">4+</span>
                    <span className="text-sm text-muted-foreground">앱 프로젝트</span>
                </div>
                <div className="text-center">
                    <span className="block text-3xl font-bold text-gradient">3+</span>
                    <span className="text-sm text-muted-foreground">년 경력</span>
                </div>
                <div className="text-center">
                    <span className="block text-3xl font-bold text-gradient">10K+</span>
                    <span className="text-sm text-muted-foreground">다운로드</span>
                </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-4 mb-12">
                <Button size="lg" className="rounded-full px-8">
                    <Mail className="w-4 h-4 mr-2" />
                    연락하기
                </Button>
                <Button variant="outline" size="lg" className="rounded-full px-8">
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
                <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                >
                    <Github className="w-5 h-5" />
                </a>
                <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                >
                    <Linkedin className="w-5 h-5" />
                </a>
                <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                >
                    <Mail className="w-5 h-5" />
                </a>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground">
                <span className="text-sm">스크롤하여 프로젝트 보기</span>
                <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground animate-bounce" />
                </div>
            </div>
        </div>
    );
};

export default ProfileSection;
