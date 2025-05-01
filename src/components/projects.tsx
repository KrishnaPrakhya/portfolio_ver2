"use client";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  ExternalLink,
  Github,
  Filter,
  Search,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AnimatedText from "./ui/animated-text";
import AnimatedCard from "./ui/animated-card";
import AnimatedGradientButton from "./ui/animated-gradient-button";

interface ProjectType {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: string;
  liveLink?: string;
  githubLink?: string;
  featured: boolean;
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<"all" | "featured" | string>(
    "all"
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });

  const projects: ProjectType[] = [
    {
      id: 1,
      title: "AI-Powered Chat Application",
      description:
        "A real-time chat application with AI capabilities for smart responses and content moderation. Built with Next.js, Socket.io, and OpenAI integration.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["Next.js", "Socket.io", "OpenAI", "Tailwind CSS"],
      category: "AI",
      liveLink: "https://example.com/project1",
      githubLink: "https://github.com/username/project1",
      featured: true,
    },
    {
      id: 2,
      title: "E-Commerce Dashboard",
      description:
        "A comprehensive dashboard for e-commerce businesses with real-time analytics, inventory management, and sales forecasting features.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["React", "Node.js", "MongoDB", "Chart.js"],
      category: "Web App",
      liveLink: "https://example.com/project2",
      githubLink: "https://github.com/username/project2",
      featured: true,
    },
    {
      id: 3,
      title: "Portfolio Website Template",
      description:
        "A customizable portfolio template for developers and designers with smooth animations and responsive design.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["React", "Framer Motion", "Tailwind CSS"],
      category: "Web Design",
      githubLink: "https://github.com/username/project3",
      featured: false,
    },
    {
      id: 4,
      title: "Weather Forecast App",
      description:
        "A weather application that provides accurate forecasts with interactive visualizations and location-based recommendations.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["React", "Weather API", "D3.js"],
      category: "Web App",
      liveLink: "https://example.com/project4",
      featured: false,
    },
    {
      id: 5,
      title: "Task Management System",
      description:
        "A collaborative task management system with real-time updates, priority tracking, and team performance analytics.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["Next.js", "Firebase", "Redux"],
      category: "Web App",
      liveLink: "https://example.com/project5",
      githubLink: "https://github.com/username/project5",
      featured: true,
    },
    {
      id: 6,
      title: "Machine Learning Image Classifier",
      description:
        "An image classification system using machine learning to identify objects and scenes with high accuracy.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["Python", "TensorFlow", "Computer Vision"],
      category: "AI",
      githubLink: "https://github.com/username/project6",
      featured: true,
    },
  ];

  // Get unique categories
  const categories = [
    "all",
    ...Array.from(new Set(projects.map((project) => project.category))),
  ];

  // Filter projects based on active filter, search query, and category
  const filteredProjects = projects
    .filter((project) => {
      if (activeFilter === "featured") return project.featured;
      return true;
    })
    .filter((project) => {
      if (selectedCategory === "all") return true;
      return project.category === selectedCategory;
    })
    .filter((project) => {
      if (!searchQuery) return true;
      return (
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    });

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

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
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/80 via-transparent to-black/80 z-10" />
        <div className="absolute top-[15%] left-0 w-full h-[500px] bg-accent/5 -skew-y-3 z-0"></div>
        <div className="absolute top-[25%] right-0 w-[300px] h-[300px] rounded-full bg-accent/10 blur-[100px] z-0"></div>
        <div className="absolute bottom-[15%] left-0 w-[200px] h-[200px] rounded-full bg-accent/10 blur-[80px] z-0"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <AnimatedText
            text="My Work"
            className="text-4xl md:text-5xl font-bold mb-6"
            animation="reveal"
            color="text-accent"
          />

          <AnimatedText
            text="Recent Projects & Case Studies"
            className="text-xl md:text-2xl text-gray-300"
            animation="wave"
          />
        </div>

        {/* Filter and search controls */}
        <motion.div
          className="mb-12 space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Tabs
            defaultValue="all"
            className="w-full"
            onValueChange={(value) => setActiveFilter(value)}
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
              <TabsList className="bg-black/20 backdrop-blur-sm border border-gray-800 p-1">
                <TabsTrigger
                  value="all"
                  className="data-[state=active]:bg-accent data-[state=active]:text-black"
                >
                  All Projects
                </TabsTrigger>
                <TabsTrigger
                  value="featured"
                  className="data-[state=active]:bg-accent data-[state=active]:text-black"
                >
                  Featured
                </TabsTrigger>
              </TabsList>

              <div className="flex items-center gap-3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search projects..."
                    className="pl-9 w-full md:w-[250px] bg-black/20 backdrop-blur-sm border-gray-800"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      className="bg-black/20 backdrop-blur-sm border-gray-800"
                    >
                      <Filter className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    align="end"
                    className="bg-black/80 backdrop-blur-sm border-gray-800"
                  >
                    {categories.map((category) => (
                      <DropdownMenuItem
                        key={category}
                        className={`capitalize ${
                          selectedCategory === category ? "text-accent" : ""
                        }`}
                        onClick={() => setSelectedCategory(category)}
                      >
                        {category}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>

                <div className="flex border border-gray-800 rounded-md overflow-hidden">
                  <Button
                    variant="outline"
                    size="icon"
                    className={`${
                      viewMode === "grid" ? "bg-accent/20" : "bg-black/20"
                    } backdrop-blur-sm h-9 w-9 rounded-none`}
                    onClick={() => setViewMode("grid")}
                  >
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
                      <rect width="7" height="7" x="3" y="3" rx="1" />
                      <rect width="7" height="7" x="14" y="3" rx="1" />
                      <rect width="7" height="7" x="14" y="14" rx="1" />
                      <rect width="7" height="7" x="3" y="14" rx="1" />
                    </svg>
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className={`${
                      viewMode === "list" ? "bg-accent/20" : "bg-black/20"
                    } backdrop-blur-sm h-9 w-9 rounded-none`}
                    onClick={() => setViewMode("list")}
                  >
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
                      <line x1="3" x2="21" y1="6" y2="6" />
                      <line x1="3" x2="21" y1="12" y2="12" />
                      <line x1="3" x2="21" y1="18" y2="18" />
                    </svg>
                  </Button>
                </div>
              </div>
            </div>
          </Tabs>
        </motion.div>

        {/* Projects display */}
        {filteredProjects.length === 0 ? (
          <motion.div
            className="text-center py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-gray-400 text-lg">
              No projects match your current filters.
            </p>
            <Button
              variant="outline"
              className="mt-4"
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
                setActiveFilter("all");
              }}
            >
              Reset Filters
            </Button>
          </motion.div>
        ) : viewMode === "grid" ? (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                custom={index}
                variants={cardVariants}
              >
                <AnimatedCard className="bg-black/40 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 h-full">
                  <div className="relative h-[220px] overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Overlay with buttons */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                      <Link href={`/work/${project.id}`}>
                        <AnimatedGradientButton size="sm">
                          View Details
                        </AnimatedGradientButton>
                      </Link>
                    </div>

                    {/* Category badge */}
                    <div className="absolute top-3 left-3">
                      <Badge className="bg-black/60 backdrop-blur-sm text-white border-gray-700">
                        {project.category}
                      </Badge>
                    </div>

                    {/* Featured badge */}
                    {project.featured && (
                      <div className="absolute top-3 right-3">
                        <Badge
                          variant="secondary"
                          className="bg-accent text-black font-medium"
                        >
                          Featured
                        </Badge>
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    <Link
                      href={`/work/${project.id}`}
                      className="block group-hover:text-accent transition-colors duration-300"
                    >
                      <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                        {project.title}
                        <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                      </h3>
                    </Link>

                    <p className="text-gray-300 mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.slice(0, 3).map((tag, i) => (
                        <Badge
                          key={i}
                          variant="outline"
                          className="text-xs bg-black/40"
                        >
                          {tag}
                        </Badge>
                      ))}
                      {project.tags.length > 3 && (
                        <Badge
                          variant="outline"
                          className="text-xs bg-black/40"
                        >
                          +{project.tags.length - 3}
                        </Badge>
                      )}
                    </div>

                    <div className="flex gap-3">
                      {project.liveLink && (
                        <Button
                          size="sm"
                          variant="outline"
                          className="gap-1 bg-black/40"
                          asChild
                        >
                          <a
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                            Demo
                          </a>
                        </Button>
                      )}

                      {project.githubLink && (
                        <Button
                          size="sm"
                          variant="outline"
                          className="gap-1 bg-black/40"
                          asChild
                        >
                          <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="w-3.5 h-3.5" />
                            Code
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </AnimatedCard>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            className="space-y-6"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                custom={index}
                variants={cardVariants}
              >
                <AnimatedCard className="bg-black/40 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800">
                  <div className="flex flex-col md:flex-row">
                    <div className="relative w-full md:w-[280px] h-[200px] overflow-hidden">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />

                      {/* Category badge */}
                      <div className="absolute top-3 left-3">
                        <Badge className="bg-black/60 backdrop-blur-sm text-white border-gray-700">
                          {project.category}
                        </Badge>
                      </div>

                      {/* Featured badge */}
                      {project.featured && (
                        <div className="absolute top-3 right-3">
                          <Badge
                            variant="secondary"
                            className="bg-accent text-black font-medium"
                          >
                            Featured
                          </Badge>
                        </div>
                      )}
                    </div>

                    <div className="p-6 flex-1">
                      <Link
                        href={`/work/${project.id}`}
                        className="block group-hover:text-accent transition-colors duration-300"
                      >
                        <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                          {project.title}
                          <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                        </h3>
                      </Link>

                      <p className="text-gray-300 mb-4">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag, i) => (
                          <Badge
                            key={i}
                            variant="outline"
                            className="text-xs bg-black/40"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex gap-3">
                        <Link href={`/work/${project.id}`}>
                          <AnimatedGradientButton size="sm">
                            View Details
                          </AnimatedGradientButton>
                        </Link>

                        {project.liveLink && (
                          <Button
                            size="sm"
                            variant="outline"
                            className="gap-1 bg-black/40"
                            asChild
                          >
                            <a
                              href={project.liveLink}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <ExternalLink className="w-3.5 h-3.5" />
                              Demo
                            </a>
                          </Button>
                        )}

                        {project.githubLink && (
                          <Button
                            size="sm"
                            variant="outline"
                            className="gap-1 bg-black/40"
                            asChild
                          >
                            <a
                              href={project.githubLink}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Github className="w-3.5 h-3.5" />
                              Code
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </AnimatedCard>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Call to action */}
        <motion.div
          className="text-center mt-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <AnimatedCard className="bg-gradient-to-r from-black/60 via-accent/20 to-black/60 backdrop-blur-md p-10 rounded-2xl border border-gray-800">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Interested in working together?
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              I&#39;m always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.
            </p>
            <AnimatedGradientButton size="lg">
              Let&#39;s Connect
              <ArrowUpRight className="w-4 h-4" />
            </AnimatedGradientButton>
          </AnimatedCard>
        </motion.div>
      </div>
    </motion.div>
  );
}
