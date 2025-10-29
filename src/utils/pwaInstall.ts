// Enhanced PWA Install Prompt Handler
let deferredPrompt: any = null;
let isInstalled = false;

export const handlePWAInstall = () => {
  // Check if already installed
  if (window.matchMedia('(display-mode: standalone)').matches) {
    isInstalled = true;
    return;
  }

  // Listen for the 'beforeinstallprompt' event
  const handleBeforeInstallPrompt = (e: Event) => {
    // Prevent the mini-infobar from appearing on mobile
    e.preventDefault();
    // Stash the event so it can be triggered later
    deferredPrompt = e;
    console.log('PWA install prompt captured');
  };

  // Listen for the 'appinstalled' event
  const handleAppInstalled = () => {
    isInstalled = true;
    console.log('PWA was installed successfully');
    // Clear the deferredPrompt
    deferredPrompt = null;
  };

  // Add event listeners
  window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
  window.addEventListener('appinstalled', handleAppInstalled);

  return {
    showInstallPrompt: async () => {
      if (isInstalled) {
        console.log('PWA is already installed');
        return;
      }

      if (deferredPrompt) {
        try {
          // Show the native install prompt
          deferredPrompt.prompt();
          // Wait for the user to respond to the prompt
          const { outcome } = await deferredPrompt.userChoice;

          if (outcome === 'accepted') {
            console.log('User accepted the PWA install prompt');
          } else {
            console.log('User dismissed the PWA install prompt');
          }

          // Clear the deferredPrompt
          deferredPrompt = null;
        } catch (error) {
          console.error('Error showing install prompt:', error);
          showInstallInstructions();
        }
      } else {
        console.log('No deferred prompt available, showing instructions');
        // Fallback: Show instructions
        showInstallInstructions();
      }
    }
  };
};

// Function to trigger PWA install without any alert
export const triggerPWAInstall = async () => {
  if (deferredPrompt) {
    // Directly trigger the browser's install prompt
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    console.log(`User installed PWA: ${outcome}`);
    deferredPrompt = null;
  } else {
    // If no deferred prompt available, show instructions
    showInstallInstructions();
  }
};

// Fallback install instructions
const showInstallInstructions = () => {
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
  const isAndroid = /Android/.test(navigator.userAgent);

  if (isIOS) {
    alert('Install preDoctr.pk PWA:\n\n1. In Safari, tap the Share button\n2. Select "Add to Home Screen"\n3. Tap "Add" to install\n\nGet offline access and push notifications!');
  } else if (isAndroid) {
    alert('Install preDoctr.pk PWA:\n\n1. In Chrome, tap the menu (⋯)\n2. Select "Add to Home Screen"\n3. Tap "Add" to install\n\nGet offline access and push notifications!');
  } else {
    alert('To install this app:\n\n1. In your browser, look for "Add to Home Screen" or "Install App"\n2. Follow the prompts to install\n\nGet offline access and push notifications!');
  }
};

// Initialize global PWA trigger function
if (typeof window !== 'undefined') {
  (window as any).triggerPWAInstall = triggerPWAInstall;
}

// Hook for components to use
export const usePWAInstall = () => {
  return handlePWAInstall();
};
