import { Navbar, Footer } from "@/components/layout";
import {
  Hero,
  Stats,
  WhatWeDo,
  Differentiators,
  Industries,
  Process,
  NahuiStandard,
  Testimonials,
  Portfolio,
  GlobalPresence,
  Guarantees,
  FinalCTA,
  ContactForm,
} from "@/components/sections";
import ClientShell from "@/components/layout/ClientShell";

export default function Home() {
  return (
    <ClientShell>
      <Navbar />
      <main className="relative">
        {/* 1. Hook — Captura atención */}
        <Hero />

        {/* 2. Social proof — Números que validan */}
        <Stats />

        {/* 3. Qué hacemos — Muestra posibilidades */}
        <WhatWeDo />

        {/* 4. Por qué nosotros — Diferenciadores */}
        <Differentiators />

        {/* 5. Industrias — Versatilidad */}
        <Industries />

        {/* 6. Proceso — Cómo funciona */}
        <Process />

        {/* 7. Estándar Nahui — Valor incluido */}
        <NahuiStandard />

        {/* 8. Testimonios — Prueba social */}
        <Testimonials />

        {/* 9. Portafolio — Ejemplos visuales */}
        <Portfolio />

        {/* 10. Presencia Global — Servicio internacional */}
        <GlobalPresence />

        {/* 9. Garantías — Reduce riesgo */}
        <Guarantees />

        {/* 10. CTA final — Último empujón */}
        <FinalCTA />

        {/* 11. Formulario — Captura lead */}
        <ContactForm />
      </main>
      <Footer />
    </ClientShell>
  );
}
