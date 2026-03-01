import { ExternalLink, Github } from "lucide-react";

const ProjectsSection = () => (
  <section id="projects" className="py-20 px-4 grid-bg">
    <div className="container mx-auto max-w-3xl section-fade">
      <h2 className="font-display text-2xl md:text-3xl font-bold neon-text mb-10 text-center">PROJECTS</h2>
      <div className="glass-card p-6 md:p-8 border border-glass neon-border-hover group">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-3 h-3 rounded-full bg-primary animate-pulse-neon" />
          <h3 className="font-display text-lg md:text-xl text-foreground">Tech Interview Survival Bot</h3>
        </div>
        <p className="font-body text-sm text-muted-foreground mb-4 leading-relaxed">
          An AI-powered chatbot designed to help students prepare for technical interviews. Features include intelligent coding question generation, 
          structured explanations, and realistic mock interview simulation powered by LLM integration.
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {["AI Chatbot", "LLM Integration", "Mock Interviews", "Code Generation"].map((tag) => (
            <span key={tag} className="text-xs px-3 py-1 rounded-full border border-glass text-primary bg-primary/5 font-body">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-3">
          <a
            href="https://bit.ly/4jp6CoZ"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 text-xs font-display tracking-wider bg-primary text-primary-foreground rounded-md neon-border-hover"
          >
            <ExternalLink size={14} /> LIVE DEMO
          </a>
          <a
            href="https://bit.ly/4jp6CoZ"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 text-xs font-display tracking-wider border border-primary/40 text-primary rounded-md neon-border-hover"
          >
            <Github size={14} /> GITHUB
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default ProjectsSection;
