import React, { useEffect, useRef } from 'react';
import { useTheme } from '../contexts/ThemeContext';

interface GradientColor {
  h: number; // hue
  s: number; // saturation
  l: number; // lightness
  x: number; // center x
  y: number; // center y
  vx: number; // velocity x
  vy: number; // velocity y
  radius: number; // radius
}

const HeroGradientBackground = () => {
  const { theme } = useTheme();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    // Set canvas dimensions
    const resizeCanvas = () => {
      if (!canvas || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      canvas.width = rect.width * (window.devicePixelRatio || 1);
      canvas.height = rect.height * (window.devicePixelRatio || 1);
      canvas.style.width = '100%';
      canvas.style.height = '100%';
      ctx.scale(window.devicePixelRatio || 1, window.devicePixelRatio || 1);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize floating color blobs (preDoctr.pk signature blues & soft purples/teals)
    // Dark theme uses deeper, richer colors; Light theme uses softer pastel colors
    const colors = theme === 'dark' ? [
      { h: 210, s: 85, l: 30 }, // Signature preDoctr Blue (#1E3A8A)
      { h: 200, s: 90, l: 40 }, // Bright sky blue (#4096EE)
      { h: 250, s: 75, l: 25 }, // Deep Indigo (#312E81)
      { h: 270, s: 80, l: 30 }, // Rich Purple (#581C87)
      { h: 180, s: 85, l: 25 }, // Dark Teal (#115E59)
    ] : [
      { h: 210, s: 90, l: 75 }, // Softer preDoctr Blue
      { h: 200, s: 95, l: 82 }, // Softer Light Blue
      { h: 245, s: 85, l: 85 }, // Soft Indigo/Lavender
      { h: 270, s: 80, l: 86 }, // Soft Purple/Pink
      { h: 185, s: 80, l: 80 }, // Softer Teal/Cyan
    ];

    const blobs: GradientColor[] = colors.map((c, i) => {
      const angle = (i / colors.length) * Math.PI * 2;
      return {
        h: c.h,
        s: c.s,
        l: c.l,
        x: 0.25 + Math.random() * 0.5, // 25% to 75% of screen width
        y: 0.2 + Math.random() * 0.6,  // 20% to 80% of screen height
        vx: (Math.random() - 0.5) * 0.0012, // slow drifting velocity
        vy: (Math.random() - 0.5) * 0.0012,
        radius: 0.45 + Math.random() * 0.25, // percentage of screen dimension
      };
    });

    let time = 0;

    const render = () => {
      if (!canvas || !containerRef.current) return;
      time += 0.0015;

      const width = canvas.width / (window.devicePixelRatio || 1);
      const height = canvas.height / (window.devicePixelRatio || 1);

      // Clear with base color matching theme background
      ctx.fillStyle = theme === 'dark' ? '#0F172A' : '#F8FAFC';
      ctx.fillRect(0, 0, width, height);

      // Update and draw each blob as a radial gradient
      blobs.forEach((blob) => {
        // Move blob
        blob.x += blob.vx;
        blob.y += blob.vy;

        // Bounce boundaries
        if (blob.x < 0.05 || blob.x > 0.95) blob.vx *= -1;
        if (blob.y < 0.05 || blob.y > 0.95) blob.vy *= -1;

        // Add subtle wave oscillation to position
        const posX = (blob.x + Math.sin(time + blob.h) * 0.08) * width;
        const posY = (blob.y + Math.cos(time + blob.h) * 0.08) * height;
        const rad = blob.radius * Math.max(width, height);

        // Create gradient
        const grad = ctx.createRadialGradient(posX, posY, 0, posX, posY, rad);
        
        // Dynamic opacity: keep it extremely subtle so it doesn't cover text/buttons
        const baseOpacity = theme === 'dark' ? '0.12' : '0.22';
        
        grad.addColorStop(0, `hsla(${blob.h}, ${blob.s}%, ${blob.l}%, ${baseOpacity})`);
        grad.addColorStop(0.5, `hsla(${blob.h}, ${blob.s}%, ${blob.l}%, ${(parseFloat(baseOpacity) * 0.4).toFixed(3)})`);
        grad.addColorStop(1, `hsla(${blob.h}, ${blob.s}%, ${blob.l}%, 0)`);

        ctx.fillStyle = grad;
        
        // Set blend mode for Stripe-like overlapping color mixes
        ctx.globalCompositeOperation = theme === 'dark' ? 'screen' : 'multiply';
        
        ctx.beginPath();
        ctx.arc(posX, posY, rad, 0, Math.PI * 2);
        ctx.fill();
      });

      // Restore normal composite operation
      ctx.globalCompositeOperation = 'source-over';

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-0"
    >
      <canvas 
        ref={canvasRef} 
        className="block w-full h-full opacity-80"
        style={{
          // Apply a gentle skew and scale to achieve the elegant Stripe ribbon angle
          transform: 'skewY(-6deg) scale(1.15)',
          transformOrigin: 'top left',
          filter: 'blur(45px)', // soft blur for smooth color blending
        }}
      />
      {/* Soft overlay gradient to blend bottom edge back into dark page color */}
      <div 
        className={`absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t pointer-events-none z-10 ${
          theme === 'dark' ? 'from-[#0F172A] to-transparent' : 'from-[#F8FAFC] to-transparent'
        }`}
      />
    </div>
  );
};

export default HeroGradientBackground;
