"use client";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import React from "react";
type Props = {};

function MouseTracker(props: Props) {
  const {} = props;
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorOutlineRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (
      target.tagName === "A" ||
      target.tagName === "BUTTON" ||
      target.classList.contains("hover-cursor")
    ) {
      gsap.to(cursorRef.current, {
        scale: 2,
        backgroundColor: "white",
      });
      gsap.to(cursorOutlineRef.current, {
        scale: 0.5,
        borderColor: "white",
      });
    }
  };
  const handleMouseLeave = (e: MouseEvent) => {
    gsap.to(cursorRef.current, {
      scale: 1,
      backgroundColor: "rgb(var(--accent))",
    });
    gsap.to(cursorOutlineRef.current, {
      scale: 1,
      borderColor: "rgb(var(--accent))",
    });
  };

  useEffect(() => {
    const xTo = gsap.quickTo(cursorRef.current, "x", {
      duration: 0.5,
      ease: "power3",
    });
    const yTo = gsap.quickTo(cursorRef.current, "y", {
      duration: 0.5,
      ease: "power3",
    });

    const xOutlineTo = gsap.quickTo(cursorOutlineRef.current, "x", {
      duration: 0.8,
      ease: "power3",
    });
    const yOutlineTo = gsap.quickTo(cursorOutlineRef.current, "y", {
      duration: 0.8,
      ease: "power3",
    });

    const mouseMoveHandler = (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
      xOutlineTo(e.clientX);
      yOutlineTo(e.clientY);
    };

    window.addEventListener("mousemove", mouseMoveHandler);

    return () => {
      window.removeEventListener("mousemove", mouseMoveHandler);
    };
  }, []);

  useEffect(() => {
    window.addEventListener("mouseover", handleMouseEnter);
    window.addEventListener("mouseout", handleMouseLeave);
    return () => {
      window.removeEventListener("mouseover", handleMouseEnter);
      window.removeEventListener("mouseout", handleMouseLeave);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="w-4 h-4 rounded-full fixed top-0 left-0 pointer-events-none z-50 bg-accent"
      ></div>
      <div
        ref={cursorOutlineRef}
        className="w-8 h-8 rounded-full fixed top-0 left-0 pointer-events-none z-40 border-2 border-accent mix-blend-difference"
      ></div>
    </>
  );
}

export default MouseTracker;
