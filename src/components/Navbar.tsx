import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = ["About", "Skills", "Projects", "Experience", "Certifications", "Contact"];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 glass-card border-b border-glass backdrop-blur-xl">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <button onClick={() => scrollTo("hero")} className="font-display text-sm md:text-base tracking-widest neon-text">
          BALAJI.P
        </button>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 items-center">
          {links.map((l) => (
            <button key={l} onClick={() => scrollTo(l)} className="text-sm font-body text-muted-foreground hover:text-primary transition-colors duration-200">
              {l}
            </button>
          ))}
          {/* Resume Link - Desktop */}
          <a 
            href="/Resume.html" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm font-body text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center gap-1"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-primary" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden glass-card border-t border-glass px-4 pb-4 flex flex-col gap-3">
          {links.map((l) => (
            <button key={l} onClick={() => scrollTo(l)} className="text-sm font-body text-muted-foreground hover:text-primary transition-colors text-left py-1">
              {l}
            </button>
          ))}
          {/* Resume Link - Mobile */}
          <a 
            href="/Resume.html" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm font-body text-muted-foreground hover:text-primary transition-colors text-left py-1 flex items-center gap-2"
            onClick={() => setOpen(false)}
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Resume
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
