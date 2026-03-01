import TypingEffect from "./TypingEffect";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg">
      {/* Background image */}
      <div
        className="absolute inset-0 opacity-30"
        style={{ backgroundImage: `url(${heroBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />

      <div className="relative z-10 text-center px-4 max-w-3xl">
        <p className="font-display text-xs md:text-sm tracking-[0.3em] text-primary mb-4 animate-fade-up">WELCOME TO MY PORTFOLIO</p>
        <h1 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold mb-4 neon-text leading-tight" style={{ animationDelay: "0.1s" }}>
          Balaji P
        </h1>
        <p className="font-display text-lg sm:text-xl md:text-2xl text-foreground mb-4 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          AIML Engineer
        </p>
        <p className="font-body text-sm md:text-base text-muted-foreground mb-6 animate-fade-up" style={{ animationDelay: "0.3s" }}>
          Building Intelligent Systems for Real-World Impact
        </p>
        <div className="mb-8">
          <TypingEffect />
        </div>
        <div className="flex gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.4s" }}>
          <button onClick={() => scrollTo("projects")} className="px-6 py-3 font-display text-xs tracking-wider bg-primary text-primary-foreground rounded-md neon-border-hover font-semibold">
            VIEW PROJECTS
          </button>
          <button onClick={() => scrollTo("contact")} className="px-6 py-3 font-display text-xs tracking-wider border border-primary/40 text-primary rounded-md neon-border-hover">
            CONTACT ME
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
