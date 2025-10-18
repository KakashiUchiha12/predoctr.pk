import React, { useEffect, useState } from 'react';

const SplashScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Show splash screen for at least 2 seconds, then fade out
    const timer = setTimeout(() => {
      setIsVisible(false);
      // Allow time for fade animation before calling onComplete
      setTimeout(onComplete, 500);
    }, 2000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-500 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      } bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 dark:from-[#2A3A5C] dark:via-[#1F2937] dark:to-[#111827]`}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-crypto-purple/5 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-crypto-light-purple/5 rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>
      </div>

      {/* Logo and brand */}
      <div className="relative z-10 text-center">
        {/* Logo */}
        <div className="relative mb-6">
          <img
            src="favicon/cropped-Blue-Stethoscope-Medical-Logo-3-1-1.png"
            alt="preDoctr.pk"
            className="h-16 w-auto mx-auto animate-float"
          />
        </div>

        {/* Brand text */}
        <div className="inline-flex items-center">
          <h1 className="text-3xl font-bold">
            <span className="text-slate-900 dark:text-white">pre</span><span className="text-crypto-purple">Doctr.pk</span>
          </h1>
        </div>

        {/* Loading indicator */}
        <div className="mt-8 flex justify-center">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-crypto-purple rounded-full animate-bounce [animation-delay:-0.3s]"></div>
            <div className="w-3 h-3 bg-crypto-purple rounded-full animate-bounce [animation-delay:-0.15s]"></div>
            <div className="w-3 h-3 bg-crypto-purple rounded-full animate-bounce"></div>
          </div>
        </div>

        {/* Loading text */}
        <p className="mt-4 text-sm text-slate-600 dark:text-slate-400 animate-pulse">
          Preparing your learning experience...
        </p>
      </div>
    </div>
  );
};

export default SplashScreen;
