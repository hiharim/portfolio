import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Contact } from "../components/Contact";
import { FloatingAppIcons } from "../components/FloatingAppIcons";
import { Hero } from "../components/Hero";
import { LanguageToggle } from "../components/LanguageToggle";
import { ProjectShowcase } from "../components/ProjectShowcase";
import { Resume } from "../components/Resume";
import { Skills } from "../components/Skills";
import { Separator } from "../components/ui/separator";

export function HomePage() {
    const { t } = useTranslation();
    const [isScrolled, setIsScrolled] = useState(false);

    // Track scroll position for header collapse
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 40);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleScrollTo = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="min-h-screen bg-background">
            {/* Collapsible Sticky Header */}
            <header
                className={`sticky top-0 z-50 transition-all duration-300 ease-in-out border-b ${isScrolled
                    ? "bg-background/80 backdrop-blur-xl shadow-sm"
                    : "bg-transparent border-transparent"
                    }`}
            >
                <div
                    className={`container mx-auto max-w-6xl transition-all duration-300 ease-in-out ${isScrolled ? "px-4 py-2" : "px-4 py-4"
                        }`}
                >
                    <nav className="flex items-center justify-between">
                        {/* Logo / Title */}
                        <h3
                            className={`scroll-m-20 cursor-pointer font-bold transition-all duration-300 ${isScrolled ? "text-base" : "text-lg"
                                }`}
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        >
                            {t('nav.portfolio')}
                        </h3>

                        {/* Nav Links */}
                        <div className="flex gap-5 items-center">
                            <Link
                                to="/career"
                                className={`inline-flex items-center justify-center font-bold text-white bg-primary rounded-full hover:brightness-110 transition-all duration-300 shadow-sm hover:shadow-md ${isScrolled ? "text-[10px] px-3 py-1.5" : "text-xs px-4 py-2"
                                    }`}
                            >
                                {t('nav.careerDescription')}
                            </Link>
                            <div className={`w-px bg-border transition-all duration-300 ${isScrolled ? "h-3" : "h-4"}`} />

                            {[
                                { id: 'resume', label: t('nav.experience') },
                                { id: 'skills', label: t('nav.skills') },
                                { id: 'project-showcase', label: t('nav.projects') },
                                // { id: 'side-projects', label: t('nav.sideProjects') },
                                { id: 'contact', label: t('nav.contact') },
                            ].map(item => (
                                <button
                                    key={item.id}
                                    onClick={() => handleScrollTo(item.id)}
                                    className={`hover:text-primary transition-all duration-300 ${isScrolled ? "text-xs" : "text-sm"
                                        }`}
                                >
                                    {item.label}
                                </button>
                            ))}

                            <div className={`w-px bg-border transition-all duration-300 ${isScrolled ? "h-3" : "h-4"}`} />
                            <LanguageToggle />
                        </div>
                    </nav>
                </div>
            </header>

            {/* Main Content */}
            <main>
                {/* Hero + Floating Icons */}
                <div className="relative overflow-hidden">
                    <FloatingAppIcons />
                    <Hero />
                </div>

                <Separator className="my-8" />

                <div id="resume">
                    <Resume />
                </div>

                <Separator className="my-8" />

                <div id="skills">
                    <Skills />
                </div>

                <Separator className="my-8" />

                <div id="project-showcase">
                    <ProjectShowcase />
                </div>

                {/* App Store Style CTA Banner */}
                <div className="py-20 md:py-28">
                    <div className="flex flex-col items-center justify-center text-center px-4">
                        <div className="w-14 h-1 rounded-full bg-primary/30 mb-8" />
                        <h2 className="text-3xl md:text-[2.8rem] font-bold tracking-tight leading-tight mb-8">
                            더 자세한 경력이<br />궁금하신가요?
                        </h2>
                        <Link
                            to="/career"
                            className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-primary text-primary-foreground text-base font-semibold shadow-lg hover:shadow-xl hover:brightness-110 transition-all duration-300 hover:scale-105"
                        >
                            {t('nav.careerDescription')} 보러가기
                        </Link>
                    </div>
                </div>

                <Separator className="my-8" />

                <div id="contact">
                    <Contact />
                </div>
            </main>

            {/* Footer */}
            <footer className="border-t mt-16">
                <div className="container mx-auto px-4 py-8 max-w-6xl">
                    <div className="text-center text-sm text-muted-foreground">
                        <p>{t('footer.copyright')}</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
