import { useEffect, useRef, useState } from "react";

const skills = [
  "Python", "Java", "JavaScript", "Machine Learning", "TensorFlow",
  "Scikit-learn", "NLP", "SQL", "MongoDB", "Git", "Power BI",
  "Pandas", "NumPy",
];

const SkillsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 px-4">
      <div ref={sectionRef} className="container mx-auto max-w-3xl">
        <h2 className="font-display text-2xl md:text-3xl font-bold neon-text mb-12 text-center">
          SKILLS
        </h2>
        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          {skills.map((skill, i) => (
            <span
              key={skill}
              className="skill-badge font-display text-xs md:text-sm tracking-wider px-5 py-2.5 rounded-full border border-primary/20 bg-card/60 backdrop-blur-sm text-primary cursor-default select-none transition-all duration-300 hover:border-primary/60 hover:shadow-[0_0_12px_hsl(var(--primary)/0.4),0_0_30px_hsl(var(--primary)/0.15)] hover:scale-105"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 0.6s ease-out ${i * 0.1}s, transform 0.6s ease-out ${i * 0.1}s, border-color 0.3s, box-shadow 0.3s, scale 0.3s`,
              }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
