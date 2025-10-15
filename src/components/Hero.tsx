
import { ArrowRight, ArrowUpRight, ChevronRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useTheme } from '@/contexts/ThemeContext';
import { useState, useEffect, useRef } from 'react';

const Hero = () => {
  const { theme } = useTheme();
  const [counters, setCounters] = useState({
    colleges: 0,
    mcqs: 0,
    success: 0
  });
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef(null);

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

  return (
    <section className={`relative min-h-screen flex flex-col justify-center overflow-hidden transition-all duration-500 ${
      theme === 'dark'
        ? 'bg-gradient-hero hero-glow'
        : 'bg-gradient-hero-light hero-glow-light'
    }`}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-crypto-purple/10 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-crypto-light-purple/10 rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 animate-fade-in-left">
            <div className={`inline-flex items-center backdrop-blur-sm border rounded-full px-4 py-1.5 mb-6 ${
              theme === 'dark'
                ? 'bg-white/5 border-white/10'
                : 'bg-white/80 border-gray-300'
            }`}>
              <span className="text-xs font-medium text-crypto-purple mr-2">For MDCAT 2026</span>
              <span className={`text-xs mr-1 ${theme === 'dark' ? 'text-gray-300' : 'text-slate-700'}`}>Complete MDCAT Course - All Subjects</span>
              <ChevronRight className={`h-4 w-4 ${theme === 'dark' ? 'text-gray-400' : 'text-slate-500'}`} />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className={`font-bold ${theme === 'dark' ? 'text-gradient' : 'text-crypto-purple'}`}>Your Path to Medical College</span>
              <span className={`font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-600'}`}> starts here with </span>
              <span className="font-bold text-crypto-light-purple">preDoctr.pk</span>
            </h1>
            <p className={`text-lg mb-8 max-w-lg ${theme === 'dark' ? 'text-gray-300' : 'text-slate-800'}`}>
              Our Students don't just prepare for MDCAT - they get into medical colleges with admissions to Top Medical colleges across the country
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-crypto-purple hover:bg-crypto-dark-purple text-white px-8 py-6">
                Start Your MDCAT Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className={`py-6 ${
                theme === 'dark'
                  ? 'border-gray-700 text-white hover:bg-white/5'
                  : 'border-gray-400 text-white hover:bg-slate-100'
              }`}>
                Free Trial
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
              <img
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&h=800"
                alt="Medical students studying and preparing for entrance exams"
                className="rounded-xl shadow-2xl border border-white/10"
              />
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
                    <p className="text-xs text-gray-400">Video Lectures</p>
                    <p className="text-lg font-bold text-white">100+</p>
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
