"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "../ui";

const standards = [
  {
    number: "01",
    title: "SEO tecnico perfecto",
    description:
      "Meta tags, structured data, sitemap, robots.txt, Core Web Vitals optimizados. Sin checklist generico: implementacion real.",
  },
  {
    number: "02",
    title: "Medicion profesional",
    description:
      "Google Analytics 4, eventos personalizados, embudos de conversion, pixeles de Meta y Google Ads configurados correctamente.",
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
      "Infraestructura que escala automaticamente. Sin servidores que mantener, sin limites artificiales, costos proporcionales al uso.",
  },
  {
    number: "05",
    title: "Performance extremo",
    description:
      "Lighthouse 95+ garantizado. Carga instantanea, experiencia fluida, mejor posicionamiento en Google.",
  },
  {
    number: "06",
    title: "Codigo limpio y documentado",
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
    <section className="bg-[#0B0E14] py-24 lg:py-32 line-pattern">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            eyebrow="Estandar Nahui"
            title="Lo que otros cobran extra, nosotros lo incluimos siempre"
            description="Cada proyecto que sale de Nahui Labs cumple con un estandar tecnico que garantiza rendimiento, medicion y escalabilidad desde el primer deploy."
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
