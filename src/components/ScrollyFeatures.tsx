import React, { useState, useEffect, useRef } from 'react';
import { enhancedFeatures } from '../data/featuresData';
import { useTheme } from '../contexts/ThemeContext';
import { ArrowRight, Eye, Download, Users, Clock, TrendingUp, Play, ChevronDown, ChevronUp, PlayCircle, BarChart3, Users as UsersIcon, CheckCircle, Video } from 'lucide-react';
import ProgressIndicators, { ProgressBar } from './ProgressIndicators';
import ImageCarousel from './ImageCarousel';

const ScrollyFeatures = () => {
  const { theme } = useTheme();
  const [activeFeature, setActiveFeature] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down');
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isInFeaturesSection, setIsInFeaturesSection] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
  const parallaxRef = useRef<HTMLDivElement>(null);

  // Scroll-based feature detection - Much more reliable approach
  useEffect(() => {
    const handleScrollProgress = () => {
      if (!containerRef.current) return;

      const containerTop = containerRef.current.offsetTop;
      const containerHeight = containerRef.current.offsetHeight;
      const containerBottom = containerTop + containerHeight;
      const scrollY = window.scrollY;

      // Check if we're in the features section
      const windowHeight = window.innerHeight;
      const isInFeatures = scrollY >= containerTop - windowHeight && scrollY <= containerBottom + windowHeight;

      if (isInFeatures) {
        // Calculate which feature should be active based on scroll position
        const scrolledPastTop = scrollY - containerTop;
        const featureTotalHeight = containerHeight / enhancedFeatures.length;
        const activeIndex = Math.floor(scrolledPastTop / featureTotalHeight);

        // Constrain to valid range
        const constrainedIndex = Math.max(0, Math.min(enhancedFeatures.length - 1, activeIndex));

        if (constrainedIndex !== activeFeature) {
          setActiveFeature(constrainedIndex);
          setIsAnimating(true);
          // Extended animation duration for better reveal effect
          setTimeout(() => setIsAnimating(false), 1000);
        }
      }
    };

    // Throttle scroll events for better performance
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScrollProgress();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScrollProgress(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeFeature]); // Added activeFeature dependency

  // Enhanced scroll handling with parallax, section detection, and direction tracking
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrollY(scrollY);

      // Detect scroll direction
      if (scrollY > lastScrollY && scrollDirection !== 'down') {
        setScrollDirection('down');
      } else if (scrollY < lastScrollY && scrollDirection !== 'up') {
        setScrollDirection('up');
      }
      setLastScrollY(scrollY);

      if (!containerRef.current) return;

      const containerTop = containerRef.current.offsetTop;
      const containerHeight = containerRef.current.scrollHeight;
      const containerBottom = containerTop + containerHeight;

      // Check if user is within features section
      const isInFeatures = scrollY >= containerTop && scrollY <= containerBottom;
      setIsInFeaturesSection(isInFeatures);

      const height = containerRef.current.scrollHeight - window.innerHeight;
      const progress = Math.min(Math.max((scrollY - containerTop) / height, 0), 1);
      setProgress(progress * 100);
    };

    // Attach event listener with passive for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, scrollDirection]);

  // Auto-scroll to feature function
  const scrollToFeature = (index: number) => {
    const ref = contentRefs.current[index];
    if (ref) {
      ref.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  // Scroll to pricing section function
  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Scroll to hero section and play demo video function
  const scrollToHeroAndPlayVideo = () => {
    // Scroll to top of page (hero section)
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // After scroll animation completes, trigger video modal
    setTimeout(() => {
      // Create and dispatch a custom event that the Hero component can listen for
      const playVideoEvent = new CustomEvent('playDemoVideo');
      window.dispatchEvent(playVideoEvent);
    }, 800);
  };




  // Mobile optimizations and additional enhancements
  useEffect(() => {
    const handleOrientationChange = () => {
      // Recalculate positions on orientation change for mobile
      setTimeout(() => {
        if (containerRef.current) {
          const handleScroll = () => {
            if (!containerRef.current) return;
            const scrollTop = window.scrollY;
            const offsetTop = containerRef.current.offsetTop;
            const height = containerRef.current.scrollHeight - window.innerHeight;
            const progress = Math.min(Math.max((scrollTop - offsetTop) / height, 0), 1);
            setProgress(progress * 100);
          };
          handleScroll();
        }
      }, 100);
    };

    window.addEventListener('orientationchange', handleOrientationChange);
    return () => window.removeEventListener('orientationchange', handleOrientationChange);
  }, []);

  return (
    <section
      ref={containerRef}
      id="features"
      className={`min-h-screen py-24 transition-all duration-500 ${
        theme === 'dark'
          ? 'bg-gradient-to-b from-[#2A3A5C] to-[#111827]'
          : 'bg-gradient-features-light'
      }`}
    >
      {/* Enhanced Progress Bar */}
      <ProgressBar progress={progress} isVisible={isInFeaturesSection} />

      {/* Progress Indicators */}
      <ProgressIndicators activeFeature={activeFeature} onFeatureClick={scrollToFeature} />

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 text-gradient ${
            theme === 'light' ? 'text-gray-900' : ''
          }`}>
            Complete MDCAT Preparation Suite
          </h2>
          <p className={`text-gray-400 max-w-2xl mx-auto ${theme === 'light' ? 'text-gray-700' : ''}`}>
            An immersive journey through preDoctr.pk's revolutionary features. Scroll to explore each capability in detail.
          </p>
        </div>

        {/* Enhanced Parallax Background Elements - Multi-Layered Depth */}
        <div
          ref={parallaxRef}
          className="absolute inset-0 overflow-hidden pointer-events-none"
        >
          {/* Background Layer 1 - Slowest */}
          <div
            className="absolute top-20 -left-10 w-32 h-32 bg-crypto-purple/5 rounded-full blur-3xl transition-transform duration-300 ease-out"
            style={{
              transform: `translateY(${-scrollY * 0.1}px) translateX(${scrollY * 0.02}px)`,
            }}
          />
          <div
            className="absolute top-1/3 -right-16 w-40 h-40 bg-indigo-500/3 rounded-full blur-3xl transition-transform duration-400 ease-out"
            style={{
              transform: `translateY(${-scrollY * 0.08}px) translateX(${-scrollY * 0.01}px)`,
            }}
          />

          {/* Background Layer 2 - Medium Speed */}
          <div
            className="absolute top-1/2 left-1/4 w-24 h-24 bg-blue-500/8 rounded-full blur-2xl transition-transform duration-350 ease-out"
            style={{
              transform: `translateY(${-scrollY * 0.15}px) translateX(${scrollY * 0.03}px) rotate(${scrollY * 0.01}deg)`,
            }}
          />
          <div
            className="absolute bottom-1/3 right-1/3 w-28 h-28 bg-teal-500/6 rounded-full blur-xl transition-transform duration-300 ease-out"
            style={{
              transform: `translateY(${-scrollY * 0.12}px) translateX(${-scrollY * 0.02}px)`,
            }}
          />

          {/* Background Layer 3 - Medium-Fast */}
          <div
            className="absolute top-3/4 left-1/6 w-20 h-20 bg-pink-500/10 rounded-full blur-lg transition-transform duration-250 ease-out"
            style={{
              transform: `translateY(${-scrollY * 0.2}px) translateX(${scrollY * 0.04}px) rotate(${-scrollY * 0.02}deg)`,
            }}
          />
          <div
            className="absolute top-1/6 right-1/6 w-16 h-16 bg-orange-500/8 rounded-full blur-lg transition-transform duration-200 ease-out"
            style={{
              transform: `translateY(${-scrollY * 0.18}px) translateX(${-scrollY * 0.03}px)`,
            }}
          />

          {/* Foreground Layer 4 - Fastest */}
          <div
            className="absolute top-40 left-1/3 w-12 h-12 bg-crypto-purple/15 rounded-full blur-md transition-transform duration-150 ease-out"
            style={{
              transform: `translateY(${-scrollY * 0.25}px) translateX(${scrollY * 0.06}px) rotate(${scrollY * 0.03}deg)`,
            }}
          />
          <div
            className="absolute bottom-1/4 right-1/4 w-14 h-14 bg-green-500/12 rounded-full blur-md transition-transform duration-180 ease-out"
            style={{
              transform: `translateY(${-scrollY * 0.22}px) translateX(${-scrollY * 0.04}px) rotate(${-scrollY * 0.025}deg)`,
            }}
          />

          {/* Subtle Geometry Elements */}
          <div
            className="absolute top-1/2 left-2/3 w-6 h-6 bg-white/5 rotate-45 transition-transform duration-500 ease-out"
            style={{
              transform: `translateY(${-scrollY * 0.3}px) translateX(${scrollY * 0.08}px) rotate(${scrollY * 0.05 + 45}deg)`,
            }}
          />
          <div
            className="absolute bottom-20 left-1/2 w-8 h-8 bg-white/3 rounded-full transition-transform duration-400 ease-out"
            style={{
              transform: `translateY(${-scrollY * 0.27}px) translateX(${-scrollY * 0.06}px) scale(${1 + scrollY * 0.0001})`,
            }}
          />

          {/* Dynamic Gradient Overlay - Enhanced with Feature Colors */}
          <div
            className="absolute inset-0 transition-opacity duration-1000"
            style={{
              opacity: Math.min(scrollY * 0.0005, 0.3),
              transform: `translateY(${-scrollY * 0.05}px)`,
              background: `radial-gradient(circle at 20% 80%, ${enhancedFeatures[activeFeature].color}08 0%, transparent 50%), radial-gradient(circle at 80% 20%, ${enhancedFeatures[activeFeature].color}05 0%, transparent 50%)`,
            }}
          />

          {/* Animated Feature-Specific Background Elements */}
          <div
            className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full transition-all duration-1500 ease-out"
            style={{
              background: `radial-gradient(circle, ${enhancedFeatures[activeFeature].color}15 0%, transparent 70%)`,
              transform: `translateY(${-scrollY * 0.3}px) scale(${1 + Math.sin(scrollY * 0.001) * 0.1})`,
              filter: 'blur(40px)',
            }}
          />
          <div
            className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full transition-all duration-1200 ease-out"
            style={{
              background: `radial-gradient(circle, ${enhancedFeatures[activeFeature].color}10 0%, transparent 60%)`,
              transform: `translateY(${-scrollY * 0.25}px) rotate(${scrollY * 0.02}deg) scale(${0.8 + Math.sin(scrollY * 0.001 + Math.PI) * 0.1})`,
              filter: 'blur(30px)',
            }}
          />
        </div>

        <div className="relative z-10">
          {/* Enhanced Scrollable Content Sections with Multimedia - Much Taller Sections */}
          <div className="space-y-16">
            {enhancedFeatures.map((feature, index) => (
              <div
                key={feature.id}
                ref={(el) => (contentRefs.current[index] = el)}
                className="feature-section min-h-screen flex items-center justify-center p-8 py-16 transition-all duration-500 ease-out"
                style={{
                  minHeight: '300vh',
                  opacity: index === activeFeature ? 1.0 : (Math.abs(index - activeFeature) === 1 ? 0.8 : 0.3),
                  transform: `translate3d(0, ${index === activeFeature ? 0 : (index - activeFeature) * 20}px, 0) scale(${index === activeFeature ? 1.0 : (Math.abs(index - activeFeature) === 1 ? 0.95 : 0.9)})`,
                  willChange: 'transform, opacity',
                }}
              >
                <div className="text-center max-w-4xl">
                  {/* Feature Image Carousel */}
                  <div className="relative mb-20 md:mb-32 lg:mb-40">
                    <div className="w-full max-w-xl h-48 md:h-[16rem] mx-auto mb-3 transition-all duration-50 transform"
                      style={{
                        filter: index === activeFeature ? 'blur(0px)' : 'blur(2px)',
                        transform: index === activeFeature ? 'scale(1.05)' : 'scale(0.95)',
                      }}
                    >
                      <ImageCarousel
                        images={feature.images}
                        autoScrollInterval={4000}
                        className="w-full h-full"
                      />
                    </div>
                    <div className={`absolute inset-0 rounded-lg transition-all duration-50 pointer-events-none ${
                      feature.bgGradient
                    } opacity-50`} />
                  </div>

                  {/* Visual Separator */}
                  <div className="w-32 h-px bg-gradient-to-r from-transparent via-gray-400/50 to-transparent mx-auto mb-8 md:mb-12 lg:mb-16"></div>

                  {/* Layered Visual Elements */}
                  <div className="relative mb-8 md:mb-12 lg:mb-16">
                    <div
                      className={`absolute inset-0 rounded-full transition-all duration-50 ${
                        index === activeFeature ? 'scale-150 opacity-20' : 'scale-100 opacity-10'
                      } bg-${feature.color}/30 blur-3xl`}
                    />
                    <div className={`inline-flex items-center justify-center w-24 h-24 rounded-full mb-3 bg-${feature.color}/20 ${
                      theme === 'dark' ? `text-${feature.color}` : 'text-gray-900'
                    } transition-all duration-50 transform ${
                      index === activeFeature ? 'scale-110 rotate-0' : 'scale-100 rotate-12'
                    }`}>
                      {feature.icon}
                    </div>
                  </div>

                  {/* Animated Title with Fade-in Effect */}
                  <h3 className={`text-4xl md:text-5xl font-bold mb-3 transition-all duration-50 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  } ${
                    index === activeFeature
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-8'
                  }`}>
                    {feature.title}
                  </h3>

                  {/* Subtitle Animation */}
                  <p className={`text-xl font-medium mb-3 transition-all duration-50 ${
                    theme === 'dark' ? feature.color : 'text-gray-800'
                  } ${
                    index === activeFeature
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-4'
                  }`}>
                    {feature.subtitle}
                  </p>

                  {/* Description with Stagger Animation */}
                  <p className={`${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-700'
                  } text-lg mb-6 leading-relaxed transition-all duration-50 ${
                    index === activeFeature
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-4'
                  }`}>
                    {feature.description}
                  </p>

                  {/* Detailed Sub-Features with Bullet Points */}
                  <div className={`mb-6 transition-all duration-50 ${
                    index === activeFeature
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-4'
                  }`}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-4xl mx-auto">
                      {feature.subFeatures.map((subFeature, subIndex) => (
                        <div
                          key={subIndex}
                          className={`text-left p-3 rounded-lg transition-all duration-300 ${
                            theme === 'dark'
                              ? 'bg-white/5 border border-white/10'
                              : 'bg-gray-50 border border-gray-200'
                          }`}
                          style={{
                            animationDelay: `${subIndex * 100}ms`
                          }}
                        >
                          <div className="flex items-start space-x-3">
                            <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5 ${
                              theme === 'dark' ? 'bg-white/10' : 'bg-gray-200'
                            }`}>
                              <div className={`w-2 h-2 rounded-full ${
                                theme === 'dark' ? 'bg-white/60' : 'bg-gray-600'
                              }`} />
                            </div>
                            <div className="flex-1">
                              <h4 className={`font-semibold text-sm mb-1 ${
                                theme === 'dark' ? 'text-white' : 'text-gray-900'
                              }`}>
                                {subFeature.title}
                              </h4>
                              <p className={`text-xs leading-relaxed ${
                                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                              }`}>
                                {subFeature.description}
                              </p>
                              {subFeature.metric && (
                                <span className={`inline-block mt-1 text-xs font-medium ${
                                  theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                                }`}>
                                  {subFeature.metric}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Call to Action with Hover Effects */}
                  <div className="flex justify-center gap-2 md:gap-4 transition-all duration-50">
                    <button
                      onClick={scrollToPricing}
                      className={`inline-flex items-center gap-1.5 md:gap-2 px-4 py-2 md:px-8 md:py-4 rounded-lg transition-all duration-50 hover:scale-105 hover:shadow-lg bg-crypto-purple text-white font-medium text-sm md:text-base transform ${
                        index === activeFeature
                          ? 'opacity-100 translate-x-0'
                          : 'opacity-0 -translate-x-4'
                      }`}
                    >
                      <PlayCircle className="w-4 h-4 md:w-5 md:h-5" />
                      <span className="hidden sm:inline">Explore {feature.title}</span>
                      <span className="sm:hidden">Explore</span>
                    </button>
                    <button
                      onClick={scrollToHeroAndPlayVideo}
                      className={`inline-flex items-center gap-1.5 md:gap-2 px-4 py-2 md:px-8 md:py-4 rounded-lg transition-all duration-50 hover:scale-105 border-2 font-medium text-sm md:text-base transform ${
                        theme === 'dark'
                          ? 'border-gray-600 bg-gray-700 text-white hover:bg-gray-600'
                          : 'border-gray-300 bg-gray-100 text-gray-800 hover:bg-gray-50'
                      } ${
                        index === activeFeature
                          ? 'opacity-100 translate-x-0'
                          : 'opacity-0 translate-x-4'
                      }`}
                    >
                      <Video className="w-4 h-4 md:w-5 md:h-5" />
                      <span className="hidden sm:inline">Watch Demo</span>
                      <span className="sm:hidden">Demo</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScrollyFeatures;
