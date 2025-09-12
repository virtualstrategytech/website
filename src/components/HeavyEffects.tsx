import React, { PropsWithChildren, useMemo } from 'react';
import { ENABLE_ANIM } from '@/utils/flags';
import { shouldEnableHeavyEffects } from '@/utils/animationGate';
import HeroVortex from '@/components/HeroVortex';

export default function HeavyEffects({ children }: PropsWithChildren) {
  const ok = useMemo(() => {
    try {
      return ENABLE_ANIM && shouldEnableHeavyEffects();
    } catch {
      return false;
    }
  }, []);

  if (!ok) return <>{children}</>;

  return <HeroVortex className="hero">{children}</HeroVortex>;
}