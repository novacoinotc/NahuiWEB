"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "../ui";
import { AnimatedCPU } from "../ui/SVGDecorations";

const standards = [
  {
    number: "01",
    title: "Tu negocio aparece en Google",
    description:
      "Configuramos todo para que tus clientes te encuentren fácilmente al buscar en internet. Desde el primer día, tu sitio está optimizado para aparecer en los primeros resultados.",
  },
  {
    number: "02",
    title: "Sabrás exactamente qué funciona",
    description:
      "Instalamos herramientas de medición para que veas cuántas personas visitan tu sitio, de dónde vienen y qué hacen. Datos reales para tomar mejores decisiones.",
  },
  {
    number: "03",
    title: "Todo conectado y automático",
    description:
      "WhatsApp, correos automáticos, agenda de citas, tu sistema de clientes... todo integrado para que no pierdas tiempo en tareas repetitivas.",
  },
  {
    number: "04",
    title: "Crece sin preocuparte",
    description:
      "Tu sistema se adapta solo conforme crece tu negocio. Si hoy tienes 10 clientes y mañana 10,000, todo sigue funcionando igual de rápido.",
  },
  {
    number: "05",
    title: "Velocidad que enamora",
    description:
      "Tu sitio carga al instante. Nada de pantallas en blanco ni esperas eternas. Tus clientes tienen la mejor experiencia desde el primer clic.",
  },
  {
    number: "06",
    title: "Tu proyecto, tu control",
    description:
      "Te entregamos un proyecto profesional y organizado. Si en el futuro quieres hacer cambios con otro equipo, todo estará listo para continuar sin problemas.",
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
    <section className="relative bg-[#0B0E14] py-16 lg:py-32 line-pattern overflow-hidden">
      {/* Animated CPU decoration - right side */}
      <div className="absolute right-4 top-1/4 w-72 h-72 opacity-30 pointer-events-none hidden lg:block">
        <AnimatedCPU />
      </div>
      {/* Animated CPU decoration - left side (mirrored) */}
      <div className="absolute left-4 bottom-24 w-56 h-56 opacity-20 pointer-events-none hidden lg:block" style={{ transform: "scaleX(-1)" }}>
        <AnimatedCPU />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            eyebrow="Estándar Nahui"
            title="Lo que otros cobran extra, nosotros lo incluimos siempre"
            description="Cada proyecto que sale de Nahui Labs viene completo desde el inicio. No hay sorpresas ni costos ocultos: todo lo que tu negocio necesita para funcionar bien, ya está incluido."
          />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
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
