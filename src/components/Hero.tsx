
import { ArrowRight, ArrowUpRight, ChevronRight, Play, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useTheme } from '@/contexts/ThemeContext';
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const { theme } = useTheme();
  const [counters, setCounters] = useState({
    colleges: 0,
    mcqs: 0,
    success: 0
  });
  const [isVisible, setIsVisible] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [hoverProgress, setHoverProgress] = useState(0);
  const [showButtonAnimation, setShowButtonAnimation] = useState(false);
  const statsRef = useRef(null);
  const hoverTimeoutRef = useRef(null);
  const hoverIntervalRef = useRef(null);
  const buttonTimerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Listen for custom event from ScrollyFeatures component
  useEffect(() => {
    const handlePlayVideoEvent = () => {
      setIsVideoOpen(true);
    };

    window.addEventListener('playDemoVideo', handlePlayVideoEvent);

    return () => {
      window.removeEventListener('playDemoVideo', handlePlayVideoEvent);
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const animateCounter = (targetValue, setter, duration = 2000, isPercentage = false) => {
      const startValue = 0;
      const startTime = performance.now();

      const animate = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);

        if (isPercentage) {
          setter(easeOutQuart * targetValue);
        } else {
          setter(Math.floor(easeOutQuart * targetValue));
        }

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    };

    // Start animations with slight delays
    setTimeout(() => animateCounter(10000, (value) => setCounters(prev => ({...prev, colleges: value}))), 200);
    setTimeout(() => animateCounter(65000, (value) => setCounters(prev => ({...prev, mcqs: value}))), 400);
    setTimeout(() => animateCounter(95, (value) => setCounters(prev => ({...prev, success: Math.round(value)})), 2000, true), 600);

  }, [isVisible]);

  // Handle button animation after 5 seconds
  useEffect(() => {
    console.log('Button animation timer started...');
    // Start the timer as soon as the component mounts
    buttonTimerRef.current = setTimeout(() => {
      console.log('Button animation activated!');
      setShowButtonAnimation(true);
    }, 5000); // 5 seconds

    return () => {
      if (buttonTimerRef.current) {
        clearTimeout(buttonTimerRef.current);
      }
    };
  }, []); // Empty dependency array means this runs once on mount

  // Handle hover timer functionality
  useEffect(() => {
    if (isHovering) {
      // Reset progress when hover starts
      setHoverProgress(0);

      // Set timeout to auto-play after 2 seconds
      hoverTimeoutRef.current = setTimeout(() => {
        setIsVideoOpen(true);
        setIsHovering(false);
        setHoverProgress(0);
      }, 2000);

      // Update progress every 50ms for smooth animation
      hoverIntervalRef.current = setInterval(() => {
        setHoverProgress(prev => {
          const newProgress = prev + (50 / 2000) * 100; // 50ms interval over 2000ms total
          return newProgress >= 100 ? 100 : newProgress;
        });
      }, 50);
    } else {
      // Clear timers when hover ends
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
        hoverTimeoutRef.current = null;
      }
      if (hoverIntervalRef.current) {
        clearInterval(hoverIntervalRef.current);
        hoverIntervalRef.current = null;
      }
      setHoverProgress(0);
    }

    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
      if (hoverIntervalRef.current) {
        clearInterval(hoverIntervalRef.current);
      }
    };
  }, [isHovering]);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const handleClick = () => {
    // Clear any running timers
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    if (hoverIntervalRef.current) {
      clearInterval(hoverIntervalRef.current);
    }
    setIsVideoOpen(true);
    setIsHovering(false);
    setHoverProgress(0);
  };

  const handleDemoClick = () => {
    // Scroll to top of page (hero section) and start playing video
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Start playing video after scroll animation
    setTimeout(() => {
      setIsVideoOpen(true);
    }, 800);
  };

  return (
    <section className={`relative min-h-screen flex flex-col justify-center overflow-hidden transition-all duration-500 ${
      theme === 'dark'
        ? 'bg-gradient-hero hero-glow'
        : 'bg-gradient-hero-light hero-glow-light'
    }`} itemScope itemType="https://schema.org/Organization">
      {/* Video Popup Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md">
          <div className="relative w-full max-w-5xl mx-auto animate-fade-in">
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute -top-16 right-0 text-white hover:text-crypto-purple transition-colors duration-200 z-[10000] bg-black/20 backdrop-blur-sm rounded-full p-2"
            >
              <X className="h-8 w-8" />
            </button>
            <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden ring-1 ring-black/10">
              <div className="aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/cMz2BG0cLo0?autoplay=1&rel=0&modestbranding=1"
                  title="Medical College Preparation Video"
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Animated Background Elements */}
      <div className={`absolute inset-0 overflow-hidden transition-all duration-300 ${isVideoOpen ? 'blur-sm' : ''}`}>
        <div className={`absolute top-1/4 left-10 w-72 h-72 bg-crypto-purple/10 rounded-full filter blur-3xl animate-pulse-slow transition-all duration-300 ${isVideoOpen ? 'blur-2xl' : ''}`}></div>
        <div className={`absolute bottom-1/4 right-10 w-96 h-96 bg-crypto-light-purple/10 rounded-full filter blur-3xl animate-pulse-slow transition-all duration-300 ${isVideoOpen ? 'blur-2xl' : ''}`} style={{ animationDelay: '1s' }}></div>
      </div>

      <div className={`container mx-auto px-4 py-20 relative z-10 transition-all duration-300 ${isVideoOpen ? 'blur-sm' : ''}`}>
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 animate-fade-in-left">
            <div
              className={`inline-flex items-center backdrop-blur-sm border rounded-full px-4 py-1.5 mb-6 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                theme === 'dark'
                  ? 'bg-white/5 border-white/10 hover:bg-white/10'
                  : 'bg-white/80 border-gray-300 hover:bg-white/90 hover:border-gray-400'
              }`}
              onClick={() => {
                // Scroll to pricing section (assuming it has id="pricing")
                const pricingSection = document.getElementById('pricing');
                if (pricingSection) {
                  pricingSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                  });
                } else {
                  // Fallback: scroll to bottom of page where pricing might be
                  window.scrollTo({
                    top: document.body.scrollHeight,
                    behavior: 'smooth'
                  });
                }
              }}
            >
              <span className="text-xs font-medium text-crypto-purple mr-2">For MDCAT 2026</span>
              <span className={`text-xs mr-1 ${theme === 'dark' ? 'text-gray-300' : 'text-slate-700'}`}>Complete MDCAT Course - All Subjects</span>
              <ChevronRight className={`h-4 w-4 ${theme === 'dark' ? 'text-gray-400' : 'text-slate-500'}`} />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-bold mb-6 leading-tight">
              <span className={`font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-800'}`}>
                Your Path to Medical College
              </span>
              <span className={`font-bold block mt-2 ${theme === 'dark' ? 'text-gray-300' : 'text-slate-600'}`}>
                starts here with
              </span>
              <span className="font-bold block mt-3 flex items-center justify-start">
                <img
                  src="favicon/cropped-Blue-Stethoscope-Medical-Logo-3-1-1.png"
                  alt="preDoctr.pk"
                  className="h-12 w-auto mr-3 animate-float"
                />
                <span className="text-4xl md:text-5xl lg:text-6xl xl:text-6xl">
                  <span className={`${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>pre</span><span className={`text-crypto-purple ${theme === 'dark' ? 'drop-shadow-lg' : ''}`}>Doctr.pk</span>
                </span>
              </span>
            </h1>
            <p className={`text-lg mb-8 max-w-lg ${theme === 'dark' ? 'text-gray-300' : 'text-slate-800'}`}>
              Our Students don't just prepare for MDCAT - they get into medical colleges with admissions to Top Medical colleges across the country
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/registration">
                <Button
                  size="lg"
                  className="bg-crypto-purple hover:bg-crypto-dark-purple text-white px-8 py-6 relative overflow-hidden group/btn shadow-lg hover:shadow-xl transition-all duration-300"
                  style={{
                    animation: showButtonAnimation ? (theme === 'dark' ? 'pulse-subtle 2s infinite' : 'blue-pulse 2s infinite') : 'none',
                    boxShadow: showButtonAnimation
                      ? (theme === 'dark'
                          ? '0 0 0 0 rgba(255, 255, 255, 0.4), 0 4px 15px rgba(255, 255, 255, 0.1)'
                          : '0 0 0 0 rgba(37, 99, 235, 1), 0 0 20px rgba(37, 99, 235, 0.8), 0 8px 32px rgba(37, 99, 235, 0.6)')
                      : 'none'
                  }}
                >
                  <span className="relative z-10 flex items-center">
                    Start Your MDCAT Journey
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover/btn:translate-x-1" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000 ease-in-out"></div>
                </Button>
              </Link>
              <Button
                variant="outline"
                size="lg"
                onClick={handleDemoClick}
                className={`py-6 ${
                  theme === 'dark'
                    ? 'border-gray-700 text-white hover:bg-white/5'
                    : 'border-gray-400 text-gray-800 hover:bg-gray-50'
                }`}
              >
                Watch Demo
                <ArrowUpRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div ref={statsRef} className="mt-8 flex items-center space-x-6">
              <div>
                <p className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{counters.colleges.toLocaleString()}+</p>
                <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>Students</p>
              </div>
              <div className={`h-12 w-px ${theme === 'dark' ? 'bg-gray-700' : 'bg-slate-400'}`}></div>
              <div>
                <p className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{counters.mcqs.toLocaleString()}+</p>
                <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>Practice MCQs</p>
              </div>
              <div className={`h-12 w-px ${theme === 'dark' ? 'bg-gray-700' : 'bg-slate-400'}`}></div>
              <div>
                <p className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{counters.success}%</p>
                <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>Success Rate</p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 mt-12 lg:mt-0 animate-fade-in-right">
            <div className="relative max-w-md mx-auto animate-float">
              {/* Video Thumbnail with Play Button */}
              <div
                className="relative group cursor-pointer"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={handleClick}
              >
                <img
                  src="https://img.youtube.com/vi/cMz2BG0cLo0/maxresdefault.jpg"
                  alt="Medical College Preparation Video Thumbnail"
                  className="rounded-xl shadow-2xl border border-white/10 w-full h-auto"
                />

                {/* Play Button Overlay with Circular Progress */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Circular Progress Ring - Background Layer */}
                  {isHovering && (
                    <div className="absolute flex items-center justify-center z-10">
                      <svg className="w-32 h-32 -rotate-90" viewBox="0 0 100 100">
                        <circle
                          cx="50"
                          cy="50"
                          r="48"
                          fill="none"
                          stroke="rgba(59, 130, 246, 0.3)"
                          strokeWidth="3"
                          className="animate-pulse"
                        />
                        <circle
                          cx="50"
                          cy="50"
                          r="48"
                          fill="none"
                          stroke="rgba(59, 130, 246, 0.9)"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeDasharray={`${2 * Math.PI * 48}`}
                          strokeDashoffset={`${2 * Math.PI * 48 * (1 - hoverProgress / 100)}`}
                          className="transition-all duration-75 ease-linear"
                          style={{
                            filter: 'drop-shadow(0 0 12px rgba(59, 130, 246, 0.8))'
                          }}
                        />
                      </svg>
                    </div>
                  )}

                  {/* Progress Text - Top Layer */}
                  {isHovering && hoverProgress > 0 && (
                    <div className="absolute flex items-center justify-center z-30">
                      <span className="text-white font-bold text-xl drop-shadow-lg bg-black/40 backdrop-blur-sm rounded-full px-3 py-1">
                        {Math.ceil((2000 - (hoverProgress / 100) * 2000) / 1000)}s
                      </span>
                    </div>
                  )}

                  {/* Play Button - Middle Layer */}
                  <div className={`relative backdrop-blur-sm rounded-full p-6 shadow-lg transition-all duration-300 z-20 ${
                    isHovering
                      ? 'bg-crypto-purple/70 scale-90'
                      : 'bg-crypto-purple/90 group-hover:bg-crypto-purple group-hover:scale-110'
                  }`}>
                    <Play className="h-10 w-10 text-white ml-1" fill="currentColor" />
                  </div>
                </div>

                {/* Video Duration Badge */}
                <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-sm text-white text-sm px-2 py-1 rounded">
                  2:30
                </div>
              </div>

              {/* Floating Stats Cards */}
              <div className="absolute -right-6 -bottom-6 bg-crypto-purple/20 backdrop-blur-md rounded-lg p-4 border border-crypto-purple/30 shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 bg-green-500/20 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">MCAT Score</p>
                    <p className="text-lg font-bold text-green-500">190+</p>
                  </div>
                </div>
              </div>
              <div className="absolute -left-6 -top-6 bg-crypto-purple/20 backdrop-blur-md rounded-lg p-4 border border-crypto-purple/30 shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 bg-crypto-purple/20 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-crypto-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div>
                    <p className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-white'} animate-pulse`}>Watch Demo Video</p>
                    <p className={`text-lg font-bold ${theme === 'dark' ? 'text-white' : 'text-white'} animate-pulse`}>Click to Watch</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
