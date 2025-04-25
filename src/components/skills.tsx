"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import AnimatedText from "./ui/animated-text";
import AnimatedCard from "./ui/animated-card";
import SkillRadar from "./ui/skill-radar";

export default function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

  // Technical skills data
  const technicalSkills = [
    { name: "React", level: 90, color: "#61DAFB" },
    { name: "Next.js", level: 85, color: "#FFFFFF" },
    { name: "TypeScript", level: 80, color: "#3178C6" },
    { name: "Node.js", level: 75, color: "#339933" },
    { name: "MongoDB", level: 70, color: "#47A248" },
    { name: "PostgreSQL", level: 75, color: "#336791" },
    { name: "Python", level: 80, color: "#3776AB" },
    { name: "Machine Learning", level: 85, color: "#FF6F61" },
  ];

  // Soft skills data
  const softSkills = [
    { name: "Problem Solving", level: 90, color: "#00FFFF" },
    { name: "Communication", level: 85, color: "#00FFFF" },
    { name: "Teamwork", level: 95, color: "#00FFFF" },
    { name: "Adaptability", level: 85, color: "#00FFFF" },
    { name: "Time Management", level: 80, color: "#00FFFF" },
    { name: "Leadership", level: 75, color: "#00FFFF" },
  ];

  // Skill categories
  const skillCategories = [
    {
      title: "Frontend",
      icon: "🎨",
      skills: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
        "Redux",
      ],
    },
    {
      title: "Backend",
      icon: "⚙️",
      skills: [
        "Node.js",
        "Express",
        "MongoDB",
        "PostgreSQL",
        "Prisma",
        "REST APIs",
      ],
    },
    {
      title: "AI/ML",
      icon: "🧠",
      skills: [
        "Python",
        "TensorFlow",
        "PyTorch",
        "Computer Vision",
        "NLP",
        "Data Analysis",
      ],
    },
    {
      title: "Tools",
      icon: "🛠️",
      skills: ["Git", "Docker", "AWS", "CI/CD", "VS Code", "Figma"],
    },
  ];

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
          className="absolute top-1/4 right-1/3 w-[400px] h-[400px] rounded-full bg-accent/10 filter blur-[100px] animate-pulse"
          style={{ animationDuration: "10s" }}
        />
        <div
          className="absolute bottom-1/4 left-1/3 w-[300px] h-[300px] rounded-full bg-purple-500/10 filter blur-[80px] animate-pulse"
          style={{ animationDuration: "8s", animationDelay: "1s" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <AnimatedText
            text="My Skills"
            className="text-4xl md:text-5xl font-bold mb-6"
            animation="reveal"
            color="text-accent"
          />

          <AnimatedText
            text="Technologies & Expertise"
            className="text-xl md:text-2xl text-gray-300"
            animation="wave"
          />
        </div>

        {/* Skill Radar Charts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <AnimatedCard className="bg-black/30 backdrop-blur-md p-6 rounded-xl border border-accent/20 h-full">
              <h3 className="text-2xl font-bold mb-6 text-center">
                Technical Skills
              </h3>
              <div className="flex justify-center">
                <SkillRadar skills={technicalSkills} size={300} />
              </div>
            </AnimatedCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <AnimatedCard className="bg-black/30 backdrop-blur-md p-6 rounded-xl border border-accent/20 h-full">
              <h3 className="text-2xl font-bold mb-6 text-center">
                Soft Skills
              </h3>
              <div className="flex justify-center">
                <SkillRadar skills={softSkills} size={300} />
              </div>
            </AnimatedCard>
          </motion.div>
        </div>

        {/* Skill Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <AnimatedCard className="bg-black/30 backdrop-blur-md p-6 rounded-xl border border-accent/20 h-full">
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-bold mb-4">{category.title}</h3>
                <ul className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="flex items-center gap-2">
                      <span className="text-accent">•</span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </AnimatedCard>
            </motion.div>
          ))}
        </div>

        {/* Skill Progress Bars */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <AnimatedCard className="bg-black/30 backdrop-blur-md p-8 rounded-xl border border-accent/20">
            <h3 className="text-2xl font-bold mb-8 text-center">
              Proficiency Levels
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
              {[
                { name: "JavaScript/TypeScript", level: 90 },
                { name: "React & Next.js", level: 85 },
                { name: "Node.js & Express", level: 80 },
                { name: "Database Management", level: 75 },
                { name: "Python", level: 85 },
                { name: "Machine Learning", level: 80 },
                { name: "UI/UX Design", level: 70 },
                { name: "DevOps", level: 65 },
              ].map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-accent">{skill.level}%</span>
                  </div>
                  <div className="h-2 w-full bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-accent"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.2 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </AnimatedCard>
        </motion.div>

        {/* Learning Journey */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <AnimatedCard className="bg-black/30 backdrop-blur-md p-8 rounded-xl border border-accent/20">
            <h3 className="text-2xl font-bold mb-6 text-center">
              Continuous Learning
            </h3>
            <p className="text-gray-300 text-center mb-8">
              I believe in lifelong learning and constantly expanding my skill
              set. Here are some technologies I&apos;m currently exploring:
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              {[
                "Web3 & Blockchain",
                "AR/VR Development",
                "Cloud Architecture",
                "Microservices",
                "Serverless",
                "GraphQL",
                "Flutter",
                "Rust",
              ].map((tech, index) => (
                <motion.div
                  key={index}
                  className="bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-accent/30"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                    delay: index * 0.05,
                  }}
                  viewport={{ once: true }}
                >
                  {tech}
                </motion.div>
              ))}
            </div>
          </AnimatedCard>
        </motion.div>
      </div>
    </motion.div>
  );
}
