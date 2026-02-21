"use client";

import { motion } from "framer-motion";
import { Clock, DollarSign, Brain, Headphones, Shield, Zap } from "lucide-react";
import { SectionHeader, FloatingParticles } from "../ui";
import { DataStream, AnimatedDNA } from "../ui/SVGDecorations";

const painPoints = [
  {
    icon: Clock,
    problem: "Meses de espera",
    solution: "Entrega en días o semanas",
    description: "Mientras otros tardan 6 meses, nosotros entregamos versiones funcionales en días gracias a nuestra metodología potenciada por IA.",
  },
  {
    icon: DollarSign,
    problem: "Costos desorbitados",
    solution: "Precios justos y transparentes",
    description: "Sin sorpresas. Te decimos exactamente cuánto cuesta antes de empezar. Y al ser más rápidos, cuesta menos.",
  },
  {
    icon: Brain,
    problem: "No te entienden",
    solution: "Hablamos tu idioma",
    description: "Nada de jerga técnica. Te explicamos todo de forma simple y te involucramos en cada paso del proceso.",
  },
  {
    icon: Headphones,
    problem: "Desaparecen después",
    solution: "Soporte continuo",
    description: "No te dejamos solo. Después de entregar, seguimos aquí para ajustes, mejoras y soporte técnico.",
  },
  {
    icon: Shield,
    problem: "Software genérico",
    solution: "100% a tu medida",
    description: "Nada de plantillas ni soluciones prefabricadas. Cada línea de código se escribe pensando en TU negocio.",
  },
  {
    icon: Zap,
    problem: "Tecnología obsoleta",
    solution: "Lo último en tecnología",
    description: "Usamos las herramientas más modernas del mercado. Tu software nace preparado para el futuro.",
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

export default function Differentiators() {
  return (
    <section id="diferenciadores" className="relative bg-black py-16 lg:py-32 overflow-hidden">
      <FloatingParticles count={15} />
      <DataStream />
      {/* Animated DNA decoration - right */}
      <div className="absolute right-8 top-12 w-32 h-80 opacity-30 pointer-events-none hidden lg:block">
        <AnimatedDNA />
      </div>
      {/* Animated DNA decoration - left */}
      <div className="absolute left-4 bottom-12 w-24 h-64 opacity-15 pointer-events-none hidden lg:block">
        <AnimatedDNA />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            eyebrow="Por qué elegirnos"
            title="Olvídate de los problemas del desarrollo tradicional"
            description="Sabemos lo frustrante que es buscar quién te haga un software. Por eso cambiamos las reglas del juego."
            centered
          />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
        >
          {painPoints.map((point) => (
            <motion.div
              key={point.problem}
              variants={itemVariants}
              className="relative bg-[#1C1F26] p-6 rounded-xl border border-white/5 hover:border-[#00E5FF]/30 transition-all duration-300 group hover:shadow-[0_0_25px_rgba(0,229,255,0.08)]"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-lg bg-[#00E5FF]/10 text-[#00E5FF] group-hover:bg-[#00E5FF]/20 transition-colors">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <point.icon className="w-6 h-6" />
                  </motion.div>
                </div>
                <div>
                  <p className="text-gray-500 text-sm line-through decoration-red-500/60 font-body">
                    {point.problem}
                  </p>
                  <p className="text-white font-semibold font-heading">{point.solution}</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm font-body">{point.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
