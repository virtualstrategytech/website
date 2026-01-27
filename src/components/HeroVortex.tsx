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
    // Tuned to match the Home "space" feel, but lighter (no Vortex)
    // baseHue controls the glow tint (blue/purple by default).
    const glowA = hsla(baseHue + 0, 92, 60, 0.22);
    const glowB = hsla(baseHue + 35, 92, 62, 0.18);
    const glowC = hsla(baseHue - 35, 92, 58, 0.16);

    // A navy/space baseline even if backgroundColor is passed as "#070A12"
    const base = backgroundColor || "black";

    return (
      <>
        {/* Base: spacey gradient + subtle tinted radials */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(1100px 700px at 18% 12%, ${glowA}, transparent 60%),
              radial-gradient(900px 650px at 88% 18%, ${glowB}, transparent 58%),
              radial-gradient(950px 700px at 40% 92%, ${glowC}, transparent 62%),
              linear-gradient(135deg, ${base} 0%, #071431 45%, #0b1c4a 100%)
            `,
          }}
        />

        {/* Texture overlay (very light) */}
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.25%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] pointer-events-none" />

        {/* Extra “bubble density”: subtle dot layer */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.10] bg-[radial-gradient(circle,rgba(255,255,255,0.35)_1px,transparent_1.2px)] bg-[length:18px_18px]" />

        {/* Starfield */}
        <StarfieldLite className="opacity-75" />

        {/* More glow blobs (bubbly, but lightweight) */}
        <div
          className="absolute -top-20 left-8 w-44 h-44 rounded-full blur-3xl animate-pulse pointer-events-none"
          style={{ background: glowA }}
        />
        <div
          className="absolute top-20 right-10 w-56 h-56 rounded-full blur-3xl animate-pulse delay-1000 pointer-events-none"
          style={{ background: glowB }}
        />
        <div
          className="absolute bottom-20 left-24 w-52 h-52 rounded-full blur-3xl animate-pulse delay-2000 pointer-events-none"
          style={{ background: glowC }}
        />

        <div
          className="absolute top-40 left-1/2 -translate-x-1/2 w-60 h-60 rounded-full blur-3xl animate-pulse delay-[1500ms] pointer-events-none"
          style={{ background: hsla(baseHue + 15, 90, 60, 0.12) }}
        />
        <div
          className="absolute bottom-40 right-28 w-44 h-44 rounded-full blur-3xl animate-pulse delay-[2500ms] pointer-events-none"
          style={{ background: hsla(baseHue + 60, 90, 60, 0.1) }}
        />
        <div
          className="absolute top-16 left-1/3 w-40 h-40 rounded-full blur-3xl animate-pulse delay-[500ms] pointer-events-none"
          style={{ background: hsla(baseHue - 60, 90, 60, 0.1) }}
        />

        {/* Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/25 pointer-events-none" />
      </>
    );
  }, [baseHue, backgroundColor]);

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
