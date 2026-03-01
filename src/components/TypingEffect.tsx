import { useState, useEffect } from "react";

const roles = ["AI Developer", "ML Enthusiast", "Data Storyteller"];

const TypingEffect = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    const timeout = deleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!deleting && charIndex < current.length) {
        setCharIndex((c) => c + 1);
      } else if (!deleting && charIndex === current.length) {
        setTimeout(() => setDeleting(true), 1500);
      } else if (deleting && charIndex > 0) {
        setCharIndex((c) => c - 1);
      } else {
        setDeleting(false);
        setRoleIndex((i) => (i + 1) % roles.length);
      }
    }, timeout);

    return () => clearTimeout(timer);
  }, [charIndex, deleting, roleIndex]);

  return (
    <span className="font-body text-lg md:text-xl text-muted-foreground">
      <span className="neon-text">{roles[roleIndex].slice(0, charIndex)}</span>
      <span className="border-r-2 border-primary ml-0.5 animate-typing-cursor">&nbsp;</span>
    </span>
  );
};

export default TypingEffect;
