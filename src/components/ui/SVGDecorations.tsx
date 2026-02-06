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

// Animated CPU/Processor chip with circuit traces
export function AnimatedCPU({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <svg
        viewBox="0 0 200 200"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="cpuCoreGlow">
            <stop offset="0%" stopColor="#00E5FF" stopOpacity="0.4" />
            <stop offset="60%" stopColor="#00E5FF" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#00E5FF" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="cpuTraceGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00E5FF" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#1f41bb" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Central chip body */}
        <motion.rect
          x="60"
          y="60"
          width="80"
          height="80"
          rx="6"
          ry="6"
          fill="none"
          stroke="#00E5FF"
          strokeWidth="1.5"
          opacity="0.4"
          animate={{ opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Inner chip grid pattern */}
        {[0, 1, 2, 3].map((row) =>
          [0, 1, 2, 3].map((col) => (
            <motion.rect
              key={`grid-${row}-${col}`}
              x={68 + col * 17}
              y={68 + row * 17}
              width="12"
              height="12"
              rx="1"
              fill="none"
              stroke="#00E5FF"
              strokeWidth="0.3"
              opacity="0.15"
              animate={{ opacity: [0.08, 0.2, 0.08] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                delay: (row + col) * 0.2,
              }}
            />
          ))
        )}

        {/* Central core circle */}
        <motion.circle
          cx="100"
          cy="100"
          r="18"
          fill="url(#cpuCoreGlow)"
          animate={{
            r: [18, 22, 18],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.circle
          cx="100"
          cy="100"
          r="8"
          fill="#00E5FF"
          opacity="0.3"
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Top pins and traces */}
        {[80, 100, 120].map((x, i) => (
          <g key={`top-pin-${i}`}>
            <motion.line
              x1={x}
              y1="60"
              x2={x}
              y2="45"
              stroke="#00E5FF"
              strokeWidth="1.5"
              opacity="0.5"
            />
            <motion.path
              d={`M${x},45 L${x},${15 - i * 3}`}
              fill="none"
              stroke="#00E5FF"
              strokeWidth="0.8"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: [0, 1, 1], opacity: [0, 0.6, 0] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                delay: i * 0.4,
                ease: "easeInOut",
              }}
            />
            <motion.circle
              cx={x}
              cy={15 - i * 3}
              r="2"
              fill="#00E5FF"
              animate={{ opacity: [0, 0.8, 0], scale: [0, 1, 0] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                delay: i * 0.4 + 1,
              }}
            />
          </g>
        ))}

        {/* Right pins and traces */}
        {[80, 100, 120].map((y, i) => (
          <g key={`right-pin-${i}`}>
            <motion.line
              x1="140"
              y1={y}
              x2="155"
              y2={y}
              stroke="#00E5FF"
              strokeWidth="1.5"
              opacity="0.5"
            />
            <motion.path
              d={`M155,${y} L${185 + i * 3},${y}`}
              fill="none"
              stroke="#00E5FF"
              strokeWidth="0.8"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: [0, 1, 1], opacity: [0, 0.6, 0] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                delay: i * 0.4 + 0.8,
                ease: "easeInOut",
              }}
            />
            <motion.circle
              cx={185 + i * 3}
              cy={y}
              r="2"
              fill="#00E5FF"
              animate={{ opacity: [0, 0.8, 0], scale: [0, 1, 0] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                delay: i * 0.4 + 1.8,
              }}
            />
          </g>
        ))}

        {/* Bottom pins and traces */}
        {[80, 100, 120].map((x, i) => (
          <g key={`bottom-pin-${i}`}>
            <motion.line
              x1={x}
              y1="140"
              x2={x}
              y2="155"
              stroke="#00E5FF"
              strokeWidth="1.5"
              opacity="0.5"
            />
            <motion.path
              d={`M${x},155 L${x},${185 + i * 3}`}
              fill="none"
              stroke="#00E5FF"
              strokeWidth="0.8"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: [0, 1, 1], opacity: [0, 0.6, 0] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                delay: i * 0.4 + 1.6,
                ease: "easeInOut",
              }}
            />
            <motion.circle
              cx={x}
              cy={185 + i * 3}
              r="2"
              fill="#00E5FF"
              animate={{ opacity: [0, 0.8, 0], scale: [0, 1, 0] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                delay: i * 0.4 + 2.6,
              }}
            />
          </g>
        ))}

        {/* Left pins and traces */}
        {[80, 100, 120].map((y, i) => (
          <g key={`left-pin-${i}`}>
            <motion.line
              x1="60"
              y1={y}
              x2="45"
              y2={y}
              stroke="#00E5FF"
              strokeWidth="1.5"
              opacity="0.5"
            />
            <motion.path
              d={`M45,${y} L${15 - i * 3},${y}`}
              fill="none"
              stroke="#00E5FF"
              strokeWidth="0.8"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: [0, 1, 1], opacity: [0, 0.6, 0] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                delay: i * 0.4 + 2.4,
                ease: "easeInOut",
              }}
            />
            <motion.circle
              cx={15 - i * 3}
              cy={y}
              r="2"
              fill="#00E5FF"
              animate={{ opacity: [0, 0.8, 0], scale: [0, 1, 0] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                delay: i * 0.4 + 3.4,
              }}
            />
          </g>
        ))}
      </svg>
    </div>
  );
}

// Animated security shield with scanning line effect
export function AnimatedShield({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <svg
        viewBox="0 0 200 240"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="shieldStrokeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#00E5FF" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#1f41bb" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#00E5FF" stopOpacity="0.6" />
          </linearGradient>
          <linearGradient id="shieldScanGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#00E5FF" stopOpacity="0" />
            <stop offset="45%" stopColor="#00E5FF" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#00E5FF" stopOpacity="0.6" />
            <stop offset="55%" stopColor="#00E5FF" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#00E5FF" stopOpacity="0" />
          </linearGradient>
          <clipPath id="shieldClip">
            <path d="M100,20 C100,20 160,30 170,40 C170,40 175,100 170,130 C165,160 140,185 100,210 C60,185 35,160 30,130 C25,100 30,40 30,40 C40,30 100,20 100,20 Z" />
          </clipPath>
          <radialGradient id="shieldGlow">
            <stop offset="0%" stopColor="#00E5FF" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#00E5FF" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Outer glow */}
        <motion.ellipse
          cx="100"
          cy="115"
          rx="95"
          ry="110"
          fill="url(#shieldGlow)"
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Shield outline */}
        <motion.path
          d="M100,20 C100,20 160,30 170,40 C170,40 175,100 170,130 C165,160 140,185 100,210 C60,185 35,160 30,130 C25,100 30,40 30,40 C40,30 100,20 100,20 Z"
          fill="none"
          stroke="url(#shieldStrokeGrad)"
          strokeWidth="1.5"
          animate={{ opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Pulsing border glow */}
        <motion.path
          d="M100,20 C100,20 160,30 170,40 C170,40 175,100 170,130 C165,160 140,185 100,210 C60,185 35,160 30,130 C25,100 30,40 30,40 C40,30 100,20 100,20 Z"
          fill="none"
          stroke="#00E5FF"
          strokeWidth="3"
          opacity="0.1"
          animate={{ opacity: [0.05, 0.15, 0.05] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Scanning line (clipped inside shield) */}
        <g clipPath="url(#shieldClip)">
          <motion.rect
            x="25"
            y="0"
            width="150"
            height="40"
            fill="url(#shieldScanGrad)"
            animate={{ y: [20, 200, 20] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </g>

        {/* Inner lock icon - body */}
        <motion.rect
          x="82"
          y="110"
          width="36"
          height="30"
          rx="4"
          ry="4"
          fill="none"
          stroke="#00E5FF"
          strokeWidth="1.2"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Inner lock icon - shackle */}
        <motion.path
          d="M88,110 L88,97 C88,87 112,87 112,97 L112,110"
          fill="none"
          stroke="#00E5FF"
          strokeWidth="1.2"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: [0, 1, 1], opacity: [0, 0.6, 0.3] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Lock keyhole */}
        <motion.circle
          cx="100"
          cy="122"
          r="4"
          fill="#00E5FF"
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.rect
          x="98"
          y="124"
          width="4"
          height="8"
          rx="1"
          fill="#00E5FF"
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Corner nodes */}
        {[
          { cx: 100, cy: 20 },
          { cx: 170, cy: 40 },
          { cx: 30, cy: 40 },
          { cx: 100, cy: 210 },
          { cx: 170, cy: 130 },
          { cx: 30, cy: 130 },
        ].map((node, i) => (
          <g key={`shield-node-${i}`}>
            <motion.circle
              cx={node.cx}
              cy={node.cy}
              r="5"
              fill="#00E5FF"
              opacity="0.1"
              animate={{
                r: [5, 8, 5],
                opacity: [0.05, 0.2, 0.05],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                delay: i * 0.4,
              }}
            />
            <motion.circle
              cx={node.cx}
              cy={node.cy}
              r="2"
              fill="#00E5FF"
              animate={{ opacity: [0.3, 0.8, 0.3] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                delay: i * 0.4,
              }}
            />
          </g>
        ))}
      </svg>
    </div>
  );
}

// Animated rocket with particle exhaust trail
export function AnimatedRocket({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <svg
        viewBox="0 0 200 280"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="rocketBodyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#00E5FF" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#1f41bb" stopOpacity="0.5" />
          </linearGradient>
          <radialGradient id="exhaustGlow" cx="50%" cy="0%" r="80%">
            <stop offset="0%" stopColor="#00E5FF" stopOpacity="0.5" />
            <stop offset="40%" stopColor="#1f41bb" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#1f41bb" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Twinkling stars */}
        {[
          { cx: 30, cy: 40 },
          { cx: 160, cy: 60 },
          { cx: 50, cy: 100 },
          { cx: 170, cy: 130 },
          { cx: 25, cy: 170 },
          { cx: 180, cy: 200 },
          { cx: 40, cy: 240 },
          { cx: 155, cy: 260 },
        ].map((star, i) => (
          <motion.circle
            key={`star-${i}`}
            cx={star.cx}
            cy={star.cy}
            r="1.5"
            fill="#00E5FF"
            animate={{ opacity: [0.1, 0.7, 0.1], scale: [0.8, 1.2, 0.8] }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Speed lines */}
        {[
          { x: 60, y: 80, length: 25 },
          { x: 130, y: 100, length: 20 },
          { x: 55, y: 140, length: 30 },
          { x: 140, y: 160, length: 22 },
        ].map((line, i) => (
          <motion.line
            key={`speed-${i}`}
            x1={line.x}
            y1={line.y}
            x2={line.x}
            y2={line.y + line.length}
            stroke="#00E5FF"
            strokeWidth="0.8"
            strokeLinecap="round"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 0.4, 0],
              y1: [line.y, line.y + 40, line.y + 80],
              y2: [line.y + line.length, line.y + line.length + 40, line.y + line.length + 80],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: i * 0.4,
              ease: "linear",
            }}
          />
        ))}

        {/* Rocket group with bobbing animation */}
        <motion.g
          animate={{ y: [-5, 5, -5] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Rocket nose cone (triangle) */}
          <motion.path
            d="M100,50 L88,90 L112,90 Z"
            fill="url(#rocketBodyGrad)"
            stroke="#00E5FF"
            strokeWidth="0.8"
            opacity="0.6"
          />

          {/* Rocket body (rectangle) */}
          <motion.rect
            x="88"
            y="90"
            width="24"
            height="50"
            rx="2"
            fill="url(#rocketBodyGrad)"
            stroke="#00E5FF"
            strokeWidth="0.8"
            opacity="0.6"
          />

          {/* Window/porthole */}
          <motion.circle
            cx="100"
            cy="105"
            r="6"
            fill="none"
            stroke="#00E5FF"
            strokeWidth="0.8"
            animate={{ opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.circle
            cx="100"
            cy="105"
            r="3"
            fill="#00E5FF"
            animate={{ opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Left fin */}
          <motion.path
            d="M88,125 L72,148 L88,140 Z"
            fill="url(#rocketBodyGrad)"
            stroke="#00E5FF"
            strokeWidth="0.8"
            opacity="0.5"
          />

          {/* Right fin */}
          <motion.path
            d="M112,125 L128,148 L112,140 Z"
            fill="url(#rocketBodyGrad)"
            stroke="#00E5FF"
            strokeWidth="0.8"
            opacity="0.5"
          />

          {/* Exhaust glow */}
          <motion.ellipse
            cx="100"
            cy="150"
            rx="12"
            ry="20"
            fill="url(#exhaustGlow)"
            animate={{
              ry: [20, 30, 20],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Exhaust particles */}
          {[
            { cx: 96, delay: 0 },
            { cx: 100, delay: 0.2 },
            { cx: 104, delay: 0.4 },
            { cx: 98, delay: 0.6 },
            { cx: 102, delay: 0.8 },
          ].map((particle, i) => (
            <motion.circle
              key={`exhaust-${i}`}
              cx={particle.cx}
              cy="150"
              r="2"
              fill="#00E5FF"
              animate={{
                cy: [150, 190, 220],
                opacity: [0.6, 0.3, 0],
                r: [2, 3, 1],
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                delay: particle.delay,
                ease: "easeOut",
              }}
            />
          ))}
        </motion.g>
      </svg>
    </div>
  );
}

// Animated DNA double helix
export function AnimatedDNA({ className = "" }: { className?: string }) {
  const strandPoints = 12;
  const height = 260;
  const centerX = 60;
  const amplitude = 25;
  const verticalStep = height / strandPoints;

  return (
    <div className={`relative ${className}`}>
      <svg
        viewBox="0 0 120 300"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="dnaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#00E5FF" stopOpacity="0.7" />
            <stop offset="50%" stopColor="#1f41bb" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#00E5FF" stopOpacity="0.7" />
          </linearGradient>
          <linearGradient id="dnaGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1f41bb" stopOpacity="0.7" />
            <stop offset="50%" stopColor="#00E5FF" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#1f41bb" stopOpacity="0.7" />
          </linearGradient>
        </defs>

        {/* Left strand (sine wave) */}
        <motion.path
          d={`M${centerX},20 ${Array.from({ length: strandPoints + 1 }, (_, i) => {
            const y = 20 + i * verticalStep;
            const x = centerX + Math.sin((i / strandPoints) * Math.PI * 3) * amplitude;
            return `L${x},${y}`;
          }).join(" ")}`}
          fill="none"
          stroke="url(#dnaGradient)"
          strokeWidth="2"
          strokeLinecap="round"
          animate={{ opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Right strand (opposite sine wave) */}
        <motion.path
          d={`M${centerX},20 ${Array.from({ length: strandPoints + 1 }, (_, i) => {
            const y = 20 + i * verticalStep;
            const x = centerX - Math.sin((i / strandPoints) * Math.PI * 3) * amplitude;
            return `L${x},${y}`;
          }).join(" ")}`}
          fill="none"
          stroke="url(#dnaGradient2)"
          strokeWidth="2"
          strokeLinecap="round"
          animate={{ opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        />

        {/* Connecting rungs between strands */}
        {Array.from({ length: strandPoints + 1 }, (_, i) => {
          const y = 20 + i * verticalStep;
          const x1 = centerX + Math.sin((i / strandPoints) * Math.PI * 3) * amplitude;
          const x2 = centerX - Math.sin((i / strandPoints) * Math.PI * 3) * amplitude;
          return (
            <g key={`rung-${i}`}>
              <motion.line
                x1={x1}
                y1={y}
                x2={x2}
                y2={y}
                stroke="#00E5FF"
                strokeWidth="1"
                strokeLinecap="round"
                animate={{
                  opacity: [0.1, 0.4, 0.1],
                  strokeWidth: [0.5, 1.2, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3,
                  ease: "easeInOut",
                }}
              />

              {/* Left node */}
              <motion.circle
                cx={x1}
                cy={y}
                r="3"
                fill="#00E5FF"
                animate={{
                  opacity: [0.2, 0.7, 0.2],
                  r: [2.5, 4, 2.5],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  delay: i * 0.3,
                  ease: "easeInOut",
                }}
              />

              {/* Right node */}
              <motion.circle
                cx={x2}
                cy={y}
                r="3"
                fill="#1f41bb"
                animate={{
                  opacity: [0.2, 0.7, 0.2],
                  r: [2.5, 4, 2.5],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  delay: i * 0.3 + 0.5,
                  ease: "easeInOut",
                }}
              />
            </g>
          );
        })}

        {/* Outer glow pulse on midpoint nodes */}
        {[3, 6, 9].map((i) => {
          const y = 20 + i * verticalStep;
          const x1 = centerX + Math.sin((i / strandPoints) * Math.PI * 3) * amplitude;
          const x2 = centerX - Math.sin((i / strandPoints) * Math.PI * 3) * amplitude;
          return (
            <g key={`glow-${i}`}>
              <motion.circle
                cx={x1}
                cy={y}
                r="8"
                fill="#00E5FF"
                opacity="0.05"
                animate={{
                  r: [8, 14, 8],
                  opacity: [0.03, 0.12, 0.03],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.5,
                }}
              />
              <motion.circle
                cx={x2}
                cy={y}
                r="8"
                fill="#1f41bb"
                opacity="0.05"
                animate={{
                  r: [8, 14, 8],
                  opacity: [0.03, 0.12, 0.03],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.5 + 0.8,
                }}
              />
            </g>
          );
        })}
      </svg>
    </div>
  );
}

// Animated interlocking gears for Process section
export function AnimatedGears({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <svg
        viewBox="0 0 220 200"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="gearGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00E5FF" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#1f41bb" stopOpacity="0.4" />
          </linearGradient>
          <linearGradient id="gearGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1f41bb" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#00E5FF" stopOpacity="0.4" />
          </linearGradient>
        </defs>

        {/* Large gear */}
        <motion.g
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "80px 100px" }}
        >
          {/* Gear teeth - large */}
          {Array.from({ length: 12 }, (_, i) => {
            const angle = (i * 30 * Math.PI) / 180;
            const innerR = 50;
            const outerR = 60;
            const toothWidth = 8;
            const cx = 80, cy = 100;
            const cos = Math.cos(angle);
            const sin = Math.sin(angle);
            const cosLeft = Math.cos(angle - toothWidth / innerR);
            const sinLeft = Math.sin(angle - toothWidth / innerR);
            const cosRight = Math.cos(angle + toothWidth / innerR);
            const sinRight = Math.sin(angle + toothWidth / innerR);
            return (
              <path
                key={`tooth-lg-${i}`}
                d={`M${cx + cosLeft * innerR},${cy + sinLeft * innerR} L${cx + cosLeft * outerR},${cy + sinLeft * outerR} L${cx + cosRight * outerR},${cy + sinRight * outerR} L${cx + cosRight * innerR},${cy + sinRight * innerR}`}
                fill="url(#gearGrad1)"
                opacity="0.5"
              />
            );
          })}
          <circle cx="80" cy="100" r="48" fill="none" stroke="#00E5FF" strokeWidth="1.5" opacity="0.3" />
          <circle cx="80" cy="100" r="38" fill="none" stroke="#00E5FF" strokeWidth="0.8" opacity="0.2" />
          {/* Inner spokes */}
          {Array.from({ length: 6 }, (_, i) => {
            const angle = (i * 60 * Math.PI) / 180;
            return (
              <motion.line
                key={`spoke-lg-${i}`}
                x1={80 + Math.cos(angle) * 15}
                y1={100 + Math.sin(angle) * 15}
                x2={80 + Math.cos(angle) * 36}
                y2={100 + Math.sin(angle) * 36}
                stroke="#00E5FF"
                strokeWidth="1"
                opacity="0.25"
              />
            );
          })}
          <motion.circle
            cx="80" cy="100" r="12"
            fill="none" stroke="#00E5FF" strokeWidth="1.5" opacity="0.4"
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.circle
            cx="80" cy="100" r="4"
            fill="#00E5FF" opacity="0.5"
            animate={{ opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.g>

        {/* Small gear - counter-rotating */}
        <motion.g
          animate={{ rotate: -360 }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "155px 65px" }}
        >
          {Array.from({ length: 10 }, (_, i) => {
            const angle = (i * 36 * Math.PI) / 180;
            const innerR = 30;
            const outerR = 38;
            const toothWidth = 6;
            const cx = 155, cy = 65;
            const cosLeft = Math.cos(angle - toothWidth / innerR);
            const sinLeft = Math.sin(angle - toothWidth / innerR);
            const cosRight = Math.cos(angle + toothWidth / innerR);
            const sinRight = Math.sin(angle + toothWidth / innerR);
            return (
              <path
                key={`tooth-sm-${i}`}
                d={`M${cx + cosLeft * innerR},${cy + sinLeft * innerR} L${cx + cosLeft * outerR},${cy + sinLeft * outerR} L${cx + cosRight * outerR},${cy + sinRight * outerR} L${cx + cosRight * innerR},${cy + sinRight * innerR}`}
                fill="url(#gearGrad2)"
                opacity="0.5"
              />
            );
          })}
          <circle cx="155" cy="65" r="28" fill="none" stroke="#1f41bb" strokeWidth="1.5" opacity="0.3" />
          <circle cx="155" cy="65" r="20" fill="none" stroke="#1f41bb" strokeWidth="0.8" opacity="0.2" />
          {Array.from({ length: 4 }, (_, i) => {
            const angle = (i * 90 * Math.PI) / 180;
            return (
              <motion.line
                key={`spoke-sm-${i}`}
                x1={155 + Math.cos(angle) * 8}
                y1={65 + Math.sin(angle) * 8}
                x2={155 + Math.cos(angle) * 18}
                y2={65 + Math.sin(angle) * 18}
                stroke="#1f41bb"
                strokeWidth="1"
                opacity="0.25"
              />
            );
          })}
          <motion.circle
            cx="155" cy="65" r="6"
            fill="none" stroke="#1f41bb" strokeWidth="1.5" opacity="0.4"
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          />
          <motion.circle
            cx="155" cy="65" r="2.5"
            fill="#1f41bb" opacity="0.5"
            animate={{ opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          />
        </motion.g>

        {/* Tiny gear - bottom right */}
        <motion.g
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "175px 140px" }}
        >
          {Array.from({ length: 8 }, (_, i) => {
            const angle = (i * 45 * Math.PI) / 180;
            const innerR = 18;
            const outerR = 24;
            const toothWidth = 5;
            const cx = 175, cy = 140;
            const cosLeft = Math.cos(angle - toothWidth / innerR);
            const sinLeft = Math.sin(angle - toothWidth / innerR);
            const cosRight = Math.cos(angle + toothWidth / innerR);
            const sinRight = Math.sin(angle + toothWidth / innerR);
            return (
              <path
                key={`tooth-xs-${i}`}
                d={`M${cx + cosLeft * innerR},${cy + sinLeft * innerR} L${cx + cosLeft * outerR},${cy + sinLeft * outerR} L${cx + cosRight * outerR},${cy + sinRight * outerR} L${cx + cosRight * innerR},${cy + sinRight * innerR}`}
                fill="url(#gearGrad1)"
                opacity="0.4"
              />
            );
          })}
          <circle cx="175" cy="140" r="16" fill="none" stroke="#00E5FF" strokeWidth="1" opacity="0.25" />
          <motion.circle
            cx="175" cy="140" r="4"
            fill="none" stroke="#00E5FF" strokeWidth="1" opacity="0.4"
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 1 }}
          />
          <motion.circle
            cx="175" cy="140" r="1.5"
            fill="#00E5FF" opacity="0.5"
          />
        </motion.g>

        {/* Connection energy pulses between gears */}
        <motion.circle
          cx="0" cy="0" r="3" fill="#00E5FF"
          animate={{
            cx: [120, 135, 145],
            cy: [88, 78, 72],
            opacity: [0, 0.7, 0],
          }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.circle
          cx="0" cy="0" r="2" fill="#1f41bb"
          animate={{
            cx: [160, 168, 173],
            cy: [95, 110, 125],
            opacity: [0, 0.6, 0],
          }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
        />
      </svg>
    </div>
  );
}

// Animated terminal/code window
export function AnimatedTerminal({ className = "" }: { className?: string }) {
  const codeLines = [
    { width: 70, delay: 0 },
    { width: 55, delay: 0.3 },
    { width: 85, delay: 0.6 },
    { width: 40, delay: 0.9 },
    { width: 65, delay: 1.2 },
    { width: 50, delay: 1.5 },
    { width: 75, delay: 1.8 },
  ];

  return (
    <div className={`relative ${className}`}>
      <svg
        viewBox="0 0 200 180"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="termBorder" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00E5FF" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#1f41bb" stopOpacity="0.3" />
          </linearGradient>
        </defs>

        {/* Window frame */}
        <motion.rect
          x="10" y="10" width="180" height="160" rx="8" ry="8"
          fill="none" stroke="url(#termBorder)" strokeWidth="1.2"
          animate={{ opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
        />

        {/* Title bar */}
        <line x1="10" y1="35" x2="190" y2="35" stroke="#00E5FF" strokeWidth="0.5" opacity="0.2" />

        {/* Window dots */}
        <circle cx="26" cy="22" r="4" fill="#FF5F56" opacity="0.4" />
        <circle cx="40" cy="22" r="4" fill="#FFBD2E" opacity="0.4" />
        <circle cx="54" cy="22" r="4" fill="#27CA40" opacity="0.4" />

        {/* Title text placeholder */}
        <rect x="70" y="18" width="60" height="8" rx="2" fill="#00E5FF" opacity="0.1" />

        {/* Code lines with typing animation */}
        {codeLines.map((line, i) => (
          <g key={`code-${i}`}>
            {/* Line number */}
            <rect
              x="18"
              y={45 + i * 16}
              width="12"
              height="8"
              rx="1"
              fill="#1f41bb"
              opacity="0.2"
            />
            {/* Code content - animated width */}
            <motion.rect
              x="36"
              y={45 + i * 16}
              width={line.width}
              height="8"
              rx="2"
              fill={i % 3 === 0 ? "#00E5FF" : i % 3 === 1 ? "#1f41bb" : "#00E5FF"}
              initial={{ width: 0, opacity: 0 }}
              animate={{
                width: [0, line.width, line.width, 0],
                opacity: [0, 0.3, 0.3, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: line.delay,
                ease: "easeInOut",
              }}
            />
          </g>
        ))}

        {/* Blinking cursor */}
        <motion.rect
          x="36"
          y={45 + codeLines.length * 16}
          width="8"
          height="10"
          rx="1"
          fill="#00E5FF"
          animate={{ opacity: [0, 0.7, 0] }}
          transition={{ duration: 1, repeat: Infinity }}
        />

        {/* Floating bracket decorations */}
        <motion.text
          x="160" y="55"
          fill="#00E5FF" fontSize="14" fontFamily="monospace" opacity="0.15"
          animate={{ opacity: [0.1, 0.25, 0.1], y: [55, 52, 55] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          {"{"}
        </motion.text>
        <motion.text
          x="165" y="145"
          fill="#1f41bb" fontSize="14" fontFamily="monospace" opacity="0.15"
          animate={{ opacity: [0.1, 0.25, 0.1], y: [145, 148, 145] }}
          transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
        >
          {"}"}
        </motion.text>
      </svg>
    </div>
  );
}

// Animated pulsing signal / radar
export function AnimatedRadar({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <svg
        viewBox="0 0 200 200"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="radarGlow">
            <stop offset="0%" stopColor="#00E5FF" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#00E5FF" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Concentric rings */}
        {[20, 40, 60, 80].map((r, i) => (
          <motion.circle
            key={`ring-${i}`}
            cx="100" cy="100" r={r}
            fill="none" stroke="#00E5FF" strokeWidth="0.6"
            opacity="0.12"
            animate={{ opacity: [0.08, 0.18, 0.08] }}
            transition={{ duration: 3, repeat: Infinity, delay: i * 0.4 }}
          />
        ))}

        {/* Cross lines */}
        <line x1="100" y1="15" x2="100" y2="185" stroke="#00E5FF" strokeWidth="0.4" opacity="0.08" />
        <line x1="15" y1="100" x2="185" y2="100" stroke="#00E5FF" strokeWidth="0.4" opacity="0.08" />
        <line x1="40" y1="40" x2="160" y2="160" stroke="#00E5FF" strokeWidth="0.3" opacity="0.06" />
        <line x1="160" y1="40" x2="40" y2="160" stroke="#00E5FF" strokeWidth="0.3" opacity="0.06" />

        {/* Rotating sweep */}
        <motion.g
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "100px 100px" }}
        >
          <path
            d="M100,100 L100,20 A80,80 0 0,1 156,44 Z"
            fill="url(#radarGlow)"
            opacity="0.6"
          />
          <line x1="100" y1="100" x2="100" y2="20" stroke="#00E5FF" strokeWidth="1" opacity="0.4" />
        </motion.g>

        {/* Center dot */}
        <motion.circle
          cx="100" cy="100" r="4"
          fill="#00E5FF"
          animate={{ opacity: [0.5, 1, 0.5], r: [3, 5, 3] }}
          transition={{ duration: 2, repeat: Infinity }}
        />

        {/* Blips detected */}
        {[
          { cx: 130, cy: 70, delay: 0.5 },
          { cx: 65, cy: 85, delay: 1.8 },
          { cx: 140, cy: 130, delay: 3.2 },
          { cx: 80, cy: 140, delay: 2.5 },
          { cx: 115, cy: 55, delay: 1.0 },
        ].map((blip, i) => (
          <g key={`blip-${i}`}>
            <motion.circle
              cx={blip.cx} cy={blip.cy} r="8"
              fill="#00E5FF" opacity="0"
              animate={{
                opacity: [0, 0.15, 0.15, 0],
                r: [4, 10, 10, 4],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: blip.delay,
              }}
            />
            <motion.circle
              cx={blip.cx} cy={blip.cy} r="2.5"
              fill="#00E5FF"
              animate={{ opacity: [0, 0.8, 0.8, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: blip.delay,
              }}
            />
          </g>
        ))}
      </svg>
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
