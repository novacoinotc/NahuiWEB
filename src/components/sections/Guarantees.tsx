"use client";

import { motion } from "framer-motion";
import { Shield, RefreshCcw, Clock, FileCheck, Headphones, Lock } from "lucide-react";
import { SectionHeader, FloatingParticles } from "../ui";
import { HexGrid, AnimatedShield } from "../ui/SVGDecorations";

const guarantees = [
  {
    icon: Shield,
    title: "Garantía de satisfacción",
    description:
      "Si no estás 100% satisfecho con el resultado, trabajamos hasta que lo estés. Sin costos adicionales.",
  },
  {
    icon: RefreshCcw,
    title: "Revisiones ilimitadas",
    description:
      "Durante el desarrollo, puedes pedir todos los cambios que necesites. Tu visión es nuestra prioridad.",
  },
  {
    icon: Clock,
    title: "Entrega a tiempo",
    description:
      "Nos comprometemos con fechas reales y las cumplimos. Si nos retrasamos, te compensamos.",
  },
  {
    icon: FileCheck,
    title: "Código tuyo, siempre",
    description:
      "Todo el código fuente te pertenece. Sin ataduras, sin licencias ocultas, sin sorpresas.",
  },
  {
    icon: Headphones,
    title: "Soporte post-lanzamiento",
    description:
      "30 días de soporte gratuito después de entregar. Resolvemos cualquier bug o ajuste menor.",
  },
  {
    icon: Lock,
    title: "Confidencialidad total",
    description:
      "Firmamos NDA si lo necesitas. Tu idea está segura con nosotros.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// Animated check icon
function AnimatedCheck() {
  return (
    <motion.svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      className="absolute -top-1 -right-1 text-[#00E5FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
    >
      <motion.circle
        cx="12"
        cy="12"
        r="10"
        stroke="#00E5FF"
        strokeWidth="1.5"
        fill="none"
        opacity="0.3"
      />
      <motion.path
        d="M8 12L11 15L16 9"
        stroke="#00E5FF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      />
    </motion.svg>
  );
}

export default function Guarantees() {
  return (
    <section className="relative bg-[#0B0E14] py-16 lg:py-32 overflow-hidden">
      <FloatingParticles count={12} />
      <HexGrid opacity={0.03} />
      {/* Animated Shield decoration - left */}
      <div className="absolute left-6 top-1/3 w-64 h-72 opacity-25 pointer-events-none hidden lg:block">
        <AnimatedShield />
      </div>
      {/* Animated Shield decoration - right */}
      <div className="absolute right-6 bottom-24 w-48 h-56 opacity-15 pointer-events-none hidden lg:block" style={{ transform: "scaleX(-1)" }}>
        <AnimatedShield />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            eyebrow="Nuestras garantías"
            title="Trabajamos para que tengas cero riesgos"
            description="Entendemos que confiar tu proyecto a alguien nuevo es una decisión importante. Por eso te damos garantías reales, no solo promesas."
            centered
          />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        >
          {guarantees.map((guarantee) => (
            <motion.div
              key={guarantee.title}
              variants={itemVariants}
              className="relative bg-transparent border border-white/10 p-6 rounded-xl group hover:border-[#00E5FF]/30 hover:shadow-[0_0_25px_rgba(0,229,255,0.08)] transition-all duration-300"
            >
              <AnimatedCheck />
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-gradient-to-br from-[#1f41bb]/20 to-[#00E5FF]/20 text-[#00E5FF] flex-shrink-0 group-hover:shadow-[0_0_15px_rgba(0,229,255,0.2)] transition-shadow duration-300">
                  <guarantee.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-white mb-2 font-heading">
                    {guarantee.title}
                  </h3>
                  <p className="text-sm text-gray-400 font-body">{guarantee.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
