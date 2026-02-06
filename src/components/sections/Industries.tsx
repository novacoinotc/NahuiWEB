"use client";

import { motion } from "framer-motion";
import {
  Store,
  Stethoscope,
  GraduationCap,
  Building2,
  Truck,
  Utensils,
  Briefcase,
  Home
} from "lucide-react";
import { SectionHeader, NeuralNetwork } from "../ui";
import CursorNetwork from "../ui/CursorNetwork";

const industries = [
  {
    icon: Store,
    name: "Retail y Comercio",
    examples: "Tiendas online, inventarios, puntos de venta",
  },
  {
    icon: Stethoscope,
    name: "Salud",
    examples: "Citas médicas, expedientes, telemedicina",
  },
  {
    icon: GraduationCap,
    name: "Educación",
    examples: "Plataformas de cursos, gestión escolar",
  },
  {
    icon: Building2,
    name: "Inmobiliario",
    examples: "Portales de propiedades, CRM inmobiliario",
  },
  {
    icon: Truck,
    name: "Logística",
    examples: "Tracking, rutas, gestión de flotas",
  },
  {
    icon: Utensils,
    name: "Restaurantes",
    examples: "Pedidos online, reservas, delivery",
  },
  {
    icon: Briefcase,
    name: "Servicios Profesionales",
    examples: "Facturación, proyectos, clientes",
  },
  {
    icon: Home,
    name: "Servicios para el Hogar",
    examples: "Citas, cotizaciones, seguimiento",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
};

export default function Industries() {
  return (
    <section className="relative bg-black py-24 lg:py-32 overflow-hidden">
      <NeuralNetwork />
      <div className="absolute inset-0 opacity-30" style={{ pointerEvents: "auto" }}>
        <CursorNetwork intensity="light" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            eyebrow="Industrias"
            title="Software para cualquier tipo de negocio"
            description="No importa tu industria. Si tienes un proceso que se puede mejorar con tecnología, podemos ayudarte."
            centered
          />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {industries.map((industry) => (
            <motion.div
              key={industry.name}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -4 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="group bg-[#1C1F26]/50 backdrop-blur-sm p-6 rounded-xl border border-white/5 hover:border-[#00E5FF]/40 hover:bg-[#1C1F26] hover:shadow-[0_0_30px_rgba(0,229,255,0.12)] transition-all duration-300 text-center"
            >
              <div className="inline-flex p-3 rounded-lg bg-[#00E5FF]/10 text-[#00E5FF] mb-4 group-hover:scale-110 group-hover:bg-[#00E5FF]/20 transition-all duration-300">
                <industry.icon className="w-6 h-6" />
              </div>
              <h3 className="text-white font-medium mb-2 font-heading text-sm">{industry.name}</h3>
              <p className="text-gray-500 text-xs font-body">{industry.examples}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center text-gray-400 mt-12 font-body"
        >
          ¿No ves tu industria? <span className="text-[#00E5FF]">Pregúntanos</span> — probablemente ya hemos trabajado en algo similar.
        </motion.p>
      </div>
    </section>
  );
}
