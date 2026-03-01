import { useState } from "react";
import { Linkedin, Github, Mail, MapPin } from "lucide-react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-3xl section-fade">
        <h2 className="font-display text-2xl md:text-3xl font-bold neon-text mb-10 text-center">CONTACT</h2>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="glass-card p-6 border border-glass neon-border-hover">
            <h3 className="font-display text-sm text-foreground mb-4">GET IN TOUCH</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm font-body text-muted-foreground">
                <Mail size={16} className="text-primary" />
                <a href="mailto:balaji06072006@gmail.com" className="hover:text-primary transition-colors">balaji06072006@gmail.com</a>
              </div>
              <div className="flex items-center gap-3 text-sm font-body text-muted-foreground">
                <MapPin size={16} className="text-primary" />
                <span>Ambattur, Chennai</span>
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              <a
                href="https://www.linkedin.com/in/balaji-p-6155b734a/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-md border border-glass flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-300 neon-border-hover"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-md border border-glass flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-300 neon-border-hover"
              >
                <Github size={18} />
              </a>
            </div>
          </div>
          <form className="glass-card p-6 border border-glass space-y-4" onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              placeholder="Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full bg-input border border-glass rounded-md px-4 py-2.5 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
            />
            <input
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full bg-input border border-glass rounded-md px-4 py-2.5 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
            />
            <textarea
              placeholder="Message"
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full bg-input border border-glass rounded-md px-4 py-2.5 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors resize-none"
            />
            <button
              type="submit"
              className="w-full py-2.5 font-display text-xs tracking-wider bg-primary text-primary-foreground rounded-md neon-border-hover"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
