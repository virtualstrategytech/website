import React, { PropsWithChildren, useEffect, useMemo, useState } from "react";
import { Vortex } from "./ui/vortex";
import { shouldEnableHeavyEffects } from "@/utils/animationGate";

type Variant = "home" | "inner";

type Props = {
  className?: string;
  backgroundColor?: string;
  baseHue?: number;
  particleCount?: number;
  rangeY?: number;

  /**
   * home = heavy/rich animation (prod only)
   * inner = lightweight but visually consistent hero background
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
    // Heavy animation ONLY on home variant (and only when gate allows it)
    if (variant === "home") {
      setEnableHeavy(shouldEnableHeavyEffects());
    } else {
      setEnableHeavy(false);
    }
  }, [variant]);

  const lightBg = useMemo(() => {
    // Lightweight “premium” background: gradient wash + soft blobs + subtle grid texture
    // (No circles/orb, no canvas-heavy work)
    return (
      <>
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950" />
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.25%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] pointer-events-none" />

        {/* Soft animated blobs (cheap to render) */}
        <div className="absolute -top-16 left-10 w-40 h-40 bg-blue-500/15 rounded-full blur-3xl animate-pulse pointer-events-none" />
        <div className="absolute top-24 right-10 w-52 h-52 bg-indigo-500/15 rounded-full blur-3xl animate-pulse delay-1000 pointer-events-none" />
        <div className="absolute bottom-24 left-20 w-48 h-48 bg-purple-500/15 rounded-full blur-3xl animate-pulse delay-2000 pointer-events-none" />

        {/* Gentle vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/20 pointer-events-none" />
      </>
    );
  }, []);

  if (!enableHeavy) {
    // Lightweight “inner pages” default OR home fallback if heavy gate is off
    return (
      <div className={`relative overflow-hidden ${className ?? ""}`}>
        {lightBg}
        <div className="relative z-10">{children}</div>
      </div>
    );
  }

  // Heavy home hero animation
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
