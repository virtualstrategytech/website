import React, { Suspense, useEffect, useRef, useState } from "react";

export interface LightVortexProps {
  className?: string;
  size?: number;
  rootMargin?: string;
  threshold?: number;
}

/**
 * Lazy loads the full LightVortex (if/when the element scrolls into view).
 * Renders a very light placeholder until the real component is loaded.
 */
const LazyLoaded = React.lazy(() => import("./LightVortex"));

export default function LightVortexLazy({
  className = "",
  size = 220,
  rootMargin = "0px",
  threshold = 0.2,
}: LightVortexProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setInView(true);
            obs.disconnect();
          }
        });
      },
      { root: null, rootMargin, threshold },
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [rootMargin, threshold]);

  // Lightweight placeholder SVG — low DOM, low animation cost, matching color palette
  const placeholder = (
    <div
      style={{ width: size, height: size }}
      className={`pointer-events-none ${className}`}
      aria-hidden
      ref={ref}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
      >
        <g fill="none" strokeLinecap="round">
          <circle
            cx="50"
            cy="50"
            r="36"
            stroke="#60a5fa"
            strokeOpacity="0.08"
            strokeWidth="6"
          />
          <circle
            cx="50"
            cy="50"
            r="26"
            stroke="#34d399"
            strokeOpacity="0.06"
            strokeWidth="4"
          />
          <circle
            cx="50"
            cy="50"
            r="16"
            stroke="#a78bfa"
            strokeOpacity="0.05"
            strokeWidth="3"
          />
        </g>
      </svg>
    </div>
  );

  return (
    <>
      {!inView && placeholder}
      {inView && (
        <Suspense fallback={placeholder}>
          <LazyLoaded className={className} size={size} />
        </Suspense>
      )}
    </>
  );
}
