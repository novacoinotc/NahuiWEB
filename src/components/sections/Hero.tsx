"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Badge, Button } from "../ui";
import CursorNetwork from "../ui/CursorNetwork";
import { CodeBrackets } from "../ui/SVGDecorations";

const trustIndicators = [
  "Software en dias, no meses",
  "100% a tu medida",
  "Impulsado por IA",
  "Pagos en crypto",
  "Servicio internacional",
];

const subtitlePhrases = [
  "Apps moviles, plataformas web, sistemas empresariales...",
  "Automatizaciones, e-commerce, integraciones con IA...",
  "Software 100% a tu medida, con la velocidad que solo la IA puede ofrecer.",
];

function useTypingEffect(phrases: string[], typingSpeed = 40, deleteSpeed = 25, pauseTime = 2000) {
  const [displayText, setDisplayText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setDisplayText(currentPhrase.slice(0, displayText.length + 1));
          if (displayText.length === currentPhrase.length) {
            setTimeout(() => setIsDeleting(true), pauseTime);
          }
        } else {
          setDisplayText(currentPhrase.slice(0, displayText.length - 1));
          if (displayText.length === 0) {
            setIsDeleting(false);
            setPhraseIndex((prev) => (prev + 1) % phrases.length);
          }
        }
      },
      isDeleting ? deleteSpeed : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, phraseIndex, phrases, typingSpeed, deleteSpeed, pauseTime]);

  return displayText;
}

export default function Hero() {
  const typedText = useTypingEffect(subtitlePhrases);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* CursorNetwork as primary background */}
      <div className="absolute inset-0" style={{ pointerEvents: "auto" }}>
        <CursorNetwork intensity="full" />
      </div>

      {/* Gradient overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60 pointer-events-none" />

      {/* Decorative code brackets */}
      <CodeBrackets side="left" className="left-4 lg:left-12" />
      <CodeBrackets side="right" className="right-4 lg:right-12" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-32 text-center">
        {/* Mexico + Crypto badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-8"
        >
          <Badge className="mb-0">Desarrollo de Software Impulsado por IA</Badge>
          <Badge variant="filled" className="mb-0 text-xs">
            Desde Mexico para el mundo
          </Badge>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-3xl lg:text-5xl font-bold text-white max-w-4xl mx-auto leading-tight mb-8 font-heading"
        >
          Convertimos tu idea en software funcionando{" "}
          <span className="text-nahui-gradient">en dias, no meses</span>
        </motion.h1>

        {/* Typing effect subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-base lg:text-lg text-gray-400 max-w-2xl mx-auto mb-12 font-body h-14 flex items-center justify-center"
        >
          <span>
            {typedText}
            <span className="animate-typing-cursor text-[#00E5FF]">|</span>
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <Button variant="primary" size="large" href="#contacto" className="animate-glow-pulse">
            Quiero mi software a medida
          </Button>
          <Button variant="secondary" size="default" href="#que-hacemos">
            Ver que podemos crear
          </Button>
        </motion.div>

        {/* Crypto badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="flex justify-center mb-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1C1F26]/80 border border-[#00E5FF]/20 backdrop-blur-sm">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#00E5FF" strokeWidth="1.5" strokeLinejoin="round" />
              <path d="M2 17L12 22L22 17" stroke="#00E5FF" strokeWidth="1.5" strokeLinejoin="round" />
              <path d="M2 12L12 17L22 12" stroke="#00E5FF" strokeWidth="1.5" strokeLinejoin="round" />
            </svg>
            <span className="text-xs text-gray-300 font-body">Aceptamos Crypto</span>
          </div>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="flex flex-wrap items-center justify-center gap-4 md:gap-6"
        >
          {trustIndicators.map((indicator, index) => (
            <motion.div
              key={indicator}
              className="flex items-center gap-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
            >
              <span className="text-sm text-gray-500 font-body">{indicator}</span>
              {index < trustIndicators.length - 1 && (
                <span className="hidden md:block w-px h-4 bg-[#1C1F26]" />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
