"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export default function ScrollIndicator() {
  const [showIndicator, setShowIndicator] = useState(true);
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 200], [1, 0]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowIndicator(false);
      } else {
        setShowIndicator(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!showIndicator) return null;

  return (
    <motion.div
      className="fixed bottom-10 left-1/2 transform -translate-x-1/2 z-50 flex flex-col items-center"
      style={{ opacity }}
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 2, duration: 0.8 }}
    >
      <span className="text-accent text-sm mb-2">Scroll Down</span>
      <motion.div
        className="w-6 h-10 rounded-full border-2 border-accent flex justify-center p-1"
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      >
        <motion.div
          className="w-1.5 h-1.5 bg-accent rounded-full"
          animate={{ y: [0, 12, 0] }}
          transition={{
            duration: 1.5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </motion.div>
  );
}
