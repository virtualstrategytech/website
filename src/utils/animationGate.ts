// src/utils/animationGate.ts
export function shouldEnableHeavyEffects(): boolean {
  try {
    // Respect "Save-Data"
    const nav = navigator as any;
    if ('connection' in nav && nav.connection?.saveData) return false;

    // Avoid on low memory/small devices
    const mem = (navigator as any).deviceMemory ?? 4;
    if (mem < 2) return false;

    // Prefer desktop or bigger screens
    const isSmallScreen = Math.min(window.innerWidth, window.innerHeight) < 640;
    if (isSmallScreen) return false;

    return true;
  } catch {
    return false;
  }
}