"use client";
import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedText from "./ui/animated-text";
import AnimatedCard from "./ui/animated-card";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

  useEffect(() => {
    if (!timelineRef.current) return;

    const timelineItems = gsap.utils.toArray(".timeline-item");

    timelineItems.forEach((item: any, index) => {
      gsap.fromTo(
        item,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
            end: "top 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    // Animate the timeline line
    gsap.fromTo(
      ".timeline-line",
      { scaleY: 0 },
      {
        scaleY: 1,
        duration: 2,
        scrollTrigger: {
          trigger: timelineRef.current,
          start: "top 60%",
          end: "bottom 40%",
          scrub: 1,
        },
      }
    );
  }, []);

  return (
    <motion.div
      ref={sectionRef}
      className="relative min-h-screen py-20 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: isInView ? 1 : 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/80 via-transparent to-black/80 z-10" />
        <div
          className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-accent/10 filter blur-[100px] animate-pulse"
          style={{ animationDuration: "8s" }}
        />
        <div
          className="absolute bottom-1/3 left-1/4 w-[300px] h-[300px] rounded-full bg-purple-500/10 filter blur-[80px] animate-pulse"
          style={{ animationDuration: "10s", animationDelay: "1s" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <AnimatedText
            text="About Me"
            className="text-4xl md:text-5xl font-bold mb-6"
            animation="reveal"
            color="text-accent"
          />

          <AnimatedText
            text="My Journey & Experience"
            className="text-xl md:text-2xl text-gray-300"
            animation="wave"
          />
        </div>

        {/* Introduction Card */}
        <AnimatedCard className="bg-black/30 backdrop-blur-md p-8 rounded-xl border border-accent/20 mb-20 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">
            Hi, I&apos;m <span className="text-accent">Krishna</span>
          </h3>

          <p className="text-gray-300 mb-6">
            A passionate tech enthusiast currently pursuing my Bachelor&apos;s
            in Engineering at NGIT. I specialize in Deep Learning, Machine
            Learning, MERN Stack, Next.js, TypeScript, PostgreSQL, and Prisma.
            I&apos;m also interning as a Full Stack Web Developer at a startup,
            where I&apos;m constantly exploring and learning new technologies.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-accent">•</span>
                <span className="text-gray-200 font-medium">Location:</span>
                <span className="text-gray-300">Hyderabad, India</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-accent">•</span>
                <span className="text-gray-200 font-medium">Education:</span>
                <span className="text-gray-300">
                  B.E. Computer Science, NGIT
                </span>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-accent">•</span>
                <span className="text-gray-200 font-medium">Experience:</span>
                <span className="text-gray-300">
                  Full Stack Developer Intern
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-accent">•</span>
                <span className="text-gray-200 font-medium">Email:</span>
                <span className="text-gray-300">
                  krishnasaiprakhya@gmail.com
                </span>
              </div>
            </div>
          </div>
        </AnimatedCard>

        {/* Timeline Section */}
        <div ref={timelineRef} className="relative w-full mt-32">
          <h3 className="text-3xl font-bold text-center mb-16">
            My <span className="text-accent">Timeline</span>
          </h3>

          {/* Timeline Line */}
          <div className="timeline-line absolute left-1/2 w-1 h-full bg-accent/30 transform -translate-x-1/2 origin-top"></div>

          {/* Timeline Items */}
          <div className="space-y-32">
            {/* Timeline Item 1 - Education */}
            <div className="timeline-item flex justify-between items-center w-full">
              <div className="w-1/2 pr-8 text-right">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <AnimatedCard className="inline-block bg-black/40 backdrop-blur-md p-6 rounded-xl border border-accent/20">
                    <h4 className="text-2xl font-bold text-white mb-2">
                      Education
                    </h4>
                    <p className="text-gray-300">
                      Pursuing Bachelor&apos;s in Computer Science at NGIT.
                    </p>
                    <span className="text-accent text-sm mt-2 block">
                      2020 - Present
                    </span>
                  </AnimatedCard>
                </motion.div>
              </div>
              <div className="w-1/2 pl-8 flex justify-start">
                <motion.div
                  className="w-6 h-6 bg-accent rounded-full flex items-center justify-center"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, type: "spring" }}
                  viewport={{ once: true }}
                >
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </motion.div>
              </div>
            </div>

            {/* Timeline Item 2 - Skills */}
            <div className="timeline-item flex justify-between items-center w-full">
              <div className="w-1/2 pr-8 text-right flex justify-end">
                <motion.div
                  className="w-6 h-6 bg-accent rounded-full flex items-center justify-center"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, type: "spring" }}
                  viewport={{ once: true }}
                >
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </motion.div>
              </div>
              <div className="w-1/2 pl-8">
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <AnimatedCard className="inline-block bg-black/40 backdrop-blur-md p-6 rounded-xl border border-accent/20">
                    <h4 className="text-2xl font-bold text-white mb-2">
                      Skills Development
                    </h4>
                    <p className="text-gray-300">
                      Mastered Deep Learning, Machine Learning, MERN Stack,
                      Next.js, TypeScript, PostgreSQL, Prisma.
                    </p>
                    <span className="text-accent text-sm mt-2 block">
                      2021 - Present
                    </span>
                  </AnimatedCard>
                </motion.div>
              </div>
            </div>

            {/* Timeline Item 3 - Internship */}
            <div className="timeline-item flex justify-between items-center w-full">
              <div className="w-1/2 pr-8 text-right">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <AnimatedCard className="inline-block bg-black/40 backdrop-blur-md p-6 rounded-xl border border-accent/20">
                    <h4 className="text-2xl font-bold text-white mb-2">
                      Internship
                    </h4>
                    <p className="text-gray-300">
                      Full Stack Web Developer at a startup.
                    </p>
                    <span className="text-accent text-sm mt-2 block">
                      2022 - Present
                    </span>
                  </AnimatedCard>
                </motion.div>
              </div>
              <div className="w-1/2 pl-8 flex justify-start">
                <motion.div
                  className="w-6 h-6 bg-accent rounded-full flex items-center justify-center"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, type: "spring" }}
                  viewport={{ once: true }}
                >
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </motion.div>
              </div>
            </div>

            {/* Timeline Item 4 - Achievements */}
            <div className="timeline-item flex justify-between items-center w-full">
              <div className="w-1/2 pr-8 text-right flex justify-end">
                <motion.div
                  className="w-6 h-6 bg-accent rounded-full flex items-center justify-center"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, type: "spring" }}
                  viewport={{ once: true }}
                >
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </motion.div>
              </div>
              <div className="w-1/2 pl-8">
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <AnimatedCard className="inline-block bg-black/40 backdrop-blur-md p-6 rounded-xl border border-accent/20">
                    <h4 className="text-2xl font-bold text-white mb-2">
                      Achievements
                    </h4>
                    <ul className="list-disc list-inside text-gray-300">
                      <li>Winner of Hackathon conducted by NGIT 2024.</li>
                      <li>Contributed to open-source projects on GitHub.</li>
                    </ul>
                    <span className="text-accent text-sm mt-2 block">
                      2023 - 2024
                    </span>
                  </AnimatedCard>
                </motion.div>
              </div>
            </div>

            {/* Timeline Item 5 - Future */}
            <div className="timeline-item flex justify-between items-center w-full">
              <div className="w-1/2 pr-8 text-right">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <AnimatedCard className="inline-block bg-black/40 backdrop-blur-md p-6 rounded-xl border border-accent/20">
                    <h4 className="text-2xl font-bold text-white mb-2">
                      Future Goals
                    </h4>
                    <p className="text-gray-300">
                      Aiming to specialize in AI/ML engineering and contribute
                      to innovative tech solutions.
                    </p>
                    <span className="text-accent text-sm mt-2 block">
                      2024 - Beyond
                    </span>
                  </AnimatedCard>
                </motion.div>
              </div>
              <div className="w-1/2 pl-8 flex justify-start">
                <motion.div
                  className="w-6 h-6 bg-accent rounded-full flex items-center justify-center"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, type: "spring" }}
                  viewport={{ once: true }}
                >
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
