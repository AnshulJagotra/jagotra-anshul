
'use client';

import React, { useRef, useEffect } from 'react';

export function BackgroundEffects() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = document.body.scrollHeight);
    let particles: Particle[] = [];
    let mouse = { x: width / 2, y: height / 2 };

    class Particle {
      x: number;
      y: number;
      size: number;
      baseX: number;
      baseY: number;
      density: number;
      color: string;

      constructor(x: number, y: number, color: string) {
        this.x = x;
        this.y = y;
        this.size = 1;
        this.baseX = this.x;
        this.baseY = this.y;
        this.density = Math.random() * 30 + 1;
        this.color = color;
      }

      draw() {
        if(!ctx) return;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      }

      update() {
        if(!ctx) return;
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        let forceDirectionX = dx / distance;
        let forceDirectionY = dy / distance;
        let maxDistance = 100;
        let force = (maxDistance - distance) / maxDistance;
        let directionX = forceDirectionX * force * this.density;
        let directionY = forceDirectionY * force * this.density;

        if (distance < maxDistance) {
          this.x -= directionX;
          this.y -= directionY;
        } else {
          if (this.x !== this.baseX) {
            let dx = this.x - this.baseX;
            this.x -= dx / 10;
          }
          if (this.y !== this.baseY) {
            let dy = this.y - this.baseY;
            this.y -= dy / 10;
          }
        }
      }
    }

    const init = () => {
      particles = [];
      const isDark = document.documentElement.classList.contains('dark');
      const particleColor = isDark ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.5)';
      const numberOfParticles = (width * height) / 9000;
      for (let i = 0; i < numberOfParticles; i++) {
        let x = Math.random() * width;
        let y = Math.random() * height;
        particles.push(new Particle(x, y, particleColor));
      }
    };

    const animate = () => {
      if(!ctx) return;
      ctx.clearRect(0, 0, width, height);
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
      }
      requestAnimationFrame(animate);
    };

    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    };
    
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = document.body.scrollHeight;
      init();
    };

    init();
    animate();
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    const themeObserver = new MutationObserver((mutations) => {
      mutations.forEach(mutation => {
        if (mutation.attributeName === 'class') {
          handleResize(); // Re-init particles with new color
        }
      });
    });

    themeObserver.observe(document.documentElement, { attributes: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      themeObserver.disconnect();
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-20">
      <div className="absolute inset-0 noise-texture pointer-events-none"></div>
      <div className="absolute inset-0 grid-overlay pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/20 rounded-full filter blur-3xl opacity-50 animate-blob-1 pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full filter blur-3xl opacity-50 animate-blob-2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-secondary/20 rounded-full filter blur-3xl opacity-50 animate-blob-3 pointer-events-none"></div>
      <canvas ref={canvasRef} className="fixed inset-0 -z-10" />
    </div>
  );
}
