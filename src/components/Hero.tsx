"use client";
import React, { useEffect, useRef } from "react";
import { Button } from "./ui/button";
import { FiDownload } from "react-icons/fi";
import Socials from "./ui/Socials";
import Photo from "./Photo";
import { motion } from "framer-motion";
import Stats from "./ui/stats";
import Image from "next/image";
import pic from "@/assets/pic.png";
import { gsap } from "gsap";
import MouseTracker from "./MouseTracker";

interface Props {}

function Hero(props: Props) {
  const containerRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { duration: 0.8, ease: "power3.inOut" },
    });

    tl.fromTo(
      ".hero-img",
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, delay: 0.5 }
    )
      .fromTo(
        ".hero-title",
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0 },
        "-=0.3"
      )
      .fromTo(
        ".hero-subtitle",
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0 },
        "-=0.2"
      )
      .fromTo(
        ".hero-desc",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0 },
        "-=0.2"
      )
      .fromTo(
        ".hero-button",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0 },
        "-=0.2"
      )
      .fromTo(
        ".hero-socials",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0 },
        "-=0.2"
      );
  }, []);

  return (
    <>
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.2 }}
        className="h-full w-full relative overflow-hidden"
        ref={containerRef}
      >
        <div className="container mx-auto h-full flex text-center text-white">
          <div className="flex w-full flex-col xl:flex-row items-center justify-between sm:pt-[90px] xl:pt-[30px] xl:pb-24 gap-12">
            <div className="text-center xl:text-left order-2 xl:order-none">
              <span className="text-xl text-accent hero-subtitle detect-hover">
                Software Developer
              </span>
              <motion.h1
                className="h1 mb-6 text-white hero-title detect-hover"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0, transition: { delay: 0.3 } }}
              >
                Hello I&apos;m <br />
                <span className="text-accent">Krishna Prakhya</span>
              </motion.h1>
              <p className="xl:max-w-[500px] mb-9 text-gray-300  justify-center  hero-desc detect-hover">
                I dream coding, eat coding, live coding, it sapiente dolores nam
                impedit tenetur beatae doloremque perferendis laboriosam
                temporibus dolorum. Corrupti eos velit voluptate magni.
              </p>
              <div className="flex flex-col xl:flex-row items-center gap-8">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="hero-button"
                >
                  <Button
                    variant={"outline"}
                    size={"lg"}
                    className="uppercase flex items-center gap-2 text-white detect-hover"
                  >
                    <span>Download CV</span>
                    <FiDownload className="text-xl" />
                  </Button>
                </motion.div>
                <div className="mb-8 xl:mb-0 hero-socials">
                  <Socials
                    containerStyles="flex gap-6"
                    iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                  />
                </div>
              </div>

              <Stats />
            </div>

            <motion.div
              className="hero-img"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1, transition: { delay: 0.5 } }}
            >
              <Photo />
            </motion.div>
          </div>
        </div>
      </motion.section>
    </>
  );
}

export default Hero;
