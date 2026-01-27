import React, { PropsWithChildren, useEffect, useMemo, useState } from "react";
import { Vortex } from "./ui/vortex";
import { shouldEnableHeavyEffects } from "@/utils/animationGate";
import StarfieldLite from "./StarfieldLite";

type Variant = "home" | "inner";

type Props = {
  className?: string;
  backgroundColor?: string;
  baseHue?: number;
  particleCount?: number;
  rangeY?: number;

  /**
   * home = heavy/rich animation (Home page only)
   * inner = lightweight, consistent particle hero (Products/Solutions/UseCases)
   */
  variant?: Variant;
};

export default function HeroVortex({
  children,
  className,
  backgroundColor = "black",
  baseHue = 220,
  particleCount = 1200,
  rangeY = 800,
  variant = "home",
}: PropsWithChildren<Props>) {
  const [enableHeavy, setEnableHeavy] = useState(false);

  useEffect(() => {
    if (variant === "home") {
      setEnableHeavy(shouldEnableHeavyEffects());
    } else {
      setEnableHeavy(false);
    }
  }, [variant]);

  const innerBg = useMemo(() => {
    return (
      <>
        {/* Base gradient (match home vibe) */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950" />

        {/* Starfield canvas (this is the “moving particles” layer) */}
        <StarfieldLite
          className="opacity-90"
          // tuned for “~60% of home feel” but laptop-safe
          density={0.01195}
          speed={1.25}
          dotOpacity={0.88}
          minParticles={160}
          maxParticles={440}
          sizeMin={0.95}
          sizeMax={2.25}
          twinkle
          twinkleStrength={1.95}
          glow
          glowScale={1.55}
          glowOpacity={1.94}
          sparkle
          sparkleStrength={1.92}
        />

        {/* Small, subtle color accents (NOT big orbs) */}
        <div className="absolute -top-10 left-10 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute top-24 right-10 w-28 h-28 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute bottom-24 left-20 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl pointer-events-none" />

        {/* Gentle vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/20 pointer-events-none" />
      </>
    );
  }, []);

  // INNER: always use lightweight background
  if (variant === "inner") {
    return (
      <div className={`relative overflow-hidden ${className ?? ""}`}>
        {innerBg}
        <div className="relative z-10">{children}</div>
      </div>
    );
  }

  // HOME: heavy vortex only if device can handle it
  if (enableHeavy) {
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

  // HOME fallback (if heavy effects disabled)
  return (
    <div className={`relative overflow-hidden ${className ?? ""}`}>
      {innerBg}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
