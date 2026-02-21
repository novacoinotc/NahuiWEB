"use client";

import { motion } from "framer-motion";
import { Globe, CreditCard, Languages, Clock } from "lucide-react";
import { HexGrid, AnimatedGlobe } from "../ui/SVGDecorations";

const badges = [
  {
    icon: Globe,
    title: "Servicio Internacional",
    description: "Clientes en México, LATAM, USA y Europa",
  },
  {
    icon: Languages,
    title: "Español e Inglés",
    description: "Comunicación clara en tu idioma preferido",
  },
  {
    icon: Clock,
    title: "Cualquier zona horaria",
    description: "Nos adaptamos a tu horario sin importar dónde estés",
  },
  {
    icon: CreditCard,
    title: "Pagos flexibles",
    description: "Transferencia, tarjeta o criptomonedas",
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
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function GlobalPresence() {
  return (
    <section className="relative bg-black py-16 lg:py-28 overflow-hidden">
      <HexGrid opacity={0.03} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left - Globe */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <AnimatedGlobe className="w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80" />
          </motion.div>

          {/* Right - Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-[#00E5FF] text-sm font-medium tracking-widest uppercase mb-4 block font-body">
                Presencia Global
              </span>
              <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4 font-heading">
                Desde Zapopan, Jalisco — creando para el mundo
              </h2>
              <p className="text-gray-400 mb-8 font-body">
                No importa dónde estés. Desde nuestro hub en Zapopan trabajamos con clientes en todo México, LATAM, USA y Europa,
                con comunicación bilingüe, flexibilidad horaria y múltiples opciones de pago.
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {badges.map((badge) => (
                <motion.div
                  key={badge.title}
                  variants={itemVariants}
                  className="group flex items-start gap-3 p-4 rounded-xl bg-[#1C1F26]/50 border border-white/5 hover:border-[#00E5FF]/30 transition-all duration-300"
                >
                  <div className="p-2 rounded-lg bg-[#00E5FF]/10 text-[#00E5FF] group-hover:bg-[#00E5FF]/20 transition-colors flex-shrink-0">
                    <badge.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-white text-sm font-semibold font-heading">
                      {badge.title}
                    </h3>
                    <p className="text-gray-500 text-xs font-body">{badge.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
