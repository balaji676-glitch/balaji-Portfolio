import { Award } from "lucide-react";

const certs = [
  {
    title: "Foundations of Prompt Engineering",
    issuer: "AWS",
    year: "2025",
    link: "#",
  },
  {
    title: "Database Management System",
    issuer: "MongoDB",
    year: "2025",
    link: "https://bit.ly/4ku95x8",
  },
];

const CertificationsSection = () => (
  <section id="certifications" className="py-20 px-4 grid-bg">
    <div className="container mx-auto max-w-3xl section-fade">
      <h2 className="font-display text-2xl md:text-3xl font-bold neon-text mb-10 text-center">CERTIFICATIONS</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {certs.map((c, i) => (
          <a
            key={i}
            href={c.link}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card p-5 border border-glass neon-border-hover group transition-transform duration-300 hover:-translate-y-1 block"
          >
            <Award className="text-primary mb-3 group-hover:scale-110 transition-transform" size={28} />
            <h3 className="font-display text-sm text-foreground mb-1">{c.title}</h3>
            <p className="text-xs font-body text-muted-foreground">{c.issuer} · {c.year}</p>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default CertificationsSection;
