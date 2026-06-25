// ─── Module-level capture (runs immediately when the JS module loads) ──────────
// This MUST be at the top level — not inside a useEffect — so that the
// beforeinstallprompt event is never missed, even if it fires before React mounts.
let deferredPrompt: any = null;
let isInstalled = false;

if (typeof window !== 'undefined') {
  // Capture the install prompt the instant the browser offers it
  window.addEventListener('beforeinstallprompt', (e: Event) => {
    e.preventDefault(); // Prevent the mini-infobar from appearing automatically
    deferredPrompt = e;
    console.log('[PWA] beforeinstallprompt captured ✓');
  });

  // Mark as installed once the user accepts
  window.addEventListener('appinstalled', () => {
    isInstalled = true;
    deferredPrompt = null;
    console.log('[PWA] App installed successfully ✓');
  });

  // Also check if already running in standalone mode (already installed)
  if (window.matchMedia('(display-mode: standalone)').matches) {
    isInstalled = true;
  }
}

// ─── Trigger the native Android install prompt ─────────────────────────────────
export const triggerPWAInstall = async (): Promise<'accepted' | 'dismissed' | 'unavailable'> => {
  if (isInstalled) {
    console.log('[PWA] Already installed');
    return 'unavailable';
  }

  if (!deferredPrompt) {
    console.warn('[PWA] No deferred prompt available — either not Android/Chrome, already installed, or prompt was not captured');
    return 'unavailable';
  }

  try {
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    console.log(`[PWA] User choice: ${outcome}`);
    deferredPrompt = null;
    return outcome === 'accepted' ? 'accepted' : 'dismissed';
  } catch (err) {
    console.error('[PWA] Error showing install prompt:', err);
    return 'unavailable';
  }
};

// ─── Check whether a native install prompt is available ───────────────────────
export const isPWAInstallAvailable = () => !isInstalled && deferredPrompt !== null;

// ─── Legacy function kept for backward compatibility (App.tsx / Index.tsx) ────
export const handlePWAInstall = () => {
  // The actual event listeners are already registered at module level above.
  // This function is a no-op now but kept so existing callers don't break.
  return {
    showInstallPrompt: triggerPWAInstall,
  };
};

// ─── Hook alias ────────────────────────────────────────────────────────────────
export const usePWAInstall = handlePWAInstall;
