import React, { useEffect, useState } from 'react';
import { enhancedFeatures } from '../data/featuresData';

interface ProgressIndicatorsProps {
  activeFeature: number;
  onFeatureClick: (index: number) => void;
}

const ProgressIndicators: React.FC<ProgressIndicatorsProps> = ({ activeFeature, onFeatureClick }) => {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  return (
    <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 hidden lg:flex flex-col space-y-4">
      {enhancedFeatures.map((feature, index) => (
        <div
          key={feature.id}
          className="relative group"
          onMouseEnter={() => setHoveredFeature(index)}
          onMouseLeave={() => setHoveredFeature(null)}
        >
          {/* Progress Indicator */}
          <button
            onClick={() => onFeatureClick(index)}
            className={`relative w-4 h-4 rounded-full transition-all duration-500 transform hover:scale-125 ${
              index === activeFeature
                ? `bg-${feature.color} ring-4 ring-${feature.color}/30`
                : index < activeFeature
                ? 'bg-white/20 ring-2 ring-white/30'
                : 'bg-white/10 ring-2 ring-white/20'
            }`}
          >
            {/* Active pulsing effect */}
            {index === activeFeature && (
              <div className={`absolute inset-0 rounded-full animate-ping bg-${feature.color} opacity-75`} />
            )}

            {/* Completion checkmark */}
            {index < activeFeature && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-1.5 h-1 rounded-full bg-white" />
              </div>
            )}
          </button>

          {/* Tooltip */}
          <div className={`absolute right-10 top-1/2 transform -translate-y-1/2 bg-black/80 backdrop-blur-sm text-white px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-300 pointer-events-none ${
            hoveredFeature === index || activeFeature === index ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
          }`}>
            <div className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full bg-${feature.color}`} />
              {feature.title}
            </div>

            {/* Quick stats tooltip */}
            {hoveredFeature === index && (
              <div className="mt-2 pt-2 border-t border-white/20">
                <div className="flex items-center justify-between text-xs text-gray-300">
                  <span>Users:</span>
                  <span className="font-semibold">{feature.interactiveData?.activeUsers}</span>
                </div>
                <div className="flex items-center justify-between text-xs text-gray-300">
                  <span>Success:</span>
                  <span className="font-semibold text-green-400">{feature.interactiveData?.successRate}</span>
                </div>
              </div>
            )}
          </div>

          {/* Progress Line */}
          {index < enhancedFeatures.length - 1 && (
            <div className={`absolute top-4 left-1/2 transform -translate-x-1/2 w-0.5 h-8 transition-all duration-500 ${
              index < activeFeature ? 'bg-white/40' : 'bg-white/10'
            }`} />
          )}
        </div>
      ))}
    </div>
  );
};

// Progress Bar Component
export const ProgressBar: React.FC<{ progress: number; isVisible: boolean }> = ({ progress, isVisible }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-1 bg-gray-900 z-50 transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'
      }`}
    >
      <div
        className="h-full bg-gradient-to-r from-crypto-purple via-pink-500 to-blue-500 transition-all duration-500 ease-out"
        style={{ width: `${progress}%` }}
      />

      {/* Progress markers */}
      <div className="absolute inset-0 flex items-center justify-between px-4">
        {enhancedFeatures.map((_, index) => (
          <div
            key={index}
            className="w-0.5 h-0.5 bg-white/50 rounded-full transition-all duration-500"
            style={{
              left: `${(index / (enhancedFeatures.length - 1)) * 100}%`,
              opacity: progress >= ((index + 1) / enhancedFeatures.length) * 100 ? 0.8 : 0.3
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ProgressIndicators;
