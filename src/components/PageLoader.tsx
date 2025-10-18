import React from 'react';

interface PageLoaderProps {
  message?: string;
  variant?: 'default' | 'minimal' | 'shimmer';
}

const PageLoader: React.FC<PageLoaderProps> = ({
  message = "Loading...",
  variant = 'default'
}) => {
  if (variant === 'minimal') {
    return (
      <div className="flex items-center justify-center min-h-[200px]">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-crypto-purple rounded-full animate-bounce [animation-delay:-0.3s]"></div>
          <div className="w-3 h-3 bg-crypto-purple rounded-full animate-bounce [animation-delay:-0.15s]"></div>
          <div className="w-3 h-3 bg-crypto-purple rounded-full animate-bounce"></div>
        </div>
      </div>
    );
  }

  if (variant === 'shimmer') {
    return (
      <div className="space-y-4 animate-pulse">
        <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-3/4"></div>
        <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-full"></div>
        <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-5/6"></div>
      </div>
    );
  }

  // Default loader
  return (
    <div className="flex flex-col items-center justify-center min-h-[300px] space-y-4">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-gray-200 dark:border-gray-700 border-t-crypto-purple rounded-full animate-spin"></div>
        <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-t-crypto-light-purple rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
      </div>
      <p className="text-gray-600 dark:text-gray-400 text-sm">{message}</p>
    </div>
  );
};

export default PageLoader;
