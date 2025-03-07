"use client";
import React, { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

interface Props {}

function About(props: Props) {
  const {} = props;
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="flex flex-col relative h-full text-center md:text-left max-w-7xl px-10 justify-evenly mx-auto items-center py-32"
    >
      <h3 className="absolute top-[80px]  uppercase tracking-[13px] text-4xl text-accent">
        About
      </h3>

      {/* Introduction Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-20"
      >
        <h4 className="text-4xl font-bold mb-5 text-white">
          Hi, I&apos;m <span className="text-accent">Krishna</span>
        </h4>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          A passionate tech enthusiast currently pursuing my Bachelor&apos;s in
          Engineering at NGIT. I specialize in Deep Learning, Machine Learning,
          MERN Stack, Next.js, TypeScript, PostgreSQL, and Prisma. I&apos;m also
          interning as a Full Stack Web Developer at a startup, where I&apos;m
          constantly exploring and learning new technologies.
        </p>
        <motion.div
          className="flex justify-center  mt-10  transform -translate-x-1/2 cursor-pointer"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-12 h-12 text-accent"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </motion.div>
      </motion.div>

      {/* Timeline Section */}
      <div ref={timelineRef} className="relative w-full mt-20">
        {/* Timeline Line */}
        <div className="timeline-line absolute left-1/2 w-1 h-full bg-accent transform -translate-x-1/2 origin-top"></div>

        {/* Timeline Items */}
        <div className="space-y-32">
          {/* Timeline Item 1 - Education */}
          <div className="timeline-item flex justify-between items-center w-full">
            <div className="w-1/2 pr-8 text-right">
              <h4 className="text-2xl font-bold text-white">Education</h4>
              <p className="text-gray-300">
                Pursuing BachelorI&apos;s in Computer Science at NGIT.
              </p>
            </div>
            <div className="w-1/2 pl-8 flex justify-start">
              <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Timeline Item 2 - Skills */}
          <div className="timeline-item flex justify-between items-center w-full">
            <div className="w-1/2 pr-8 text-right flex justify-end">
              <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
            </div>
            <div className="w-1/2 pl-8">
              <h4 className="text-2xl font-bold text-white">Skills</h4>
              <p className="text-gray-300">
                Deep Learning, Machine Learning, MERN Stack, Next.js,
                TypeScript, PostgreSQL, Prisma.
              </p>
            </div>
          </div>

          {/* Timeline Item 3 - Internship */}
          <div className="timeline-item flex justify-between items-center w-full">
            <div className="w-1/2 pr-8 text-right">
              <h4 className="text-2xl font-bold text-white">Internship</h4>
              <p className="text-gray-300">
                Full Stack Web Developer at a startup.
              </p>
            </div>
            <div className="w-1/2 pl-8 flex justify-start">
              <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Timeline Item 4 - Achievements */}
          <div className="timeline-item flex justify-between items-center w-full">
            <div className="w-1/2 pr-8 text-right flex justify-end">
              <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
            </div>
            <div className="w-1/2 pl-8">
              <h4 className="text-2xl font-bold text-white">Achievements</h4>
              <ul className="list-disc list-inside text-gray-300">
                <li>Winner of XYZ Hackathon 2023.</li>
                <li>Published a paper on AI in ABC Journal.</li>
                <li>Certified in Machine Learning by Coursera.</li>
                <li>Contributed to open-source projects on GitHub.</li>
              </ul>
            </div>
          </div>

          {/* Timeline Item 5 - Exploration */}
          <div className="timeline-item flex justify-between items-center w-full">
            <div className="w-1/2 pr-8 text-right">
              <h4 className="text-2xl font-bold text-white">Exploration</h4>
              <p className="text-gray-300">
                Continuously exploring new technologies and building projects.
              </p>
            </div>
            <div className="w-1/2 pl-8 flex justify-start">
              <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
