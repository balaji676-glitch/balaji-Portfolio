const experiences = [
  {
    company: "Saiket Systems (MSME Approved)",
    role: "Machine Learning Virtual Intern",
    date: "Feb 2026",
    points: [
      "Worked on ML workflows including data analysis, modeling, and algorithm development.",
      "Explored AI-driven solutions for real-world problem scenarios.",
      "Contributed to data-driven project implementation and analysis.",
    ],
    link: "https://github.com/balaji676-glitch/Certificates/blob/main/Saiket-Intern.pdf",
  },
  {
    company: "Tata Consultancy Services",
    role: "Virtual Intern – AI Data Analytics",
    date: "Dec 2025",
    points: [
      "Completed AI-powered data analytics simulation focused on business collections strategy.",
      "Developed predictive models to identify delinquency patterns.",
      "Created business reports and data storytelling presentations.",
    ],
    link: "https://www.theforage.com/completion-certificates/ifobHAoMjQs9s6bKS/gMTdCXwDdLYoXZ3wG_ifobHAoMjQs9s6bKS_68d8104bfcbd11287cc4455b_1766246121175_completion_certificate.pdf",
  },
];

const ExperienceSection = () => (
  <section id="experience" className="py-20 px-4">
    <div className="container mx-auto max-w-3xl section-fade">
      <h2 className="font-display text-2xl md:text-3xl font-bold neon-text mb-10 text-center">EXPERIENCE</h2>
      <div className="relative pl-8 border-l-2 border-primary/30 space-y-10">
        {/* Animated glow line */}
        <div className="absolute left-[-1px] top-0 w-0.5 bg-primary animate-glow-line" />

        {experiences.map((exp, i) => (
          <div key={i} className="relative">
            <div className="absolute -left-[2.45rem] top-1 w-4 h-4 rounded-full border-2 border-primary bg-background" />
            <div className="glass-card p-5 md:p-6 border border-glass neon-border-hover">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className="font-display text-sm md:text-base text-foreground">{exp.company}</h3>
                <span className="text-xs font-display text-primary tracking-wider">{exp.date}</span>
              </div>
              <p className="text-xs font-body text-primary mb-3">{exp.role}</p>
              <ul className="space-y-1.5">
                {exp.points.map((p, j) => (
                  <li key={j} className="text-xs md:text-sm font-body text-muted-foreground flex gap-2">
                    <span className="text-primary mt-1">▹</span> {p}
                  </li>
                ))}
              </ul>
              <a href={exp.link} target="_blank" rel="noopener noreferrer" className="inline-block mt-3 text-xs font-display text-primary hover:underline tracking-wider">
                VIEW CERTIFICATE →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ExperienceSection;
