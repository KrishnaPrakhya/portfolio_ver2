"use client";
import type React from "react";
import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { gsap } from "gsap";
import Image from "next/image";
import {
  ArrowLeft,
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
import ParticleBackground from "./ui/particle-background";

import elevate1 from "@/assets/elevate-ai-hero.png";
import elevate2 from "@/assets/elevate-ai-industry.png";
import redact1 from "@/assets/AutoRedact-hero.png";
import redact2 from "@/assets/redact-file.png";
import trustcure1 from "@/assets/trustcare-landing.png";
import trustcure2 from "@/assets/trustcure-sym.png";

interface ProjectDetailProps {
  id?: string;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ id }) => {
  const projectsList = [
    {
      id: 4,
      title: "Mudrasetu - Sign Detection",
      description:
        "A real-time hand gesture recognition system for sign language communication. Built with Python, MediaPipe, TensorFlow, and FastAPI.",
      longDescription: `
        Mudrasetu is an innovative system that enables real-time hand gesture recognition to facilitate sign language communication. It aims to bridge the communication gap for the hearing-impaired by translating gestures into text or speech.
  
        The system uses MediaPipe and TensorFlow for accurate hand landmark detection and gesture classification. FastAPI powers the backend for real-time processing, while the frontend, built with React and Tailwind CSS, provides an interactive interface for users to view translations and manage settings.
  
        Key features include:
        - Real-time hand gesture detection and translation
        - Support for multiple sign language alphabets
        - Text-to-speech output for accessibility
        - User-friendly interface for configuration
        - Integration with webcams for live input
        - Responsive design for accessibility
      `,
      images: [
        "/mudrasetu-gesture.png?height=800&width=1200",
        "/mudrasetu-translation.png?height=600&width=800",
      ],
      tags: [
        "Python",
        "MediaPipe",
        "TensorFlow",
        "FastAPI",
        "React",
        "Tailwind CSS",
      ],
      category: "Accessibility",
      githubLink: "https://github.com/KrishnaPrakhya/mudrasetu",
      featured: true,
      challenges:
        "Achieving high accuracy in gesture recognition across diverse lighting and hand sizes was difficult. Real-time processing with low latency was another key challenge.",
      solutions:
        "We used MediaPipe for robust hand tracking and fine-tuned a CNN model for gesture classification. WebSocket-based streaming reduced latency for real-time translations.",
      timeline: "3 months",
      role: "AI Developer",
      date: "2025-03-10",
      nextProject: {
        id: 5,
        title: "Facial Verification using Siamese Neural Network",
      },
      prevProject: {
        id: 2,
        title: "Automated Redaction",
      },
    },
    {
      id: 2,
      title: "Automated Redaction System",
      description:
        "An AI-driven system for redacting sensitive information from documents and images. Built with Python, Keras, TensorFlow, and Flask for secure processing.",
      longDescription: `
        The Automated Redaction System is designed to protect sensitive information by automatically identifying and redacting personal data such as names, addresses, and financial details from documents and images. It ensures compliance with privacy regulations like GDPR and HIPAA.
  
        The system uses Keras and TensorFlow for deep learning-based text and image recognition, with Flask serving as the backend to handle file uploads and processing. The frontend, built with Next.js and Tailwind CSS, offers a user-friendly interface for uploading and reviewing redacted files.
  
        Key features include:
        - AI-powered detection of sensitive text and images
        - Batch processing for multiple documents
        - Secure file handling and encryption
        - User authentication and audit logs
        - Preview and manual override for redactions
        - Cross-platform compatibility
      `,
      images: [redact1, redact2],
      tags: [
        "Python",
        "Keras",
        "TensorFlow",
        "Flask",
        "Next.js",
        "Tailwind CSS",
      ],
      category: "Privacy",
      githubLink: "https://github.com/KrishnaPrakhya/automated-redaction",
      featured: true,
      challenges:
        "Accurately detecting sensitive information across varied document formats was challenging. Balancing processing speed with model accuracy was another key issue.",
      solutions:
        "We fine-tuned a BERT-based model for text detection and used Faster R-CNN for image-based redactions. Parallel processing with multiprocessing improved performance for batch uploads.",
      timeline: "4 months",
      role: "AI Developer",
      date: "2025-01-20",
      nextProject: {
        id: 3,
        title: "Optimization of Doctors Availability",
      },
      prevProject: {
        id: 1,
        title: "Elevate-AI AI Career Coach Platform",
      },
    },
    {
      id: 5,
      title: "Facial Recognition System",
      description:
        "A secure facial recognition system for identity verification. Built with Python, OpenCV, Dlib, and FastAPI for real-time processing.",
      longDescription: `
        This project develops a facial recognition system for secure identity verification, suitable for applications like access control and user authentication. The system processes images or video streams to identify individuals with high accuracy.
  
        The backend is powered by FastAPI and uses OpenCV and Dlib for face detection and recognition. The frontend, built with React and Tailwind CSS, provides a clean interface for user interaction and result visualization. PostgreSQL stores user profiles and recognition logs.
  
        Key features include:
        - Real-time face detection and recognition
        - Secure storage of facial embeddings
        - User profile management
        - Integration with cameras and video feeds
        - Audit logs for security monitoring
        - Responsive and intuitive UI
      `,
      images: [
        "/facial-recognition.png?height=800&width=1200",
        "/facial-camera.png?height=600&width=800",
      ],
      tags: [
        "Python",
        "OpenCV",
        "Dlib",
        "FastAPI",
        "React",
        "PostgreSQL",
        "Tailwind CSS",
      ],
      category: "Security",
      githubLink: "https://github.com/KrishnaPrakhya/facial-recognition",
      featured: false,
      challenges:
        "Achieving high accuracy in varied lighting conditions and handling large datasets of facial embeddings were significant challenges. Ensuring privacy and security was critical.",
      solutions:
        "We used Dlib's deep metric learning for robust embeddings and implemented data augmentation to handle diverse conditions. End-to-end encryption ensured secure data handling.",
      timeline: "3 months",
      role: "Full-Stack Developer",
      date: "2025-02-15",
      prevProject: {
        id: 4,
        title: "Mudrasetu - Sign Detection",
      },
    },
    {
      id: 1,
      title: "Elevate AI Career Coach",
      description:
        "An AI-powered platform for career development, offering resume building, job recommendations, and personalized preparation schedules. Built with Next.js, Flask, LangChain, and PostgreSQL.",
      longDescription: `
        Elevate AI is a comprehensive career coaching platform designed to empower users in their job search and professional growth. The application leverages advanced AI to provide tailored resume building, job matching, and preparation schedules, ensuring users are well-equipped for their career goals.
  
        The frontend is developed using Next.js with TypeScript and Tailwind CSS, delivering a seamless and responsive user experience. The backend utilizes Flask and PostgreSQL for robust data management, with Redis for caching to enhance performance. LangChain and LangGraph power the agentic AI chatbot, which acts as a career advisor.
  
        Key features include:
        - AI-powered resume builder with real-time Markdown preview
        - Agentic chatbot for job matching and career advice
        - Personalized preparation schedules
        - User authentication and profile management
        - Integration with PostgreSQL for data storage
        - Responsive design for all devices
      `,
      images: [elevate1, elevate2],
      tags: [
        "Next.js",
        "Flask",
        "LangChain",
        "LangGraph",
        "PostgreSQL",
        "Redis",
        "Tailwind CSS",
        "TypeScript",
      ],
      category: "AI",
      githubLink: "https://github.com/KrishnaPrakhya/elevate-ai",
      featured: true,
      challenges:
        "Designing an agentic AI workflow for dynamic job matching and scheduling was complex. Ensuring type safety across the frontend and backend was another challenge.",
      solutions:
        "We implemented a multi-agent workflow using LangGraph and LangChain for AI tasks. TypeScript with Zod schema validation ensured robust frontend-backend communication.",
      timeline: "4 months",
      role: "Full-Stack Developer",
      date: "2025-04-15",
      nextProject: {
        id: 2,
        title: "Automated Redaction",
      },
    },
    {
      id: 3,
      title: "Optimization of Doctors Availability",
      description:
        "A system to optimize doctors' schedules for efficient hospital resource management. Built with Django, PostgreSQL, and Google OR-Tools for scheduling optimization.",
      longDescription: `
        This project focuses on improving hospital efficiency by optimizing doctors' availability and schedules. The system analyzes patient demand, doctor specialties, and hospital resources to create balanced schedules that minimize wait times and maximize coverage.
  
        The backend is built with Django and PostgreSQL, ensuring robust data handling and storage. Google OR-Tools is used for constraint-based scheduling optimization, while the frontend, developed with React and Tailwind CSS, provides an intuitive interface for hospital administrators.
  
        Key features include:
        - Automated scheduling based on doctor availability and patient load
        - Real-time updates to schedules
        - Conflict detection and resolution
        - User authentication for admins and doctors
        - Dashboard for monitoring resource allocation
        - Responsive design for desktop and mobile
      `,
      images: [trustcure1, trustcure2],
      tags: [
        "Django",
        "PostgreSQL",
        "Google OR-Tools",
        "React",
        "Tailwind CSS",
        "Python",
      ],
      category: "Healthcare",
      githubLink: "https://github.com/KrishnaPrakhya/doctors-optimization",
      featured: true,
      challenges:
        "Balancing multiple constraints like doctor preferences, patient urgency, and hospital capacity was complex. Ensuring real-time updates without performance degradation was another hurdle.",
      solutions:
        "We used Google OR-Tools for efficient constraint optimization and implemented Redis for caching to support real-time updates. A priority-based algorithm ensured urgent cases were prioritized.",
      timeline: "3.5 months",
      role: "Backend Developer",
      date: "2024-12-10",
      nextProject: {
        id: 4,
        title: "MudraSetu Sign Gesture Classification",
      },
      prevProject: {
        id: 2,
        title: "Automated Redaction",
      },
    },
  ];

  const project = projectsList.find((proj) => Number(proj.id) === Number(id));

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const headerOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const headerY = useTransform(scrollYProgress, [0, 0.2], [0, -100]);

  useEffect(() => {
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

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
          <p className="text-gray-400 mb-6">
            The project you're looking for doesn't exist or has been removed.
          </p>
          <Link href="/work">
            <Button>Back to Projects</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="min-h-screen page-background"
      ref={containerRef}
    >
      {/* Hero section with parallax effect */}
      <div className="relative h-[50vh] md:h-[70vh] overflow-hidden">
        <ParticleBackground />

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

      <div className="max-w-6xl mx-auto px-4 md:px-10">
        {/* Project actions */}
        <div className="flex flex-wrap gap-4 mb-16 project-detail-section">
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

        {/* Project showcase - Simplified with just 2 images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {project.images.map((image, index) => (
            <div
              key={index}
              className="relative h-[350px] rounded-xl overflow-hidden project-image group"
            >
              <Image
                src={image || "/placeholder.svg"}
                alt={`${project.title} image ${index + 1}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
            </div>
          ))}
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
              Let&#39;s collaborate on your next project and create something
              amazing together.
            </p>
            <Link href={"/contact"}>
              <Button
                size="lg"
                className="bg-accent text-black hover:bg-accent/80"
              >
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectDetail;
