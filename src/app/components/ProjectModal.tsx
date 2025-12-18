import { ExternalLink, Github } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle
} from "./ui/dialog";

interface ProjectModalProps {
  project: {
    title: string;
    description: string;
    image: string;
    tags: string[];
    github: string;
    demo: string;
    fullDescription?: string;
    features?: string[];
    challenges?: string;
    solution?: string;
    duration?: string;
    team?: string;
    rating?: string;
    screenshots?: string[];
    architecture?: string;
    contributions?: string[];
  } | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ProjectModal({ project, open, onOpenChange }: ProjectModalProps) {
  if (!project) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="max-w-none w-[95vw] sm:max-w-[95vw] md:max-w-[90vw] lg:max-w-[1400px] h-[90vh] overflow-y-auto p-0 gap-0"
      >
        <div className="flex flex-col lg:flex-row h-full">
          {/* Main Content - Left Side */}
          <div className="flex-1 overflow-y-auto p-8 lg:p-12">
            <div className="max-w-4xl">
              {/* Header */}
              <div className="mb-12">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <span>Projects</span>
                  <span>/</span>
                  <span>{project.title}</span>
                </div>
                <DialogTitle className="text-4xl font-bold mb-4 tracking-tight">{project.title}</DialogTitle>
                <DialogDescription className="text-xl text-muted-foreground leading-relaxed">
                  {project.description}
                </DialogDescription>
              </div>

              {/* Screenshots Section */}
              {project.screenshots && project.screenshots.length > 0 && (
                <div className="mb-12">
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    App Screenshots
                  </h3>
                  <div className="flex overflow-x-auto gap-4 pb-4 -mx-4 px-4 snap-x scrollbar-hide">
                    {project.screenshots.map((screenshot, index) => (
                      <div key={index} className="flex-shrink-0 w-[240px] aspect-[9/19] overflow-hidden rounded-xl border bg-muted shadow-sm snap-center">
                        <ImageWithFallback
                          src={screenshot}
                          alt={`${project.title} screenshot ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Full Description / Overview */}
              {project.fullDescription && (
                <div className="mb-12">
                  <h3 className="text-xl font-bold mb-4">Project Overview</h3>
                  <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                    {project.fullDescription}
                  </p>
                </div>
              )}

              {/* Features */}
              {project.features && project.features.length > 0 && (
                <div className="mb-12">
                  <h3 className="text-xl font-bold mb-4">Key Features</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 list-disc pl-5">
                    {project.features.map((feature, i) => (
                      <li key={i} className="text-muted-foreground leading-relaxed pl-1 marker:text-primary">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Challenges & Solution */}
              {(project.challenges || project.solution) && (
                <div className="mb-12 space-y-8">
                  <div className="border-l-4 border-primary pl-6">
                    <h3 className="text-xl font-bold mb-3">The Challenge</h3>
                    <p className="text-muted-foreground leading-relaxed">{project.challenges || "구체적인 기술적 챌린지와 문제 해결 과정을 경험했습니다."}</p>
                  </div>
                  {project.solution && (
                    <div>
                      <h3 className="text-xl font-bold mb-3">The Solution</h3>
                      <div className="bg-muted/50 p-6 rounded-xl text-sm leading-relaxed">
                        <p className="text-muted-foreground">{project.solution}</p>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Architecture */}
              {project.architecture && (
                <div className="mb-12">
                  <h3 className="text-xl font-bold mb-4">System Architecture</h3>
                  <div className="overflow-hidden rounded-xl border bg-muted">
                    <ImageWithFallback
                      src={project.architecture}
                      alt={`${project.title} architecture`}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              )}

              {/* Contributions */}
              {project.contributions && project.contributions.length > 0 && (
                <div className="mb-12">
                  <h3 className="text-xl font-bold mb-4">My Contributions</h3>
                  <ul className="space-y-3 list-disc pl-5">
                    {project.contributions.map((contribution, index) => (
                      <li key={index} className="text-muted-foreground leading-relaxed pl-1 marker:text-primary">
                        {contribution}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar - Right Side */}
          <div className="lg:w-[320px] lg:border-l bg-muted/10 p-8 lg:p-8 flex-shrink-0 lg:h-full lg:overflow-y-auto">
            <div className="sticky top-0 space-y-10">

              {/* Metadata */}
              <div className="space-y-8">
                <div className="border-b pb-6">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">ROLE</p>
                  <p className="font-medium">Mobile Developer</p>
                </div>

                {project.duration && (
                  <div className="border-b pb-6">
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">TIMELINE</p>
                    <p className="font-medium">{project.duration}</p>
                  </div>
                )}

                {project.team && (
                  <div className="border-b pb-6">
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">TEAM SIZE</p>
                    <p className="font-medium">{project.team}</p>
                  </div>
                )}

                <div>
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">TECHNOLOGIES</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <Badge key={tag} variant="secondary" className="px-3 py-1 bg-muted/50 hover:bg-muted transition-colors text-xs font-normal">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              {/* Links */}
              <div className="flex flex-col gap-3">
                <Button className="w-full h-11" asChild>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Visit Live Demo
                  </a>
                </Button>
                <Button variant="outline" className="w-full h-11" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    View Source Code
                  </a>
                </Button>
              </div>

              {/* Share/Extra (Optional) */}
              <div className="pt-6 border-t text-sm text-center text-muted-foreground">
                <p>Share this project</p>
                <div className="flex justify-center gap-2 mt-4">
                  {/* Social icons could go here */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
