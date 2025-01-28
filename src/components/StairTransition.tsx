"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Stairs from "./ui/Stairs";
interface Props {}

function StairTransition(props: Props) {
  const {} = props;
  const pathName = usePathname();
  return (
    <>
      <AnimatePresence mode="wait">
        <div key={pathName}>
          <div className="h-screen w-screen top-0 right-0 left-0 fixed z-40 pointer-events-none flex">
            <Stairs />
          </div>
          <motion.div
            className="h-screen w-screen fixed top-0 pointer-events-none"
            initial={{ opacity: 1 }}
            animate={{
              opacity: 0,
              transition: { delay: 4, duration: 0.4, ease: "easeInOut" },
            }}
          />
        </div>
      </AnimatePresence>
    </>
  );
}

export default StairTransition;
