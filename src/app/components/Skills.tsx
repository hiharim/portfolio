import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

interface SkillCategory {
  title: string;
  subtitle: string;
  items: string[];
}

export function Skills() {
  const { t } = useTranslation();

  const skillCategories: SkillCategory[] = t("skills.categories", {
    returnObjects: true,
  }) as any[];

  return (
    <section className="container mx-auto px-4 py-24 max-w-6xl">
      <div className="flex flex-col items-center text-center mb-16">
        <div className="px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-muted-foreground text-[10px] font-bold uppercase tracking-widest mb-4">
          {t("skills.expertise")}
        </div>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
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
            className="flex flex-col p-8 rounded-3xl border border-zinc-100 dark:border-zinc-800/50 bg-zinc-50/30 dark:bg-zinc-900/10"
          >
            <div className="mb-6">
              <h3 className="text-lg font-bold text-foreground">
                {category.title}
              </h3>
            </div>

            <div className="flex flex-wrap gap-2.5 mt-auto">
              {category.items.map((skill) => (
                <span
                  key={skill}
                  className="px-3.5 py-1.5 text-sm font-medium rounded-xl bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700 shadow-sm"
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
