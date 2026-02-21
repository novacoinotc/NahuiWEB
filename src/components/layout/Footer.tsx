"use client";

import { Linkedin, Twitter, Instagram } from "lucide-react";
import { motion } from "framer-motion";
import Logo from "./Logo";
import { CircuitLines } from "../ui/SVGDecorations";

const navigation = [
  { label: "Soluciones", href: "#que-hacemos" },
  { label: "Por qué nosotros", href: "#diferenciadores" },
  { label: "Cómo funciona", href: "#proceso" },
  { label: "Contacto", href: "#contacto" },
];

const legal = [
  { label: "Aviso de privacidad", href: "/privacidad" },
  { label: "Términos de servicio", href: "/terminos" },
];

const social = [
  { label: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
  { label: "Twitter/X", href: "https://twitter.com", icon: Twitter },
  { label: "Instagram", href: "https://instagram.com", icon: Instagram },
];

const paymentMethods = [
  "Transferencia",
  "Tarjeta",
  "Crypto",
];

export default function Footer() {
  return (
    <footer className="relative bg-black border-t border-[#1C1F26] font-body overflow-hidden">
      {/* Circuit lines separator */}
      <div className="absolute top-0 left-0 right-0 h-20 pointer-events-none">
        <CircuitLines />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-3 mb-4">
              <Logo width={32} height={32} />
              <span className="text-white font-bold text-xl font-heading">NAHUI LABS</span>
            </a>
            <p className="text-gray-500 text-sm mb-4">
              Desarrollo de software a medida, impulsado por Inteligencia Artificial.
            </p>
            <p className="text-gray-600 text-xs mb-4">
              Tu idea. Nuestro código. Resultados reales.
            </p>
            <p className="text-[#00E5FF]/60 text-xs font-medium">
              Zapopan, Jalisco, México | Servicio internacional
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4 font-heading">
              Navegación
            </h3>
            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-gray-400 hover:text-[#00E5FF] transition-colors duration-300 text-sm"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4 font-heading">
              Legal
            </h3>
            <ul className="space-y-3">
              {legal.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-gray-400 hover:text-[#00E5FF] transition-colors duration-300 text-sm"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4 font-heading">
              Contacto
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:hola@nahuilabs.com"
                  className="text-gray-400 hover:text-[#00E5FF] transition-colors duration-300 text-sm"
                >
                  hola@nahuilabs.com
                </a>
              </li>
              <li className="pt-2 flex items-center gap-3">
                {social.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-[#00E5FF] transition-colors duration-300"
                    aria-label={item.label}
                  >
                    <item.icon size={20} />
                  </a>
                ))}
              </li>
            </ul>
          </div>
        </div>

        {/* Payment methods */}
        <div className="pb-6 mb-6 border-b border-[#1C1F26]">
          <p className="text-gray-600 text-xs mb-3 uppercase tracking-wider">Métodos de pago aceptados</p>
          <div className="flex flex-wrap gap-2">
            {paymentMethods.map((method) => (
              <span
                key={method}
                className="px-3 py-1 text-xs text-gray-400 bg-[#1C1F26]/50 rounded-full border border-white/5"
              >
                {method}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Nahui Labs. Todos los derechos reservados.
          </p>
          <p className="text-gray-600 text-xs">
            Zapopan, Jalisco, México | Servicio internacional
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
