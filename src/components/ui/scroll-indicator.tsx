"use client";

import { motion, useScroll } from "framer-motion";
import { useEffect, useState } from "react";

export default function ScrollIndicator() {
  const [isVisible, setIsVisible] = useState(true);
  const { scrollY } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      // Hide the indicator after scrolling down a bit
      if (scrollY.get() > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    const unsubscribe = scrollY.onChange(handleScroll);
    return () => unsubscribe();
  }, [scrollY]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed bottom-10 left-1/2 transform -translate-x-1/2 z-50 flex flex-col items-center"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2, duration: 0.8 }}
    >
      <span className="text-sm text-gray-400 mb-2">Scroll Down</span>
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
            repeatType: "loop",
          }}
        />
      </motion.div>
    </motion.div>
  );
}
