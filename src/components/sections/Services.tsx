"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button, SectionHeader } from "../ui";

const services = [
  {
    tier: "STARTER",
    title: "Landing de conversion",
    description:
      "Pagina unica de alto impacto para lanzar, validar o vender un producto o servicio.",
    features: [
      "Diseno futurista personalizado",
      "Copywriting estrategico",
      "SEO tecnico completo",
      "Medicion y analytics configurados",
      "Formulario integrado con CRM",
      "Responsive perfecto",
      "Deploy en Vercel",
    ],
    cta: "Cotizar landing",
    highlighted: false,
  },
  {
    tier: "GROWTH",
    title: "Producto web completo",
    description:
      "Aplicacion web o sitio multi-pagina con funcionalidades a medida y arquitectura escalable.",
    features: [
      "Todo lo de Starter +",
      "Multiples paginas/vistas",
      "Base de datos serverless",
      "Autenticacion si aplica",
      "Panel de administracion",
      "API personalizada",
      "Integraciones avanzadas",
      "Arquitectura para escalar",
    ],
    cta: "Cotizar producto",
    highlighted: true,
  },
  {
    tier: "SCALE",
    title: "Plataforma a medida",
    description:
      "Sistemas complejos, marketplaces, SaaS, plataformas con logica de negocio avanzada.",
    features: [
      "Todo lo de Growth +",
      "Arquitectura de microservicios",
      "Multi-tenancy si aplica",
      "Integraciones enterprise",
      "Alta disponibilidad",
      "Soporte tecnico dedicado",
      "Roadmap de evolucion",
    ],
    cta: "Agendar llamada",
    highlighted: false,
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
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Services() {
  return (
    <section id="servicios" className="bg-black py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            eyebrow="Servicios"
            title="Productos digitales para cada etapa de tu empresa"
            centered
          />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.tier}
              variants={itemVariants}
              className={`relative rounded-2xl p-8 ${
                service.highlighted
                  ? "bg-[#0B0E14] border-2 border-transparent bg-clip-padding"
                  : "bg-[#1C1F26] border border-white/10"
              }`}
              style={
                service.highlighted
                  ? {
                      backgroundImage:
                        "linear-gradient(#0B0E14, #0B0E14), linear-gradient(to left, #1f41bb, #00E5FF)",
                      backgroundOrigin: "border-box",
                      backgroundClip: "padding-box, border-box",
                    }
                  : undefined
              }
            >
              {service.highlighted && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-l from-[#1f41bb] to-[#00E5FF] text-black px-4 py-1 rounded-full text-sm font-semibold font-body">
                  Mas popular
                </span>
              )}

              <span className="text-[#00E5FF] text-xs tracking-widest uppercase font-medium font-body">
                {service.tier}
              </span>

              <h3 className="text-xl font-bold text-white mt-2 mb-3 font-heading">
                {service.title}
              </h3>

              <p className="text-gray-400 mb-6 font-body">{service.description}</p>

              <ul className="space-y-3 mb-8">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#00E5FF] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm font-body">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={service.highlighted ? "primary" : "secondary"}
                className="w-full"
              >
                {service.cta} →
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
