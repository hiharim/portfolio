import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink, Github, Check, Calendar, Users, Star } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Separator } from "./ui/separator";

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
  } | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ProjectModal({ project, open, onOpenChange }: ProjectModalProps) {
  if (!project) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="sm:max-w-[900px] max-w-[95vw] max-h-[90vh] overflow-y-auto"
      >
        <DialogHeader>
          <DialogTitle className="text-2xl">{project.title}</DialogTitle>
          <DialogDescription>{project.description}</DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Main Image */}
          <div className="aspect-video overflow-hidden rounded-lg bg-muted">
            <ImageWithFallback
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Project Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {project.duration && (
              <div className="flex items-center gap-3">
                <Calendar className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="text-xs text-muted-foreground">기간</p>
                  <p className="text-sm">{project.duration}</p>
                </div>
              </div>
            )}
            {project.team && (
              <div className="flex items-center gap-3">
                <Users className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="text-xs text-muted-foreground">팀 구성</p>
                  <p className="text-sm">{project.team}</p>
                </div>
              </div>
            )}
            {project.rating && (
              <div className="flex items-center gap-3">
                <Star className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="text-xs text-muted-foreground">평점</p>
                  <p className="text-sm">{project.rating}</p>
                </div>
              </div>
            )}
          </div>

          <Separator />

          {/* Full Description */}
          {project.fullDescription && (
            <div>
              <h3 className="mb-3">프로젝트 소개</h3>
              <p className="text-muted-foreground leading-relaxed">{project.fullDescription}</p>
            </div>
          )}

          {/* Features */}
          {project.features && project.features.length > 0 && (
            <div>
              <h3 className="mb-4">주요 기능</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technology Stack */}
          <div>
            <h3 className="mb-3">기술 스택</h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Challenges & Solution */}
          {project.challenges && project.solution && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="mb-3">도전 과제</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{project.challenges}</p>
              </div>
              <div>
                <h3 className="mb-3">해결 방법</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{project.solution}</p>
              </div>
            </div>
          )}

          {/* Screenshots */}
          {project.screenshots && project.screenshots.length > 0 && (
            <div>
              <h3 className="mb-4">스크린샷</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {project.screenshots.map((screenshot, index) => (
                  <div key={index} className="aspect-[9/16] overflow-hidden rounded-lg bg-muted">
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

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4">
            <Button className="flex-1" asChild>
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                Live Demo
              </a>
            </Button>
            <Button variant="outline" className="flex-1" asChild>
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                View Code
              </a>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
