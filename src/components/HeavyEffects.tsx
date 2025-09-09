import { PropsWithChildren, useMemo } from 'react';
import { shouldEnableHeavyEffects } from '@/utils/animationGate';

export default function HeavyEffects({ children }: PropsWithChildren) {
  const ok = useMemo(() => {
    try { return shouldEnableHeavyEffects(); } catch { return false; }
  }, []);
  return ok ? <>{children}</> : null;
}