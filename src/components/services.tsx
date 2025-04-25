"use client";
import { useRef } from "react";
import type React from "react";

import { motion, useInView } from "framer-motion";
import {
  Code,
  Layout,
  Server,
  Sparkles,
  Zap,
  Database,
  PenTool,
  BarChart,
} from "lucide-react";
import AnimatedText from "./ui/animated-text";
import AnimatedCard from "./ui/animated-card";
import AnimatedGradientButton from "./ui/animated-gradient-button";

interface ServiceItem {
  title: string;
  description: string;
  icon: React.ElementType;
  tags: string[];
  color: string;
}

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });

  const services: ServiceItem[] = [
    {
      title: "Frontend Development",
      description:
        "Creating responsive, interactive, and high-performance user interfaces with modern frameworks and best practices.",
      icon: Layout,
      tags: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      color: "#00ffff",
    },
    {
      title: "Backend Development",
      description:
        "Building robust, scalable, and secure server-side applications and APIs to power your digital products.",
      icon: Server,
      tags: ["Node.js", "Express", "MongoDB", "PostgreSQL"],
      color: "#00ffff",
    },
    {
      title: "AI Integration",
      description:
        "Implementing artificial intelligence solutions to enhance your applications with smart features and automation.",
      icon: Sparkles,
      tags: ["Machine Learning", "OpenAI", "LangChain", "Vector Databases"],
      color: "#00ffff",
    },
    {
      title: "Full-Stack Development",
      description:
        "End-to-end development of web applications, from database design to user interface implementation.",
      icon: Code,
      tags: ["MERN Stack", "Next.js", "Prisma", "Authentication"],
      color: "#00ffff",
    },
  ];

  const additionalServices = [
    {
      icon: Database,
      title: "Database Design",
      description:
        "Designing efficient, scalable database structures optimized for your application's needs.",
    },
    {
      icon: PenTool,
      title: "UI/UX Design",
      description:
        "Creating intuitive, engaging user interfaces with a focus on user experience and accessibility.",
    },
    {
      icon: BarChart,
      title: "Data Visualization",
      description:
        "Building interactive dashboards and charts to help you understand and present your data effectively.",
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description:
        "Improving application speed and efficiency through code optimization and best practices.",
    },
  ];

  return (
    <motion.div
      ref={sectionRef}
      className="relative min-h-screen py-20 px-4 md:px-10 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: isInView ? 1 : 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/80 via-transparentsparent to-black/80 z-10" />
        <div
          className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-accent/10 filter blur-[100px] animate-pulse"
          style={{ animationDuration: "8s" }}
        />
        <div
          className="absolute bottom-1/3 left-1/4 w-[300px] h-[300px] rounded-full bg-purple-500/10 filter blur-[80px] animate-pulse"
          style={{ animationDuration: "10s", animationDelay: "1s" }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <AnimatedText
            text="Services I Offer"
            className="text-4xl md:text-5xl font-bold mb-6"
            animation="reveal"
            color="text-accent"
          />

          <AnimatedText
            text="Specialized expertise to help you build and scale"
            className="text-xl md:text-2xl text-gray-300"
            animation="wave"
          />
        </div>

        {/* Main Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <AnimatedCard className="bg-black/40 backdrop-blur-sm border border-gray-800 h-full p-8">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-6"
                  style={{
                    backgroundColor: service.color,
                    color: "#000",
                  }}
                >
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 rounded-full text-sm font-medium bg-black/50 text-gray-200 border border-accent/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </AnimatedCard>
            </motion.div>
          ))}
        </div>

        {/* Additional Services */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center mb-12">
            Additional Expertise
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-black/30 backdrop-blur-sm border border-gray-800 p-6 rounded-xl hover:border-accent/30 transition-all duration-300">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h4 className="text-xl font-bold mb-2">{service.title}</h4>
                  <p className="text-gray-300">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Process section */}
        <div className="mt-32">
          <h3 className="text-3xl font-bold text-center mb-16">
            My <span className="text-accent">Process</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                number: "01",
                title: "Discovery",
                description:
                  "Understanding your goals, requirements, and vision for the project.",
              },
              {
                number: "02",
                title: "Planning",
                description:
                  "Creating a detailed roadmap and technical architecture for implementation.",
              },
              {
                number: "03",
                title: "Development",
                description:
                  "Building your solution with regular updates and iterative improvements.",
              },
              {
                number: "04",
                title: "Delivery",
                description:
                  "Thorough testing, deployment, and ongoing support for your project.",
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <AnimatedCard className="bg-black/40 backdrop-blur-sm border border-gray-800 p-6 rounded-xl h-full">
                  <div className="text-5xl font-bold text-accent mb-4">
                    {step.number}
                  </div>
                  <h4 className="text-xl font-bold mb-2">{step.title}</h4>
                  <p className="text-gray-300">{step.description}</p>
                </AnimatedCard>

                {/* Connecting line */}
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-accent/30 z-0"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA section */}
        <motion.div
          className="mt-32 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <AnimatedCard className="bg-gradient-to-r from-black/60 via-accent/20 to-black/60 backdrop-blur-md p-10 rounded-2xl border border-gray-800">
            <h3 className="text-3xl font-bold mb-6">
              Ready to bring your ideas to life?
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              Let&#39;s discuss how I can help you achieve your goals with
              tailored solutions that meet your specific needs and requirements.
            </p>
            <AnimatedGradientButton size="lg">
              Get in Touch
            </AnimatedGradientButton>
          </AnimatedCard>
        </motion.div>
      </div>
    </motion.div>
  );
}
