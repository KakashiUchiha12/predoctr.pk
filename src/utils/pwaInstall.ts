// PWA Install Prompt Handler
let deferredPrompt: any;

export const handlePWAInstall = () => {
  // Listen for the 'beforeinstallprompt' event
  window.addEventListener('beforeinstallprompt', (e) => {
    // Prevent the mini-infobar from appearing on mobile
    e.preventDefault();
    // Stash the event so it can be triggered later
    deferredPrompt = e;
  });

  // Listen for the 'appinstalled' event
  window.addEventListener('appinstalled', () => {
    // User has installed the PWA
    console.log('PWA was installed');
    // Clear the deferredPrompt
    deferredPrompt = null;
  });

  return {
    showInstallPrompt: async () => {
      if (deferredPrompt) {
        // Show the native install prompt
        deferredPrompt.prompt();
        // Wait for the user to respond to the prompt
        const { outcome } = await deferredPrompt.userChoice;
        console.log(`User response to the install prompt: ${outcome}`);
        // Clear the deferredPrompt
        deferredPrompt = null;
      } else {
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
