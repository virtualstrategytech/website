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

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

function hsla(h: number, s: number, l: number, a: number) {
  const hh = ((h % 360) + 360) % 360;
  return `hsla(${hh}, ${s}%, ${l}%, ${a})`;
}

export default function HeroVortex({
  children,
  className,
  backgroundColor = "#070A12",
  baseHue = 235,
  particleCount = 900,
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
    /**
     * Goal:
     * - Inner pages feel ~60% like the home hero (moving tiny particles), laptop-safe
     * - No tiled “dot grid” overlays (that’s what was reading as an evenly spaced grid)
     * - No big blurry orbs
     */

    // Keep hue in your home-like band
    const h = clamp(baseHue, 210, 270);
    const base = backgroundColor || "#070A12";

    // Map the page props into a safe target count / speed (inner-only)
    // particleCount here is a "knob" (not Vortex particles), so we translate it:
    const targetParticles = clamp(Math.round(particleCount * 0.6), 280, 720);
    const minParticles = clamp(Math.round(targetParticles * 0.7), 220, 520);

    // rangeY influences perceived motion a bit (more range => slightly more drift speed)
    const speed = clamp(
      0.12 + ((clamp(rangeY, 420, 1100) - 420) / (1100 - 420)) * 0.1,
      0.12,
      0.22,
    );

    // Tiny “bubble” feel like home: small dots, high count, twinkle
    const sizeMin = 0.45;
    const sizeMax = 1.15;

    // Subtle glows (depth) — NOT big orbs
    const glowA = hsla(h + 8, 92, 60, 0.14);
    const glowB = hsla(h + 34, 92, 62, 0.11);
    const glowC = hsla(h - 22, 92, 58, 0.09);

    // Two-layer starfield (parallax) — still cheap and laptop-safe
    const farMax = clamp(Math.round(targetParticles * 0.55), 180, 420);
    const farMin = clamp(Math.round(farMax * 0.65), 140, 320);

    const nearMax = clamp(Math.round(targetParticles * 1.0), 280, 720);
    const nearMin = minParticles;

    return (
      <>
        {/* Base gradient + depth (matches home vibe) */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(1200px 760px at 18% 10%, ${glowA}, transparent 62%),
              radial-gradient(980px 720px at 88% 14%, ${glowB}, transparent 60%),
              radial-gradient(1050px 780px at 42% 92%, ${glowC}, transparent 64%),
              linear-gradient(135deg, ${base} 0%, #071431 48%, #0b1c4a 100%)
            `,
          }}
        />

        {/* Fine texture (subtle, not a grid) */}
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.20%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] pointer-events-none" />

        {/* Far layer (slower, dimmer) */}
        <StarfieldLite
          className="opacity-55"
          speed={clamp(speed * 0.55, 0.06, 0.13)}
          dotOpacity={0.55}
          minParticles={farMin}
          maxParticles={farMax}
          sizeMin={0.35}
          sizeMax={0.95}
          hueMin={210}
          hueMax={295}
          twinkle
          twinkleStrength={0.18}
        />

        {/* Near layer (primary “home-like” motion) */}
        <StarfieldLite
          className="opacity-90"
          speed={speed}
          dotOpacity={0.78}
          minParticles={nearMin}
          maxParticles={nearMax}
          sizeMin={sizeMin}
          sizeMax={sizeMax}
          hueMin={215}
          hueMax={305}
          twinkle
          twinkleStrength={0.24}
        />

        {/* Vignette for contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/18 pointer-events-none" />
      </>
    );
  }, [baseHue, backgroundColor, particleCount, rangeY]);

  if (variant === "inner") {
    return (
      <div className={`relative overflow-hidden ${className ?? ""}`}>
        {innerBg}
        <div className="relative z-10">{children}</div>
      </div>
    );
  }

  // Home: heavy Vortex when enabled (unchanged behavior)
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

  // Home fallback: same lightweight background (only if heavy effects are gated off)
  return (
    <div className={`relative overflow-hidden ${className ?? ""}`}>
      {innerBg}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
