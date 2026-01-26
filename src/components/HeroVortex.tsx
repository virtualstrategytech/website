import React, { useEffect, useMemo, useRef } from "react";

type Variant = "home" | "inner";

export type HeroVortexComponentProps = {
  /** "home" = richer/denser, "inner" = lighter but same vibe */
  variant?: Variant;
  /** Optional override for particle count */
  density?: number;
  /** Optional additional wrapper classes */
  className?: string;
  /** Content rendered above the canvas */
  children?: React.ReactNode;
};

/**
 * HeroVortexComponent
 * - Zero external deps
 * - Canvas-based "star/bubble" field using the same purple/blue texture across pages
 * - Supports lighter inner pages while keeping the home hero immersive
 */
export function HeroVortexComponent({
  variant = "home",
  density,
  className = "",
  children,
}: HeroVortexComponentProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);

  const config = useMemo(() => {
    const base = {
      // tuned to your current brand palette
      bgTopLeft: "#050814",
      bgMid: "#07112a",
      bgBottomRight: "#0b2a63",
      // particle colors (purple/blue heavy, slight teal)
      colors: ["#7c3aed", "#8b5cf6", "#3b82f6", "#60a5fa", "#06b6d4"],
      // glow colors
      glow: ["#a855f7", "#6366f1", "#22c55e", "#3b82f6"],
    };

    const isInner = variant === "inner";
    return {
      ...base,
      count:
        typeof density === "number"
          ? Math.max(30, Math.floor(density))
          : isInner
            ? 120
            : 220,
      minR: isInner ? 0.7 : 0.9,
      maxR: isInner ? 2.2 : 2.8,
      speed: isInner ? 0.12 : 0.18,
      twinkle: isInner ? 0.012 : 0.018,
      hazeAlpha: isInner ? 0.12 : 0.18,
    };
  }, [variant, density]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));

    type P = {
      x: number;
      y: number;
      r: number;
      vx: number;
      vy: number;
      a: number;
      tw: number;
      c: string;
      g: string;
    };

    const rand = (min: number, max: number) =>
      min + Math.random() * (max - min);
    const pick = (arr: string[]) => arr[Math.floor(Math.random() * arr.length)];

    let particles: P[] = [];

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;

      const rect = parent.getBoundingClientRect();
      width = Math.max(1, Math.floor(rect.width));
      height = Math.max(1, Math.floor(rect.height));

      dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Re-seed particles on resize for stability
      particles = Array.from({ length: config.count }).map(() => ({
        x: rand(0, width),
        y: rand(0, height),
        r: rand(config.minR, config.maxR),
        vx: rand(-config.speed, config.speed),
        vy: rand(-config.speed, config.speed),
        a: rand(0.35, 0.95),
        tw: rand(0.6, 1.4) * config.twinkle,
        c: pick(config.colors),
        g: pick(config.glow),
      }));
    };

    const drawBackground = () => {
      const grad = ctx.createLinearGradient(0, 0, width, height);
      grad.addColorStop(0, config.bgTopLeft);
      grad.addColorStop(0.55, config.bgMid);
      grad.addColorStop(1, config.bgBottomRight);
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      // Soft vignette for depth
      const vignette = ctx.createRadialGradient(
        width * 0.55,
        height * 0.45,
        Math.min(width, height) * 0.2,
        width * 0.55,
        height * 0.45,
        Math.max(width, height) * 0.75,
      );
      vignette.addColorStop(0, "rgba(0,0,0,0)");
      vignette.addColorStop(1, "rgba(0,0,0,0.55)");
      ctx.fillStyle = vignette;
      ctx.fillRect(0, 0, width, height);
    };

    const drawHaze = () => {
      // Very subtle fog to match home texture
      ctx.globalCompositeOperation = "screen";
      ctx.fillStyle = `rgba(99, 102, 241, ${config.hazeAlpha})`;
      ctx.beginPath();
      ctx.ellipse(
        width * 0.22,
        height * 0.58,
        width * 0.28,
        height * 0.26,
        0.2,
        0,
        Math.PI * 2,
      );
      ctx.fill();

      ctx.fillStyle = `rgba(168, 85, 247, ${config.hazeAlpha * 0.85})`;
      ctx.beginPath();
      ctx.ellipse(
        width * 0.78,
        height * 0.42,
        width * 0.34,
        height * 0.28,
        -0.25,
        0,
        Math.PI * 2,
      );
      ctx.fill();

      ctx.globalCompositeOperation = "source-over";
    };

    const drawParticle = (p: P) => {
      // Glow ring
      ctx.globalCompositeOperation = "lighter";

      const glowR = p.r * 6.5;
      const glow = ctx.createRadialGradient(
        p.x,
        p.y,
        p.r * 0.2,
        p.x,
        p.y,
        glowR,
      );
      glow.addColorStop(0, `rgba(255,255,255,${p.a * 0.1})`);
      glow.addColorStop(0.25, hexToRgba(p.g, p.a * 0.18));
      glow.addColorStop(1, "rgba(0,0,0,0)");

      ctx.fillStyle = glow;
      ctx.beginPath();
      ctx.arc(p.x, p.y, glowR, 0, Math.PI * 2);
      ctx.fill();

      // Core
      ctx.fillStyle = hexToRgba(p.c, p.a);
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();

      ctx.globalCompositeOperation = "source-over";
    };

    const step = () => {
      // clear + background
      drawBackground();
      drawHaze();

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // move
        p.x += p.vx;
        p.y += p.vy;

        // wrap
        if (p.x < -20) p.x = width + 20;
        if (p.x > width + 20) p.x = -20;
        if (p.y < -20) p.y = height + 20;
        if (p.y > height + 20) p.y = -20;

        // twinkle
        p.a += (Math.random() - 0.5) * p.tw;
        p.a = Math.max(0.25, Math.min(0.95, p.a));

        drawParticle(p);
      }

      rafRef.current = window.requestAnimationFrame(step);
    };

    const onResize = () => resize();

    resize();
    step();
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      if (rafRef.current) window.cancelAnimationFrame(rafRef.current);
    };
  }, [config]);

  return (
    <div className={`relative w-full ${className}`}>
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="absolute inset-0 h-full w-full"
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

/** Default export used by the homepage: richer vibe */
export default function HeroVortex({
  className = "",
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <HeroVortexComponent variant="home" className={className}>
      {children}
    </HeroVortexComponent>
  );
}

// ---------- helpers ----------

function hexToRgba(hex: string, alpha: number) {
  const h = hex.replace("#", "").trim();
  if (h.length !== 6) return `rgba(255,255,255,${alpha})`;
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}
