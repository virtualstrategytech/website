// src/utils/flags.ts
export const ENABLE_ANIM =
  (import.meta.env.VITE_ENABLE_ANIM ?? 'true').toLowerCase() === 'true';