"use client";
import type React from "react";
import { useState, useEffect } from "react";
import { gsap } from "gsap";
import { motion } from "framer-motion";
import { Code, Layout, Server, Sparkles, Zap } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ServiceItem {
  title: string;
  description: string;
  icon: React.ElementType;
  tags: string[];
  color: string;
}

const Services: React.FC = () => {
  const [activeItem, setActiveItem] = useState<number | null>(null);

  const services: ServiceItem[] = [
    {
      title: "Frontend Development",
      description:
        "Creating responsive, interactive, and high-performance user interfaces with modern frameworks and best practices.",
      icon: Layout,
      tags: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      color: "#E7F63C",
    },
    {
      title: "Backend Development",
      description:
        "Building robust, scalable, and secure server-side applications and APIs to power your digital products.",
      icon: Server,
      tags: ["Node.js", "Express", "MongoDB", "PostgreSQL"],
      color: "#999999",
    },
    {
      title: "AI Integration",
      description:
        "Implementing artificial intelligence solutions to enhance your applications with smart features and automation.",
      icon: Sparkles,
      tags: ["Machine Learning", "OpenAI", "LangChain", "Vector Databases"],
      color: "#E7F63C",
    },
    {
      title: "Full-Stack Development",
      description:
        "End-to-end development of web applications, from database design to user interface implementation.",
      icon: Code,
      tags: ["MERN Stack", "Next.js", "Prisma", "Authentication"],
      color: "#999999",
    },
  ];

  useEffect(() => {
    const serviceCards = gsap.utils.toArray(".service-card");
    gsap.fromTo(
      serviceCards,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".services-container",
          start: "top 80%",
          end: "bottom 40%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1.5 }}
      className="min-h-screen py-20 px-4 md:px-10 services-container"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-accent">Services</span> I Offer
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Specialized expertise to help you build, scale, and optimize your
            digital products with modern technologies and best practices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card relative"
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <Card className="bg-black/40 backdrop-blur-sm border border-gray-800 hover:border-accent/50 transition-all duration-300 h-full">
                <CardHeader>
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                    style={{
                      backgroundColor: service.color,
                      color: service.color === "#E7F63C" ? "#000" : "#fff",
                    }}
                  >
                    <service.icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-gray-300 text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 rounded-full text-sm font-medium bg-gray-800 text-gray-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
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
                className="bg-black/40 backdrop-blur-sm border border-gray-800 p-6 rounded-xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="text-5xl font-bold text-accent mb-4">
                  {step.number}
                </div>
                <h4 className="text-xl font-bold mb-2">{step.title}</h4>
                <p className="text-gray-300">{step.description}</p>
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
          <h3 className="text-3xl font-bold mb-6">
            Ready to bring your ideas to life?
          </h3>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Let's discuss how I can help you achieve your goals with tailored
            solutions that meet your specific needs and requirements.
          </p>
          <Button size="lg">Get in Touch</Button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Services;
