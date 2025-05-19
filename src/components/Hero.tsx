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

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const sphereRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);

  // Use useEffect to set isClient to true after component mounts
  useEffect(() => {
    setIsClient(true);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

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

    if (textRef.current && sphereRef.current) {
      tl.fromTo(textRef.current, { y: 0 }, { y: 100 }, 0);
      tl.fromTo(sphereRef.current, { y: 0 }, { y: -50 }, 0);
    }

    return () => {
      tl.kill();
    };
  }, [isClient]);

  // Define skill badges with different animations
  const skillBadges = [
    {
      name: "React",
      position: "top-10 right-10",
      animation: {
        y: [0, 10, 0],
        x: [0, 5, 0],
      },
      duration: 4,
      delay: 0,
    },
    {
      name: "Next.js",
      position: "bottom-20 right-5",
      animation: {
        y: [0, -10, 0],
        x: [0, -5, 0],
      },
      duration: 5,
      delay: 1,
    },
    {
      name: "TypeScript",
      position: "top-1/3 right-0",
      animation: {
        y: [0, 15, 0],
        x: [0, 8, 0],
      },
      duration: 6,
      delay: 2,
    },
    {
      name: "Machine Learning",
      position: "bottom-5 left-10",
      animation: {
        y: [0, -15, 0],
        x: [0, 10, 0],
      },
      duration: 7,
      delay: 0.5,
    },
    {
      name: "TensorFlow",
      position: "top-20 left-20",
      animation: {
        y: [0, 12, 0],
        x: [0, -12, 0],
      },
      duration: 5.5,
      delay: 1.5,
    },
    {
      name: "PyTorch",
      position: "top-1/3 left-5",
      animation: {
        y: [0, -8, 0],
        x: [0, -10, 0],
      },
      duration: 4.5,
      delay: 2.5,
    },
    {
      name: "Deep Learning",
      position: "bottom-1/4 right-10",
      animation: {
        y: [0, 10, 0],
        x: [0, -7, 0],
      },
      duration: 6.5,
      delay: 1.2,
    },
    {
      name: "Neural Networks",
      position: "bottom-1/3 left-1/4",
      animation: {
        y: [0, -12, 0],
        x: [0, 5, 0],
      },
      duration: 5.2,
      delay: 0.8,
    },
    {
      name: "Data Science",
      position: "top-1/4 right-1/4",
      animation: {
        y: [0, 8, 0],
        x: [0, -8, 0],
      },
      duration: 5.8,
      delay: 1.8,
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
        <div className="flex w-full flex-col xl:flex-row items-center justify-between xl:pt-[30px] xl:pb-24 gap-12">
          {/* Text content */}
          <motion.div
            ref={textRef}
            className="text-center xl:text-left order-2 xl:order-1 xl:w-[700px]"
            style={{ y, opacity }}
          >
            <AnimatedText
              text="Full Stack Developer & ML Engineer"
              className="text-xl text-accent mb-4"
              animation="typewriter"
            />

            <AnimatedText
              text="Hello I'm Krishna Prakhya"
              className="h1 mb-6 text-white"
              animation="reveal"
            />

            <motion.p
              className="xl:max-w-[500px] mb-9 text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              I am an Engineering professional skilled in AI/ML and Full-Stack
              Web Development, passionate about building scalable, innovative
              solutions that bridge cutting-edge tech with real-world impact.
            </motion.p>

            <div className="flex flex-col xl:flex-row items-center gap-8">
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
                className="mb-8 xl:mb-0"
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
                  />
                  <SocialIcon
                    url="https://www.linkedin.com/in/naga-krishna-sai-prakhya"
                    fgColor="#ffffff"
                    bgColor="transparent"
                    className="hover:scale-110 transition-transform"
                  />
                  <SocialIcon
                    url="https://x.com/Krishna_Prakhya"
                    fgColor="#ffffff"
                    bgColor="transparent"
                    className="hover:scale-110 transition-transform"
                  />
                </div>
              </motion.div>
            </div>

            {/* Stats section */}
            <motion.div
              className="mt-12 grid grid-cols-2 gap-8 max-w-md mx-auto xl:mx-0"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.8 }}
            >
              <div className="text-center xl:text-left">
                <div className="text-4xl font-bold text-accent mb-2">3+</div>
                <div className="text-sm text-gray-400">Months Experience</div>
              </div>
              <div className="text-center xl:text-left">
                <div className="text-4xl font-bold text-accent mb-2">10+</div>
                <div className="text-sm text-gray-400">Projects Completed</div>
              </div>
            </motion.div>
          </motion.div>

          {/* 3D Sphere */}
          <motion.div
            ref={sphereRef}
            className="relative z-10 w-[300px] h-[300px] xl:w-[400px] xl:h-[500px] order-1 xl:order-2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]) }}
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

              {/* Floating skill badges */}
              {skillBadges.map((badge, index) => (
                <motion.div
                  key={index}
                  className={`absolute ${badge.position} bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-accent/30 shadow-lg shadow-accent/20 z-20`}
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
                  <span className="text-sm font-medium whitespace-nowrap">
                    {badge.name}
                  </span>
                </motion.div>
              ))}

              {/* Client-side only particle effects */}
              {isClient &&
                [...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full bg-accent"
                    animate={{
                      x: [
                        0,
                        Math.cos((i * Math.PI) / 4) * 150,
                        Math.cos((i * Math.PI) / 4 + Math.PI) * 150,
                        0,
                      ],
                      y: [
                        0,
                        Math.sin((i * Math.PI) / 4) * 150,
                        Math.sin((i * Math.PI) / 4 + Math.PI) * 150,
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
    </motion.section>
  );
}
