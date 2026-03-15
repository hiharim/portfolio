import { Blocks, Code2, Smartphone, Wrench } from "lucide-react";
import { motion } from "motion/react";
import { type ReactNode } from "react";
import { useTranslation } from "react-i18next";

interface SkillCategory {
  title: string;
  subtitle: string;
  icon: ReactNode;
  gradient: string;
  iconColor: string;
  items: string[];
}

const categoryMeta = [
  {
    icon: <Smartphone className="w-6 h-6" />,
    gradient: "from-[#027DFD]/18 to-[#54C5F8]/12",
    iconColor: "text-[#027DFD] bg-[#027DFD]/15",
  },
  {
    icon: <Code2 className="w-6 h-6" />,
    gradient: "from-[#027DFD]/14 to-[#54C5F8]/8",
    iconColor: "text-[#0288D1] bg-[#0288D1]/12",
  },
  {
    icon: <Blocks className="w-6 h-6" />,
    gradient: "from-[#027DFD]/10 to-[#54C5F8]/6",
    iconColor: "text-[#039BE5] bg-[#039BE5]/10",
  },
  {
    icon: <Wrench className="w-6 h-6" />,
    gradient: "from-[#027DFD]/4 to-[#54C5F8]/2",
    iconColor: "text-[#4FC3F7] bg-[#4FC3F7]/8",
  },
];

export function Skills() {
  const { t } = useTranslation();

  const skillCategoriesData = t("skills.categories", {
    returnObjects: true,
  }) as any[];

  const skillCategories: SkillCategory[] = skillCategoriesData.map(
    (category, index) => ({
      ...category,
      ...categoryMeta[index % categoryMeta.length],
    })
  );

  return (
    <section className="container mx-auto px-4 py-24 max-w-6xl">
      <div className="mb-12">
        <p className="text-sm font-semibold text-primary/80 uppercase tracking-widest mb-2">
          {t("skills.expertise")}
        </p>
        <h2 className="text-4xl font-bold tracking-tight">
          {t("sections.skills")}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillCategories.map((category, idx) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            className={`group relative bg-gradient-to-br ${category.gradient} rounded-3xl p-6 border border-border/50 hover:border-border transition-all duration-500 hover:shadow-xl hover:-translate-y-2`}
          >
            <div className="flex flex-col items-start gap-4 mb-6">
              <div
                className={`flex items-center justify-center w-12 h-12 rounded-2xl ${category.iconColor} transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-sm`}
              >
                {category.icon}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-bold text-foreground leading-tight">
                  {category.title}
                </h3>
                <p className="text-xs text-muted-foreground mt-1">
                  {category.subtitle}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {category.items.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 text-xs font-semibold rounded-xl bg-background/80 text-foreground/80 border border-border/40 shadow-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
