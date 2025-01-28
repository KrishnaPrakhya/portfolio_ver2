"use client";
import gsap from "gsap";
import { useEffect, useRef } from "react";

interface Props {}

function MouseTracker(props: Props) {
  const {} = props;
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorOutlineRef = useRef<HTMLDivElement>(null);

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
