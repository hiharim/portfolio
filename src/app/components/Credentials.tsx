import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { GraduationCap, Languages, Award } from "lucide-react";

const education = [
  {
    degree: "정보통계학 학사",
    school: "강원대학교",
    period: "2016 - 2020",
    description: ""
  }
];

const languages = [
  {
    name: "TOEIC",
    score: "905점",
    date: "2019.02"
  },
  //   {
  //     name: "OPIC",
  //     score: "IH",
  //     date: "2023.08"
  //   }
];

const certifications = [
  {
    name: "사회조사분석사2급",
    issuer: "한국산업인력공단",
    date: "2018.07"
  },
  //   {
  //     name: "SQLD",
  //     issuer: "한국데이터산업진흥원",
  //     date: "2021.03"
  //   },
  //   {
  //     name: "AWS Certified Developer",
  //     issuer: "Amazon Web Services",
  //     date: "2022.09"
  //   }
];

export function Credentials() {
  return (
    <section className="container mx-auto px-4 py-16 max-w-6xl">
      <h2 className="text-center mb-12">학력 & 자격</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* 학력 */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-lg">
              <GraduationCap className="h-5 w-5 text-primary" />
              학력
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {education.map((edu) => (
              <div key={edu.school} className="space-y-1">
                <h4 className="font-medium">{edu.degree}</h4>
                <p className="text-sm text-muted-foreground">{edu.school}</p>
                <p className="text-xs text-muted-foreground">{edu.period}</p>
                <p className="text-sm text-muted-foreground mt-2">{edu.description}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* 어학 점수 */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-lg">
              <Languages className="h-5 w-5 text-primary" />
              어학
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {languages.map((lang) => (
              <div key={lang.name} className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">{lang.name}</h4>
                  <p className="text-xs text-muted-foreground">{lang.date}</p>
                </div>
                <Badge variant="secondary" className="text-sm">
                  {lang.score}
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* 자격증 */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-lg">
              <Award className="h-5 w-5 text-primary" />
              자격증
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {certifications.map((cert) => (
              <div key={cert.name} className="space-y-1">
                <h4 className="font-medium text-sm">{cert.name}</h4>
                <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                <p className="text-xs text-muted-foreground">{cert.date}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
