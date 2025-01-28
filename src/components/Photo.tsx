"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import img from "../assets/pic.png";

interface Props {}

function Photo(props: Props) {
  return (
    <div className="w-full h-full relative flex justify-center items-center">
      <motion.div
        className="relative z-10 w-[298px] h-[298px] xl:w-[500px] xl:h-[498px] rounded-[100px] overflow-hidden"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{
          scale: 1,
          opacity: 1,
          transition: { duration: 0.8, ease: "easeOut" },
        }}
      >
        <Image
          src={img}
          priority
          quality={100}
          fill
          alt="profile-pic"
          className="object-cover rounded-[100px] shadow-2xl"
        />
      </motion.div>

      <motion.svg
        className="absolute z-0 w-[400px] xl:w-[600px] h-[400px] xl:h-[600px]"
        fill="transparent"
        viewBox="0 0 500 500"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.circle
          cx="250"
          cy="250"
          r="240"
          stroke="#00ffff"
          strokeWidth="3"
          strokeLinecap="round"
          initial={{ strokeDasharray: "0 50", rotate: 0 }}
          animate={{
            strokeDasharray: ["10 40", "5 15", "25 100"],
            rotate: [0, 360],
          }}
          transition={{ duration: 30, ease: "linear", repeat: Infinity }}
        />
      </motion.svg>

      <motion.svg
        className="absolute z-0 w-[500px] xl:w-[700px] h-[500px] xl:h-[700px]"
        fill="transparent"
        viewBox="0 0 500 500"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M0,250 Q150,50 300,250 T500,250"
          stroke="#00ffff"
          strokeWidth="4"
          fill="none"
          initial={{ pathLength: 0, pathOffset: 1 }}
          animate={{ pathLength: 1, pathOffset: 0 }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            repeatType: "mirror",
          }}
        />
      </motion.svg>
    </div>
  );
}

export default Photo;
