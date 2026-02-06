"use client";

import { motion } from "framer-motion";
import { MessageSquare, FileText, Code, Rocket } from "lucide-react";
import { SectionHeader, ScanLine, FloatingParticles } from "../ui";
import { GlowingOrb } from "../ui/SVGDecorations";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Cuéntanos tu idea",
    description:
      "Una llamada de 30 minutos donde nos explicas qué necesitas. Sin tecnicismos, solo cuéntanos tu problema y nosotros lo traducimos a solución.",
  },
  {
    number: "02",
    icon: FileText,
    title: "Te enviamos propuesta",
    description:
      "En 24-48 horas recibirás un documento claro con: qué vamos a construir, cuánto cuesta y cuándo lo tendrás listo. Sin letras pequeñas.",
  },
  {
    number: "03",
    icon: Code,
    title: "Construimos tu software",
    description:
      "Nuestro equipo + IA se ponen a trabajar. Te mostramos avances constantemente para que veas cómo cobra vida tu idea.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Lanzamos juntos",
    description:
      "Tu software sale al mundo. Te enseñamos a usarlo, te damos soporte y nos aseguramos de que todo funcione perfecto.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

export default function Process() {
  return (
    <section id="proceso" className="relative bg-[#0B0E14] py-24 lg:py-32 overflow-hidden">
      {/* Animated background elements */}
      <ScanLine />
      <FloatingParticles count={15} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            eyebrow="Cómo funciona"
            title="De tu idea a software funcionando en 4 pasos"
            description="Un proceso simple y transparente. Tú siempre sabes en qué etapa estamos y qué sigue."
            centered
          />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative"
        >
          {/* Animated timeline line for desktop */}
          <div className="hidden lg:block absolute top-24 left-0 right-0">
            <svg className="w-full h-2" preserveAspectRatio="none">
              <defs>
                <linearGradient id="timelineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="transparent" />
                  <stop offset="20%" stopColor="#00E5FF" stopOpacity="0.4" />
                  <stop offset="80%" stopColor="#1f41bb" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="transparent" />
                </linearGradient>
              </defs>
              <motion.line
                x1="0"
                y1="1"
                x2="100%"
                y2="1"
                stroke="url(#timelineGrad)"
                strokeWidth="1"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
            </svg>
            {/* Energy pulse traveling along the line */}
            <motion.div
              className="absolute top-0 w-20 h-[2px]"
              style={{
                background: "linear-gradient(90deg, transparent, #00E5FF, transparent)",
                boxShadow: "0 0 10px #00E5FF",
              }}
              animate={{ left: ["-5%", "105%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 2 }}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                variants={itemVariants}
                className="relative text-center lg:text-left"
              >
                {/* Icon container with GlowingOrb */}
                <div className="flex justify-center lg:justify-start mb-6">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#1f41bb]/20 to-[#00E5FF]/20 flex items-center justify-center border border-[#00E5FF]/20">
                      <step.icon className="w-8 h-8 text-[#00E5FF]" />
                    </div>
                    <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gradient-to-l from-[#1f41bb] to-[#00E5FF] flex items-center justify-center text-xs font-bold text-black font-heading">
                      {step.number}
                    </span>
                    <div className="absolute -bottom-1 -left-1">
                      <GlowingOrb size={16} />
                    </div>
                  </div>
                </div>

                {/* Mobile connector line */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden absolute top-20 left-1/2 w-px h-8 bg-gradient-to-b from-[#00E5FF]/30 to-transparent" />
                )}

                <h3 className="text-lg font-semibold text-white mb-3 font-heading">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-sm font-body">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
