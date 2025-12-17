import { Hero } from "./components/Hero";
import { Credentials } from "./components/Credentials";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { SideProjects } from "./components/SideProjects";
import { Contact } from "./components/Contact";
import { Separator } from "./components/ui/separator";

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
        <div className="container mx-auto px-4 py-4 max-w-6xl">
          <nav className="flex items-center justify-between">
            <h3 className="scroll-m-20">Portfolio</h3>
            <div className="flex gap-6">
              <a href="#skills" className="text-sm hover:text-primary transition-colors">
                Skills
              </a>
              <a href="#projects" className="text-sm hover:text-primary transition-colors">
                Projects
              </a>
              <a href="#side-projects" className="text-sm hover:text-primary transition-colors">
                Side Projects
              </a>
                <a href="#credentials" className="text-sm hover:text-primary transition-colors">
                Credentials
              </a>
              <a href="#contact" className="text-sm hover:text-primary transition-colors">
                Contact
              </a>
            </div>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main>
        <Hero />
        
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