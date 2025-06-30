'use client';

import { useEffect, useRef } from 'react';

export default function RaindropShader() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationIdRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Realistic Raindrop class with proper size and 45-degree angle
    class Raindrop {
      x: number;
      y: number;
      length: number;
      speed: number;
      opacity: number;
      thickness: number;
      angle: number;
      wind: number;
      type: 'drizzle' | 'light' | 'medium' | 'heavy' | 'storm';
      acceleration: number;
      maxSpeed: number;
      wobble: number;
      wobbleSpeed: number;
      trail: Array<{ x: number; y: number; opacity: number; thickness: number }>;

      constructor() {
        this.x = Math.random() * (canvas.width + 400) - 200;
        this.y = Math.random() * canvas.height - canvas.height - 300;
        
        // Realistic raindrop sizes - much smaller and more natural
        const rand = Math.random();
        if (rand < 0.05) {
          this.type = 'storm';
          this.length = Math.random() * 15 + 12; // Reduced from 80+60 to 15+12
          this.speed = Math.random() * 8 + 6;
          this.maxSpeed = 15;
          this.thickness = Math.random() * 1.5 + 1; // Reduced from 5+4 to 1.5+1
          this.opacity = Math.random() * 0.8 + 0.6;
        } else if (rand < 0.15) {
          this.type = 'heavy';
          this.length = Math.random() * 12 + 8; // Reduced from 60+40 to 12+8
          this.speed = Math.random() * 7 + 5;
          this.maxSpeed = 12;
          this.thickness = Math.random() * 1.2 + 0.8; // Reduced from 4+3 to 1.2+0.8
          this.opacity = Math.random() * 0.7 + 0.5;
        } else if (rand < 0.35) {
          this.type = 'medium';
          this.length = Math.random() * 10 + 6; // Reduced from 40+25 to 10+6
          this.speed = Math.random() * 6 + 4;
          this.maxSpeed = 10;
          this.thickness = Math.random() * 1 + 0.6; // Reduced from 3+2 to 1+0.6
          this.opacity = Math.random() * 0.6 + 0.4;
        } else if (rand < 0.65) {
          this.type = 'light';
          this.length = Math.random() * 8 + 4; // Reduced from 25+15 to 8+4
          this.speed = Math.random() * 5 + 3;
          this.maxSpeed = 8;
          this.thickness = Math.random() * 0.8 + 0.4; // Reduced from 2+1.5 to 0.8+0.4
          this.opacity = Math.random() * 0.5 + 0.3;
        } else {
          this.type = 'drizzle';
          this.length = Math.random() * 6 + 3; // Reduced from 15+8 to 6+3
          this.speed = Math.random() * 4 + 2;
          this.maxSpeed = 6;
          this.thickness = Math.random() * 0.6 + 0.3; // Reduced from 1.5+0.8 to 0.6+0.3
          this.opacity = Math.random() * 0.4 + 0.2;
        }
        
        this.acceleration = 0.1;
        // Fixed 45-degree angle (Math.PI/4 radians = 45 degrees)
        this.angle = Math.PI / 4 + (Math.random() - 0.5) * 0.2; // 45° ± 5.7° variation
        this.wind = 0;
        this.wobble = Math.random() * Math.PI * 2;
        this.wobbleSpeed = Math.random() * 0.02 + 0.01;
        this.trail = [];
      }

      update() {
        // Realistic physics with terminal velocity
        if (this.speed < this.maxSpeed) {
          this.speed += this.acceleration;
        }
        
        // Subtle wind effect
        const time = Date.now() * 0.001;
        this.wind = Math.sin(time * 0.5) * 0.8 + Math.sin(time * 1.2) * 0.4;
        
        // Minimal wobble for smaller raindrops
        this.wobble += this.wobbleSpeed;
        const wobbleOffset = Math.sin(this.wobble) * (this.type === 'drizzle' ? 1 : 0.5);
        
        // Update position with 45-degree angle
        const angleX = Math.cos(this.angle) * this.speed;
        const angleY = Math.sin(this.angle) * this.speed;
        
        this.x += angleX + this.wind + wobbleOffset;
        this.y += angleY;
        
        // Trail for larger raindrops only
        if (this.type === 'heavy' || this.type === 'storm') {
          this.trail.push({
            x: this.x,
            y: this.y,
            opacity: this.opacity * 0.3,
            thickness: this.thickness * 0.6
          });
          
          if (this.trail.length > 4) { // Shorter trails
            this.trail.shift();
          }
          
          this.trail.forEach((point) => {
            point.opacity *= 0.9;
          });
        }
        
        // Reset when off screen
        if (this.y > canvas.height + 100 || this.x > canvas.width + 200) {
          this.y = -this.length - Math.random() * 200;
          this.x = Math.random() * canvas.width - 100;
          this.speed = this.getInitialSpeed();
          this.trail = [];
        }
      }

      getInitialSpeed() {
        switch (this.type) {
          case 'storm': return Math.random() * 8 + 6;
          case 'heavy': return Math.random() * 7 + 5;
          case 'medium': return Math.random() * 6 + 4;
          case 'light': return Math.random() * 5 + 3;
          default: return Math.random() * 4 + 2;
        }
      }

      draw() {
        ctx.save();
        
        // Draw trail first
        if (this.trail.length > 0) {
          this.trail.forEach((point, index) => {
            if (point.opacity > 0.05) {
              ctx.globalAlpha = point.opacity;
              ctx.strokeStyle = this.getTrailColor();
              ctx.lineWidth = point.thickness;
              ctx.lineCap = 'round';
              
              if (index > 0) {
                ctx.beginPath();
                ctx.moveTo(this.trail[index - 1].x, this.trail[index - 1].y);
                ctx.lineTo(point.x, point.y);
                ctx.stroke();
              }
            }
          });
        }
        
        // Main raindrop
        ctx.globalAlpha = this.opacity;
        ctx.lineCap = 'round';
        
        // Calculate end position based on 45-degree angle
        const endX = this.x + Math.cos(this.angle) * this.length;
        const endY = this.y + Math.sin(this.angle) * this.length;
        
        // Create realistic gradient
        const gradient = ctx.createLinearGradient(this.x, this.y, endX, endY);
        gradient.addColorStop(0, this.getHeadColor());
        gradient.addColorStop(0.3, this.getBodyColor());
        gradient.addColorStop(0.8, this.getBodyColor());
        gradient.addColorStop(1, this.getTailColor());
        
        ctx.strokeStyle = gradient;
        ctx.lineWidth = this.thickness;
        
        // Draw main raindrop line
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(endX, endY);
        ctx.stroke();
        
        // Add subtle highlight for larger raindrops
        if (this.type === 'heavy' || this.type === 'storm') {
          ctx.globalAlpha = this.opacity * 0.6;
          ctx.lineWidth = Math.max(this.thickness * 0.3, 0.2);
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.8)';
          
          ctx.beginPath();
          ctx.moveTo(this.x + 0.5, this.y);
          ctx.lineTo(endX + 0.5, endY);
          ctx.stroke();
        }
        
        ctx.restore();
      }

      getHeadColor() {
        switch (this.type) {
          case 'storm':
            return 'rgba(30, 58, 138, 0.9)';
          case 'heavy':
            return 'rgba(37, 99, 235, 0.8)';
          case 'medium':
            return 'rgba(59, 130, 246, 0.7)';
          case 'light':
            return 'rgba(96, 165, 250, 0.6)';
          default:
            return 'rgba(147, 197, 253, 0.5)';
        }
      }

      getBodyColor() {
        switch (this.type) {
          case 'storm':
            return 'rgba(59, 130, 246, 0.7)';
          case 'heavy':
            return 'rgba(96, 165, 250, 0.6)';
          case 'medium':
            return 'rgba(147, 197, 253, 0.5)';
          case 'light':
            return 'rgba(191, 219, 254, 0.4)';
          default:
            return 'rgba(219, 234, 254, 0.3)';
        }
      }

      getTailColor() {
        switch (this.type) {
          case 'storm':
            return 'rgba(147, 197, 253, 0.3)';
          case 'heavy':
            return 'rgba(191, 219, 254, 0.2)';
          default:
            return 'rgba(219, 234, 254, 0.1)';
        }
      }

      getTrailColor() {
        switch (this.type) {
          case 'storm':
            return 'rgba(30, 58, 138, 0.3)';
          case 'heavy':
            return 'rgba(37, 99, 235, 0.2)';
          default:
            return 'rgba(59, 130, 246, 0.1)';
        }
      }
    }

    // Splash effect
    class Splash {
      x: number;
      y: number;
      size: number;
      opacity: number;
      life: number;
      maxLife: number;
      ripples: Array<{ radius: number; opacity: number; thickness: number }>;

      constructor(x: number, y: number, intensity: 'light' | 'medium' | 'heavy') {
        this.x = x;
        this.y = y;
        this.life = 0;
        
        switch (intensity) {
          case 'heavy':
            this.size = Math.random() * 8 + 6;
            this.maxLife = 25 + Math.random() * 10;
            this.opacity = 0.7;
            break;
          case 'medium':
            this.size = Math.random() * 6 + 4;
            this.maxLife = 20 + Math.random() * 8;
            this.opacity = 0.5;
            break;
          default:
            this.size = Math.random() * 4 + 2;
            this.maxLife = 15 + Math.random() * 5;
            this.opacity = 0.3;
        }
        
        this.ripples = [];
        
        // Create ripples
        for (let i = 0; i < 2; i++) {
          this.ripples.push({
            radius: i * 3,
            opacity: this.opacity * (1 - i * 0.3),
            thickness: Math.max(1.5 - i * 0.3, 0.3)
          });
        }
      }

      update() {
        this.life++;
        
        this.ripples.forEach(ripple => {
          ripple.radius += 0.6;
          ripple.opacity *= 0.96;
        });
      }

      draw() {
        if (this.life >= this.maxLife) return;
        
        ctx.save();
        
        this.ripples.forEach(ripple => {
          if (ripple.opacity > 0.01) {
            ctx.globalAlpha = ripple.opacity;
            ctx.strokeStyle = 'rgba(147, 197, 253, 0.6)';
            ctx.lineWidth = ripple.thickness;
            
            ctx.beginPath();
            ctx.arc(this.x, this.y, ripple.radius, 0, Math.PI * 2);
            ctx.stroke();
          }
        });
        
        ctx.restore();
      }

      isDead() {
        return this.life >= this.maxLife;
      }
    }

    // Initialize raindrops with better distribution
    const raindrops: Raindrop[] = [];
    const splashes: Splash[] = [];
    
    // More realistic raindrop count
    const numRaindrops = Math.min(Math.floor((canvas.width * canvas.height) / 5000), 300);
    
    for (let i = 0; i < numRaindrops; i++) {
      raindrops.push(new Raindrop());
    }

    let lastSplashTime = 0;

    // Animation loop
    const animate = () => {
      // Clear with subtle fade
      ctx.fillStyle = 'rgba(15, 23, 42, 0.08)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw raindrops
      const currentTime = Date.now();
      raindrops.forEach(drop => {
        drop.update();
        drop.draw();
        
        // Create splashes occasionally
        if (drop.y > canvas.height - 20 && 
            currentTime - lastSplashTime > 100 && 
            Math.random() < 0.1) {
          
          const intensity = drop.type === 'storm' || drop.type === 'heavy' ? 'heavy' :
                           drop.type === 'medium' ? 'medium' : 'light';
          
          splashes.push(new Splash(drop.x, canvas.height - 5, intensity));
          lastSplashTime = currentTime;
        }
      });

      // Update and draw splashes
      for (let i = splashes.length - 1; i >= 0; i--) {
        splashes[i].update();
        splashes[i].draw();
        
        if (splashes[i].isDead()) {
          splashes.splice(i, 1);
        }
      }

      animationIdRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
}