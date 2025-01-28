"use client";
import React from "react";
import { motion } from "framer-motion";
import pic from "@/assets/Designer.jpeg";

interface Props {}

function Skill({}: Props) {
  return (
    <motion.div
      className="group relative flex cursor-pointer skill-item"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.img
        src={pic.src}
        alt="Skill"
        className="rounded-full border-2 border-accent object-cover w-20 h-20 md:w-24 md:h-24 xl:w-28 xl:h-28 filter group-hover:grayscale transition duration-300 ease-in-out"
      />
      <div className="absolute opacity-0 group-hover:opacity-80 transition ease-in-out duration-300 group-hover:bg-white h-20 w-20 md:w-24 md:h-24 xl:w-28 xl:h-28 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-xl font-bold text-black opacity-100">100%</p>
        </div>
      </div>
    </motion.div>
  );
}

export default Skill;
