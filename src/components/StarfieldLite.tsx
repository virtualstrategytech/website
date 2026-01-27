import React, { useEffect, useMemo, useRef, useState } from "react";

type StarfieldLiteProps = {
  className?: string;

  /**
   * Base drift speed (tuned in HeroVortex).
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
   */
  hueMin?: number;
  hueMax?: number;

  /**
   * Subtle twinkle for “alive” feel.
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

  tw: number; // frequency
  ph: number; // phase
};

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

export default function StarfieldLite({
  className = "",

  speed = 0.12,
  dotOpacity = 0.75,

  minParticles = 220,
  maxParticles = 520,

  sizeMin = 0.45,
  sizeMax = 1.15,

  hueMin = 215,
  hueMax = 305,

  twinkle = true,
  twinkleStrength = 0.22,
}: StarfieldLiteProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);

  const lastTRef = useRef<number>(0);
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

    // Adaptive cap based on laptop capability
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

        // velocity in px/sec (we dt-scale below)
        const sp = (6 + Math.random() * 14) * speed; // 6..20 * speed
        const vx = Math.cos(angle) * sp;
        const vy = Math.sin(angle) * sp;

        const tw = 0.8 + Math.random() * 1.6;
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
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = Math.max(1, Math.floor(rect.width * dpr));
      canvas.height = Math.max(1, Math.floor(rect.height * dpr));
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;

      // draw in CSS pixel coordinates
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      sizeRef.current = { w: rect.width, h: rect.height };

      const target = clamp(
        Math.floor((minParticles + capMax) / 2),
        minParticles,
        capMax,
      );
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
        lastTRef.current = performance.now();
        lastPaintRef.current = lastTRef.current;
        tick(lastTRef.current);
      }
    };

    document.addEventListener("visibilitychange", onVis);

    // throttle: ~30fps
    const tick = (t: number) => {
      if (!isVisible) {
        rafRef.current = requestAnimationFrame(tick);
        return;
      }

      const dtPaint = t - lastPaintRef.current;
      if (dtPaint < 33) {
        rafRef.current = requestAnimationFrame(tick);
        return;
      }
      lastPaintRef.current = t;

      const dt = Math.min(80, Math.max(10, t - (lastTRef.current || t))); // ms
      lastTRef.current = t;
      const dtSec = dt / 1000;

      const { w, h } = sizeRef.current;
      ctx.clearRect(0, 0, w, h);

      const time = t * 0.001;

      for (const p of particlesRef.current) {
        // move (dt-scaled)
        p.x += p.vx * dtSec;
        p.y += p.vy * dtSec;

        // wrap
        if (p.x < -8) p.x = w + 8;
        if (p.x > w + 8) p.x = -8;
        if (p.y < -8) p.y = h + 8;
        if (p.y > h + 8) p.y = -8;

        let alpha = p.a * dotOpacity;

        if (twinkle) {
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

    lastTRef.current = performance.now();
    lastPaintRef.current = lastTRefRefFallback(lastTRef.current);
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      ro.disconnect();
      document.removeEventListener("visibilitychange", onVis);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    };
  }, [
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

// small helper so TS doesn't complain if we reorder refs later
function lastTRefRefFallback(n: number) {
  return n;
}
