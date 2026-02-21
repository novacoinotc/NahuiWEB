"use client";

import { motion } from "framer-motion";
import { Star, TrendingUp, Clock, MessageCircle } from "lucide-react";
import { SectionHeader } from "../ui";

const testimonials = [
  {
    name: "María González",
    role: "Directora General",
    company: "Grupo Gastronómico MX",
    avatar: "MG",
    icon: TrendingUp,
    highlight: "+40% en ventas",
    quote:
      "Antes llevábamos todo en Excel: inventario, nómina, proveedores... era un caos. Nahui nos hizo un sistema donde ahora veo las ventas de mis 3 sucursales en tiempo real, los meseros toman pedidos desde una tablet y el inventario se actualiza solo. En 3 meses incrementamos ventas un 40% porque dejamos de perder tiempo en papeleo.",
    metric: "De 3 horas diarias en Excel a 15 minutos revisando su dashboard",
  },
  {
    name: "Carlos Ruiz",
    role: "Fundador",
    company: "EnvíoRápido Logistics",
    avatar: "CR",
    icon: Clock,
    highlight: "80% menos errores",
    quote:
      "Teníamos problemas serios de comunicación entre bodega, repartidores y clientes. Se perdían pedidos, llegaban tarde, los clientes se quejaban. Nos construyeron una plataforma donde todo se rastrea en automático: el cliente ve dónde va su paquete, el repartidor recibe rutas optimizadas y yo veo todo desde mi celular. Los errores bajaron un 80%.",
    metric: "De 15 quejas diarias a máximo 2-3 por semana",
  },
  {
    name: "Ana Martínez",
    role: "Contadora y Socia",
    company: "Martínez & Asociados Contadores",
    avatar: "AM",
    icon: MessageCircle,
    highlight: "3x más clientes",
    quote:
      "Como despacho contable manejábamos todo por WhatsApp y correo: facturas, declaraciones, documentos... se nos perdían archivos y los clientes se desesperaban. Ahora cada cliente tiene su portal donde sube documentos, ve el estatus de sus trámites y recibe alertas automáticas de fechas límite. Triplicamos nuestra cartera de clientes sin contratar más personal.",
    metric: "De 45 clientes manuales a 140+ con el mismo equipo",
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
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function Testimonials() {
  return (
    <section className="relative bg-black py-24 lg:py-32 overflow-hidden">
      {/* Gradient borders */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00E5FF]/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1f41bb]/20 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            eyebrow="Historias reales"
            title="Empresas que transformaron su operación"
            description="No solo hacemos software bonito. Resolvemos problemas reales que impactan directamente en tus ingresos, tu tiempo y la satisfacción de tus clientes."
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
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.name}
              variants={itemVariants}
              className="relative bg-[#1C1F26] border border-white/10 rounded-2xl p-8 hover:border-[#00E5FF]/30 transition-all duration-300 flex flex-col"
            >
              {/* Highlight badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/20 mb-6 self-start">
                <testimonial.icon className="w-4 h-4 text-[#00E5FF]" />
                <span className="text-[#00E5FF] text-sm font-semibold font-body">{testimonial.highlight}</span>
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#00E5FF] text-[#00E5FF]" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-300 text-sm leading-relaxed mb-6 font-body flex-grow">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Metric callout */}
              <div className="px-4 py-3 rounded-lg bg-[#00E5FF]/5 border border-[#00E5FF]/10 mb-6">
                <p className="text-[#00E5FF] text-xs font-medium font-body">{testimonial.metric}</p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 mt-auto">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#1f41bb] to-[#00E5FF] flex items-center justify-center">
                  <span className="text-white text-sm font-bold font-heading">{testimonial.avatar}</span>
                </div>
                <div>
                  <p className="text-white text-sm font-semibold font-heading">{testimonial.name}</p>
                  <p className="text-gray-400 text-xs font-body">{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
