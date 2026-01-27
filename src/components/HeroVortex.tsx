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
    // Goal: make INNER pages feel ~60% like the home hero:
    // - same “space” palette + small particle density + gentle motion
    // - NO big glow blobs / orbs
    // - lightweight: CSS layers + StarfieldLite

    const pc = clamp(particleCount, 300, 1600);
    const ry = clamp(rangeY, 300, 1200);

    // Density: higher particleCount -> smaller spacing (denser dots)
    // Spacing range roughly 26px (sparse) down to 14px (dense)
    const t = (pc - 300) / (1600 - 300);
    const spacing1 = clamp(Math.round(26 - t * 12), 14, 26); // main dots
    const spacing2 = clamp(Math.round(spacing1 * 1.65), 22, 44); // micro dots

    // Opacity tuned so it reads like “small bubbles” but not noisy
    const dotA1 = clamp(0.08 + t * 0.07, 0.08, 0.16);
    const dotA2 = clamp(0.05 + t * 0.05, 0.05, 0.12);

    // Motion: rangeY influences drift distance a bit (subtle)
    const drift = clamp(Math.round((ry / 800) * 70), 40, 110);

    // Space tint (blue/purple)
    const glowA = hsla(baseHue + 0, 92, 60, 0.18);
    const glowB = hsla(baseHue + 35, 92, 62, 0.14);
    const glowC = hsla(baseHue - 35, 92, 58, 0.12);

    // Base is your navy/space baseline even if passed "#070A12"
    const base = backgroundColor || "black";

    const dotsMain = `radial-gradient(circle, rgba(255,255,255,${dotA1}) 1px, transparent 1.25px)`;
    const dotsMicro = `radial-gradient(circle, rgba(255,255,255,${dotA2}) 0.8px, transparent 1.1px)`;

    return (
      <>
        {/* Local CSS for drift/twinkle without touching tailwind config */}
        <style>{`
          @keyframes vstDriftA {
            0%   { transform: translate3d(0,0,0); opacity: 1; }
            50%  { transform: translate3d(${Math.round(drift * 0.45)}px, -${Math.round(
              drift * 0.6,
            )}px, 0); opacity: 0.85; }
            100% { transform: translate3d(0,0,0); opacity: 1; }
          }
          @keyframes vstDriftB {
            0%   { transform: translate3d(0,0,0); opacity: 0.95; }
            50%  { transform: translate3d(-${Math.round(drift * 0.35)}px, ${Math.round(
              drift * 0.55,
            )}px, 0); opacity: 0.8; }
            100% { transform: translate3d(0,0,0); opacity: 0.95; }
          }
          @keyframes vstTwinkle {
            0%, 100% { opacity: 0.55; }
            50%      { opacity: 0.9; }
          }
          .vst-dotlayer {
            position: absolute;
            inset: 0;
            pointer-events: none;
            will-change: transform, opacity;
          }
          .vst-dotlayer--a { animation: vstDriftA 18s ease-in-out infinite; }
          .vst-dotlayer--b { animation: vstDriftB 26s ease-in-out infinite; }
          .vst-twinkle { animation: vstTwinkle 7s ease-in-out infinite; }
        `}</style>

        {/* Base: spacey gradient + subtle tinted radials (keeps your matching color) */}
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

        {/* Very light texture (keeps the “premium” feel) */}
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.22%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] pointer-events-none" />

        {/* Small “bubble” particles: dense dots + micro dots, drifting + twinkling */}
        <div
          className="vst-dotlayer vst-dotlayer--a vst-twinkle"
          style={{
            backgroundImage: dotsMain,
            backgroundSize: `${spacing1}px ${spacing1}px`,
            opacity: 0.85,
          }}
        />
        <div
          className="vst-dotlayer vst-dotlayer--b"
          style={{
            backgroundImage: dotsMicro,
            backgroundSize: `${spacing2}px ${spacing2}px`,
            opacity: 0.75,
            filter: "blur(0.15px)",
          }}
        />

        {/* Starfield (kept, but tuned to stay subtle) */}
        <StarfieldLite className="opacity-70" />

        {/* Vignette (adds depth, keeps text readable) */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/20 pointer-events-none" />
      </>
    );
  }, [baseHue, backgroundColor, particleCount, rangeY]);

  // Inner pages: always lightweight (no Vortex)
  if (variant === "inner") {
    return (
      <div className={`relative overflow-hidden ${className ?? ""}`}>
        {innerBg}
        <div className="relative z-10">{children}</div>
      </div>
    );
  }

  // Home page: heavy Vortex only when allowed
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

  // Home fallback: same lightweight background (matches inner look)
  return (
    <div className={`relative overflow-hidden ${className ?? ""}`}>
      {innerBg}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
