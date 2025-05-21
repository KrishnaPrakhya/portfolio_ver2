"use client";
import { useState, useRef } from "react";
import type React from "react";

import { motion, useInView } from "framer-motion";
import {
  EnvelopeOpenIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/16/solid";
import { Send, CheckCircle } from "lucide-react";
import AnimatedText from "./ui/animated-text";
import AnimatedCard from "./ui/animated-card";
import AnimatedGradientButton from "./ui/animated-gradient-button";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
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
        <div
          className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-accent/10 filter blur-[100px] animate-pulse"
          style={{ animationDuration: "8s" }}
        />
        <div
          className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] rounded-full bg-purple-500/10 filter blur-[80px] animate-pulse"
          style={{ animationDuration: "10s", animationDelay: "1s" }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <AnimatedText
            text="Contact Me"
            className="text-4xl md:text-5xl font-bold mb-6"
            animation="reveal"
            color="text-accent"
          />

          <AnimatedText
            text="Let's work together"
            className="text-xl md:text-2xl text-gray-300"
            animation="wave"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <AnimatedCard className="bg-black/30 backdrop-blur-md p-8 rounded-xl border border-accent/20 h-full">
              <h3 className="text-2xl font-bold mb-8">Get In Touch</h3>

              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <PhoneIcon className="text-accent h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1">Phone</h4>
                    <p className="text-gray-300">+91 123456789</p>
                    <p className="text-gray-400 text-sm mt-1">
                      Available Mon-Fri, 9AM-6PM
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <EnvelopeOpenIcon className="text-accent h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1">Email</h4>
                    <p className="text-gray-300">krishnasaiprakhya@gmail.com</p>
                    <p className="text-gray-400 text-sm mt-1">
                      I&apos;ll respond within 24 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <MapPinIcon className="text-accent h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1">Location</h4>
                    <p className="text-gray-300">Hyderabad, India</p>
                    <p className="text-gray-400 text-sm mt-1">
                      Available for remote work worldwide
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h4 className="text-lg font-medium mb-4">Connect with me</h4>
                <div className="flex space-x-4">
                  {["github", "linkedin", "twitter"].map((platform, index) => (
                    <motion.a
                      key={index}
                      href={
                        platform === "github"
                          ? "https://github.com/KrishnaPrakhya"
                          : platform === "linkedin"
                          ? "https://www.linkedin.com/in/naga-krishna-sai-prakhya"
                          : "https://x.com/Krishna_Prakhya"
                      }
                      className="w-10 h-10 rounded-full bg-black/50 border border-accent/30 flex items-center justify-center text-accent hover:bg-accent hover:text-black transition-all duration-300"
                      whileHover={{ y: -5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="sr-only">{platform}</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        {platform === "github" && (
                          <>
                            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                            <path d="M9 18c-4.51 2-5-2-7-2" />
                          </>
                        )}
                        {platform === "linkedin" && (
                          <>
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                            <rect width="4" height="12" x="2" y="9" />
                            <circle cx="4" cy="4" r="2" />
                          </>
                        )}
                        {platform === "twitter" && (
                          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                        )}
                        {platform === "instagram" && (
                          <>
                            <rect
                              width="20"
                              height="20"
                              x="2"
                              y="2"
                              rx="5"
                              ry="5"
                            />
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                          </>
                        )}
                      </svg>
                    </motion.a>
                  ))}
                </div>
              </div>
            </AnimatedCard>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <AnimatedCard className="bg-black/30 backdrop-blur-md p-8 rounded-xl border border-accent/20">
              <h3 className="text-2xl font-bold mb-8">Send Me a Message</h3>

              {isSubmitted ? (
                <motion.div
                  className="flex flex-col items-center justify-center py-12"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mb-6">
                    <CheckCircle className="text-accent w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold mb-2">Message Sent!</h4>
                  <p className="text-gray-300 text-center">
                    Thank you for reaching out. I&apos;ll get back to you as
                    soon as possible.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium mb-2"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-transparent transition-all duration-300"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium mb-2"
                      >
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-transparent transition-all duration-300"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium mb-2"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-transparent transition-all duration-300"
                      placeholder="Project Inquiry"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Tell me about your project or inquiry..."
                    />
                  </div>

                  <div>
                    <AnimatedGradientButton
                      type="submit"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center">
                          <svg
                            className="animate-spin -ml-1 mr-3 h-5 w-5 text-black"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Sending...
                        </div>
                      ) : (
                        <div className="flex items-center justify-center">
                          <Send className="mr-2 h-5 w-5" />
                          Send Message
                        </div>
                      )}
                    </AnimatedGradientButton>
                  </div>
                </form>
              )}
            </AnimatedCard>
          </motion.div>
        </div>

        {/* Map or Additional Info */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <AnimatedCard className="bg-black/30 backdrop-blur-md p-8 rounded-xl border border-accent/20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <h3 className="text-2xl font-bold mb-4">
                  Let&apos;s Build Something Amazing
                </h3>
                <p className="text-gray-300 mb-6">
                  Whether you have a project in mind or just want to explore
                  possibilities, I&apos;m here to help turn your ideas into
                  reality. My expertise spans across web development, AI
                  integration, and creating seamless user experiences.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                    <p className="text-gray-300">
                      Available for freelance projects and full-time
                      opportunities
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                    <p className="text-gray-300">
                      Open to collaboration and partnership opportunities
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                    <p className="text-gray-300">
                      Providing consultation services for technical projects
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="w-full h-full max-w-[200px] aspect-square relative">
                  <div
                    className="absolute inset-0 bg-accent/20 rounded-full animate-pulse"
                    style={{ animationDuration: "3s" }}
                  ></div>
                  <div
                    className="absolute inset-4 bg-accent/30 rounded-full animate-pulse"
                    style={{ animationDuration: "4s", animationDelay: "0.5s" }}
                  ></div>
                  <div
                    className="absolute inset-8 bg-accent/40 rounded-full animate-pulse"
                    style={{ animationDuration: "5s", animationDelay: "1s" }}
                  ></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-4xl">👋</span>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedCard>
        </motion.div>
      </div>
    </motion.div>
  );
}
