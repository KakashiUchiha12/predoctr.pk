
import React from 'react';
import { Activity, Lock, Zap, Compass, LineChart, Shield } from 'lucide-react';
import { enhancedFeatures } from '../data/featuresData';
import { useTheme } from '../contexts/ThemeContext';
import ImageCarousel from './ImageCarousel';

const Features = () => {
  const { theme } = useTheme();

  return (
    <section id="features" className={`py-24 transition-all duration-500 ${
      theme === 'dark'
        ? 'bg-gradient-to-b from-[#2A3A5C] to-[#111827]'
        : 'bg-gradient-features-light'
    }`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 text-gradient ${theme === 'light' ? 'text-slate-900' : ''}`}>
            Complete MDCAT Preparation Suite
          </h2>
          <p className={`text-gray-400 max-w-2xl mx-auto ${theme === 'light' ? 'text-slate-600' : ''}`}>
            preDoctr.pk provides everything you need to ace MDCAT 2026 with our comprehensive study platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {enhancedFeatures.map((feature, index) => (
            <div
              key={index}
              className={`backdrop-blur-sm border rounded-xl p-5 md:p-6 lg:p-8 transition-all duration-300 hover:shadow-xl hover:shadow-crypto-purple/5 group animate-on-scroll ${
                theme === 'dark'
                  ? 'bg-white/5 border-white/10 hover:bg-white/10'
                  : 'bg-white border-gray-200 hover:bg-gray-50 hover:border-crypto-purple/30'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-crypto-purple/20 rounded-lg w-12 h-12 flex items-center justify-center mb-6 md:mb-8 lg:mb-12 text-crypto-purple group-hover:bg-crypto-purple/30 transition-colors duration-300">
                {feature.icon}
              </div>
              {/* Responsive image carousel - larger on laptop, maintain mobile size */}
              <div className="mb-16 md:mb-24 lg:mb-32">
                <ImageCarousel
                  images={feature.images}
                  autoScrollInterval={4000}
                  featureTitle={feature.title}
                />
              </div>

              {/* Visual Separator */}
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-gray-300/70 to-transparent mx-auto mb-6 md:mb-8 lg:mb-10"></div>

              <h3 className={`text-xl font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{feature.title}</h3>
              <p className={`text-sm leading-relaxed ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
