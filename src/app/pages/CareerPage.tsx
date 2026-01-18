import { ArrowLeft, Download } from "lucide-react";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useReactToPrint } from "react-to-print";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { LanguageToggle } from "../components/LanguageToggle";
import { Button } from "../components/ui/button";

export function CareerPage() {
    const contentRef = useRef<HTMLDivElement>(null);
    const { t } = useTranslation();

    const handlePrint = useReactToPrint({
        contentRef,
        documentTitle: "Career_Profile",
    });

    return (
        <div className="min-h-screen bg-muted/20 pb-20">
            {/* Top Navigation Bar */}
            <div className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b p-4">
                <div className="container mx-auto max-w-4xl flex justify-between items-center">
                    <Button variant="ghost" asChild>
                        <Link to="/">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            {t('nav.backToPortfolio')}
                        </Link>
                    </Button>
                    <div className="flex gap-2">
                        <LanguageToggle />
                        <Button onClick={() => handlePrint()}>
                            <Download className="mr-2 h-4 w-4" />
                            {t('nav.downloadPDF')}
                        </Button>
                    </div>
                </div>
            </div>

            {/* Printable Content Area */}
            <div className="container mx-auto max-w-[210mm] mt-8">
                <div
                    ref={contentRef}
                    className="bg-white p-[15mm] shadow-sm min-h-[297mm]"
                    style={{ margin: "0 auto" }}
                >
                    {/* Header / Profile with Photo and Introduction */}
                    <div className="flex gap-8 mb-12">
                        {/* Left: Photo */}
                        <div className="flex-shrink-0">
                            <div className="w-40 h-40 rounded-lg overflow-hidden border-4 border-muted bg-muted">
                                <ImageWithFallback
                                    src={t('profile.photo')}
                                    alt="Profile Photo"
                                    className="w-full h-full object-cover"
                                    style={{ objectPosition: 'center 20%' }}
                                />
                            </div>
                        </div>

                        {/* Right: Profile Info and Self Introduction */}
                        <div className="flex-1">
                            <h1 className="text-3xl font-bold mb-2">{t('profile.name')}</h1>
                            <p className="text-xl text-muted-foreground mb-4">{t('profile.title')}</p>
                            <div className="flex gap-4 text-sm text-muted-foreground mb-6">
                                <span>📧 {t('profile.email')}</span>
                                <span>📍 {t('profile.location')}</span>
                            </div>
                            <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                                {t('selfIntroduction.content')}
                            </p>
                        </div>
                    </div>

                    {/* Work Experience */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold mb-6 border-b pb-2">{t('sections.workExperience')}</h2>
                        <div className="space-y-8">
                            {(t('workExperience', { returnObjects: true }) as Array<{
                                company: string;
                                period: string;
                                position: string;
                                achievements: string[];
                            }>).map((job, jobIndex) => (
                                <div key={jobIndex}>
                                    <div className="flex justify-between items-baseline mb-2">
                                        <h3 className="text-lg font-bold">{job.company}</h3>
                                        <span className="text-sm text-muted-foreground">{job.period}</span>
                                    </div>
                                    <p className="text-muted-foreground font-medium mb-2">{job.position}</p>
                                    <ul className="list-disc list-outside ml-5 text-muted-foreground space-y-1">
                                        {job.achievements.map((achievement, index) => (
                                            <li key={index}>{achievement}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Motivation */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold mb-4 border-b pb-2">{t('sections.motivation')}</h2>
                        <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                            {t('motivation.content')}
                        </p>
                    </section>

                    {/* Projects */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold mb-6 border-b pb-2">{t('sections.projects')}</h2>

                        {/* Project 1 */}
                        <div className="mb-8 break-inside-avoid">
                            <div className="flex justify-between items-baseline mb-2">
                                <h3 className="text-xl font-bold">{t('projects.poppop.title')}</h3>
                                <div className="flex items-center gap-2">
                                    <span className="text-xs text-muted-foreground">기여도</span>
                                    <span className="text-sm font-semibold text-primary">{t('projects.poppop.contribution')}</span>
                                </div>
                            </div>
                            <p className="text-sm text-muted-foreground mb-3">{t('projects.poppop.period')}</p>
                            <p className="text-sm text-foreground/80 mb-3 italic">{t('projects.poppop.description')}</p>
                            <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                                {(t('projects.poppop.achievements', { returnObjects: true }) as string[]).map((achievement: string, index: number) => (
                                    <li key={index}>{achievement}</li>
                                ))}
                            </ul>
                        </div>

                        {/* Project 2 */}
                        <div className="mb-8 break-inside-avoid">
                            <div className="flex justify-between items-baseline mb-2">
                                <h3 className="text-xl font-bold">{t('projects.cpass.title')}</h3>
                                <div className="flex items-center gap-2">
                                    <span className="text-xs text-muted-foreground">기여도</span>
                                    <span className="text-sm font-semibold text-primary">{t('projects.cpass.contribution')}</span>
                                </div>
                            </div>
                            <p className="text-sm text-muted-foreground mb-3">{t('projects.cpass.period')}</p>
                            <p className="text-sm text-foreground/80 mb-3 italic">{t('projects.cpass.description')}</p>
                            <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                                {(t('projects.cpass.achievements', { returnObjects: true }) as string[]).map((achievement: string, index: number) => (
                                    <li key={index}>{achievement}</li>
                                ))}
                            </ul>
                        </div>

                        {/* Project 3 */}
                        <div className="mb-8 break-inside-avoid">
                            <div className="flex justify-between items-baseline mb-2">
                                <h3 className="text-xl font-bold">{t('projects.brk.title')}</h3>
                                <div className="flex items-center gap-2">
                                    <span className="text-xs text-muted-foreground">기여도</span>
                                    <span className="text-sm font-semibold text-primary">{t('projects.brk.contribution')}</span>
                                </div>
                            </div>
                            <p className="text-sm text-muted-foreground mb-3">{t('projects.brk.period')}</p>
                            <p className="text-sm text-foreground/80 mb-3 italic">{t('projects.brk.description')}</p>
                            <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                                {(t('projects.brk.achievements', { returnObjects: true }) as string[]).map((achievement: string, index: number) => (
                                    <li key={index}>{achievement}</li>
                                ))}
                            </ul>
                        </div>

                        {/* Project 4 */}
                        <div className="break-inside-avoid">
                            <div className="flex justify-between items-baseline mb-2">
                                <h3 className="text-xl font-bold">{t('projects.digiLab.title')}</h3>
                                <div className="flex items-center gap-2">
                                    <span className="text-xs text-muted-foreground">기여도</span>
                                    <span className="text-sm font-semibold text-primary">{t('projects.digiLab.contribution')}</span>
                                </div>
                            </div>
                            <p className="text-sm text-muted-foreground mb-3">{t('projects.digiLab.period')}</p>
                            <p className="text-sm text-foreground/80 mb-3 italic">{t('projects.digiLab.description')}</p>
                            <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                                {(t('projects.digiLab.achievements', { returnObjects: true }) as string[]).map((achievement: string, index: number) => (
                                    <li key={index}>{achievement}</li>
                                ))}
                            </ul>
                        </div>

                    </section>

                    {/* Education */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold mb-6 border-b pb-2">{t('sections.education')}</h2>
                        <div className="space-y-4">
                            <div>
                                <div className="flex justify-between items-baseline mb-1">
                                    <h3 className="text-lg font-bold">{t('education.university')}</h3>
                                    <span className="text-sm text-muted-foreground">{t('education.period')}</span>
                                </div>
                                <p className="text-muted-foreground">{t('education.degree')}</p>
                            </div>
                        </div>
                    </section>

                    {/* Certifications */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold mb-6 border-b pb-2">{t('sections.certifications')}</h2>
                        <ul className="space-y-2">
                            {(t('certifications.items', { returnObjects: true }) as Array<{ name: string; date: string }>).map((cert, index: number) => (
                                <li key={index} className="flex justify-between items-baseline">
                                    <span className="font-medium">{cert.name}</span>
                                    <span className="text-sm text-muted-foreground">{cert.date}</span>
                                </li>
                            ))}
                        </ul>
                    </section>

                    {/* Language Scores */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold mb-6 border-b pb-2">{t('sections.languages')}</h2>
                        <ul className="space-y-2">
                            {(t('languageScores.items', { returnObjects: true }) as Array<{ name: string; score: string }>).map((lang, index: number) => (
                                <li key={index} className="flex justify-between items-baseline">
                                    <span className="font-medium">{lang.name}</span>
                                    <span className="text-sm text-muted-foreground">{lang.score}</span>
                                </li>
                            ))}
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    );
}
