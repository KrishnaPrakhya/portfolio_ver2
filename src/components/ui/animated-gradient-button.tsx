"use client";
import { useState } from "react";
import type React from "react";

import { motion } from "framer-motion";

interface AnimatedGradientButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary" | "outline";
}

export default function AnimatedGradientButton({
  children,
  onClick,
  className = "",
  type = "button",
  disabled = false,
  size = "md",
  variant = "primary",
}: AnimatedGradientButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Size classes
  const sizeClasses = {
    sm: "py-2 px-4 text-sm",
    md: "py-3 px-6 text-base",
    lg: "py-4 px-8 text-lg",
  };

  // Variant classes
  const variantClasses = {
    primary: "text-black font-medium",
    secondary:
      "bg-black/20 backdrop-blur-md border border-accent/30 text-white",
    outline:
      "bg-transparent border border-accent text-accent hover:bg-accent/10",
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        relative overflow-hidden rounded-lg ${sizeClasses[size]} ${
        variantClasses[variant]
      }
        transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-accent/50
        ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
        ${className}
      `}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Animated gradient background for primary variant */}
      {variant === "primary" && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-accent to-teal-400 z-0"
          animate={{
            backgroundPosition: isHovered ? ["0% 0%", "100% 100%"] : "0% 0%",
          }}
          transition={{
            duration: 1.5,
            ease: "easeInOut",
            repeat: isHovered ? Number.POSITIVE_INFINITY : 0,
            repeatType: "reverse",
          }}
        />
      )}

      {/* Glow effect */}
      <motion.div
        className={`absolute inset-0 rounded-lg ${
          variant === "primary" ? "bg-accent/20" : "bg-accent/10"
        }`}
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{ filter: "blur(15px)" }}
      />

      {/* Button content */}
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </motion.button>
  );
}
