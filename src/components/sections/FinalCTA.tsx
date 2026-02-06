"use client";

import { motion } from "framer-motion";
import { Button, FloatingParticles, AnimatedOrbs } from "../ui";

export default function FinalCTA() {
  return (
    <section className="relative bg-[#0B0E14] py-32 overflow-hidden">
      {/* Animated background */}
      <AnimatedOrbs />
      <FloatingParticles count={25} />

      <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6 font-heading">
            ¿Listo para construir algo extraordinario?
          </h2>

          <p className="text-base text-gray-400 mb-10 font-body">
            Agenda una llamada de 30 minutos con nuestro equipo. Analizamos tu
            proyecto, definimos el alcance real y te mostramos exactamente cómo
            podemos ayudarte. Sin pitch de ventas. Sin compromiso.
          </p>

          <div className="relative inline-block">
            {/* Glow effect behind button */}
            <div className="absolute inset-0 bg-gradient-to-l from-[#1f41bb] to-[#00E5FF] blur-2xl opacity-20 rounded-xl" />

            <Button variant="primary" size="large" href="#contacto" className="relative glow-gradient">
              Agendar llamada estratégica
            </Button>
          </div>

          <p className="text-gray-500 text-sm mt-6 font-body">
            30 min · Sin compromiso · 100% estrategia
          </p>
        </motion.div>
      </div>
    </section>
  );
}
