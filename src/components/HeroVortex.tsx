import React, { PropsWithChildren, useEffect, useState } from "react";
import { Vortex } from "./ui/vortex";
import { shouldEnableHeavyEffects } from "@/utils/animationGate";

type HeroVortexVariant = "home" | "inner";

type Props = {
  /**
   * home  = rich / heavy (uses the Vortex component when allowed)
   * inner = lightweight ambient motion (safe for cheaper laptops)
   */
  variant?: HeroVortexVariant;

  className?: string;

  /**
   * Vortex (heavy) props — used only when variant="home" AND heavy effects are enabled
   */
  backgroundColor?: string;
  baseHue?: number;
  particleCount?: number;
  rangeY?: number;

  /**
   * Lightweight ambient intensity (only affects the fallback / inner mode)
   */
  ambient?: "subtle" | "standard";
};

function AmbientBackground({
  children,
  className = "",
  ambient = "standard",
}: PropsWithChildren<Pick<Props, "className" | "ambient">>) {
  const opacity = ambient === "subtle" ? "opacity-20" : "opacity-35";

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Base gradient (same vibe as home) */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900" />

      {/* Soft texture/noise (cheap, avoids flatness) */}
      <div
        className="absolute inset-0 opacity-[0.08] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.65' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='160' height='160' filter='url(%23n)' opacity='.22'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Ambient color accents (NO white spheres/orbs) */}
      <div className={`pointer-events-none absolute inset-0 ${opacity}`}>
        <div className="vst-blob vst-blob-a" />
        <div className="vst-blob vst-blob-b" />
        <div className="vst-blob vst-blob-c" />

        {/* faint spotlight gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(1200px_circle_at_50%_0%,rgba(16,185,129,0.18),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(900px_circle_at_85%_35%,rgba(99,102,241,0.18),transparent_60%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10">{children}</div>

      {/* Local styles (no global CSS changes) */}
      <style>{`
        @keyframes vstFloatA {
          0%   { transform: translate3d(0,0,0) scale(1); }
          35%  { transform: translate3d(40px, -20px, 0) scale(1.05); }
          70%  { transform: translate3d(-20px, 30px, 0) scale(1.02); }
          100% { transform: translate3d(0,0,0) scale(1); }
        }
        @keyframes vstFloatB {
          0%   { transform: translate3d(0,0,0) scale(1); }
          40%  { transform: translate3d(-50px, 10px, 0) scale(1.06); }
          80%  { transform: translate3d(30px, -25px, 0) scale(1.02); }
          100% { transform: translate3d(0,0,0) scale(1); }
        }
        @keyframes vstFloatC {
          0%   { transform: translate3d(0,0,0) scale(1); }
          30%  { transform: translate3d(25px, 35px, 0) scale(1.05); }
          75%  { transform: translate3d(-35px, -10px, 0) scale(1.02); }
          100% { transform: translate3d(0,0,0) scale(1); }
        }

        .vst-blob {
          position: absolute;
          width: 38rem;
          height: 38rem;
          border-radius: 9999px;
          filter: blur(70px);
          will-change: transform;
        }
        .vst-blob-a {
          top: -14rem;
          left: -14rem;
          background: rgba(16,185,129,0.38); /* emerald */
          animation: vstFloatA 46s ease-in-out infinite;
        }
        .vst-blob-b {
          top: 18%;
          right: -18rem;
          width: 34rem;
          height: 34rem;
          background: rgba(99,102,241,0.32); /* indigo */
          animation: vstFloatB 54s ease-in-out infinite;
        }
        .vst-blob-c {
          bottom: -16rem;
          left: 22%;
          width: 36rem;
          height: 36rem;
          background: rgba(59,130,246,0.26); /* blue */
          animation: vstFloatC 60s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .vst-blob-a, .vst-blob-b, .vst-blob-c {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
}

export default function HeroVortex({
  children,
  variant = "home",
  className,
  backgroundColor = "black",
  baseHue = 220,
  particleCount = 1200,
  rangeY = 800,
  ambient = "standard",
}: PropsWithChildren<Props>) {
  const [enableHeavy, setEnableHeavy] = useState(false);

  useEffect(() => {
    // Only attempt heavy effects for HOME.
    if (variant === "home") {
      setEnableHeavy(shouldEnableHeavyEffects());
    } else {
      setEnableHeavy(false);
    }
  }, [variant]);

  // HOME: heavy vortex when allowed; otherwise ambient fallback
  if (variant === "home") {
    if (!enableHeavy) {
      return (
        <AmbientBackground className={className} ambient={ambient}>
          {children}
        </AmbientBackground>
      );
    }

    return (
      <Vortex
        backgroundColor={backgroundColor}
        baseHue={baseHue}
        particleCount={particleCount}
        rangeY={rangeY}
        baseSpeed={0.05}
        rangeSpeed={0.4}
        baseRadius={1.5}
        rangeRadius={1.5}
        className={className}
      >
        {children}
      </Vortex>
    );
  }

  // INNER PAGES: always lightweight ambient (consistent + safe)
  return (
    <AmbientBackground
      className={className}
      ambient={ambient === "subtle" ? "subtle" : "standard"}
    >
      {children}
    </AmbientBackground>
  );
}
