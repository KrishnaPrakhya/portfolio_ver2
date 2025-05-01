"use client";
import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

interface SkillRadarProps {
  skills: {
    name: string;
    level: number; // 0-100
    color?: string;
  }[];
  size?: number;
  className?: string;
}

export default function SkillRadar({
  skills,
  size = 300,
  className = "",
}: SkillRadarProps) {
  const controls = useAnimation();
  const radarRef = useRef(null);
  const isInView = useInView(radarRef, { once: true, amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  // Calculate positions on the radar
  const calculatePosition = (index: number, total: number, level: number) => {
    const angle = (index / total) * Math.PI * 2 - Math.PI / 2;
    const radius = (level / 100) * (size / 2 - 30);

    return {
      x: Math.cos(angle) * radius + size / 2,
      y: Math.sin(angle) * radius + size / 2,
    };
  };

  // Generate points for the polygon
  const generatePolygonPoints = () => {
    return skills
      .map((skill, i) => {
        const pos = calculatePosition(i, skills.length, skill.level);
        return `${pos.x},${pos.y}`;
      })
      .join(" ");
  };

  // Generate axis lines
  const generateAxisLines = () => {
    return skills.map((_, i) => {
      const angle = (i / skills.length) * Math.PI * 2 - Math.PI / 2;
      const endX = Math.cos(angle) * (size / 2 - 30) + size / 2;
      const endY = Math.sin(angle) * (size / 2 - 30) + size / 2;

      return { x1: size / 2, y1: size / 2, x2: endX, y2: endY };
    });
  };

  // Generate concentric circles
  const generateCircles = () => {
    return [25, 50, 75, 100].map((percent) => {
      const radius = (percent / 100) * (size / 2 - 30);
      return { cx: size / 2, cy: size / 2, r: radius };
    });
  };

  const axisLines = generateAxisLines();
  const circles = generateCircles();

  return (
    <motion.div
      ref={radarRef}
      className={`relative ${className}`}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { duration: 0.5, staggerChildren: 0.1 },
        },
      }}
    >
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        {/* Background circles */}
        {circles.map((circle, i) => (
          <motion.circle
            key={`circle-${i}`}
            cx={circle.cx}
            cy={circle.cy}
            r={circle.r}
            fill="none"
            stroke="rgba(0, 255, 255, 0.2)"
            strokeWidth="1"
            variants={{
              hidden: { scale: 0, opacity: 0 },
              visible: {
                scale: 1,
                opacity: 1,
                transition: { duration: 0.5, delay: i * 0.1 },
              },
            }}
          />
        ))}

        {/* Axis lines */}
        {axisLines.map((line, i) => (
          <motion.line
            key={`axis-${i}`}
            x1={line.x1}
            y1={line.y1}
            x2={line.x2}
            y2={line.y2}
            stroke="rgba(255, 255, 255, 0.3)"
            strokeWidth="1"
            variants={{
              hidden: { pathLength: 0, opacity: 0 },
              visible: {
                pathLength: 1,
                opacity: 1,
                transition: { duration: 0.5, delay: i * 0.05 },
              },
            }}
          />
        ))}

        {/* Skill polygon */}
        <motion.polygon
          points={generatePolygonPoints()}
          fill="rgba(0, 255, 255, 0.2)"
          stroke="#00ffff"
          strokeWidth="2"
          variants={{
            hidden: { scale: 0, opacity: 0 },
            visible: {
              scale: 1,
              opacity: 1,
              transition: { duration: 0.8, delay: 0.5 },
            },
          }}
        />

        {/* Skill points */}
        {skills.map((skill, i) => {
          const pos = calculatePosition(i, skills.length, skill.level);
          return (
            <motion.circle
              key={`point-${i}`}
              cx={pos.x}
              cy={pos.y}
              r="4"
              fill={skill.color || "#00ffff"}
              variants={{
                hidden: { scale: 0, opacity: 0 },
                visible: {
                  scale: 1,
                  opacity: 1,
                  transition: { duration: 0.5, delay: 0.6 + i * 0.05 },
                },
              }}
            />
          );
        })}

        {/* Skill labels */}
        {skills.map((skill, i) => {
          const angle = (i / skills.length) * Math.PI * 2 - Math.PI / 2;
          const labelRadius = size / 2;
          const x = Math.cos(angle) * labelRadius + size / 2;
          const y = Math.sin(angle) * labelRadius + size / 2;

          // Adjust text anchor based on position
          let textAnchor = "middle";
          if (x < size / 2 - 10) textAnchor = "end";
          if (x > size / 2 + 10) textAnchor = "start";

          return (
            <motion.text
              key={`label-${i}`}
              x={x}
              y={y}
              textAnchor={textAnchor}
              fill="white"
              fontSize="12"
              fontWeight="medium"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { duration: 0.5, delay: 0.8 + i * 0.05 },
                },
              }}
            >
              {skill.name}
            </motion.text>
          );
        })}
      </svg>
    </motion.div>
  );
}
