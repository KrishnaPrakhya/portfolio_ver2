"use client";
import React, { useState, useEffect } from "react";
import { gsap } from "gsap";
import nextIco from "@/assets/pro.png";
import vercelIco from "@/assets/Designer.jpeg";
import { motion } from "framer-motion";

interface ContentListProps {}

const items = [
  {
    title: "Frontend Developer",
    hoverImg: nextIco,
    tags: ["Next.js", "React", "JavaScript", "TypeScript"],
  },
  {
    title: "Backend Developer",
    hoverImg: nextIco,
    tags: ["Node.js", "Express.js", "MongoDB", "SQL"],
  },
  {
    title: "Artificial Assistance Assistance",
    hoverImg: nextIco,
    tags: ["Machine Learning", "Deep Learning", "Langchain"],
  },
];

const Services: React.FC<ContentListProps> = () => {
  const [currentItem, setCurrentItem] = useState<null | number>(null);

  useEffect(() => {
    const services = gsap.utils.toArray(".service-item");
    gsap.fromTo(
      services,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".services-container",
          start: "top 80%",
          end: "bottom 40%",
          scrub: true,
        },
      }
    );
  }, []);

  const onMouseEnter = (index: number) => {
    setCurrentItem(index);
    if (index !== null) {
      gsap.to(`#image-${index}`, {
        opacity: 1,
        scale: 1,
        ease: "power3.out",
        duration: 0.3,
      });
    }
  };

  const onMouseLeave = (index: number) => {
    setCurrentItem(null);
    if (index !== null) {
      gsap.to(`#image-${index}`, {
        opacity: 0,
        scale: 0,
        ease: "power3.in",
        duration: 0.3,
      });
    }
  };

  const onMouseMove = (
    e: React.MouseEvent<HTMLLIElement, MouseEvent>,
    index: number
  ) => {
    if (currentItem === index) {
      const hoverImage = document.getElementById(`image-${index}`);
      if (hoverImage) {
        const rect = e.currentTarget.getBoundingClientRect();
        const offsetX = e.clientX - rect.left; // X position relative to the li element
        const offsetY = e.clientY - rect.top; // Y position relative to the li element

        gsap.to(hoverImage, {
          x: offsetX - hoverImage.offsetWidth / 2, // Center the image horizontally
          y: offsetY - hoverImage.offsetHeight / 2, // Center the image vertically
          ease: "power3.out",
          duration: 0.2,
        });
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 2, duration: 0.2 }}
      className="h-screen relative services-container "
    >
      <div className="pb-20">
        <h4 className="text-accent uppercase tracking-[20px] text-5xl flex justify-center pt-20 pb-10">
          Here&apos;s how I can help you
        </h4>
        <h4 className="text-accent uppercase tracking-[10px] text-xl flex justify-center">
          (Hover For Preview)
        </h4>
      </div>
      <ul className="grid border-b border-gray-100">
        {items.map((item, index) => (
          <li
            key={index}
            className="relative flex flex-col service-item"
            onMouseEnter={() => onMouseEnter(index)}
            onMouseLeave={() => onMouseLeave(index)}
            onMouseMove={(e) => onMouseMove(e, index)}
          >
            <a
              href="#"
              className="flex flex-col justify-between border-t border-gray-100 py-10 text-gray-200 md:flex-row"
            >
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-white detect-hover">
                  {item.title}
                </span>
                <div className="flex gap-3 text-accent text-lg font-bold">
                  {item.tags.map((tag, tagIndex) => (
                    <span key={tagIndex}>{tag}</span>
                  ))}
                </div>
              </div>
            </a>
            <div
              className="hover-image absolute top-0 left-0 h-[300px] w-[300px] rounded-lg bg-cover bg-center transition-opacity duration-300 pointer-events-none"
              style={{
                opacity: 0,
                scale: 0,
                transformOrigin: "center",
                zIndex: 1000,
              }}
              id={`image-${index}`}
            >
              <img
                src={item.hoverImg.src}
                alt={item.title}
                className="absolute inset-0 object-cover w-full h-full rounded-lg"
              />
            </div>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default Services;
