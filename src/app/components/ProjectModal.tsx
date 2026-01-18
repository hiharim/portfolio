import { CheckCircle2, ExternalLink, Github, Lightbulb, Target } from "lucide-react";
import { ImageWithFallback } from "./ImageWithFallback";
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
    problemSolvings?: {
      problem: string;
      solution: string;
      conclusion: string;
    }[];
    duration?: string;
    team?: string;
    contribution?: string;
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
        className="max-w-none w-[95vw] sm:max-w-[95vw] md:max-w-[90vw] lg:max-w-[1400px] h-[90vh] overflow-y-auto p-0 gap-0 data-[state=closed]:duration-0 data-[state=closed]:animate-none"
      >
        <div className="flex flex-col lg:flex-row items-start">
          {/* Main Content - Left Side */}
          <div className="flex-1 p-8 lg:p-12">
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
                {project.fullDescription && (
                  <p className="mt-4 text-muted-foreground leading-relaxed whitespace-pre-line">
                    {project.fullDescription}
                  </p>
                )}
              </div>

              {/* System Architecture (Data Flow) */}
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

              {/* Problem Solving Steps - Redesigned */}
              {project.problemSolvings && project.problemSolvings.length > 0 && (
                <div className="mb-12">
                  <h3 className="text-xl font-bold mb-6">Problem Solving</h3>
                  <div className="space-y-6">
                    {project.problemSolvings.map((step, index) => (
                      <div
                        key={index}
                        className="rounded-xl border bg-card overflow-hidden"
                      >
                        {/* Step Header */}
                        <div className="px-6 py-4 bg-muted/30 border-b">
                          <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                            Case {String(index + 1).padStart(2, '0')}
                          </span>
                        </div>

                        {/* Step Content */}
                        <div className="p-6 space-y-5">
                          {/* Problem */}
                          <div className="flex gap-4">
                            <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-destructive/10 flex items-center justify-center">
                              <Target className="w-4 h-4 text-destructive" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="text-sm font-semibold text-foreground mb-1.5">Challenge</h4>
                              <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
                                {step.problem}
                              </p>
                            </div>
                          </div>

                          {/* Solution */}
                          <div className="flex gap-4">
                            <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                              <Lightbulb className="w-4 h-4 text-primary" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="text-sm font-semibold text-foreground mb-1.5">Solution</h4>
                              <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
                                {step.solution}
                              </p>
                            </div>
                          </div>

                          {/* Conclusion */}
                          <div className="flex gap-4">
                            <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center">
                              <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-500" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="text-sm font-semibold text-foreground mb-1.5">Result</h4>
                              <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
                                {step.conclusion}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* App Screenshots */}
              {project.screenshots && project.screenshots.length > 0 && (
                <div className="mb-12">
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    App Screenshots
                  </h3>
                  <div className="flex overflow-x-auto gap-4 pb-4 -mx-4 px-4 snap-x scrollbar-hide">
                    {project.screenshots.map((screenshot, index) => (
                      <div key={index} className="flex-shrink-0 w-[240px] max-h-[600px] overflow-y-auto rounded-xl border bg-muted shadow-sm snap-center">
                        <ImageWithFallback
                          src={screenshot}
                          alt={`${project.title} screenshot ${index + 1}`}
                          className="w-full h-auto object-contain"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar - Right Side */}
          <div className="lg:w-[320px] lg:border-l bg-muted/10 p-8 lg:p-8 flex-shrink-0 sticky top-0 h-fit">
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

                {project.contribution && (
                  <div className="border-b pb-6">
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">CONTRIBUTION</p>
                    <span className="text-2xl font-bold text-primary">{project.contribution}</span>
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
