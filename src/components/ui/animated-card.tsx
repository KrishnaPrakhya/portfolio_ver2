"use client";
import { useState, useRef } from "react";
import type React from "react";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}

export default function AnimatedCard({
  children,
  className = "",
  glowColor = "rgba(0, 255, 255, 0.4)",
}: AnimatedCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Mouse position values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring physics for rotation
  const rotateX = useSpring(useTransform(mouseY, [0, 300], [10, -10]), {
    stiffness: 150,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(mouseX, [0, 300], [-10, 10]), {
    stiffness: 150,
    damping: 20,
  });

  // Handle mouse move on card
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const offsetY = e.clientY - rect.top;

    mouseX.set(offsetX);
    mouseY.set(offsetY);
  };

  return (
    <motion.div
      ref={cardRef}
      className={`relative overflow-hidden rounded-xl ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        rotateX: isHovered ? rotateX : 0,
        rotateY: isHovered ? rotateY : 0,
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {/* Glow effect */}
      {isHovered && (
        <motion.div
          className="absolute inset-0 z-0 opacity-70"
          style={{
            background: `radial-gradient(circle at ${mouseX.get()}px ${mouseY.get()}px, ${glowColor} 0%, transparent 70%)`,
            filter: "blur(20px)",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        />
      )}

      {/* Card content with 3D effect */}
      <motion.div
        className="relative z-10 h-full w-full"
        style={{ transform: "translateZ(40px)" }}
      >
        {children}
      </motion.div>

      {/* Border glow */}
      {isHovered && (
        <motion.div
          className="absolute inset-0 rounded-xl z-0"
          style={{
            boxShadow: `0 0 20px 2px ${glowColor}`,
            opacity: 0.6,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        />
      )}
    </motion.div>
  );
}
