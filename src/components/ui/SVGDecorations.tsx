"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Animated circuit lines that draw themselves
export function CircuitLines({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <defs>
          <linearGradient id="circuitGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00E5FF" stopOpacity="0" />
            <stop offset="50%" stopColor="#00E5FF" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#1f41bb" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Top circuit path */}
        <motion.path
          d="M0,20 H80 L100,40 H200 L220,20 H350 L370,50 H500"
          stroke="url(#circuitGrad)"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: [0, 0.6, 0.6, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Bottom circuit path */}
        <motion.path
          d="M500,80 H400 L380,60 H280 L260,80 H150 L130,50 H0"
          stroke="url(#circuitGrad)"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: [0, 0.4, 0.4, 0] }}
          transition={{ duration: 5, repeat: Infinity, delay: 1.5, ease: "easeInOut" }}
        />

        {/* Circuit nodes */}
        {[
          { cx: 80, cy: 20 },
          { cx: 200, cy: 40 },
          { cx: 350, cy: 20 },
          { cx: 400, cy: 80 },
          { cx: 150, cy: 80 },
        ].map((node, i) => (
          <motion.circle
            key={i}
            cx={node.cx}
            cy={node.cy}
            r="2"
            fill="#00E5FF"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: [0, 0.8, 0], scale: [0, 1, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.6,
              ease: "easeInOut",
            }}
          />
        ))}
      </svg>
    </div>
  );
}

// Hexagonal grid pattern
export function HexGrid({ className = "", opacity = 0.04 }: { className?: string; opacity?: number }) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id="hexPattern"
            x="0"
            y="0"
            width="56"
            height="100"
            patternUnits="userSpaceOnUse"
            patternTransform="scale(1)"
          >
            <path
              d="M28 66L0 50L0 16L28 0L56 16L56 50L28 66Z"
              fill="none"
              stroke="#00E5FF"
              strokeWidth="0.5"
              opacity={opacity}
            />
            <path
              d="M28 100L0 84L0 50L28 34L56 50L56 84L28 100Z"
              fill="none"
              stroke="#00E5FF"
              strokeWidth="0.5"
              opacity={opacity * 0.7}
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hexPattern)" />
      </svg>
    </div>
  );
}

// Decorative code brackets
export function CodeBrackets({ side = "left", className = "" }: { side?: "left" | "right"; className?: string }) {
  const isLeft = side === "left";
  const text = isLeft ? "<" : "/>";

  return (
    <motion.div
      className={`absolute hidden lg:flex items-center justify-center pointer-events-none select-none ${className}`}
      style={{
        [isLeft ? "left" : "right"]: "-40px",
        top: "50%",
        transform: "translateY(-50%)",
      }}
      initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <motion.span
        className="text-[#00E5FF]/10 font-mono font-bold"
        style={{ fontSize: "120px", lineHeight: 1 }}
        animate={{ opacity: [0.05, 0.12, 0.05] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        {text}
      </motion.span>
    </motion.div>
  );
}

// Glowing orb SVG accent
export function GlowingOrb({
  size = 24,
  color = "#00E5FF",
  className = "",
}: {
  size?: number;
  color?: string;
  className?: string;
}) {
  return (
    <motion.div
      className={`inline-flex items-center justify-center ${className}`}
      animate={{ scale: [1, 1.2, 1] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    >
      <svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id={`glow-${size}`} x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          <radialGradient id={`orbGrad-${size}`}>
            <stop offset="0%" stopColor={color} stopOpacity="0.8" />
            <stop offset="50%" stopColor={color} stopOpacity="0.3" />
            <stop offset="100%" stopColor={color} stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="12" cy="12" r="10" fill={`url(#orbGrad-${size})`} filter={`url(#glow-${size})`} />
        <circle cx="12" cy="12" r="3" fill={color} opacity="0.9" />
      </svg>
    </motion.div>
  );
}

// Matrix-style data stream (subtle, cyan)
export function DataStream({ className = "" }: { className?: string }) {
  const [streams, setStreams] = useState<
    Array<{ id: number; x: number; chars: string[]; speed: number; opacity: number }>
  >([]);

  useEffect(() => {
    const chars = "01アイウエオカキクケコ{}[]<>/=+*";
    const streamCount = 8;

    const generated = Array.from({ length: streamCount }, (_, i) => ({
      id: i,
      x: 5 + (i / streamCount) * 90,
      chars: Array.from({ length: 12 }, () => chars[Math.floor(Math.random() * chars.length)]),
      speed: 6 + Math.random() * 8,
      opacity: 0.03 + Math.random() * 0.06,
    }));
    setStreams(generated);
  }, []);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {streams.map((stream) => (
        <motion.div
          key={stream.id}
          className="absolute text-[#00E5FF] font-mono text-xs leading-relaxed whitespace-pre"
          style={{
            left: `${stream.x}%`,
            opacity: stream.opacity,
            writingMode: "vertical-rl",
          }}
          animate={{ y: ["-100%", "100%"] }}
          transition={{
            duration: stream.speed,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 4,
          }}
        >
          {stream.chars.join("\n")}
        </motion.div>
      ))}
    </div>
  );
}

// Animated globe for GlobalPresence
export function AnimatedGlobe({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <svg
        viewBox="0 0 200 200"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="globeGlow">
            <stop offset="0%" stopColor="#00E5FF" stopOpacity="0.15" />
            <stop offset="70%" stopColor="#00E5FF" stopOpacity="0.05" />
            <stop offset="100%" stopColor="#00E5FF" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Globe glow */}
        <circle cx="100" cy="100" r="95" fill="url(#globeGlow)" />

        {/* Globe outline */}
        <motion.circle
          cx="100"
          cy="100"
          r="70"
          fill="none"
          stroke="#00E5FF"
          strokeWidth="0.8"
          opacity="0.3"
          animate={{ opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 3, repeat: Infinity }}
        />

        {/* Meridians */}
        {[0, 30, 60, -30, -60].map((offset, i) => (
          <motion.ellipse
            key={`meridian-${i}`}
            cx="100"
            cy="100"
            rx={Math.abs(Math.cos((offset * Math.PI) / 180) * 70)}
            ry="70"
            fill="none"
            stroke="#00E5FF"
            strokeWidth="0.4"
            opacity="0.15"
            animate={{ opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 4, repeat: Infinity, delay: i * 0.3 }}
          />
        ))}

        {/* Parallels */}
        {[-40, -15, 15, 40].map((y, i) => (
          <motion.ellipse
            key={`parallel-${i}`}
            cx="100"
            cy={100 + y}
            rx={Math.sqrt(70 * 70 - y * y)}
            ry={Math.sqrt(70 * 70 - y * y) * 0.3}
            fill="none"
            stroke="#00E5FF"
            strokeWidth="0.4"
            opacity="0.15"
            animate={{ opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 3.5, repeat: Infinity, delay: i * 0.4 }}
          />
        ))}

        {/* Glowing connection points */}
        {[
          { cx: 85, cy: 75 },   // Mexico approx
          { cx: 120, cy: 65 },  // Europe
          { cx: 140, cy: 85 },  // Asia
          { cx: 75, cy: 90 },   // South America
          { cx: 110, cy: 110 }, // Africa
        ].map((point, i) => (
          <g key={`point-${i}`}>
            <motion.circle
              cx={point.cx}
              cy={point.cy}
              r="6"
              fill="#00E5FF"
              opacity="0.1"
              animate={{
                r: [6, 10, 6],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.5,
              }}
            />
            <motion.circle
              cx={point.cx}
              cy={point.cy}
              r="2"
              fill="#00E5FF"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
            />
          </g>
        ))}

        {/* Connection arcs from Mexico */}
        {[
          "M85,75 Q100,40 120,65",
          "M85,75 Q110,60 140,85",
          "M85,75 Q80,85 75,90",
        ].map((path, i) => (
          <motion.path
            key={`arc-${i}`}
            d={path}
            fill="none"
            stroke="#00E5FF"
            strokeWidth="0.8"
            strokeDasharray="4,4"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: [0, 1, 1], opacity: [0, 0.5, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 1.2,
              ease: "easeInOut",
            }}
          />
        ))}
      </svg>
    </div>
  );
}
