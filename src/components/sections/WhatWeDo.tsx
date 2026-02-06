"use client";

import { motion } from "framer-motion";
import { Smartphone, Globe, Database, Cpu, ShoppingCart, Users } from "lucide-react";
import { Card, IconBox, SectionHeader, FloatingParticles } from "../ui";
import TiltCard from "../ui/TiltCard";
import { CircuitLines, AnimatedTerminal } from "../ui/SVGDecorations";

const solutions = [
  {
    icon: Smartphone,
    title: "Apps Móviles",
    description:
      "iOS y Android. Desde apps de delivery hasta plataformas de servicios. Tu negocio en el bolsillo de tus clientes.",
    examples: "Uber, Rappi, Airbnb... pero para tu negocio",
  },
  {
    icon: Globe,
    title: "Plataformas Web",
    description:
      "Sistemas completos que funcionan desde cualquier navegador. Accede a tu negocio desde cualquier lugar del mundo.",
    examples: "Portales de clientes, dashboards, intranets",
  },
  {
    icon: Database,
    title: "Sistemas Empresariales",
    description:
      "Software que organiza tu empresa: inventarios, ventas, empleados, reportes. Todo conectado y automatizado.",
    examples: "ERPs, CRMs, sistemas de gestión",
  },
  {
    icon: Cpu,
    title: "Automatizaciones",
    description:
      "Deja que el software haga el trabajo repetitivo. Conectamos tus herramientas para que trabajen solas.",
    examples: "Integraciones, bots, flujos automáticos",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce a Medida",
    description:
      "Tiendas online que se adaptan a tu forma de vender, no al revés. Sin limitaciones de plantillas.",
    examples: "Marketplaces, tiendas B2B, suscripciones",
  },
  {
    icon: Users,
    title: "Plataformas de Servicios",
    description:
      "Conecta proveedores con clientes, gestiona citas, reservas o cualquier servicio que ofrezcas.",
    examples: "Booking, plataformas de freelancers, citas",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function WhatWeDo() {
  return (
    <section id="que-hacemos" className="relative bg-[#0B0E14] py-24 lg:py-32 overflow-hidden">
      <FloatingParticles count={20} />
      <CircuitLines />
      {/* Animated Terminal decoration */}
      <div className="absolute right-6 top-24 w-56 h-48 opacity-25 pointer-events-none hidden lg:block">
        <AnimatedTerminal />
      </div>
      <div className="absolute left-4 bottom-16 w-44 h-40 opacity-15 pointer-events-none hidden lg:block">
        <AnimatedTerminal />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            eyebrow="Qué podemos crear para ti"
            title="Si lo puedes imaginar, lo podemos construir"
            description="No importa qué tan compleja sea tu idea. Nuestro equipo de desarrolladores, potenciado por Inteligencia Artificial, puede crear cualquier tipo de software que tu negocio necesite."
            centered
          />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {solutions.map((solution) => (
            <motion.div key={solution.title} variants={itemVariants}>
              <TiltCard tiltAmount={8} className="h-full">
                <Card className="h-full group hover:shadow-[0_0_30px_rgba(0,229,255,0.1)] transition-all duration-500">
                  <div className="group-hover:scale-110 transition-transform duration-300 inline-block">
                    <IconBox icon={solution.icon} />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3 font-heading">
                    {solution.title}
                  </h3>
                  <p className="text-gray-400 font-body mb-4">{solution.description}</p>
                  <p className="text-sm text-[#00E5FF] font-body">{solution.examples}</p>
                </Card>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-gray-500 mt-12 font-body"
        >
          Y mucho más... Si no ves lo que buscas, pregúntanos. Probablemente ya lo hemos hecho.
        </motion.p>
      </div>
    </section>
  );
}
