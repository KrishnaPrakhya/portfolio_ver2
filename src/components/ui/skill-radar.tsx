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
      angle,
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

  // Calculate the actual SVG size needed to fit all labels
  const svgSize = size * 1.55; // Make SVG 50% larger than the radar to accommodate labels
  const offsetX = (svgSize - size) / 2;
  const offsetY = (svgSize - size) / 2;

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
      <svg
        width={svgSize}
        height={svgSize}
        viewBox={`0 0 ${svgSize} ${svgSize}`}
      >
        <g transform={`translate(${offsetX}, ${offsetY})`}>
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
        </g>

        {/* Skill labels - positioned relative to the expanded SVG */}
        {skills.map((skill, i) => {
          const angle = (i / skills.length) * Math.PI * 2 - Math.PI / 2;

          // Calculate label position with more space
          const labelRadius = size / 2 ; // Slightly less than radar radius

          // Calculate base position
          const x = Math.cos(angle) * labelRadius + size / 2 + offsetX;
          const y = Math.sin(angle) * labelRadius + size / 2 + offsetY;

          // Determine text anchor and adjust position based on angle
          let textAnchor = "middle";
          let labelOffsetX = 0;
          let labelOffsetY = 0;

          // Right side
          if (angle > -Math.PI / 4 && angle < Math.PI / 4) {
            textAnchor = "start";
            labelOffsetX = 15;
          }
          // Bottom
          else if (angle >= Math.PI / 4 && angle < (3 * Math.PI) / 4) {
            textAnchor = "middle";
            labelOffsetY = 20;
          }
          // Left side
          else if (
            (angle >= (3 * Math.PI) / 4 && angle <= Math.PI) ||
            (angle >= -Math.PI && angle < (-3 * Math.PI) / 4)
          ) {
            textAnchor = "end";
            labelOffsetX = -15;
          }
          // Top
          else {
            textAnchor = "middle";
            labelOffsetY = -20;
          }

          return (
            <motion.text
              key={`label-${i}`}
              x={x + labelOffsetX}
              y={y + labelOffsetY}
              textAnchor={textAnchor}
              dominantBaseline="middle"
              fill="white"
              fontSize="13"
              fontWeight="medium"
              style={{ pointerEvents: "none" }}
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
