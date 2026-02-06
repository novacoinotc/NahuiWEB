"use client";

import { motion } from "framer-motion";
import { Send, CheckCircle, Clock, Shield, Headphones, Bitcoin } from "lucide-react";
import { Button, AnimatedOrbs, FloatingParticles } from "../ui";
import { HexGrid } from "../ui/SVGDecorations";
import { useState } from "react";

const benefits = [
  { icon: Clock, text: "Respuesta en menos de 24 horas" },
  { icon: Shield, text: "Tu informacion 100% confidencial" },
  { icon: Headphones, text: "Llamada sin compromiso" },
  { icon: Bitcoin, text: "Aceptamos pagos tradicionales y criptomonedas" },
];

export default function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectType: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission - Replace with actual form handler
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Track conversion event
    if (typeof window !== "undefined") {
      // Google Ads conversion tracking
      // @ts-expect-error gtag may not be defined
      if (window.gtag) {
        // @ts-expect-error gtag may not be defined
        window.gtag("event", "conversion", {
          send_to: "AW-CONVERSION_ID/CONVERSION_LABEL",
        });
      }
      // Facebook Pixel tracking
      // @ts-expect-error fbq may not be defined
      if (window.fbq) {
        // @ts-expect-error fbq may not be defined
        window.fbq("track", "Lead");
      }
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  if (isSubmitted) {
    return (
      <section id="contacto" className="relative bg-[#0B0E14] py-24 lg:py-32 overflow-hidden">
        <AnimatedOrbs />
        <FloatingParticles count={20} />

        <div className="relative z-10 max-w-2xl mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex p-4 rounded-full bg-[#00E5FF]/20 mb-6">
              <CheckCircle className="w-12 h-12 text-[#00E5FF]" />
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4 font-heading">
              ¡Mensaje recibido!
            </h2>
            <p className="text-gray-400 font-body mb-8">
              Gracias por contactarnos. Nuestro equipo revisara tu proyecto y te contactaremos
              en las proximas 24 horas para agendar una llamada.
            </p>
            <p className="text-[#00E5FF] font-body">
              Revisa tu correo (incluyendo spam) para nuestra respuesta.
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contacto" className="relative bg-[#0B0E14] py-24 lg:py-32 overflow-hidden">
      <AnimatedOrbs />
      <FloatingParticles count={20} />
      <HexGrid opacity={0.02} />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Copy */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[#00E5FF] text-sm font-medium tracking-widest uppercase mb-4 block font-body">
              Comienza tu proyecto
            </span>
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6 font-heading">
              ¿Listo para convertir tu idea en realidad?
            </h2>
            <p className="text-gray-400 mb-8 font-body">
              Cuentanos sobre tu proyecto y recibe una propuesta personalizada sin compromiso.
              No importa si apenas tienes una idea o ya sabes exactamente lo que necesitas.
            </p>

            <ul className="space-y-4 mb-8">
              {benefits.map((benefit) => (
                <li key={benefit.text} className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-[#00E5FF]/10">
                    <benefit.icon className="w-5 h-5 text-[#00E5FF]" />
                  </div>
                  <span className="text-gray-300 font-body">{benefit.text}</span>
                </li>
              ))}
            </ul>

            <div className="p-6 rounded-xl bg-gradient-to-br from-[#1f41bb]/20 to-[#00E5FF]/10 border border-[#00E5FF]/20">
              <p className="text-white font-medium mb-2 font-heading">
                ¿Prefieres hablar directamente?
              </p>
              <p className="text-gray-400 text-sm font-body">
                Escribenos a{" "}
                <a href="mailto:hola@nahuilabs.com" className="text-[#00E5FF] hover:underline">
                  hola@nahuilabs.com
                </a>
              </p>
            </div>
          </motion.div>

          {/* Right side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form
              onSubmit={handleSubmit}
              className="relative bg-[#1C1F26] p-8 rounded-2xl border border-white/10 overflow-hidden"
            >
              {/* Animated gradient border overlay */}
              <div className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: "linear-gradient(135deg, rgba(0,229,255,0.05), transparent, rgba(31,65,187,0.05))",
                }}
              />

              <div className="relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block text-sm text-gray-400 mb-2 font-body">
                      Nombre *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formState.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#0B0E14] border border-white/10 rounded-lg text-white font-body focus:outline-none focus:border-[#00E5FF] transition-colors"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm text-gray-400 mb-2 font-body">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formState.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#0B0E14] border border-white/10 rounded-lg text-white font-body focus:outline-none focus:border-[#00E5FF] transition-colors"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm text-gray-400 mb-2 font-body">
                      Telefono / WhatsApp
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formState.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#0B0E14] border border-white/10 rounded-lg text-white font-body focus:outline-none focus:border-[#00E5FF] transition-colors"
                      placeholder="+1 234 567 8900"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm text-gray-400 mb-2 font-body">
                      Empresa
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formState.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#0B0E14] border border-white/10 rounded-lg text-white font-body focus:outline-none focus:border-[#00E5FF] transition-colors"
                      placeholder="Nombre de tu empresa"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label htmlFor="projectType" className="block text-sm text-gray-400 mb-2 font-body">
                    ¿Que tipo de software necesitas? *
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    required
                    value={formState.projectType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#0B0E14] border border-white/10 rounded-lg text-white font-body focus:outline-none focus:border-[#00E5FF] transition-colors"
                  >
                    <option value="">Selecciona una opcion</option>
                    <option value="mobile-app">App Movil (iOS/Android)</option>
                    <option value="web-platform">Plataforma Web</option>
                    <option value="enterprise-system">Sistema Empresarial (ERP/CRM)</option>
                    <option value="ecommerce">E-commerce / Tienda Online</option>
                    <option value="automation">Automatizacion / Integraciones</option>
                    <option value="other">Otro / No estoy seguro</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm text-gray-400 mb-2 font-body">
                    Cuentanos sobre tu proyecto *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formState.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#0B0E14] border border-white/10 rounded-lg text-white font-body focus:outline-none focus:border-[#00E5FF] transition-colors resize-none"
                    placeholder="Describe tu idea o problema que quieres resolver..."
                  />
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="large"
                  className="w-full animate-glow-pulse"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24">
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                        />
                      </svg>
                      Enviando...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      Enviar mensaje
                      <Send className="w-5 h-5" />
                    </span>
                  )}
                </Button>

                <p className="text-xs text-gray-500 text-center mt-4 font-body">
                  Al enviar, aceptas nuestra politica de privacidad.
                  No compartimos tu informacion con terceros.
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
