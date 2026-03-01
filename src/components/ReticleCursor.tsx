import { useEffect, useRef, useState, useCallback } from "react";

const CURSOR_SIZE = 40;
const LERP = 0.15;

const ReticleCursor = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: -100, y: -100 });
  const pos = useRef({ x: -100, y: -100 });
  const hoverState = useRef<"default" | "button" | "link" | "card">("default");
  const clicking = useRef(false);
  const clickTime = useRef(0);
  const rotation = useRef(0);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const updateHoverState = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLElement;
    const el = target.closest("button, a, [role='button'], input[type='submit']");
    const card = target.closest(".glass-card, .neon-border-hover, [class*='card']");

    if (el?.matches("button, input[type='submit'], [role='button']")) {
      hoverState.current = "button";
    } else if (el?.matches("a")) {
      hoverState.current = "link";
    } else if (card) {
      hoverState.current = "card";
    } else {
      hoverState.current = "default";
    }
  }, []);

  useEffect(() => {
    const touch = "ontouchstart" in window && window.matchMedia("(pointer: coarse)").matches;
    setIsTouchDevice(touch);
    if (touch) return;

    document.documentElement.style.cursor = "none";
    document.body.style.cursor = "none";

    const style = document.createElement("style");
    style.textContent = "*, *::before, *::after { cursor: none !important; }";
    document.head.appendChild(style);

    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      updateHoverState(e);
    };
    const onDown = () => {
      clicking.current = true;
      clickTime.current = performance.now();
    };
    const onUp = () => { clicking.current = false; };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);

    let raf: number;
    const neonGreen = [57, 255, 20]; // #39FF14

    const draw = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Lerp position
      pos.current.x += (mouse.current.x - pos.current.x) * LERP;
      pos.current.y += (mouse.current.y - pos.current.y) * LERP;

      const x = pos.current.x;
      const y = pos.current.y;
      const state = hoverState.current;
      rotation.current += 0.02;

      const clickDelta = (time - clickTime.current) / 300;
      const clickPulse = clickDelta < 1 ? 1 - clickDelta : 0;

      // Sizes based on state
      let outerR = state === "button" ? 24 : state === "card" ? 22 : 18;
      outerR += clickPulse * 12;
      const innerR = state === "card" ? 12 : 9;
      const glowAlpha = state === "button" ? 0.5 : state === "link" ? 0.4 : 0.25;

      // Outer glow
      const grad = ctx.createRadialGradient(x, y, 0, x, y, outerR + 20);
      grad.addColorStop(0, `rgba(${neonGreen.join(",")}, ${glowAlpha * 0.3})`);
      grad.addColorStop(1, "transparent");
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(x, y, outerR + 20, 0, Math.PI * 2);
      ctx.fill();

      // Outer ring
      ctx.strokeStyle = `rgba(${neonGreen.join(",")}, ${0.6 + clickPulse * 0.4})`;
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      ctx.arc(x, y, outerR, 0, Math.PI * 2);
      ctx.stroke();

      // Inner rotating ring (dashed)
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation.current);
      ctx.strokeStyle = `rgba(${neonGreen.join(",")}, 0.5)`;
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 6]);
      ctx.beginPath();
      ctx.arc(0, 0, innerR, 0, Math.PI * 2);
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.restore();

      // Double ring for card state
      if (state === "card") {
        ctx.strokeStyle = `rgba(${neonGreen.join(",")}, 0.3)`;
        ctx.lineWidth = 0.8;
        ctx.beginPath();
        ctx.arc(x, y, outerR + 6, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Crosshair lines
      const lineLen = state === "link" ? 12 : 7;
      const lineGap = state === "link" ? 7 : 5;
      ctx.strokeStyle = `rgba(${neonGreen.join(",")}, 0.7)`;
      ctx.lineWidth = 1;
      for (let i = 0; i < 4; i++) {
        const angle = (Math.PI / 2) * i;
        const cos = Math.cos(angle);
        const sin = Math.sin(angle);
        ctx.beginPath();
        ctx.moveTo(x + cos * lineGap, y + sin * lineGap);
        ctx.lineTo(x + cos * (lineGap + lineLen), y + sin * (lineGap + lineLen));
        ctx.stroke();
      }

      // Center dot with pulse
      const pulse = Math.sin(time * 0.005) * 0.3 + 0.7;
      ctx.fillStyle = `rgba(${neonGreen.join(",")}, ${pulse})`;
      ctx.beginPath();
      ctx.arc(x, y, 2, 0, Math.PI * 2);
      ctx.fill();

      // Click ripple
      if (clickPulse > 0) {
        ctx.strokeStyle = `rgba(${neonGreen.join(",")}, ${clickPulse * 0.6})`;
        ctx.lineWidth = 1.5 * clickPulse;
        ctx.beginPath();
        ctx.arc(x, y, outerR + (1 - clickPulse) * 25, 0, Math.PI * 2);
        ctx.stroke();
      }

      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("resize", resize);
      document.documentElement.style.cursor = "";
      document.body.style.cursor = "";
      style.remove();
    };
  }, [isTouchDevice, updateHoverState]);

  if (isTouchDevice) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[9999] pointer-events-none"
      aria-hidden="true"
    />
  );
};

export default ReticleCursor;
