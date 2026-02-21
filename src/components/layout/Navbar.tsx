"use client";

import { useState, useEffect, useCallback } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../ui/Button";
import Logo from "./Logo";

const navLinks = [
  { href: "#que-hacemos", label: "Soluciones", sectionId: "que-hacemos" },
  { href: "#diferenciadores", label: "Por qué nosotros", sectionId: "diferenciadores" },
  { href: "#proceso", label: "Cómo funciona", sectionId: "proceso" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Active section tracking with IntersectionObserver
  const updateActiveSection = useCallback(() => {
    const sectionIds = navLinks.map((l) => l.sectionId);
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { rootMargin: "-40% 0px -55% 0px" }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  useEffect(() => {
    const cleanup = updateActiveSection();
    return cleanup;
  }, [updateActiveSection]);

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0B0E14]/80 backdrop-blur-lg border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between py-4">
          <a href="#" className="flex items-center gap-3 group" aria-label="Nahui Labs - Inicio">
            <motion.div
              className={`transition-all duration-500 ${isScrolled ? "drop-shadow-[0_0_8px_rgba(0,229,255,0.4)]" : ""}`}
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
            >
              <Logo width={32} height={32} />
            </motion.div>
            <span className={`text-white font-bold text-xl tracking-tight font-heading transition-all duration-500 ${isScrolled ? "drop-shadow-[0_0_6px_rgba(0,229,255,0.3)]" : ""}`}>
              NAHUI LABS
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.sectionId;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative text-sm font-medium font-body transition-colors duration-300 ${
                    isActive ? "text-[#00E5FF]" : "text-white hover:text-[#00E5FF]"
                  }`}
                >
                  {link.label}
                  {/* Active indicator line */}
                  <motion.span
                    className="absolute -bottom-1 left-0 h-px bg-[#00E5FF]"
                    initial={false}
                    animate={{ width: isActive ? "100%" : "0%" }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  />
                </a>
              );
            })}
          </div>

          <div className="hidden md:block">
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Button variant="primary" href="#contacto" className="text-sm px-6 py-2.5">
                Cotizar proyecto
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-white p-3"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
            whileTap={{ scale: 0.9 }}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Navigation with AnimatePresence */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden overflow-hidden border-t border-white/10"
            >
              <div className="pb-6 pt-4">
                <div className="flex flex-col gap-4">
                  {navLinks.map((link, index) => (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      onClick={handleNavClick}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className={`transition-colors duration-300 text-base font-medium py-3 font-body ${
                        activeSection === link.sectionId
                          ? "text-[#00E5FF]"
                          : "text-white hover:text-[#00E5FF]"
                      }`}
                    >
                      {link.label}
                    </motion.a>
                  ))}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: navLinks.length * 0.1 }}
                  >
                    <Button variant="primary" href="#contacto" className="mt-4 w-full text-sm">
                      Cotizar proyecto
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
