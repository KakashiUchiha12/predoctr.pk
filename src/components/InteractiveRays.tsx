import React, { useEffect, useRef, useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';

interface Ray {
  baseAngle: number;
  length: number;
  currentLength: number;
  speed: number;
  phase: number;
  thickness: number;
}

interface Spark {
  rayIndex: number;
  progress: number;
  speed: number;
  size: number;
}

const InteractiveRays = () => {
  const { theme } = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  const mouseRef = useRef({ x: 0, y: 0, active: false });
  const raysRef = useRef<Ray[]>([]);
  const sparksRef = useRef<Spark[]>([]);

  useEffect(() => {
    // Only initialize canvas, rays, event listeners, and render loops on desktop/large screens
    if (typeof window !== 'undefined' && !window.matchMedia('(min-width: 1024px)').matches) {
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Resize handler
    const resizeCanvas = () => {
      const rect = containerRef.current?.getBoundingClientRect();
      canvas.width = (rect?.width || window.innerWidth) * window.devicePixelRatio;
      canvas.height = (rect?.height || 300) * window.devicePixelRatio;
      canvas.style.width = '100%';
      canvas.style.height = '100%';
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize Rays
    const numRays = 240;
    const tempRays: Ray[] = [];
    for (let i = 0; i < numRays; i++) {
      // Concentrate angles towards the upper half circle (between Math.PI and 2*Math.PI)
      // Narrower arc to center them upwards (e.g. Math.PI * 1.1 to Math.PI * 1.9)
      const fraction = i / (numRays - 1);
      const angle = Math.PI * (1.08 + fraction * 0.84);
      const length = 180 + Math.random() * 200 + (Math.sin(fraction * Math.PI) * 120); // taller in center
      tempRays.push({
        baseAngle: angle,
        length: length,
        currentLength: 0, // animate length on load
        speed: 1.2 + Math.random() * 1.5,
        phase: Math.random() * Math.PI * 2,
        thickness: 0.6 + Math.random() * 0.8,
      });
    }
    raysRef.current = tempRays;

    // Initialize Sparks
    const numSparks = 35;
    const tempSparks: Spark[] = [];
    for (let i = 0; i < numSparks; i++) {
      tempSparks.push({
        rayIndex: Math.floor(Math.random() * numRays),
        progress: Math.random(),
        speed: 0.005 + Math.random() * 0.008,
        size: 1 + Math.random() * 1.5,
      });
    }
    sparksRef.current = tempSparks;

    // Track Mouse position globally relative to canvas
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Mouse is considered active if it is within a reasonable distance from the canvas boundary
      if (
        x >= -100 &&
        x <= rect.width + 100 &&
        y >= -150 &&
        y <= rect.height + 50
      ) {
        mouseRef.current = { x, y, active: true };
      } else {
        mouseRef.current.active = false;
      }
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Animation Loop
    let animationFrameId: number;
    let time = 0;

    const render = () => {
      time += 0.01;
      const width = canvas.width / window.devicePixelRatio;
      const height = canvas.height / window.devicePixelRatio;

      // Clear with slight transparency to allow subtle trail
      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height; // origin sits flush at the bottom edge

      const mouse = mouseRef.current;
      const rays = raysRef.current;
      const sparks = sparksRef.current;

      // Draw active rays
      rays.forEach((ray, index) => {
        // Animate initial load length
        if (ray.currentLength < ray.length) {
          ray.currentLength += (ray.length - ray.currentLength) * 0.08;
        }

        // Oscillate ray length slightly
        const oscLength = ray.currentLength + Math.sin(time * ray.speed + ray.phase) * 12;

        // Base straight coordinates
        const defaultEndX = centerX + Math.cos(ray.baseAngle) * oscLength;
        const defaultEndY = centerY + Math.sin(ray.baseAngle) * oscLength;

        let endX = defaultEndX;
        let endY = defaultEndY;
        let ctrlX = centerX + Math.cos(ray.baseAngle) * oscLength * 0.5;
        let ctrlY = centerY + Math.sin(ray.baseAngle) * oscLength * 0.5;

        // Apply mouse magnetic bend physics
        if (mouse.active) {
          const dx = mouse.x - defaultEndX;
          const dy = mouse.y - defaultEndY;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxInfluenceDist = 220;

          if (dist < maxInfluenceDist) {
            const pull = Math.pow(1 - dist / maxInfluenceDist, 2) * 0.6; // smooth falloff
            
            // Bend end coordinates towards the mouse
            endX = defaultEndX + (mouse.x - defaultEndX) * pull;
            endY = defaultEndY + (mouse.y - defaultEndY) * pull;

            // Bend control coordinate slightly less to create a curved effect
            const ctrlPull = pull * 0.55;
            ctrlX = ctrlX + (mouse.x - ctrlX) * ctrlPull;
            ctrlY = ctrlY + (mouse.y - ctrlY) * ctrlPull;
          }
        }

        // Draw the curved ray line
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.quadraticCurveTo(ctrlX, ctrlY, endX, endY);

        // Linear gradient from transparent center to bright tip
        const gradient = ctx.createLinearGradient(centerX, centerY, endX, endY);
        // preDoctr.pk Signature Light-Blue theme (#4096EE)
        gradient.addColorStop(0, 'rgba(64, 150, 238, 0.01)');
        gradient.addColorStop(0.3, 'rgba(64, 150, 238, 0.15)');
        gradient.addColorStop(0.7, 'rgba(122, 188, 255, 0.45)');
        gradient.addColorStop(0.95, 'rgba(255, 255, 255, 0.7)');
        gradient.addColorStop(1, '#ffffff');

        ctx.strokeStyle = gradient;
        ctx.lineWidth = ray.thickness;
        ctx.stroke();

        // Draw a tiny glowing point at the tip
        ctx.beginPath();
        const isHovered = mouse.active && Math.sqrt(Math.pow(mouse.x - endX, 2) + Math.pow(mouse.y - endY, 2)) < 30;
        const glowRadius = isHovered ? 2.5 : 1.2;
        
        ctx.arc(endX, endY, glowRadius, 0, Math.PI * 2);
        ctx.fillStyle = isHovered ? '#ffffff' : 'rgba(122, 188, 255, 0.8)';
        ctx.fill();

        // If hovered, draw a subtle extra outer halo
        if (isHovered) {
          ctx.beginPath();
          ctx.arc(endX, endY, 6, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(255, 255, 255, 0.15)';
          ctx.fill();
        }
      });

      // Update and Draw data sparks traveling along the curves
      sparks.forEach((spark) => {
        spark.progress += spark.speed;
        
        // Loop back to center when it reaches the tip
        if (spark.progress >= 1) {
          spark.progress = 0;
          spark.rayIndex = Math.floor(Math.random() * rays.length);
          spark.speed = 0.005 + Math.random() * 0.008;
        }

        const ray = rays[spark.rayIndex];
        if (!ray) return;

        const oscLength = ray.currentLength + Math.sin(time * ray.speed + ray.phase) * 12;

        const defaultEndX = centerX + Math.cos(ray.baseAngle) * oscLength;
        const defaultEndY = centerY + Math.sin(ray.baseAngle) * oscLength;

        let endX = defaultEndX;
        let endY = defaultEndY;
        let ctrlX = centerX + Math.cos(ray.baseAngle) * oscLength * 0.5;
        let ctrlY = centerY + Math.sin(ray.baseAngle) * oscLength * 0.5;

        // Incorporate same mouse pull for sparks so they stick to the curved paths
        if (mouse.active) {
          const dx = mouse.x - defaultEndX;
          const dy = mouse.y - defaultEndY;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxInfluenceDist = 220;

          if (dist < maxInfluenceDist) {
            const pull = Math.pow(1 - dist / maxInfluenceDist, 2) * 0.6;
            endX = defaultEndX + (mouse.x - defaultEndX) * pull;
            endY = defaultEndY + (mouse.y - defaultEndY) * pull;

            const ctrlPull = pull * 0.55;
            ctrlX = ctrlX + (mouse.x - ctrlX) * ctrlPull;
            ctrlY = ctrlY + (mouse.y - ctrlY) * ctrlPull;
          }
        }

        // Quadratic bezier formula to compute position at 't = spark.progress'
        const t = spark.progress;
        const x = (1 - t) * (1 - t) * centerX + 2 * (1 - t) * t * ctrlX + t * t * endX;
        const y = (1 - t) * (1 - t) * centerY + 2 * (1 - t) * t * ctrlY + t * t * endY;

        // Draw spark
        ctx.beginPath();
        ctx.arc(x, y, spark.size, 0, Math.PI * 2);
        
        // Sparks glow pure white or light sky-blue (#7ABCFF)
        ctx.fillStyle = spark.progress > 0.6 
          ? '#ffffff' 
          : 'rgba(122, 188, 255, 0.9)';
        ctx.shadowColor = '#4096EE';
        ctx.shadowBlur = spark.progress > 0.6 ? 4 : 0;
        ctx.fill();
        ctx.shadowBlur = 0; // reset shadow for performance
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    // Clean up
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="absolute bottom-0 left-0 right-0 h-[400px] w-full overflow-hidden pointer-events-none z-0 hidden lg:block"
      style={{
        maskImage: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.85) 60%, rgba(0,0,0,0) 100%)',
        WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.85) 60%, rgba(0,0,0,0) 100%)'
      }}
    >
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  );
};

export default InteractiveRays;
