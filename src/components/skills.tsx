"use client";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

// Skill data
const skills = [
  { name: "Deep Learning", icon: "🧠", color: "#23a6d5" },
  { name: "Machine Learning", icon: "🤖", color: "#23a6d5" },
  { name: "MERN Stack", icon: "🛠️", color: "#EF476F" },
  { name: "Next.js", icon: "⚡", color: "#EF476F" },
  { name: "TypeScript", icon: "📘", color: "#23a6d5" },
  { name: "PostgreSQL", icon: "🐘", color: "#23a6d5" },
  { name: "Prisma", icon: "🔧", color: "#EF476F" },
  { name: "Redux", icon: "🤖", color: "#EF476F" },
];

function Skills() {
  const skillsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // GSAP animation for skill cards
    const skillCards = gsap.utils.toArray(".skill-card");

    skillCards.forEach((card: any, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: index * 0.2,
          scrollTrigger: {
            trigger: skillsContainerRef.current,
            start: "top 70%",
            end: "top 30%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    // GSAP animation for the title
    gsap.fromTo(
      ".skills-title",
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: skillsContainerRef.current,
          start: "top 80%",
          end: "top 50%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // GSAP animation for the subtitle
    gsap.fromTo(
      ".skills-subtitle",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: skillsContainerRef.current,
          start: "top 80%",
          end: "top 50%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex relative flex-col text-center md:text-left max-w-[2000px] xl:px-10 min-h-screen justify-center mx-auto items-center skills-container"
      ref={skillsContainerRef}
    >
      {/* Title */}
      <h4 className="skills-title absolute top-24 uppercase tracking-[15px] text-accent text-2xl">
        Skills
      </h4>

      {/* Subtitle */}
      <h4 className="skills-subtitle absolute top-36 uppercase tracking-[15px] text-gray-300 text-sm">
        Technologies I work with
      </h4>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-40 p-6">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="skill-card relative flex flex-col items-center justify-center p-6 rounded-lg cursor-pointer hover:scale-105 transition-transform duration-300"
            style={{ backgroundColor: skill.color }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <span className="text-4xl mb-4">{skill.icon}</span>
            <span className="text-lg font-medium text-white">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default Skills;
