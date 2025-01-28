"use client";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import React from "react";
import StairTransition from "./StairTransition";

interface Props {
  children: React.ReactNode;
}

function PageTransition(props: Props) {
  const { children } = props;
  const pathname = usePathname();

  return (
    <>
      <StairTransition />
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          className=" top-0"
          // initial={{ opacity: 0 }}
          // animate={{
          //   opacity: 1,
          //   transition: { delay: 0, duration: 0.4, ease: "easeInOut" },
          // }}
          // exit={{ opacity: 0 }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
}

export default PageTransition;
