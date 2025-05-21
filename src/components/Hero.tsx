"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRouter } from "next/navigation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import AnimatedText from "./ui/animated-text";
import AnimatedGradientButton from "./ui/animated-gradient-button";
import ScrollIndicator from "./ui/scroll-indicator";
import { SocialIcon } from "react-social-icons";
import Sphere3D from "./ui/3d-sphere";

// Register ScrollTrigger
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Generate fixed star positions to avoid hydration mismatch
const generateStars = (count: number) => {
  const stars = [];
  for (let i = 0; i < count; i++) {
    stars.push({
      id: i,
      top: `${i * 2.5}%`,
      left: `${(i * 3.7) % 100}%`,
      opacity: 0.3 + (i % 7) / 10,
      delay: i * 0.1,
      duration: 2 + (i % 5),
    });
  }
  return stars;
};

export default function EnhancedHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const sphereRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);

  // Use useEffect to set isClient to true after component mounts
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Check if device is mobile
  const isMobile = isClient && window.innerWidth < 768;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Only transform the text on scroll, not the sphere
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    if (!isClient) return;

    const tl = gsap.timeline({
      defaults: { duration: 0.8, ease: "power3.out" },
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    if (textRef.current) {
      tl.fromTo(textRef.current, { y: 0 }, { y: 100 }, 0);

      // Don't move the sphere on scroll
      // Remove the line that animates the sphere
    }

    return () => {
      tl.kill();
    };
  }, [isClient]);

  // Define skill badges with different animations
  // Adjust positions for better mobile display
  const skillBadges = [
    {
      name: "React",
      position: isMobile ? "top-5 right-5" : "top-10 right-10",
      animation: {
        y: [0, 10, 0],
        x: [0, 5, 0],
      },
      duration: 4,
      delay: 0,
    },
    {
      name: "Next.js",
      position: isMobile ? "bottom-10 right-2" : "bottom-20 right-5",
      animation: {
        y: [0, -10, 0],
        x: [0, -5, 0],
      },
      duration: 5,
      delay: 1,
    },
    {
      name: "TypeScript",
      position: isMobile ? "top-1/4 right-0" : "top-1/3 right-0",
      animation: {
        y: [0, 15, 0],
        x: [0, 8, 0],
      },
      duration: 6,
      delay: 2,
    },
    {
      name: "Machine Learning",
      position: isMobile ? "bottom-5 left-2" : "bottom-5 left-10",
      animation: {
        y: [0, -15, 0],
        x: [0, 10, 0],
      },
      duration: 7,
      delay: 0.5,
    },
    {
      name: "TensorFlow",
      position: isMobile ? "top-10 left-2" : "top-20 left-20",
      animation: {
        y: [0, 12, 0],
        x: [0, -12, 0],
      },
      duration: 5.5,
      delay: 1.5,
    },
    {
      name: "PyTorch",
      position: isMobile ? "top-1/4 left-1" : "top-1/3 left-5",
      animation: {
        y: [0, -8, 0],
        x: [0, -10, 0],
      },
      duration: 4.5,
      delay: 2.5,
    },
    {
      name: "Deep Learning",
      position: isMobile ? "bottom-1/5 right-2" : "bottom-1/4 right-10",
      animation: {
        y: [0, 10, 0],
        x: [0, -7, 0],
      },
      duration: 6.5,
      delay: 1.2,
    },
    {
      name: "Neural Networks",
      position: isMobile ? "bottom-1/4 left-1" : "bottom-1/3 left-1/4",
      animation: {
        y: [0, -12, 0],
        x: [0, 5, 0],
      },
      duration: 5.2,
      delay: 0.8,
    },
    {
      name: "Data Science",
      position: isMobile ? "top-1/5 right-1/5" : "top-1/4 right-1/4",
      animation: {
        y: [0, 8, 0],
        x: [0, -8, 0],
      },
      duration: 5.8,
      delay: 1.8,
    },
    {
      name: "Computer Vision",
      position: isMobile ? "bottom-8 right-1/4" : "bottom-10 right-1/3",
      animation: {
        y: [0, -10, 0],
        x: [0, 10, 0],
      },
      duration: 6.2,
      delay: 2.2,
    },
  ];

  // Pre-generate fixed star positions
  const stars = generateStars(40);

  return (
    <motion.section
      ref={containerRef}
      className="relative min-h-screen w-full overflow-hidden bg-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/80 via-transparent to-black/80 z-10" />
        <div
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-accent/20 filter blur-[120px] animate-pulse"
          style={{ animationDuration: "8s" }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-purple-500/20 filter blur-[100px] animate-pulse"
          style={{ animationDuration: "10s", animationDelay: "1s" }}
        />

        {/* Client-side only star field to avoid hydration issues */}
        {isClient &&
          stars.map((star) => (
            <div
              key={star.id}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                top: star.top,
                left: star.left,
                opacity: star.opacity,
              }}
            />
          ))}
      </div>

      <div className="container mx-auto h-full flex text-center text-white pt-[120px] lg:pt-0 relative z-10">
        <div className="flex w-full flex-col md:flex-col lg:flex-col xl:flex-row items-center justify-between xl:pt-[30px] xl:pb-24 gap-8 md:gap-12">
          {/* Text content */}
          <motion.div
            ref={textRef}
            className="text-center xl:text-left order-2 xl:order-1 w-full xl:w-1/2 px-4 md:px-8 xl:px-0"
            style={{ y: textY, opacity: textOpacity }}
          >
            <AnimatedText
              text="Full Stack Developer & ML Engineer"
              className="text-xl text-accent mb-4"
              animation="typewriter"
            />

            <AnimatedText
              text="Hello I'm Krishna Prakhya"
              className="text-3xl md:text-4xl lg:text-6xl font-bold mb-6 text-white"
              animation="reveal"
            />

            <motion.p
              className="xl:max-w-[500px] mb-6 md:mb-9 text-gray-300 text-sm md:text-base"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              I am an Engineering professional skilled in AI/ML and Full-Stack
              Web Development, passionate about building scalable, innovative
              solutions that bridge cutting-edge tech with real-world impact.
            </motion.p>

            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 justify-center xl:justify-start">
              <AnimatedGradientButton
                size="lg"
                onClick={() => router.push("/about")}
              >
                <span>Explore More</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </AnimatedGradientButton>

              <motion.div
                className="mb-4 md:mb-0 mt-4 md:mt-0"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
              >
                <div className="flex gap-4">
                  <SocialIcon
                    url="https://github.com/KrishnaPrakhya"
                    fgColor="#ffffff"
                    bgColor="transparent"
                    className="hover:scale-110 transition-transform"
                    style={{ height: 40, width: 40 }}
                  />
                  <SocialIcon
                    url="https://www.linkedin.com/in/naga-krishna-sai-prakhya"
                    fgColor="#ffffff"
                    bgColor="transparent"
                    className="hover:scale-110 transition-transform"
                    style={{ height: 40, width: 40 }}
                  />
                  <SocialIcon
                    url="https://x.com/Krishna_Prakhya"
                    fgColor="#ffffff"
                    bgColor="transparent"
                    className="hover:scale-110 transition-transform"
                    style={{ height: 40, width: 40 }}
                  />
                </div>
              </motion.div>
            </div>

            {/* Stats section */}
            <motion.div
              className="mt-8 md:mt-12 grid grid-cols-2 gap-4 md:gap-8 max-w-xs md:max-w-md mx-auto xl:mx-0"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.8 }}
            >
              <div className="text-center xl:text-left">
                <div className="text-2xl md:text-4xl font-bold text-accent mb-1 md:mb-2">
                  3+
                </div>
                <div className="text-xs md:text-sm text-gray-400">
                  Months Experience
                </div>
              </div>
              <div className="text-center xl:text-left">
                <div className="text-2xl md:text-4xl font-bold text-accent mb-1 md:mb-2">
                  10+
                </div>
                <div className="text-xs md:text-sm text-gray-400">
                  Projects Completed
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* 3D Sphere - Fixed position, no scroll animation */}
          <motion.div
            ref={sphereRef}
            className="relative z-10 w-[280px] h-[280px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] xl:w-[500px] xl:h-[500px] order-1 xl:order-2 xl:w-1/2 mt-4 md:mt-8 xl:mt-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            // Remove the transform style that was causing the sphere to shrink
          >
            <div className="relative w-full h-full">
              {/* Animated rings */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-accent/30"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.1, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />

              <motion.div
                className="absolute inset-[10%] rounded-full border-2 border-purple-500/30"
                animate={{
                  scale: [1, 1.15, 1],
                  opacity: [0.3, 0.1, 0.3],
                }}
                transition={{
                  duration: 5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />

              {/* 3D Sphere */}
              <div className="relative z-10 w-full h-full">
                <Sphere3D
                  size={2.5}
                  color="#00ffff"
                  wireframe={true}
                  autoRotate={true}
                />
              </div>

              {/* Floating skill badges - Adjusted for mobile */}
              {skillBadges.map((badge, index) => (
                <motion.div
                  key={index}
                  className={`absolute ${badge.position} bg-black/40 backdrop-blur-md px-2 py-1 md:px-3 md:py-1 rounded-full border border-accent/30 shadow-lg shadow-accent/20 z-20`}
                  animate={badge.animation}
                  transition={{
                    duration: badge.duration,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                    delay: badge.delay,
                  }}
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: "rgba(0, 255, 255, 0.2)",
                  }}
                >
                  <span className="text-xs md:text-sm font-medium whitespace-nowrap">
                    {badge.name}
                  </span>
                </motion.div>
              ))}

              {/* Client-side only particle effects - Scaled for mobile */}
              {isClient &&
                [...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute top-1/2 left-1/2 w-1 h-1 md:w-2 md:h-2 rounded-full bg-accent"
                    animate={{
                      x: [
                        0,
                        Math.cos((i * Math.PI) / 4) * (isMobile ? 80 : 150),
                        Math.cos((i * Math.PI) / 4 + Math.PI) *
                          (isMobile ? 80 : 150),
                        0,
                      ],
                      y: [
                        0,
                        Math.sin((i * Math.PI) / 4) * (isMobile ? 80 : 150),
                        Math.sin((i * Math.PI) / 4 + Math.PI) *
                          (isMobile ? 80 : 150),
                        0,
                      ],
                      opacity: [0, 1, 1, 0],
                      scale: [0, 1, 1, 0],
                    }}
                    transition={{
                      duration: 8 + i,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                      delay: i * 0.5,
                    }}
                  />
                ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
    </motion.section>
  );
}
