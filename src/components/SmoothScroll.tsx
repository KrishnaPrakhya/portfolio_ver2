"use client";
import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useAnimation,
} from "framer-motion";
import { ArrowRight, Star, Zap, Heart } from "lucide-react";

const SmoothLandingPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const translateX = useTransform(smoothProgress, [0, 0.8], ["0%", "-300%"]);
  const opacity = useTransform(
    smoothProgress,
    [0, 0.2, 0.7, 0.8],
    [1, 1, 1, 0]
  );
  const scale = useTransform(
    smoothProgress,
    [0, 0.2, 0.7, 0.8],
    [1, 0.95, 0.95, 0.9]
  );

  const sections = [
    {
      title: "Welcome",
      color: "#E7F63C", // Lemon Lime
      subtitle: "to the Future of Driving",
      icon: Zap,
      content: "Experience luxury and performance like never before",
      features: ["Premium Selection", "Expert Guidance", "Seamless Experience"],
    },
    {
      title: "Discover",
      color: "#999999", // Battleship Gray
      subtitle: "Our Collection",
      icon: Star,
      content: "Browse through our curated collection of premium vehicles",
      features: ["Latest Models", "Custom Options", "Virtual Tours"],
    },
    {
      title: "Experience",
      color: "#E7F63C", // Lemon Lime
      subtitle: "The Difference",
      icon: Heart,
      content: "Test drive your dream car at your convenience",
      features: ["Home Delivery", "Flexible Terms", "24/7 Support"],
    },
    {
      title: "Connect",
      color: "#999999", // Battleship Gray
      subtitle: "With Us",
      icon: ArrowRight,
      content: "Join our community of car enthusiasts",
      features: ["Expert Advice", "Special Events", "Priority Access"],
    },
  ];

  return (
    <div ref={containerRef} className="h-[300vh] relative">
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div
          style={{ translateX, opacity, scale }}
          className="h-full flex items-center"
        >
          <div className="flex">
            {sections.map((section, index) => (
              <Section key={index} {...section} />
            ))}
          </div>
        </motion.div>
      </div>
      <motion.div
        className="h-screen bg-transparent"
        style={{ opacity: useTransform(smoothProgress, [0.7, 0.8], [0, 1]) }}
      />
    </div>
  );
};

const Section = ({
  title,
  color,
  subtitle,
  icon: Icon,
  content,
  features,
}: {
  title: string;
  color: string;
  subtitle: string;
  icon: any;
  content: string;
  features: string[];
}) => {
  const controls = useAnimation();

  const textColor = color === "#E7F63C" ? "#282828" : "#FFFFFF";
  const featureBackground =
    color === "#E7F63C" ? "#282828" : "rgba(255,255,255,0.1)";
  const featureText = "#FFFFFF";

  return (
    <motion.div
      className="w-screen h-screen flex items-center justify-center p-10"
      style={{ backgroundColor: color }}
      whileHover={{ scale: 1.02 }}
      onHoverStart={() =>
        controls.start({ y: -10, transition: { duration: 0.3 } })
      }
      onHoverEnd={() => controls.start({ y: 0, transition: { duration: 0.3 } })}
    >
      <motion.div
        className="max-w-4xl mx-auto text-center space-y-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="inline-block p-4 rounded-full"
          style={{ backgroundColor: featureBackground }}
          whileHover={{ rotate: 360 }}
          transition={{ duration: 1 }}
        >
          <Icon className="w-8 h-8" style={{ color: featureText }} />
        </motion.div>

        <motion.div animate={controls} className="space-y-4">
          <h2
            className="text-7xl font-bold tracking-tight"
            style={{ color: textColor }}
          >
            {title}
          </h2>
          <p className="text-3xl font-light" style={{ color: textColor }}>
            {subtitle}
          </p>
        </motion.div>

        <motion.p
          className="text-xl max-w-2xl mx-auto"
          style={{ color: textColor }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {content}
        </motion.p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="rounded-xl p-4 hover:cursor-pointer"
              style={{ backgroundColor: featureBackground }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <p style={{ color: featureText }} className="font-medium">
                {feature}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default SmoothLandingPage;
