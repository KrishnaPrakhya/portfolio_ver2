"use client";
import React, { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import "@/style/scroll.css";
import Nav from "./Nav";
import { Button } from "./ui/button";
import MobileNav from "./MobileNav";

interface Props {}

function Header(props: Props) {
  const {} = props;
  const [isOpen, setIsOpen] = useState(false);

  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 100], [1, 0.8]);
  const scale = useTransform(scrollY, [0, 100], [1, 0.98]);

  return (
    <>
      <motion.header
        style={{ opacity, scale }}
        className="sticky top-0 flex items-start backdrop-blur-xl bg-background/20 justify-between pr-[100px] pl-[100px] p-4  mx-auto z-20 pt-3 xl:items-center border-b border-accent/10 shadow-xl"
      >
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="flex flex-row items-center"
        >
          <Link href={"/"}>
            <motion.h1
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-3xl font-semibold text-accent bg-clip-text "
            >
              Krishna<span className="text-accent animate-pulse">⚡</span>
            </motion.h1>
          </Link>
        </motion.div>

        {/* Navigation and Hire Me Button */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <div className="hidden xl:flex items-center gap-8">
            <Nav />
            <Link href={"/contact"}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  className="bg-transparent border-accent/50 text-accent hover:bg-accent/10 hover:border-accent hover:text-accent transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Hire Me
                </Button>
              </motion.div>
            </Link>
          </div>
        </motion.div>

        {/* Mobile Navigation */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </motion.header>
    </>
  );
}

export default Header;
