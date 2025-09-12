import React, { PropsWithChildren, useEffect, useState } from 'react';
import { Vortex } from '@/components/ui/vortex';
import { shouldEnableHeavyEffects } from '@/utils/animationGate';

type Props = {
  className?: string;
  backgroundColor?: string;
  baseHue?: number;
  particleCount?: number;
  rangeY?: number;
  baseSpeed?: number;
  rangeSpeed?: number;
  baseRadius?: number;
  rangeRadius?: number;
};

export default function HeroVortex({
  children,
  className = '',
  backgroundColor = 'black',
  baseHue = 250,
  particleCount = 1200,
  rangeY = 1200,
  baseSpeed = 0.05,
  rangeSpeed = 0.4,
  baseRadius = 1.5,
  rangeRadius = 1.5,
}: PropsWithChildren<Props>) {
  const [enable, setEnable] = useState(false);

  useEffect(() => {
    setEnable(shouldEnableHeavyEffects());
  }, []);

  // Fallback to a static container if we decide not to render heavy effects
  if (!enable) {
    return <div className={className}>{children}</div>;
  }

  return (
    <Vortex
      backgroundColor={backgroundColor}
      baseHue={baseHue}
      particleCount={particleCount}
      rangeY={rangeY}
      baseSpeed={baseSpeed}
      rangeSpeed={rangeSpeed}
      baseRadius={baseRadius}
      rangeRadius={rangeRadius}
      className={className}
    >
      {children}
    </Vortex>
  );
}