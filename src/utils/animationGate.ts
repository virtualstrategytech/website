export function shouldEnableHeavyEffects(): boolean {
  if (typeof window === 'undefined') return false;

  const motionOK =
    window.matchMedia?.('(prefers-reduced-motion: no-preference)')?.matches ?? false;

  const host = window.location.hostname;
  const isProd =
    host === 'virtualstrategytech.com' || host === 'www.virtualstrategytech.com';

  // Vite-style env var; default ON if not set
  const raw = (import.meta as any)?.env?.VITE_ENABLE_ANIM ?? '1';
  const flag =
    String(raw) === '1' ||
    String(raw).toLowerCase() === 'true' ||
    String(raw).toLowerCase() === 'on';

  const notIframe = window.top === window.self;

  return motionOK && isProd && flag && notIframe;
}