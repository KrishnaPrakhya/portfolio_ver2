"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
}

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);
  const mousePosition = useRef({ x: 0, y: 0 });
  const animationFrameId = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas to full screen
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    // Track mouse position
    const handleMouseMove = (e: MouseEvent) => {
      mousePosition.current = { x: e.clientX, y: e.clientY };
    };

    // Initialize particles
    const initParticles = () => {
      particles.current = [];
      const particleCount = Math.min(Math.floor(window.innerWidth / 10), 100);

      for (let i = 0; i < particleCount; i++) {
        particles.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5,
          speedX: Math.random() * 0.5 - 0.25,
          speedY: Math.random() * 0.5 - 0.25,
          color: getRandomColor(0.5),
        });
      }
    };

    const getRandomColor = (opacity: number) => {
      const colors = [
        `rgba(35, 166, 213, ${opacity})`, // Light blue
        `rgba(35, 213, 171, ${opacity})`, // Teal
        `rgba(231, 60, 126, ${opacity})`, // Pink
        `rgba(238, 119, 82, ${opacity})`, // Orange
      ];
      return colors[Math.floor(Math.random() * colors.length)];
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.current.forEach((particle, index) => {
        // Move particles
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Wrap around edges
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.y > canvas.height) particle.y = 0;
        if (particle.y < 0) particle.y = canvas.height;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();

        // Connect particles within range
        connectParticles(particle, index);

        // React to mouse
        const dx = mousePosition.current.x - particle.x;
        const dy = mousePosition.current.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 150) {
          // Draw connection to mouse
          ctx.beginPath();
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(mousePosition.current.x, mousePosition.current.y);
          ctx.strokeStyle = `rgba(0, 255, 255, ${0.2 * (1 - distance / 150)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();

          // Push particles away from mouse
          const forceDirectionX = dx / distance;
          const forceDirectionY = dy / distance;
          const force = (150 - distance) / 150;

          particle.speedX -= forceDirectionX * force * 0.02;
          particle.speedY -= forceDirectionY * force * 0.02;
        }

        // Add some randomness to movement
        particle.speedX += (Math.random() - 0.5) * 0.01;
        particle.speedY += (Math.random() - 0.5) * 0.01;

        // Limit speed
        const maxSpeed = 0.5;
        particle.speedX = Math.max(
          Math.min(particle.speedX, maxSpeed),
          -maxSpeed
        );
        particle.speedY = Math.max(
          Math.min(particle.speedY, maxSpeed),
          -maxSpeed
        );
      });

      animationFrameId.current = requestAnimationFrame(animate);
    };

    const connectParticles = (particle: Particle, index: number) => {
      for (let i = index + 1; i < particles.current.length; i++) {
        const otherParticle = particles.current[i];
        const dx = particle.x - otherParticle.x;
        const dy = particle.y - otherParticle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 100) {
          ctx.beginPath();
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(otherParticle.x, otherParticle.y);
          ctx.strokeStyle = `rgba(0, 255, 255, ${0.2 * (1 - distance / 100)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    };

    // Set up
    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    handleResize();
    animate();

    // Clean up
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId.current);
    };
  }, []);

  return (
    <motion.canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    />
  );
}
