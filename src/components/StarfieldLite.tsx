import React, { useEffect, useMemo, useRef, useState } from "react";

type StarfieldLiteProps = {
  className?: string;

  /**
   * Particles per pixel (very small number).
   * This scales dot count with screen area, but is capped internally.
   */
  density?: number;

  /**
   * Base drift speed. Keep low for “premium subtle motion”.
   */
  speed?: number;

  /**
   * Opacity of the dots (0..1). Keep subtle.
   */
  dotOpacity?: number;
};

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  a: number;
  hue: number;
};

export default function StarfieldLite({
  className = "",
  density = 0.00008,
  speed = 0.12,
  dotOpacity = 0.65,
}: StarfieldLiteProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const lastRef = useRef<number>(0);
  const particlesRef = useRef<Particle[]>([]);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const prefersReducedMotion = useMemo(() => {
    if (typeof window === "undefined") return false;
    return (
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false
    );
  }, []);

  useEffect(() => {
    setReducedMotion(prefersReducedMotion);
  }, [prefersReducedMotion]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Pause animation if the hero is not on screen (saves CPU)
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsVisible(entry?.isIntersecting ?? true);
      },
      { threshold: 0.15 },
    );

    observer.observe(canvas);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const parent = canvas.parentElement;
    if (!parent) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    if (reducedMotion) {
      // Respect accessibility preference
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      return;
    }

    // Resize helper (retina-safe)
    const resize = () => {
      const rect = parent.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2); // cap DPR for perf
      canvas.width = Math.max(1, Math.floor(rect.width * dpr));
      canvas.height = Math.max(1, Math.floor(rect.height * dpr));
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // (Re)build particles based on area
      const area = rect.width * rect.height;
      const target = Math.min(240, Math.max(120, Math.floor(area * density)));
      particlesRef.current = buildParticles(target, rect.width, rect.height);
    };

    const buildParticles = (
      count: number,
      w: number,
      h: number,
    ): Particle[] => {
      const arr: Particle[] = [];
      for (let i = 0; i < count; i++) {
        // Blue/purple/pink-ish range similar to home starfield vibe
        const hue = 215 + Math.random() * 85; // 215..300
        const r = 0.8 + Math.random() * 1.6; // small dots
        const a = 0.35 + Math.random() * 0.65;

        // Gentle drift
        const angle = Math.random() * Math.PI * 2;
        const sp = (0.15 + Math.random() * 0.45) * speed;
        const vx = Math.cos(angle) * sp;
        const vy = Math.sin(angle) * sp;

        arr.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx,
          vy,
          r,
          a,
          hue,
        });
      }
      return arr;
    };

    resize();

    const ro = new ResizeObserver(() => resize());
    ro.observe(parent);

    const onVis = () => {
      // If tab hidden, stop painting (saves battery)
      if (document.hidden) {
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      } else {
        lastRef.current = performance.now();
        tick(lastRef.current);
      }
    };

    document.addEventListener("visibilitychange", onVis);

    // 30fps throttle for low CPU
    const tick = (t: number) => {
      if (!isVisible) {
        rafRef.current = requestAnimationFrame(tick);
        return;
      }

      const dt = t - lastRef.current;
      if (dt < 33) {
        rafRef.current = requestAnimationFrame(tick);
        return;
      }
      lastRef.current = t;

      const w = parent.getBoundingClientRect().width;
      const h = parent.getBoundingClientRect().height;

      ctx.clearRect(0, 0, w, h);

      // draw + update
      for (const p of particlesRef.current) {
        p.x += p.vx;
        p.y += p.vy;

        // wrap edges
        if (p.x < -5) p.x = w + 5;
        if (p.x > w + 5) p.x = -5;
        if (p.y < -5) p.y = h + 5;
        if (p.y > h + 5) p.y = -5;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);

        // soft glow-ish without blur (cheap)
        ctx.fillStyle = `hsla(${p.hue}, 90%, 75%, ${p.a * dotOpacity})`;
        ctx.fill();
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    lastRef.current = performance.now();
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      ro.disconnect();
      document.removeEventListener("visibilitychange", onVis);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    };
  }, [density, speed, dotOpacity, reducedMotion, isVisible]);

  if (reducedMotion) return null;

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none absolute inset-0 ${className}`}
      aria-hidden
    />
  );
}
