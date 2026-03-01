const skills = [
  { name: "Python", level: 90 },
  { name: "Java", level: 75 },
  { name: "JavaScript", level: 70 },
  { name: "Machine Learning", level: 85 },
  { name: "TensorFlow", level: 70 },
  { name: "Scikit-learn", level: 80 },
  { name: "NLP", level: 65 },
  { name: "SQL / MongoDB", level: 75 },
  { name: "Pandas / NumPy", level: 85 },
  { name: "Power BI / Matplotlib", level: 70 },
];

const tools = ["Git", "VS Code", "Jupyter Notebook", "TensorFlow", "Power BI"];

const SkillsSection = () => (
  <section id="skills" className="py-20 px-4">
    <div className="container mx-auto max-w-3xl section-fade">
      <h2 className="font-display text-2xl md:text-3xl font-bold neon-text mb-10 text-center">SKILLS</h2>
      <div className="space-y-4">
        {skills.map((s) => (
          <div key={s.name} className="group">
            <div className="flex justify-between mb-1">
              <span className="text-sm font-body text-foreground">{s.name}</span>
              <span className="text-xs font-display text-primary">{s.level}%</span>
            </div>
            <div className="h-2 rounded-full bg-muted overflow-hidden">
              <div
                className="h-full rounded-full bg-primary animate-skill-fill"
                style={{ "--skill-level": `${s.level}%`, width: `${s.level}%` } as React.CSSProperties}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-10 flex flex-wrap gap-3 justify-center">
        {tools.map((t) => (
          <span key={t} className="glass-card px-4 py-2 text-xs font-display tracking-wider text-primary neon-border-hover border border-glass cursor-default">
            {t}
          </span>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
