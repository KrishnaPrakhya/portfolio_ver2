"use client";
import React, { useEffect } from "react";
import pic from "@/assets/Designer.jpeg";
import { motion } from "framer-motion";
import { gsap } from "gsap";
interface Props {}

const Projects: React.FC<Props> = () => {
  const projects = [1, 2, 3, 4, 5];

  useEffect(() => {
    const cards = gsap.utils.toArray(".project-card");
    gsap.fromTo(
      cards,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".projects-container",
          start: "top 70%",
          end: "bottom 30%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 2, duration: 1.5 }}
      className="h-screen relative flex overflow-hidden text-left md:text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center z-0 projects-container"
    >
      <h4 className="absolute top-20 tracking-[28px] ml-20 uppercase text-accent text-3xl  mb-20 ">
        Selected Projects
      </h4>
      <div className="relative w-full flex overflow-x-scroll snap-x snap-mandatory z-20">
        {projects.map((project, index) => (
          <div
            key={index}
            className="w-screen flex-shrink-0 snap-center flex flex-col justify-center items-center relative mt-10 p-20 md:p-20 project-card"
          >
            <motion.img
              initial={{ y: -250, opacity: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
              src={pic.src}
              className="w-80 text-center m-10 mt-50"
              alt={`Project ${index}`}
            />
            <motion.div
              initial={{ x: 500, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.3 }}
              className="span-y-10 px-0 md:px-10 max-w-6xl"
            >
              <h4 className="text-4xl font-semibold text-center text-white detect-hover">
                Case/Study {index + 1} of {projects.length}: Chat Bot
              </h4>
              <p className="text-lg text-center md:text-left text-gray-300 detect-hover">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Impedit consequatur neque odio saepe quod harum facilis
                veritatis facere qui natus architecto ducimus possimus
                necessitatibus ab, distinctio et, delectus voluptate totam!
              </p>
            </motion.div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-accent/40 left-0 h-[400px] -skew-y-6 z-10"></div>
    </motion.div>
  );
};

export default Projects;
