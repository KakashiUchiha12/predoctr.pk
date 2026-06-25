import React, { useState, useEffect } from 'react';
import { enhancedFeatures } from '../data/featuresData';
import { useTheme } from '../contexts/ThemeContext';
import { PlayCircle, ArrowRight, X, Sparkles, CheckCircle, ListPlus, ExternalLink } from 'lucide-react';
import ImageCarousel from './ImageCarousel';
import InteractiveRays from './InteractiveRays';
import LmsMockup from './LmsMockup';

const colorMap: Record<string, {
  accent: string;
  bgTintDark: string;
  bgTintLight: string;
  textDark: string;
  textLight: string;
  border: string;
  glow: string;
}> = {
  'video-lectures': {
    accent: '#4096EE',
    bgTintDark: 'rgba(64, 150, 238, 0.08)',
    bgTintLight: 'rgba(64, 150, 238, 0.05)',
    textDark: 'text-crypto-purple',
    textLight: 'text-crypto-purple',
    border: 'border-crypto-purple',
    glow: 'rgba(64, 150, 238, 0.15)',
  },
  'mcq-bank': {
    accent: '#4096EE',
    bgTintDark: 'rgba(64, 150, 238, 0.08)',
    bgTintLight: 'rgba(64, 150, 238, 0.05)',
    textDark: 'text-crypto-purple',
    textLight: 'text-crypto-purple',
    border: 'border-crypto-purple',
    glow: 'rgba(64, 150, 238, 0.15)',
  },
  'notes': {
    accent: '#4096EE',
    bgTintDark: 'rgba(64, 150, 238, 0.08)',
    bgTintLight: 'rgba(64, 150, 238, 0.05)',
    textDark: 'text-crypto-purple',
    textLight: 'text-crypto-purple',
    border: 'border-crypto-purple',
    glow: 'rgba(64, 150, 238, 0.15)',
  },
  'past-papers': {
    accent: '#4096EE',
    bgTintDark: 'rgba(64, 150, 238, 0.08)',
    bgTintLight: 'rgba(64, 150, 238, 0.05)',
    textDark: 'text-crypto-purple',
    textLight: 'text-crypto-purple',
    border: 'border-crypto-purple',
    glow: 'rgba(64, 150, 238, 0.15)',
  },
  'practice-tests': {
    accent: '#F97316',
    bgTintDark: 'rgba(249, 115, 22, 0.08)',
    bgTintLight: 'rgba(249, 115, 22, 0.05)',
    textDark: 'text-crypto-accent',
    textLight: 'text-crypto-accent',
    border: 'border-crypto-accent',
    glow: 'rgba(249, 115, 22, 0.15)',
  },
  'analytics': {
    accent: '#4096EE',
    bgTintDark: 'rgba(64, 150, 238, 0.08)',
    bgTintLight: 'rgba(64, 150, 238, 0.05)',
    textDark: 'text-crypto-purple',
    textLight: 'text-crypto-purple',
    border: 'border-crypto-purple',
    glow: 'rgba(64, 150, 238, 0.15)',
  }
};

const shortLabels: Record<string, string> = {
  'video-lectures': 'Lectures',
  'mcq-bank': 'MCQ Bank',
  'notes': 'Notes',
  'past-papers': 'Past Papers',
  'practice-tests': 'Practice Tests',
  'analytics': 'Analytics'
};

const FeaturesShowcase = () => {
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [animProgress, setAnimProgress] = useState(0);

  const activeFeature = enhancedFeatures[activeTab];
  const activeColor = colorMap[activeFeature.id] || colorMap['video-lectures'];

  // Autoplay Logic with progress ticker
  useEffect(() => {
    if (isPaused) {
      return;
    }

    const startTime = Date.now();
    const duration = 6000; // 6 seconds per slide

    const ticker = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progressPercent = Math.min((elapsed / duration) * 100, 100);
      setAnimProgress(progressPercent);

      if (elapsed >= duration) {
        setActiveTab((prev) => (prev + 1) % enhancedFeatures.length);
        setAnimProgress(0);
      }
    }, 50);

    return () => {
      clearInterval(ticker);
    };
  }, [activeTab, isPaused]);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
    setAnimProgress(0);
    setIsPaused(true); // Stop autoplay when clicked
  };

  const formatDescription = (desc: string) => {
    if (desc.includes('•')) {
      const parts = desc.split('•').map(p => p.trim()).filter(Boolean);
      return (
        <ul className="space-y-1.5 list-disc pl-4 text-xs mt-2">
          {parts.map((p, idx) => (
            <li key={idx} className={theme === 'dark' ? 'text-gray-300' : 'text-slate-600'}>{p}</li>
          ))}
        </ul>
      );
    }
    return <p className={`text-xs mt-2 leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-slate-600'}`}>{desc}</p>;
  };

  return (
    <section id="features" className={`pt-24 pb-80 relative overflow-hidden transition-all duration-500 ${
      theme === 'dark' ? 'bg-[#12141C] text-white' : 'bg-slate-50 text-slate-900'
    }`}>
      {/* Decorative background gradients */}
      <div 
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full pointer-events-none blur-[100px] opacity-10 transition-all duration-[1500ms] ease-out" 
        style={{
          background: `radial-gradient(circle, ${activeColor.accent} 0%, transparent 70%)`
        }}
      />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Header Block */}
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 text-gradient ${theme === 'light' ? 'text-slate-900' : ''}`}>
            Complete MDCAT Preparation Suite
          </h2>
          <p className={`text-sm md:text-base max-w-2xl mx-auto ${theme === 'light' ? 'text-slate-600' : 'text-gray-400'}`}>
            preDoctr.pk provides everything you need to ace MDCAT 2026. Explore our comprehensive learning capabilities.
          </p>
        </div>

        {/* Desktop Layout */}
        <div 
          className="hidden lg:grid lg:grid-cols-12 lg:gap-8 items-start"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Left: Vertical Tab Selection */}
          <div className="lg:col-span-5 space-y-3.5 pr-2">
            {enhancedFeatures.map((feature, index) => {
              const isActive = index === activeTab;
              const fColor = colorMap[feature.id] || colorMap['video-lectures'];

              return (
                <button
                  key={feature.id}
                  onClick={() => handleTabClick(index)}
                  className={`w-full text-left p-4.5 rounded-xl border transition-all duration-300 relative overflow-hidden flex items-start gap-4 ${
                    isActive 
                      ? theme === 'dark'
                        ? 'bg-white/[0.04] border-white/10 shadow-lg shadow-black/10'
                        : 'bg-white border-slate-200 shadow-md shadow-slate-100'
                      : theme === 'dark'
                        ? 'bg-transparent border-transparent opacity-60 hover:opacity-100 hover:bg-white/[0.01]'
                        : 'bg-transparent border-transparent opacity-60 hover:opacity-100 hover:bg-black/[0.01]'
                  }`}
                >
                  {/* Left Border Highlight for Active Tab */}
                  {isActive && (
                    <div 
                      className="absolute left-0 top-0 bottom-0 w-1 rounded-r" 
                      style={{ backgroundColor: fColor.accent }}
                    />
                  )}

                  {/* Icon with Dynamic Accent Background */}
                  <div 
                    className="p-3 rounded-lg flex items-center justify-center shrink-0"
                    style={{ 
                      backgroundColor: isActive 
                        ? theme === 'dark' ? fColor.bgTintDark : fColor.bgTintLight
                        : 'transparent',
                      color: isActive ? fColor.accent : 'inherit'
                    }}
                  >
                    {feature.icon}
                  </div>

                  {/* Title & Subtitle Info */}
                  <div className="flex-1 min-w-0 pr-2">
                    <h3 className={`font-semibold text-base transition-colors ${
                      isActive ? (theme === 'dark' ? 'text-white' : 'text-slate-900') : 'text-slate-400'
                    }`}>
                      {feature.title}
                    </h3>
                    <p className={`text-xs mt-1 transition-opacity ${isActive ? 'opacity-100' : 'opacity-80'} ${
                      theme === 'dark' ? 'text-gray-400' : 'text-slate-500'
                    }`}>
                      {feature.subtitle}
                    </p>
                  </div>

                  {/* Loading progress bar indicator */}
                  {isActive && !isPaused && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-500/10">
                      <div 
                        className="h-full transition-all duration-50 ease-linear"
                        style={{ 
                          width: `${animProgress}%`, 
                          backgroundColor: fColor.accent 
                        }}
                      />
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Right: Active Feature Preview Showcase */}
          <div className="lg:col-span-7 space-y-6">
            {/* Laptop / Browser Window Mockup */}
            <div 
              className={`rounded-2xl border transition-all duration-500 overflow-hidden shadow-2xl ${
                theme === 'dark' 
                  ? 'bg-[#181924] border-white/10' 
                  : 'bg-white border-slate-200'
              }`}
              style={{
                boxShadow: `0 25px 50px -12px ${activeColor.glow}`
              }}
            >
              {/* Window Header */}
              <div className={`px-4 py-3 flex items-center border-b transition-colors ${
                theme === 'dark' ? 'bg-[#1D1E2D] border-white/[0.08]' : 'bg-slate-100 border-slate-200'
              }`}>
                {/* 3 Decorative dots */}
                <div className="flex items-center gap-1.5 shrink-0">
                  <div className="w-3 h-3 rounded-full bg-[#EF4444]/80" />
                  <div className="w-3 h-3 rounded-full bg-[#F59E0B]/80" />
                  <div className="w-3 h-3 rounded-full bg-[#10B981]/80" />
                </div>
                {/* Fake URL Bar */}
                <div className={`mx-auto w-3/5 rounded-md py-1 px-3 text-[10px] font-mono tracking-wide text-center truncate ${
                  theme === 'dark' ? 'bg-white/[0.04] text-gray-500' : 'bg-white text-slate-400 border border-slate-200/50'
                }`}>
                  predoctr.pk/suite/{activeFeature.id}
                </div>
              </div>

              {/* Window Content: Interactive LMS Mockup */}
              <div className="bg-black/5 aspect-[16/10] flex items-center justify-center overflow-hidden relative w-full group/mockup">
                <LmsMockup activeTabId={activeFeature.id} />
                
                {/* Subtle Interactive Hint Badge */}
                <div className="absolute bottom-3 right-3 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-900/80 backdrop-blur-sm border border-slate-700/30 text-white text-[10px] font-medium tracking-wide pointer-events-none select-none group-hover/mockup:opacity-0 transition-opacity duration-300">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                  </span>
                  <span>Interactive Demo</span>
                </div>
              </div>
            </div>

            {/* Feature Statistics and Info Box */}
            <div className={`p-6 rounded-xl border flex flex-col md:flex-row md:items-center justify-between gap-6 transition-colors ${
              theme === 'dark' ? 'bg-white/[0.02] border-white/5' : 'bg-white border-slate-200 shadow-sm'
            }`}>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className={`text-[10px] tracking-widest font-bold uppercase px-2 py-0.5 rounded ${
                    theme === 'dark' ? 'bg-white/10 text-white' : 'bg-slate-100 text-slate-800'
                  }`}>
                    {activeFeature.subtitle}
                  </span>
                  <span className={`flex items-center gap-1 text-xs font-semibold ${activeColor.textDark}`}>
                    <Sparkles className="w-3.5 h-3.5" />
                    {activeFeature.keyStatistic.value} {activeFeature.keyStatistic.label}
                  </span>
                </div>
                <p className={`text-sm leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-slate-600'}`}>
                  {activeFeature.description}
                </p>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row md:flex-col gap-3 shrink-0">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className={`inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 border ${
                    theme === 'dark'
                      ? 'border-white/10 bg-white/5 hover:bg-white/10 text-white'
                      : 'border-slate-200 bg-slate-100 hover:bg-slate-200 text-slate-800'
                  }`}
                >
                  <ListPlus className="w-4 h-4" />
                  View Details
                </button>
                <button
                  onClick={() => {
                    const pricingSection = document.getElementById('pricing');
                    if (pricingSection) {
                      pricingSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.02]"
                  style={{ backgroundColor: activeColor.accent }}
                >
                  Get Access
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile / Tablet Layout */}
        <div 
          className="lg:hidden space-y-6"
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          {/* Horizontal Scrollable Tabs at top */}
          <div className="flex overflow-x-auto gap-3 pb-3 scrollbar-none snap-x snap-mandatory overscroll-x-contain [-webkit-overflow-scrolling:touch]">
            {enhancedFeatures.map((feature, index) => {
              const isActive = index === activeTab;
              const fColor = colorMap[feature.id] || colorMap['video-lectures'];

              return (
                <button
                  key={feature.id}
                  onClick={() => handleTabClick(index)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-full border text-xs font-semibold shrink-0 snap-start transition-all ${
                    isActive 
                      ? 'text-white border-transparent shadow-md' 
                      : theme === 'dark' 
                        ? 'bg-transparent border-white/10 text-gray-400' 
                        : 'bg-white border-slate-200 text-slate-600'
                  }`}
                  style={{ 
                    backgroundColor: isActive ? fColor.accent : 'transparent' 
                  }}
                >
                  {feature.icon}
                  {shortLabels[feature.id] || feature.title}
                </button>
              );
            })}
          </div>

          {/* Active Card Content */}
          <div className={`p-5 rounded-2xl border space-y-5 ${
            theme === 'dark' ? 'bg-[#181924] border-white/10' : 'bg-white border-slate-200 shadow-lg'
          }`}>
            {/* Visual Preview: Phone frame with interactive LmsMockup */}
            <div className="flex justify-center py-4 bg-gradient-to-b from-slate-500/5 to-slate-500/10 rounded-2xl border border-slate-200/50 dark:border-white/5 relative overflow-hidden">
              {/* iPhone Mockup Outer Wrapper */}
              <div className="relative">
                {/* Side Buttons */}
                <div className="absolute -left-[3px] top-[80px] w-[3px] h-[18px] bg-slate-800 dark:bg-slate-700 rounded-l z-10" />
                <div className="absolute -left-[3px] top-[115px] w-[3px] h-[30px] bg-slate-800 dark:bg-slate-700 rounded-l z-10" />
                <div className="absolute -left-[3px] top-[155px] w-[3px] h-[30px] bg-slate-800 dark:bg-slate-700 rounded-l z-10" />
                <div className="absolute -right-[3px] top-[130px] w-[3px] h-[45px] bg-slate-800 dark:bg-slate-700 rounded-r z-10" />

                {/* Phone Frame */}
                <div 
                  className={`relative w-[280px] h-[560px] rounded-[44px] border-[12px] ${
                    theme === 'dark' ? 'border-slate-900 bg-slate-900 shadow-2xl' : 'border-slate-950 bg-slate-950 shadow-xl'
                  } overflow-hidden group/phone`}
                  style={{
                    boxShadow: `0 20px 40px -10px ${activeColor.glow}`
                  }}
                >
                  {/* Status Bar */}
                  <div className="absolute top-0 inset-x-0 h-8 bg-[#F8FAFC] flex items-center justify-between px-6 text-[8.5px] font-semibold text-slate-800 z-40 select-none border-b border-slate-100">
                    <span>9:41</span>
                    <div className="flex items-center gap-1.5">
                      <span className="text-[7px] font-bold">5G</span>
                      {/* Signal bars */}
                      <div className="flex items-end gap-[1px] h-2">
                        <div className="w-[1.5px] h-[3px] bg-slate-800 rounded-sm" />
                        <div className="w-[1.5px] h-[4.5px] bg-slate-800 rounded-sm" />
                        <div className="w-[1.5px] h-[6px] bg-slate-800 rounded-sm" />
                        <div className="w-[1.5px] h-[7px] bg-slate-300 rounded-sm" />
                      </div>
                      {/* Battery */}
                      <div className="w-4 h-2.5 border border-slate-800 rounded-[3px] p-[1px] flex items-center">
                        <div className="w-full h-full bg-slate-800 rounded-[1px]" />
                      </div>
                    </div>
                  </div>

                  {/* Dynamic Island */}
                  <div className="w-20 h-4.5 bg-black rounded-full absolute left-1/2 -translate-x-1/2 top-1.5 z-50 flex items-center justify-end px-3">
                    {/* Camera lens reflex */}
                    <div className="w-1.5 h-1.5 rounded-full bg-[#101726] border border-white/5 mr-1" />
                    {/* Green active dot */}
                    <div className="w-0.5 h-0.5 rounded-full bg-[#34C759]" />
                  </div>

                  {/* Content Container */}
                  <div className="w-full h-full pt-8 pb-2 bg-[#F8FAFC]">
                    <LmsMockup activeTabId={activeFeature.id} isMobile={true} />
                  </div>

                  {/* Home Indicator */}
                  <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-24 h-1 bg-slate-400/60 rounded-full z-30" />

                  {/* Subtle Interactive Hint Badge */}
                  <div className="absolute bottom-3 right-3 z-40 flex items-center gap-1 px-2 py-0.5 rounded-full bg-slate-900/80 backdrop-blur-sm border border-slate-700/30 text-white text-[8px] font-medium tracking-wide pointer-events-none select-none group-hover/phone:opacity-0 transition-opacity duration-300">
                    <span className="relative flex h-1 w-1">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-1 w-1 bg-emerald-500"></span>
                    </span>
                    <span>Tap to interact</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Metadata & Title */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className={`text-[10px] tracking-wider uppercase font-bold px-2 py-0.5 rounded ${
                  theme === 'dark' ? 'bg-white/10 text-white' : 'bg-slate-100 text-slate-700'
                }`}>
                  {activeFeature.subtitle}
                </span>
                <span className={`text-xs font-semibold ${activeColor.textDark}`}>
                  {activeFeature.keyStatistic.value} {activeFeature.keyStatistic.label}
                </span>
              </div>
              <h3 className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                {activeFeature.title}
              </h3>
              <p className={`text-sm mt-2 leading-relaxed ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>
                {activeFeature.description}
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={() => setIsModalOpen(true)}
                className={`flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold transition-all border ${
                  theme === 'dark'
                    ? 'border-white/10 bg-white/5 hover:bg-white/10 text-white'
                    : 'border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-800'
                }`}
              >
                <ListPlus className="w-4 h-4" />
                View Details
              </button>
              <button
                onClick={() => {
                  const pricingSection = document.getElementById('pricing');
                  if (pricingSection) {
                    pricingSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-white transition-all"
                style={{ backgroundColor: activeColor.accent }}
              >
                Get Access
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Ray-Burst Canvas element (Stripe-like scaling animation) */}
      <InteractiveRays />

      {/* Details Modal / Dialog (Radix overlay equivalent) */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          />

          {/* Modal Box */}
          <div className={`relative w-full max-w-3xl max-h-[85vh] rounded-2xl border shadow-2xl flex flex-col overflow-hidden animate-slide-up ${
            theme === 'dark' ? 'bg-[#181924] border-white/10 text-white' : 'bg-white border-slate-200 text-slate-900'
          }`}>
            {/* Modal Header */}
            <div className={`p-6 border-b flex items-center justify-between ${
              theme === 'dark' ? 'border-white/[0.08]' : 'border-slate-100'
            }`}>
              <div className="flex items-center gap-3">
                <div 
                  className="p-2 rounded-lg"
                  style={{ 
                    backgroundColor: theme === 'dark' ? activeColor.bgTintDark : activeColor.bgTintLight,
                    color: activeColor.accent
                  }}
                >
                  {activeFeature.icon}
                </div>
                <div>
                  <h3 className="font-bold text-lg leading-none">{activeFeature.title}</h3>
                  <p className={`text-xs mt-1 ${theme === 'dark' ? 'text-gray-400' : 'text-slate-500'}`}>
                    Detailed Course Inclusions & Syllabus
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className={`p-1.5 rounded-lg border transition-colors ${
                  theme === 'dark' 
                    ? 'border-white/10 hover:bg-white/5 text-gray-400 hover:text-white' 
                    : 'border-slate-200 hover:bg-slate-50 text-slate-500 hover:text-slate-800'
                }`}
              >
                <X className="w-4.5 h-4.5" />
              </button>
            </div>

            {/* Modal Scrollable Body */}
            <div className="p-6 overflow-y-auto space-y-5 scrollbar-thin">
              <p className={`text-sm leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-slate-600'}`}>
                {activeFeature.description}
              </p>

              <div>
                <h4 className={`text-sm font-semibold mb-3 flex items-center gap-1.5 ${
                  theme === 'dark' ? 'text-white' : 'text-slate-800'
                }`}>
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  What is included in this feature:
                </h4>
                
                {/* Sub Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {activeFeature.subFeatures.map((sub, idx) => (
                    <div 
                      key={idx} 
                      className={`p-4 rounded-xl border ${
                        theme === 'dark' ? 'bg-white/[0.02] border-white/5' : 'bg-slate-50 border-slate-200/50'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className={`text-xs font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-800'}`}>
                          {sub.title}
                        </span>
                        {sub.metric && (
                          <span className={`text-[10px] font-semibold px-2 py-0.5 rounded ${
                            theme === 'dark' ? 'bg-white/10 text-gray-300' : 'bg-white text-slate-600 border border-slate-200/80'
                          }`}>
                            {sub.metric}
                          </span>
                        )}
                      </div>
                      <div className="text-xs space-y-1">
                        {formatDescription(sub.description)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className={`p-4 px-6 border-t flex items-center justify-end gap-3 ${
              theme === 'dark' ? 'border-white/[0.08] bg-[#1d1e2b]/50' : 'border-slate-100 bg-slate-50/50'
            }`}>
              <button
                onClick={() => setIsModalOpen(false)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  theme === 'dark' ? 'hover:bg-white/5 text-gray-300' : 'hover:bg-slate-100 text-slate-600'
                }`}
              >
                Close
              </button>
              <button
                onClick={() => {
                  setIsModalOpen(false);
                  const pricingSection = document.getElementById('pricing');
                  if (pricingSection) {
                    pricingSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="px-4 py-2 rounded-lg text-sm font-semibold text-white transition-all hover:scale-[1.02]"
                style={{ backgroundColor: activeColor.accent }}
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default FeaturesShowcase;
