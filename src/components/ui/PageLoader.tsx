"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {/* Animated logo container */}
          <div className="relative flex flex-col items-center gap-6">
            {/* Glowing ring */}
            <motion.div
              className="absolute w-28 h-28 rounded-full"
              style={{
                border: "2px solid transparent",
                borderTopColor: "#00E5FF",
                borderRightColor: "#1f41bb",
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            />

            {/* Second ring */}
            <motion.div
              className="absolute w-20 h-20 rounded-full"
              style={{
                border: "1px solid transparent",
                borderBottomColor: "#00E5FF",
                borderLeftColor: "#1f41bb",
              }}
              animate={{ rotate: -360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />

            {/* Center logo pulse */}
            <motion.div
              className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1f41bb] to-[#00E5FF] flex items-center justify-center"
              animate={{
                scale: [1, 1.1, 1],
                boxShadow: [
                  "0 0 20px rgba(0, 229, 255, 0.2)",
                  "0 0 40px rgba(0, 229, 255, 0.4)",
                  "0 0 20px rgba(0, 229, 255, 0.2)",
                ],
              }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="black" strokeWidth="2" strokeLinejoin="round" />
                <path d="M2 17L12 22L22 17" stroke="black" strokeWidth="2" strokeLinejoin="round" />
                <path d="M2 12L12 17L22 12" stroke="black" strokeWidth="2" strokeLinejoin="round" />
              </svg>
            </motion.div>

            {/* Brand name */}
            <motion.div
              className="mt-12 flex items-center gap-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {"NAHUI LABS".split("").map((char, i) => (
                <motion.span
                  key={i}
                  className="text-white font-bold text-lg font-heading tracking-widest"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.05, duration: 0.3 }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.div>

            {/* Loading bar */}
            <div className="w-48 h-[2px] bg-[#1C1F26] rounded-full overflow-hidden mt-2">
              <motion.div
                className="h-full rounded-full"
                style={{ background: "linear-gradient(to right, #1f41bb, #00E5FF)" }}
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.8, ease: "easeInOut" }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
