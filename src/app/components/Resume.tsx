import { ArrowRight, Building2, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

export function Resume() {
    const { t } = useTranslation();
    const experiences = t('workExperience', { returnObjects: true }) as Array<{
        company: string;
        position: string;
        period: string;
        location: string;
        type: string;
        achievements: string[];
        skills: string[];
    }>;

    return (
        <section className="container mx-auto px-4 py-16 max-w-6xl">
            <div className="text-center mb-12">
                <h2 className="mb-4">{t('sections.workExperience')}</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    {t('sections.workExperienceDescription')}
                </p>
            </div>

            <div className="space-y-8 mb-12">
                {experiences.map((exp, index) => (
                    <Card key={index} className="border-none shadow-sm bg-card hover:bg-accent/5 transition-colors">
                        <CardContent className="p-8">
                            <div className="flex flex-col md:flex-row gap-8">
                                {/* Left Column: Metadata */}
                                <div className="md:w-[240px] flex-shrink-0 space-y-3">
                                    <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary/10 text-primary hover:bg-primary/20">
                                        {exp.period.includes("Present") ? t('status.current') : exp.period.split(" - ")[0]}
                                    </div>
                                    <div className="font-semibold text-lg">{exp.period}</div>
                                    <div className="flex items-center text-muted-foreground text-sm gap-2">
                                        <Building2 className="w-4 h-4" />
                                        <span>{exp.company}</span>
                                    </div>
                                </div>

                                {/* Right Column: Content */}
                                <div className="flex-1 space-y-4">
                                    <div>
                                        <h3 className="text-2xl font-bold text-foreground mb-1">{exp.position}</h3>
                                        <div className="flex items-center text-sm text-muted-foreground gap-2">
                                            <MapPin className="w-3.5 h-3.5" />
                                            <span>{exp.location}</span>
                                            <span>•</span>
                                            <span>{exp.type}</span>
                                        </div>
                                    </div>

                                    <ul className="space-y-3 list-disc pl-4 marker:text-muted-foreground">
                                        {exp.achievements.map((achievement, i) => (
                                            <li key={i} className="text-muted-foreground leading-relaxed pl-1">
                                                {achievement}
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="flex flex-wrap gap-2 pt-2">
                                        {exp.skills.map((skill) => (
                                            <Badge key={skill} variant="secondary" className="px-2.5 py-0.5 text-xs font-normal bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground transition-colors">
                                                {skill}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <div className="flex justify-center">
                <Button size="lg" asChild className="group">
                    <Link to="/career">
                        {t('nav.careerDescription')}
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                </Button>
            </div>
        </section>
    );
}
