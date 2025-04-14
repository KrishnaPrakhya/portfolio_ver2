"use client";
import type React from "react";
import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { gsap } from "gsap";
import Image from "next/image";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Calendar,
  User,
  Tag,
  Share2,
  ArrowUpRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

interface ProjectDetailProps {
  id?: string;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ id = "1" }) => {
  // This would normally come from a database or API
  const project = {
    id: 1,
    title: "AI-Powered Chat Application",
    description:
      "A real-time chat application with AI capabilities for smart responses and content moderation. Built with Next.js, Socket.io, and OpenAI integration.",
    longDescription: `
      This project is a comprehensive chat application that leverages artificial intelligence to enhance user interactions. The application features real-time messaging, smart responses powered by OpenAI's GPT models, and content moderation to ensure a safe environment for all users.
      
      The frontend is built with Next.js and Tailwind CSS, providing a responsive and intuitive user interface. Socket.io enables real-time communication between users, while the OpenAI integration allows for intelligent chatbot responses and content suggestions.
      
      Key features include:
      - Real-time messaging with typing indicators
      - AI-powered response suggestions
      - Content moderation for inappropriate messages
      - User authentication and profile management
      - Message history and search functionality
      - Responsive design for all devices
    `,
    images: [
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=400&width=600",
    ],
    tags: [
      "Next.js",
      "Socket.io",
      "OpenAI",
      "Tailwind CSS",
      "MongoDB",
      "Node.js",
    ],
    category: "AI",
    liveLink: "https://example.com/project1",
    githubLink: "https://github.com/username/project1",
    featured: true,
    challenges:
      "One of the main challenges was implementing real-time communication while maintaining low latency. Socket.io helped solve this, but required careful optimization for larger user groups. Another challenge was ensuring the AI responses were appropriate and relevant to the conversation context.",
    solutions:
      "We implemented a custom caching layer to improve response times and reduce API calls to OpenAI. For content moderation, we developed a two-stage filtering process that combines local keyword filtering with AI-based context analysis.",
    timeline: "3 months",
    role: "Lead Developer",
    date: "2023-06-15",
    nextProject: {
      id: 2,
      title: "E-Commerce Dashboard",
    },
    prevProject: {
      id: 5,
      title: "Task Management System",
    },
  };

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const headerOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const headerY = useTransform(scrollYProgress, [0, 0.2], [0, -100]);

  useEffect(() => {
    // Animation for project images
    gsap.fromTo(
      ".project-image",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      }
    );

    // Animation for project details
    gsap.fromTo(
      ".project-detail-section",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      }
    );

    // Animation for navigation
    gsap.fromTo(
      ".project-nav",
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.8,
        delay: 1,
      }
    );
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 1.5 }}
      className="min-h-screen page-background"
      ref={containerRef}
    >
      {/* Hero section with parallax effect */}
      <div className="relative h-[50vh] md:h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={project.images[0] || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
        </div>

        <motion.div
          className="absolute inset-0 flex flex-col justify-center px-4 md:px-10"
          style={{ opacity: headerOpacity, y: headerY }}
        >
          <div className="max-w-6xl mx-auto w-full">
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-6 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {project.title}
            </motion.h1>

            <motion.div
              className="flex flex-wrap gap-2 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {project.tags.map((tag, i) => (
                <Badge
                  key={i}
                  variant="outline"
                  className="bg-black/30 backdrop-blur-sm border-gray-500"
                >
                  {tag}
                </Badge>
              ))}
            </motion.div>

            <motion.p
              className="text-xl text-gray-200 max-w-3xl mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {project.description}
            </motion.p>
          </div>
        </motion.div>

        {/* Back button - fixed position */}
        <div className="absolute top-6 left-6 z-10 project-nav">
          <Link href="/work">
            <Button
              variant="outline"
              size="sm"
              className="gap-2 bg-black/30 backdrop-blur-sm border-gray-600 hover:bg-black/50"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Projects
            </Button>
          </Link>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-10 py-16">
        {/* Project actions */}
        <div className="flex flex-wrap gap-4 mb-16 project-detail-section">
          {project.liveLink && (
            <Button size="lg" className="gap-2" asChild>
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="w-5 h-5" />
                View Live Project
              </a>
            </Button>
          )}

          {project.githubLink && (
            <Button size="lg" variant="outline" className="gap-2" asChild>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5" />
                View Source Code
              </a>
            </Button>
          )}
        </div>

        {/* Project gallery */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-16">
          <div className="md:col-span-8 relative h-[400px] rounded-xl overflow-hidden project-image">
            <Image
              src={project.images[1] || "/placeholder.svg"}
              alt={`${project.title} image 1`}
              fill
              className="object-cover"
            />
          </div>

          <div className="md:col-span-4 relative h-[400px] rounded-xl overflow-hidden project-image">
            <Image
              src={project.images[2] || "/placeholder.svg"}
              alt={`${project.title} image 2`}
              fill
              className="object-cover"
            />
          </div>

          <div className="md:col-span-6 relative h-[300px] rounded-xl overflow-hidden project-image">
            <Image
              src={project.images[3] || "/placeholder.svg"}
              alt={`${project.title} image 3`}
              fill
              className="object-cover"
            />
          </div>

          <div className="md:col-span-6 relative h-[300px] rounded-xl overflow-hidden bg-black/40 backdrop-blur-sm flex items-center justify-center project-image">
            <Button variant="outline" size="lg" className="gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
              Watch Demo
            </Button>
          </div>
        </div>

        {/* Project details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2 project-detail-section">
            <h2 className="text-2xl font-bold mb-6 text-accent">
              Project Overview
            </h2>
            <div className="prose prose-invert max-w-none">
              {project.longDescription.split("\n").map((paragraph, index) => (
                <p key={index} className="mb-4 text-gray-300">
                  {paragraph}
                </p>
              ))}
            </div>

            <h2 className="text-2xl font-bold mt-12 mb-6 text-accent">
              Challenges & Solutions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-accent/30 transition-all duration-300">
                <h3 className="text-xl font-bold mb-4">Challenges</h3>
                <p className="text-gray-300">{project.challenges}</p>
              </div>

              <div className="bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-accent/30 transition-all duration-300">
                <h3 className="text-xl font-bold mb-4">Solutions</h3>
                <p className="text-gray-300">{project.solutions}</p>
              </div>
            </div>
          </div>

          <div className="project-detail-section">
            <div className="bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-gray-800 sticky top-24">
              <h2 className="text-xl font-bold mb-6 text-accent">
                Project Details
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-accent mt-0.5" />
                  <div>
                    <h3 className="text-sm text-gray-400">Timeline</h3>
                    <p className="font-medium">{project.timeline}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <User className="w-5 h-5 text-accent mt-0.5" />
                  <div>
                    <h3 className="text-sm text-gray-400">Role</h3>
                    <p className="font-medium">{project.role}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Tag className="w-5 h-5 text-accent mt-0.5" />
                  <div>
                    <h3 className="text-sm text-gray-400">Technologies</h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.tags.map((tag, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Share2 className="w-5 h-5 text-accent mt-0.5" />
                  <div>
                    <h3 className="text-sm text-gray-400">Share Project</h3>
                    <div className="flex gap-3 mt-2">
                      <Button size="icon" variant="outline">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                        </svg>
                      </Button>
                      <Button size="icon" variant="outline">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                        </svg>
                      </Button>
                      <Button size="icon" variant="outline">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <rect
                            width="20"
                            height="20"
                            x="2"
                            y="2"
                            rx="5"
                            ry="5"
                          ></rect>
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                        </svg>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Project navigation */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-6 project-detail-section">
          {project.prevProject && (
            <Link href={`/work/${project.prevProject.id}`}>
              <div className="bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-accent/30 transition-all duration-300 h-full flex flex-col justify-between">
                <div className="text-sm text-gray-400 mb-2 flex items-center gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  Previous Project
                </div>
                <h3 className="text-xl font-bold">
                  {project.prevProject.title}
                </h3>
              </div>
            </Link>
          )}

          {project.nextProject && (
            <Link href={`/work/${project.nextProject.id}`}>
              <div className="bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-accent/30 transition-all duration-300 h-full flex flex-col justify-between text-right">
                <div className="text-sm text-gray-400 mb-2 flex items-center justify-end gap-2">
                  Next Project
                  <ArrowUpRight className="w-4 h-4" />
                </div>
                <h3 className="text-xl font-bold">
                  {project.nextProject.title}
                </h3>
              </div>
            </Link>
          )}
        </div>

        {/* Call to action */}
        <div className="mt-24 text-center project-detail-section">
          <div className="bg-gradient-to-r from-black/60 via-accent/20 to-black/60 backdrop-blur-md p-10 rounded-2xl border border-gray-800">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Ready to bring your ideas to life?
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              Let's collaborate on your next project and create something
              amazing together.
            </p>
            <Button
              size="lg"
              className="bg-accent text-black hover:bg-accent/80"
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectDetail;
