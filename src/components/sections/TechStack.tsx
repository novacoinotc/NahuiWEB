"use client";

import { motion } from "framer-motion";
import { SectionHeader, NeuralNetwork } from "../ui";

const techStack = [
  {
    name: "Vercel",
    description: "Frontend deployment. Performance extremo, edge computing, previews automáticos.",
    logo: (
      <svg viewBox="0 0 76 65" fill="currentColor" className="w-10 h-10">
        <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" />
      </svg>
    ),
  },
  {
    name: "Railway",
    description: "Backend moderno. Deploy instantáneo, escalado automático, zero DevOps.",
    logo: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
        <path d="M.113 10.27A.963.963 0 0 0 0 10.753v2.494c0 .534.432.966.966.966h3.08a20.32 20.32 0 0 0 .474-3.944zm4.96 0c-.027 1.378-.174 2.704-.44 3.944h3.268c.534 0 .966-.432.966-.966v-2.494a.95.95 0 0 0-.113-.483zm4.76 0a.963.963 0 0 0-.113.483v2.494c0 .534.432.966.966.966h3.08a20.32 20.32 0 0 0 .474-3.944zm4.96 0c-.027 1.378-.174 2.704-.44 3.944h3.268c.534 0 .966-.432.966-.966v-2.494a.95.95 0 0 0-.113-.483zm4.76 0a.963.963 0 0 0-.113.483v2.494c0 .534.432.966.966.966h3.08a20.32 20.32 0 0 0 .474-3.944zm4.96 0c-.027 1.378-.174 2.704-.44 3.944h2.701c.534 0 .966-.432.966-.966v-2.494c0-.17-.04-.333-.113-.483z" />
      </svg>
    ),
  },
  {
    name: "Neon",
    description: "Base de datos serverless. PostgreSQL que escala a cero y crece sin límites.",
    logo: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20z" />
        <path d="M12 5v14M5 12h14" strokeWidth="2" stroke="currentColor" fill="none" />
      </svg>
    ),
  },
  {
    name: "AWS",
    description: "Infraestructura enterprise. Cuando el proyecto requiere servicios cloud avanzados.",
    logo: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
        <path d="M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335a.383.383 0 0 1-.208.072c-.08 0-.16-.04-.239-.112a2.47 2.47 0 0 1-.287-.375 6.18 6.18 0 0 1-.248-.471c-.622.734-1.405 1.101-2.347 1.101-.67 0-1.205-.191-1.596-.574-.391-.384-.59-.894-.59-1.533 0-.678.239-1.23.726-1.644.487-.415 1.133-.623 1.955-.623.272 0 .551.024.846.064.296.04.6.104.918.176v-.583c0-.607-.127-1.03-.375-1.277-.255-.248-.686-.367-1.3-.367-.28 0-.568.031-.863.103-.295.072-.583.16-.862.272a2.287 2.287 0 0 1-.28.104.488.488 0 0 1-.127.023c-.112 0-.168-.08-.168-.247v-.391c0-.128.016-.224.056-.28a.597.597 0 0 1 .224-.167c.279-.144.614-.264 1.005-.36a4.84 4.84 0 0 1 1.246-.151c.95 0 1.644.216 2.091.647.439.43.662 1.085.662 1.963v2.586zm-3.24 1.214c.263 0 .534-.048.822-.144.287-.096.543-.271.758-.51.128-.152.224-.32.272-.512.047-.191.08-.423.08-.694v-.335a6.66 6.66 0 0 0-.735-.136 6.02 6.02 0 0 0-.75-.048c-.535 0-.926.104-1.19.32-.263.215-.39.518-.39.917 0 .375.095.655.295.846.191.2.47.296.838.296zm6.41.862c-.144 0-.24-.024-.304-.08-.064-.048-.12-.16-.168-.311L7.586 5.55a1.398 1.398 0 0 1-.072-.32c0-.128.064-.2.191-.2h.783c.151 0 .255.025.31.08.065.048.113.16.16.312l1.342 5.284 1.245-5.284c.04-.16.088-.264.151-.312a.549.549 0 0 1 .32-.08h.638c.152 0 .256.025.32.08.063.048.12.16.151.312l1.261 5.348 1.381-5.348c.048-.16.104-.264.16-.312a.52.52 0 0 1 .311-.08h.743c.127 0 .2.065.2.2 0 .04-.009.08-.017.128a1.137 1.137 0 0 1-.056.2l-1.923 6.17c-.048.16-.104.263-.168.311a.51.51 0 0 1-.303.08h-.687c-.151 0-.255-.024-.32-.08-.063-.056-.119-.16-.15-.32l-1.238-5.148-1.23 5.14c-.04.16-.087.264-.15.32-.065.056-.177.08-.32.08zm10.256.215c-.415 0-.83-.048-1.229-.143-.399-.096-.71-.2-.918-.32-.128-.071-.215-.151-.247-.223a.563.563 0 0 1-.048-.224v-.407c0-.167.064-.247.183-.247.048 0 .096.008.144.024.048.016.12.048.2.08.271.12.566.215.878.279.319.064.63.096.95.096.502 0 .894-.088 1.165-.264a.86.86 0 0 0 .415-.758.777.777 0 0 0-.215-.559c-.144-.151-.416-.287-.807-.414l-1.157-.36c-.583-.183-1.014-.454-1.277-.813a1.902 1.902 0 0 1-.4-1.158c0-.335.073-.63.216-.886.144-.255.335-.479.575-.654.24-.184.51-.32.83-.415.32-.096.655-.136 1.006-.136.175 0 .359.008.535.032.183.024.35.056.518.088.16.04.312.08.455.127.144.048.256.096.336.144a.69.69 0 0 1 .24.2.43.43 0 0 1 .071.263v.375c0 .168-.064.256-.184.256a.83.83 0 0 1-.303-.096 3.652 3.652 0 0 0-1.532-.311c-.455 0-.815.071-1.062.223-.248.152-.375.383-.375.71 0 .224.08.416.24.567.159.152.454.304.877.44l1.134.358c.574.184.99.44 1.237.767.247.327.367.702.367 1.117 0 .343-.072.655-.207.926-.144.272-.336.511-.583.703-.248.2-.543.343-.886.447-.36.111-.734.167-1.142.167z" />
      </svg>
    ),
  },
  {
    name: "Google Analytics 4",
    description: "Medición profesional. Eventos, embudos, audiencias, todo configurado correctamente.",
    logo: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
        <path d="M22.84 2.998v18.004c0 1.103-.895 1.998-1.998 1.998H3.158c-1.103 0-1.998-.895-1.998-1.998V2.998C1.16 1.895 2.055 1 3.158 1h17.684c1.103 0 1.998.895 1.998 1.998zM12 20.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm6-2.5V7a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1zm-8 0v-7a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1z" />
      </svg>
    ),
  },
  {
    name: "Google Ads",
    description: "Adquisición. Tracking de conversiones, remarketing, integración completa.",
    logo: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
        <path d="M12.24 8.14L5.28 21.36C4.93 22.05 4.09 22.32 3.39 21.97L1.48 21.05C0.79 20.7 0.52 19.86 0.87 19.17L7.84 5.95C8.19 5.26 9.03 4.99 9.72 5.34L11.63 6.26C12.33 6.61 12.59 7.45 12.24 8.14zM22.13 15.67L18.11 8.03C17.76 7.34 17.08 6.87 16.3 6.87C15.52 6.87 14.84 7.34 14.49 8.03L11.05 14.49L12.27 16.95L14.76 12.05L18.78 19.69C18.93 19.94 18.86 20.27 18.61 20.42L17.11 21.32C16.86 21.47 16.53 21.4 16.38 21.15L14.3 17.42L11.75 22.45C11.4 23.14 10.56 23.41 9.87 23.06L8.49 22.39L15.11 10.18L17.44 14.67H22.13V15.67z" />
      </svg>
    ),
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
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
};

export default function TechStack() {
  return (
    <section className="relative bg-[#0B0E14] py-24 lg:py-32 overflow-hidden">
      {/* Neural network background */}
      <NeuralNetwork />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            eyebrow="Stack tecnológico"
            title="Infraestructura de clase mundial"
            description="Las mismas herramientas que usan Airbnb, Notion y las startups más exitosas del mundo. No por seguir tendencias: porque son objetivamente superiores."
            centered
          />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
        >
          {techStack.map((tech) => (
            <motion.div
              key={tech.name}
              variants={itemVariants}
              className="group bg-[#1C1F26] p-6 rounded-xl text-center hover:border hover:border-[#00E5FF]/30 transition-all duration-300"
            >
              <div className="flex justify-center mb-4 text-white group-hover:text-[#00E5FF] transition-colors duration-300">
                {tech.logo}
              </div>
              <h3 className="text-white font-medium mb-2 font-heading">{tech.name}</h3>
              <p className="text-gray-500 text-xs hidden lg:block font-body">{tech.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
