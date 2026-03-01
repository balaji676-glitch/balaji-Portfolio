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
        <div className="hidden md:flex gap-6">
          {links.map((l) => (
            <button key={l} onClick={() => scrollTo(l)} className="text-sm font-body text-muted-foreground hover:text-primary transition-colors duration-200">
              {l}
            </button>
          ))}
        </div>
        <button className="md:hidden text-primary" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden glass-card border-t border-glass px-4 pb-4 flex flex-col gap-3">
          {links.map((l) => (
            <button key={l} onClick={() => scrollTo(l)} className="text-sm font-body text-muted-foreground hover:text-primary transition-colors text-left py-1">
              {l}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
