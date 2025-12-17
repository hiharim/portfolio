import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";

const skillCategories = [
  {
    title: "Mobile Frameworks",
    skills: ["React Native", "Flutter", "Swift", "Kotlin"]
  },
  {
    title: "Frontend",
    skills: ["React", "TypeScript", "Tailwind CSS", "Redux"]
  },
  {
    title: "Backend & Tools",
    skills: ["Firebase", "Node.js", "REST API", "GraphQL"]
  },
  {
    title: "Development",
    skills: ["Git", "CI/CD", "Figma", "App Store Deploy"]
  }
];

export function Skills() {
  return (
    <section className="container mx-auto px-4 py-16 max-w-6xl">
      <h2 className="text-center mb-12">기술 스택</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillCategories.map((category) => (
          <Card key={category.title}>
            <CardContent className="pt-6">
              <h3 className="mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
