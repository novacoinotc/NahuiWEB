"use client";

import { motion, AnimatePresence, useScroll } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";

export default function BackToTop() {
  const [show, setShow] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    return scrollYProgress.on("change", (v) => {
      setShow(v > 0.15);
    });
  }, [scrollYProgress]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-[#1C1F26] border border-[#00E5FF]/30 flex items-center justify-center text-[#00E5FF] hover:bg-[#00E5FF] hover:text-black transition-colors duration-300 shadow-[0_0_20px_rgba(0,229,255,0.15)] cursor-pointer"
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.8 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Volver arriba"
        >
          <ArrowUp size={20} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
