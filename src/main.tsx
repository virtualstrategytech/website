// src/main.tsx

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// --- Netlify Deploy Preview title marker ---
// Adds " — PREVIEW" in the browser tab only on deploy previews.
// Safe on server-side (checks window) and on production (hostname won't match).
if (
  typeof window !== 'undefined' &&
  window.location.hostname.includes('deploy-preview') &&
  !document.title.includes('PREVIEW')
) {
  document.title = `${document.title} — PREVIEW`;
}
// -------------------------------------------

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
