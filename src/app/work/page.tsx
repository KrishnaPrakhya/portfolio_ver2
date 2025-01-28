"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";

const projects = [
  {
    id: 1,
    title: "Redaction of Documents",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi?",
    img: "https://images.pexels.com/photos/18073372/free-photo-of-young-man-sitting-in-a-car-on-a-night-street.jpeg?auto=compress&cs=tinysrgb&h=1600&w=1600&lazy=load",
    link: "",
  },
  {
    id: 2,
    title: "Finance Advisor",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi?",
    img: "https://images.pexels.com/photos/18023772/free-photo-of-close-up-of-a-person-holding-a-wristwatch.jpeg?auto=compress&cs=tinysrgb&h=1600&w=1600&lazy=load",
    link: "",
  },
  {
    id: 3,
    title: "Facial Recognition based on siamese neural network",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi?",
    img: "https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&h=1600&lazy=load",
    link: "",
  },
  {
    id: 4,
    title: "Doctors availability based on optimization",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi?",
    img: "https://images.pexels.com/photos/8497496/free-photo-of-close-up-of-person-doing-exercise.jpeg?auto=compress&cs=tinysrgb&h=1600&lazy=load",
    link: "",
  },
];

function Page() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", `-${118 * (projects.length - 1)}vw`]
  );

  return (
    <motion.div ref={ref} className="h-[600vh] relative page-background">
      <Header />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.2 }}
        className="w-screen h-[calc(100vh-6rem)] text-8xl text-center text-accent flex justify-center items-center"
      >
        My Works
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.2 }}
        className="sticky top-0 h-screen overflow-hidden overflow-x-hidden"
      >
        <motion.div style={{ x }} className="flex">
          <div className="min-w-[55vw] h-screen flex items-center justify-center" />
          {projects.map((item) => (
            <div
              className="min-w-[100vw] h-screen flex items-center justify-center"
              key={item.id}
            >
              <div className="flex flex-col gap-8 text-white text-center">
                <h1 className="text-5xl">{item.title}</h1>
                <div className="relative w-[300px] h-[300px] mx-auto">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <p>{item.desc}</p>
                <Link href={item.link}>
                  <button className="px-4 py-2 bg-white text-black rounded">
                    See Demo
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Page;
