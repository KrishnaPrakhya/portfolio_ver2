"use client";
import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 100], [1, 0.8]);
  const scale = useTransform(scrollY, [0, 100], [1, 0.98]);
  const backdropBlur = useTransform(scrollY, [0, 100], [0, 10]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Work", path: "/work" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
      style={{
        opacity,
        scale,
        backdropFilter: `blur(${backdropBlur.get()}px)`,
      }}
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-black/60 backdrop-blur-xl border-b border-accent/10 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <Link href="/">
            <motion.div
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="relative w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                <span className="text-accent text-xl font-bold">K</span>
                <motion.div
                  className="absolute inset-0 rounded-full border border-accent"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [1, 0.5, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                />
              </div>
              <span className="text-2xl font-bold">
                Krishna<span className="text-accent">.</span>
              </span>
            </motion.div>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.nav
          className="hidden lg:flex items-center gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.path}
              className={`relative overflow-hidden group ${
                pathname === link.path
                  ? "text-accent"
                  : "text-white hover:text-accent transition-colors duration-300"
              }`}
            >
              <span className="relative z-10">{link.name}</span>
              {pathname === link.path && (
                <motion.span
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-accent"
                  layoutId="activeNavIndicator"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </Link>
          ))}
        </motion.nav>

        {/* Hire Me Button (Desktop) */}
        <motion.div
          className="hidden lg:block"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <Link href="/contact">
            <Button
              variant="outline"
              className="bg-transparent border-accent/50 text-accent hover:bg-accent/10 hover:border-accent transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Hire Me
            </Button>
          </Link>
        </motion.div>

        {/* Mobile Navigation */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-accent">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] bg-black/90 backdrop-blur-xl border-l border-accent/20"
            >
              <div className="flex flex-col h-full">
                <div className="flex justify-between items-center mb-10 mt-4">
                  <Link href="/" className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                      <span className="text-accent text-lg font-bold">K</span>
                    </div>
                    <span className="text-xl font-bold">
                      Krishna<span className="text-accent">.</span>
                    </span>
                  </Link>
                </div>

                <nav className="flex flex-col gap-6 mt-8">
                  {links.map((link, index) => (
                    <Link
                      key={index}
                      href={link.path}
                      className={`text-xl ${
                        pathname === link.path
                          ? "text-accent font-medium"
                          : "text-white hover:text-accent transition-colors duration-300"
                      }`}
                    >
                      {link.name}
                    </Link>
                  ))}
                </nav>

                <div className="mt-auto mb-8">
                  <Link href="/contact" className="w-full">
                    <Button
                      variant="outline"
                      className="w-full bg-transparent border-accent/50 text-accent hover:bg-accent/10 hover:border-accent transition-all duration-300"
                    >
                      Hire Me
                    </Button>
                  </Link>

                  <div className="flex justify-center gap-4 mt-8">
                    {["github", "linkedin", "twitter", "instagram"].map(
                      (platform, index) => (
                        <a
                          key={index}
                          href="#"
                          className="w-10 h-10 rounded-full bg-black/50 border border-accent/30 flex items-center justify-center text-accent hover:bg-accent hover:text-black transition-all duration-300"
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
                        </a>
                      )
                    )}
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
