import React, { PropsWithChildren, useEffect, useState } from 'react';
import { Vortex } from './ui/vortex';
import { shouldEnableHeavyEffects } from '@/utils/animationGate';

type Props = {
  className?: string;
  backgroundColor?: string;
  baseHue?: number;
  particleCount?: number;
  rangeY?: number;
};

export default function HeroVortex({
  children,
  className,
  backgroundColor = 'black',
  baseHue = 220,
  particleCount = 1200,
  rangeY = 800,
}: PropsWithChildren<Props>) {
  const [enable, setEnable] = useState(false);
  useEffect(() => { setEnable(shouldEnableHeavyEffects()); }, []);

  if (!enable) {
    // Static fallback container with same sizing/classes
    return <div className={className + ' hero'}>{children}</div>;
  }

  return (
    <Vortex
      backgroundColor={backgroundColor}
      baseHue={250}
      particleCount={1200}
      rangeY={1200}
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