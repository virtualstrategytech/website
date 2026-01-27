import React, { PropsWithChildren, useEffect, useMemo, useState } from "react";
import { Vortex } from "./ui/vortex";
import { shouldEnableHeavyEffects } from "@/utils/animationGate";

type Variant = "home" | "inner";

type Props = {
  className?: string;

  /**
   * Background behind particles (used by Vortex).
   * Keep it dark navy/near-black for the VST look.
   */
  backgroundColor?: string;

  /**
   * Hue seed used by Vortex color palette.
   * 220–280 tends to stay in the blue/purple family.
   */
  baseHue?: number;

  /**
   * Particle count for Vortex.
   * Higher = denser. Inner variant is clamped for laptop safety.
   */
  particleCount?: number;

  /**
   * Vertical travel range for Vortex particles.
   * Higher = more vertical dispersion.
   */
  rangeY?: number;

  /**
   * home = heavy/rich animation (Home page only)
   * inner = lighter, smaller particles, still “Vortex-like” and coherent with home
   */
  variant?: Variant;
};

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

export default function HeroVortex({
  children,
  className,
  backgroundColor = "#070A12",
  baseHue = 220,
  particleCount = 1200,
  rangeY = 800,
  variant = "home",
}: PropsWithChildren<Props>) {
  const [enableHeavy, setEnableHeavy] = useState(false);

  useEffect(() => {
    // Only allow the heavier home animation when the device/browser passes your gate.
    if (variant === "home") {
      setEnableHeavy(shouldEnableHeavyEffects());
    } else {
      setEnableHeavy(false);
    }
  }, [variant]);

  /**
   * INNER “60% of home” settings:
   * - small particles
   * - lower speeds
   * - clamped particle counts
   * This keeps it coherent with home without melting laptops.
   */
  const innerSettings = useMemo(() => {
    // These clamps are the safety net.
    const pc = clamp(particleCount, 500, 950);
    const ry = clamp(rangeY, 450, 900);

    // Keep the inner pages in the blue/purple family unless you intentionally change it.
    const hue = clamp(baseHue, 200, 285);

    return {
      particleCount: pc,
      rangeY: ry,
      baseHue: hue,

      // Smaller + calmer than home:
      baseSpeed: 0.018,
      rangeSpeed: 0.14,

      // “Small bubbles” (no big orbs):
      baseRadius: 0.55,
      rangeRadius: 0.85,
    };
  }, [particleCount, rangeY, baseHue]);

  // INNER variant: always lightweight Vortex (small particles, laptop-safe)
  if (variant === "inner") {
    return (
      <Vortex
        backgroundColor={backgroundColor}
        baseHue={innerSettings.baseHue}
        particleCount={innerSettings.particleCount}
        rangeY={innerSettings.rangeY}
        baseSpeed={innerSettings.baseSpeed}
        rangeSpeed={innerSettings.rangeSpeed}
        baseRadius={innerSettings.baseRadius}
        rangeRadius={innerSettings.rangeRadius}
        className={className}
      >
        {children}
      </Vortex>
    );
  }

  // HOME variant: use heavy only if allowed; otherwise fall back to the same inner-safe Vortex
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

  // HOME fallback (no heavy): keep it coherent instead of switching to a totally different background
  return (
    <Vortex
      backgroundColor={backgroundColor}
      baseHue={innerSettings.baseHue}
      particleCount={innerSettings.particleCount}
      rangeY={innerSettings.rangeY}
      baseSpeed={innerSettings.baseSpeed}
      rangeSpeed={innerSettings.rangeSpeed}
      baseRadius={innerSettings.baseRadius}
      rangeRadius={innerSettings.rangeRadius}
      className={className}
    >
      {children}
    </Vortex>
  );
}
