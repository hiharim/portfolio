import { Link } from "react-router-dom";
import { Contact } from "../components/Contact";
import { Credentials } from "../components/Credentials";
import { Hero } from "../components/Hero";
import { Projects } from "../components/Projects";
import { Resume } from "../components/Resume";
import { SideProjects } from "../components/SideProjects";
import { Skills } from "../components/Skills";
import { Separator } from "../components/ui/separator";

export function HomePage() {
    const handleScroll = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <header className="border-b sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
                <div className="container mx-auto px-4 py-4 max-w-6xl">
                    <nav className="flex items-center justify-between">
                        <h3 className="scroll-m-20 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                            Portfolio
                        </h3>
                        <div className="flex gap-6 items-center">
                            <Link to="/career" className="text-sm font-medium text-primary hover:text-primary/80 transition-colors">
                                Career Description
                            </Link>
                            <div className="w-px h-4 bg-border" />
                            <button onClick={() => handleScroll('resume')} className="text-sm hover:text-primary transition-colors">
                                Experience
                            </button>
                            <button onClick={() => handleScroll('skills')} className="text-sm hover:text-primary transition-colors">
                                Skills
                            </button>
                            <button onClick={() => handleScroll('projects')} className="text-sm hover:text-primary transition-colors">
                                Projects
                            </button>
                            <button onClick={() => handleScroll('side-projects')} className="text-sm hover:text-primary transition-colors">
                                Side Projects
                            </button>
                            <button onClick={() => handleScroll('credentials')} className="text-sm hover:text-primary transition-colors">
                                Credentials
                            </button>
                            <button onClick={() => handleScroll('contact')} className="text-sm hover:text-primary transition-colors">
                                Contact
                            </button>
                        </div>
                    </nav>
                </div>
            </header>

            {/* Main Content */}
            <main>
                <Hero />

                <Separator className="my-8" />

                <div id="resume">
                    <Resume />
                </div>

                <Separator className="my-8" />

                <div id="skills">
                    <Skills />
                </div>

                <Separator className="my-8" />

                <div id="projects">
                    <Projects />
                </div>

                <Separator className="my-8" />

                <div id="side-projects">
                    <SideProjects />
                </div>

                <Separator className="my-8" />

                <div id="credentials">
                    <Credentials />
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
                        <p>© 2024 Mobile App Developer Portfolio. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
