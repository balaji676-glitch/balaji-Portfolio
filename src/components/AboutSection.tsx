const AboutSection = () => (
  <section id="about" className="py-20 px-4 grid-bg">
    <div className="container mx-auto max-w-3xl section-fade">
      <h2 className="font-display text-2xl md:text-3xl font-bold neon-text mb-8 text-center">ABOUT ME</h2>
      <div className="glass-card p-6 md:p-8 neon-border-hover border border-glass">
        <p className="font-body text-muted-foreground leading-relaxed text-sm md:text-base">
          Pre-final year B.Tech student in <span className="text-primary font-medium">Artificial Intelligence and Data Science</span> with 
          hands-on experience in Python, Java, and JavaScript for AI development and data analysis. Passionate about building 
          AI-powered solutions that translate complex technical concepts into practical, real-world applications. Strong interest 
          in applied <span className="text-primary font-medium">Machine Learning</span>, <span className="text-primary font-medium">NLP</span>, and data-driven problem solving.
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {["B.Tech AI & DS", "Anand Institute of Higher Technology", "CGPA: 7.41"].map((tag) => (
            <span key={tag} className="text-xs font-display tracking-wider px-3 py-1 rounded-full border border-glass text-primary bg-primary/5">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
