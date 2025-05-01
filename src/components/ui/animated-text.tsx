"use client";
import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  className?: string;
  once?: boolean;
  repeatDelay?: number;
  animation?: "typewriter" | "reveal" | "bounce" | "wave";
  color?: string;
}

export default function AnimatedText({
  text,
  className = "",
  once = true,
  repeatDelay = 0,
  animation = "reveal",
  color = "text-white",
}: AnimatedTextProps) {
  const controls = useAnimation();
  const textRef = useRef(null);
  const isInView = useInView(textRef, { once });

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const animate = async () => {
      if (isInView) {
        await controls.start("visible");

        if (!once && repeatDelay > 0) {
          timeout = setTimeout(async () => {
            await controls.start("hidden");
            controls.start("visible");
          }, repeatDelay);
        }
      }
    };

    animate();

    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [isInView, controls, once, repeatDelay]);

  // Split text into words and characters
  const words = text.split(" ");

  // Animation variants based on selected animation type
  const variants = {
    typewriter: {
      hidden: {},
      visible: {},
    },
    reveal: {
      hidden: {},
      visible: {},
    },
    bounce: {
      hidden: {},
      visible: {},
    },
    wave: {
      hidden: {},
      visible: {},
    },
  };

  // Character variants
  const typewriterCharVariants = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      opacity: 1,
      transition: { delay: i * 0.03 },
    }),
  };

  const revealVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  const bounceVariants = {
    hidden: { opacity: 0, scale: 0.5, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        delay: i * 0.04,
        duration: 0.4,
        type: "spring",
        stiffness: 200,
        damping: 10,
      },
    }),
  };

  const waveVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  // Select the appropriate variant based on animation type
  const getVariant = () => {
    switch (animation) {
      case "typewriter":
        return typewriterCharVariants;
      case "bounce":
        return bounceVariants;
      case "wave":
        return waveVariants;
      case "reveal":
      default:
        return revealVariants;
    }
  };

  const selectedVariant = getVariant();

  return (
    <motion.div
      ref={textRef}
      className={`${className} inline-block`}
      variants={variants[animation]}
      initial="hidden"
      animate={controls}
    >
      {words.map((word, wordIndex) => (
        <span key={`word-${wordIndex}`} className="inline-block mr-2 mb-2">
          {Array.from(word).map((char, charIndex) => (
            <motion.span
              key={`char-${charIndex}`}
              className={`inline-block ${color}`}
              variants={selectedVariant}
              custom={wordIndex * 5 + charIndex}
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.div>
  );
}
