"use client";

import { motion } from "framer-motion";
import AnimatedCounter from "../ui/AnimatedCounter";
import { HexGrid, AnimatedRadar } from "../ui/SVGDecorations";

const stats = [
  {
    value: 500,
    suffix: "+",
    label: "Proyectos entregados",
  },
  {
    value: 98,
    suffix: "%",
    label: "Clientes satisfechos",
  },
  {
    value: 10,
    suffix: "x",
    label: "Más rápido que lo tradicional",
  },
  {
    value: 24,
    suffix: "/7",
    label: "Soporte disponible",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function Stats() {
  return (
    <section className="relative bg-black py-16 lg:py-20 overflow-hidden">
      {/* Subtle hex pattern background */}
      <HexGrid opacity={0.02} />
      {/* Animated Radar decoration */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 w-48 h-48 opacity-25 pointer-events-none hidden lg:block">
        <AnimatedRadar />
      </div>
      <div className="absolute left-4 top-1/2 -translate-y-1/2 w-40 h-40 opacity-15 pointer-events-none hidden lg:block">
        <AnimatedRadar />
      </div>

      {/* Top/bottom gradient borders */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00E5FF]/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1f41bb]/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 lg:gap-12"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="text-center group"
            >
              <div className="relative inline-block mb-3">
                {/* Glow behind number */}
                <div className="absolute inset-0 blur-2xl bg-[#00E5FF]/10 rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <AnimatedCounter
                  target={stat.value}
                  suffix={stat.suffix}
                  duration={2 + index * 0.3}
                  className="relative text-3xl sm:text-4xl lg:text-5xl font-bold text-nahui-gradient font-heading"
                />
              </div>
              <p className="text-gray-400 text-sm font-body">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Pricing note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 lg:mt-12 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-1 sm:gap-3 px-5 sm:px-6 py-3 rounded-2xl sm:rounded-full border border-[#00E5FF]/20 bg-[#00E5FF]/5">
            <span className="text-[#00E5FF] font-bold text-base sm:text-lg font-heading">Proyectos desde $20,000 MXN</span>
            <span className="text-gray-400 text-xs sm:text-sm font-body">Pago flexible en parcialidades</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
