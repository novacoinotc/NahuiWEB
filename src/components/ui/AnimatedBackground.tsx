"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Floating particles component
export function FloatingParticles({ count = 50 }: { count?: number }) {
  const [particles, setParticles] = useState<Array<{
    id: number;
    x: number;
    y: number;
    size: number;
    duration: number;
    delay: number;
  }>>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 5,
    }));
    setParticles(newParticles);
  }, [count]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-[#00E5FF]"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

// Animated gradient orbs
export function AnimatedOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Main cyan orb */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(0,229,255,0.15) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
        animate={{
          x: ["-20%", "10%", "-20%"],
          y: ["-10%", "20%", "-10%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        initial={{ top: "10%", left: "60%" }}
      />

      {/* Blue orb */}
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(31,65,187,0.2) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
        animate={{
          x: ["20%", "-10%", "20%"],
          y: ["10%", "-20%", "10%"],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        initial={{ top: "50%", left: "10%" }}
      />

      {/* Secondary cyan orb */}
      <motion.div
        className="absolute w-[300px] h-[300px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(0,229,255,0.1) 0%, transparent 70%)",
          filter: "blur(50px)",
        }}
        animate={{
          x: ["-10%", "15%", "-10%"],
          y: ["15%", "-10%", "15%"],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        initial={{ top: "70%", left: "70%" }}
      />
    </div>
  );
}

// Network grid lines animation
export function NetworkGrid() {
  const horizontalLines = 8;
  const verticalLines = 12;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1f41bb" stopOpacity="0" />
            <stop offset="50%" stopColor="#00E5FF" stopOpacity="1" />
            <stop offset="100%" stopColor="#1f41bb" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="lineGradientV" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1f41bb" stopOpacity="0" />
            <stop offset="50%" stopColor="#00E5FF" stopOpacity="1" />
            <stop offset="100%" stopColor="#1f41bb" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Horizontal lines */}
        {Array.from({ length: horizontalLines }).map((_, i) => (
          <motion.line
            key={`h-${i}`}
            x1="0"
            y1={`${((i + 1) / (horizontalLines + 1)) * 100}%`}
            x2="100%"
            y2={`${((i + 1) / (horizontalLines + 1)) * 100}%`}
            stroke="url(#lineGradient)"
            strokeWidth="0.5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: [0, 0.5, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Vertical lines */}
        {Array.from({ length: verticalLines }).map((_, i) => (
          <motion.line
            key={`v-${i}`}
            x1={`${((i + 1) / (verticalLines + 1)) * 100}%`}
            y1="0"
            x2={`${((i + 1) / (verticalLines + 1)) * 100}%`}
            y2="100%"
            stroke="url(#lineGradientV)"
            strokeWidth="0.5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: [0, 0.3, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut",
            }}
          />
        ))}
      </svg>
    </div>
  );
}

// Animated connection nodes (neural network style)
export function NeuralNetwork() {
  const [nodes, setNodes] = useState<Array<{
    id: number;
    x: number;
    y: number;
  }>>([]);

  useEffect(() => {
    const newNodes = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
    }));
    setNodes(newNodes);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        {/* Connection lines between nodes */}
        {nodes.map((node, i) =>
          nodes.slice(i + 1).map((otherNode, j) => {
            const distance = Math.sqrt(
              Math.pow(node.x - otherNode.x, 2) + Math.pow(node.y - otherNode.y, 2)
            );
            if (distance < 35) {
              return (
                <motion.line
                  key={`line-${i}-${j}`}
                  x1={`${node.x}%`}
                  y1={`${node.y}%`}
                  x2={`${otherNode.x}%`}
                  y2={`${otherNode.y}%`}
                  stroke="#00E5FF"
                  strokeWidth="0.5"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0.1, 0.4, 0.1] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              );
            }
            return null;
          })
        )}

        {/* Nodes */}
        {nodes.map((node) => (
          <motion.circle
            key={node.id}
            cx={`${node.x}%`}
            cy={`${node.y}%`}
            r="3"
            fill="#00E5FF"
            initial={{ opacity: 0.3 }}
            animate={{
              opacity: [0.3, 0.8, 0.3],
              r: [3, 4, 3],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </svg>
    </div>
  );
}

// Scanning line effect
export function ScanLine() {
  return (
    <motion.div
      className="absolute left-0 right-0 h-[2px] pointer-events-none"
      style={{
        background: "linear-gradient(90deg, transparent, #00E5FF, transparent)",
        boxShadow: "0 0 20px #00E5FF, 0 0 40px #00E5FF",
      }}
      animate={{
        top: ["-5%", "105%"],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  );
}

// Combined animated background for Hero
export function HeroBackground() {
  return (
    <>
      <AnimatedOrbs />
      <FloatingParticles count={40} />
      <NetworkGrid />
    </>
  );
}

// Subtle background for other sections
export function SectionBackground() {
  return (
    <>
      <FloatingParticles count={20} />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00E5FF]/[0.02] to-transparent pointer-events-none" />
    </>
  );
}
