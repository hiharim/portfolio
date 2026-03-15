import { Building2, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Badge } from "./ui/badge";
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
    <section className="container mx-auto px-4 py-24 max-w-6xl">
      <div className="flex flex-col items-center text-center mb-16">
        <div className="px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest mb-4">
          Experience
        </div>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
          {t("sections.workExperience")}
        </h2>
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
        </section>
    );
}
