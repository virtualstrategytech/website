import React, { useEffect, useMemo, useRef, useState } from "react";

type StarfieldLiteProps = {
  className?: string;

  /**
   * Particles per pixel (very small number).
   * Scales dot count with screen area, but capped internally.
   */
  density?: number;

  /**
   * Base drift speed. Keep low for “premium subtle motion”.
   */
  speed?: number;

  /**
   * Opacity multiplier for dots (0..1).
   */
  dotOpacity?: number;

  /**
   * Hard caps to keep laptops safe.
   */
  minParticles?: number;
  maxParticles?: number;

  /**
   * Dot size range in CSS pixels.
   */
  sizeMin?: number;
  sizeMax?: number;

  /**
   * Hue range (HSL) for dot colors.
   * Keep in blue/purple/pink space to match your home vibe.
   */
  hueMin?: number;
  hueMax?: number;

  /**
   * Subtle twinkle for “alive” feel (cheap + tasteful).
   */
  twinkle?: boolean;
  twinkleStrength?: number;
};

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  a: number;
  hue: number;

  // twinkle params
  tw: number; // frequency
  ph: number; // phase
};

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

export default function StarfieldLite({
  className = "",

  // Denser by default (inner pages closer to home) but still capped.
  density = 0.00014,
  speed = 0.1,
  dotOpacity = 0.72,

  minParticles = 160,
  maxParticles = 420,

  // Smaller dots = more “home hero” feel
  sizeMin = 0.6,
  sizeMax = 1.25,

  hueMin = 215,
  hueMax = 300,

  twinkle = true,
  twinkleStrength = 0.22,
}: StarfieldLiteProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const lastPaintRef = useRef<number>(0);
  const particlesRef = useRef<Particle[]>([]);
  const sizeRef = useRef<{ w: number; h: number }>({ w: 1, h: 1 });

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

    // Pause animation if hero not on screen (saves CPU)
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
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      return;
    }

    // Slightly adaptive cap based on typical laptop capability
    const hc =
      typeof navigator !== "undefined" ? navigator.hardwareConcurrency : 4;
    const perfFactor = hc && hc >= 8 ? 1 : hc && hc >= 4 ? 0.9 : 0.75;
    const capMax = Math.floor(maxParticles * perfFactor);

    const buildParticles = (
      count: number,
      w: number,
      h: number,
    ): Particle[] => {
      const arr: Particle[] = [];
      for (let i = 0; i < count; i++) {
        const hue = hueMin + Math.random() * Math.max(1, hueMax - hueMin);
        const r = sizeMin + Math.random() * Math.max(0.01, sizeMax - sizeMin);
        const a = 0.35 + Math.random() * 0.65;

        const angle = Math.random() * Math.PI * 2;
        const sp = (0.18 + Math.random() * 0.42) * speed;
        const vx = Math.cos(angle) * sp;
        const vy = Math.sin(angle) * sp;

        // twinkle frequency & phase
        const tw = 0.8 + Math.random() * 1.6; // gentle variety
        const ph = Math.random() * Math.PI * 2;

        arr.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx,
          vy,
          r,
          a,
          hue,
          tw,
          ph,
        });
      }
      return arr;
    };

    const resize = () => {
      const rect = parent.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2); // cap DPR for perf

      canvas.width = Math.max(1, Math.floor(rect.width * dpr));
      canvas.height = Math.max(1, Math.floor(rect.height * dpr));
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;

      // draw in CSS pixel coordinates
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      sizeRef.current = { w: rect.width, h: rect.height };

      const area = rect.width * rect.height;
      const rawTarget = Math.floor(area * density);

      const target = clamp(rawTarget, minParticles, capMax);
      particlesRef.current = buildParticles(target, rect.width, rect.height);
    };

    resize();

    const ro = new ResizeObserver(() => resize());
    ro.observe(parent);

    const onVis = () => {
      if (document.hidden) {
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      } else {
        lastPaintRef.current = performance.now();
        tick(lastPaintRef.current);
      }
    };

    document.addEventListener("visibilitychange", onVis);

    // throttle: ~30fps (dt >= 33ms)
    const tick = (t: number) => {
      if (!isVisible) {
        rafRef.current = requestAnimationFrame(tick);
        return;
      }

      const dt = t - lastPaintRef.current;
      if (dt < 33) {
        rafRef.current = requestAnimationFrame(tick);
        return;
      }
      lastPaintRef.current = t;

      const { w, h } = sizeRef.current;

      ctx.clearRect(0, 0, w, h);

      const time = t * 0.001; // seconds

      for (const p of particlesRef.current) {
        p.x += p.vx;
        p.y += p.vy;

        // wrap edges
        if (p.x < -5) p.x = w + 5;
        if (p.x > w + 5) p.x = -5;
        if (p.y < -5) p.y = h + 5;
        if (p.y > h + 5) p.y = -5;

        let alpha = p.a * dotOpacity;

        if (twinkle) {
          // subtle, not flickery
          const tw = 1 + twinkleStrength * Math.sin(time * p.tw + p.ph);
          alpha *= tw;
        }

        alpha = clamp(alpha, 0, 1);

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 90%, 75%, ${alpha})`;
        ctx.fill();
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    lastPaintRef.current = performance.now();
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      ro.disconnect();
      document.removeEventListener("visibilitychange", onVis);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    };
  }, [
    density,
    speed,
    dotOpacity,
    minParticles,
    maxParticles,
    sizeMin,
    sizeMax,
    hueMin,
    hueMax,
    twinkle,
    twinkleStrength,
    reducedMotion,
    isVisible,
  ]);

  if (reducedMotion) return null;

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none absolute inset-0 ${className}`}
      aria-hidden
    />
  );
}
