"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "../ui";
import { AnimatedCPU } from "../ui/SVGDecorations";

const standards = [
  {
    number: "01",
    title: "SEO técnico perfecto",
    description:
      "Meta tags, structured data, sitemap, robots.txt, Core Web Vitals optimizados. Sin checklist genérico: implementación real.",
  },
  {
    number: "02",
    title: "Medición profesional",
    description:
      "Google Analytics 4, eventos personalizados, embudos de conversión, píxeles de Meta y Google Ads configurados correctamente.",
  },
  {
    number: "03",
    title: "Integraciones inteligentes",
    description:
      "CRM, WhatsApp Business, calendario de citas, email automation. Lo que necesites para operar, integrado desde el inicio.",
  },
  {
    number: "04",
    title: "Arquitectura serverless",
    description:
      "Infraestructura que escala automáticamente. Sin servidores que mantener, sin límites artificiales, costos proporcionales al uso.",
  },
  {
    number: "05",
    title: "Performance extremo",
    description:
      "Lighthouse 95+ garantizado. Carga instantánea, experiencia fluida, mejor posicionamiento en Google.",
  },
  {
    number: "06",
    title: "Código limpio y documentado",
    description:
      "Arquitectura profesional lista para que tu equipo interno o cualquier desarrollador pueda continuar el proyecto.",
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

export default function NahuiStandard() {
  return (
    <section className="relative bg-[#0B0E14] py-24 lg:py-32 line-pattern overflow-hidden">
      {/* Animated CPU decoration - right side */}
      <div className="absolute right-4 top-1/4 w-72 h-72 opacity-30 pointer-events-none hidden lg:block">
        <AnimatedCPU />
      </div>
      {/* Animated CPU decoration - left side (mirrored) */}
      <div className="absolute left-4 bottom-24 w-56 h-56 opacity-20 pointer-events-none hidden lg:block" style={{ transform: "scaleX(-1)" }}>
        <AnimatedCPU />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            eyebrow="Estándar Nahui"
            title="Lo que otros cobran extra, nosotros lo incluimos siempre"
            description="Cada proyecto que sale de Nahui Labs cumple con un estándar técnico que garantiza rendimiento, medición y escalabilidad desde el primer deploy."
          />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {standards.map((standard) => (
            <motion.div
              key={standard.number}
              variants={itemVariants}
              className="relative bg-transparent border border-white/10 p-6 rounded-xl group hover:border-[#00E5FF]/30 transition-all duration-300"
            >
              <span className="absolute -top-2 -left-2 text-3xl font-bold text-[#00E5FF] opacity-20 group-hover:opacity-40 transition-opacity font-heading">
                {standard.number}
              </span>
              <div className="relative pt-4">
                <h3 className="text-base font-semibold text-white mb-2 font-heading">
                  {standard.title}
                </h3>
                <p className="text-sm text-gray-400 font-body">{standard.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
