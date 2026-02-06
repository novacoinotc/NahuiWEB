import { Navbar, Footer } from "@/components/layout";
import {
  Hero,
  WhatWeDo,
  Differentiators,
  Industries,
  Process,
  GlobalPresence,
  Guarantees,
  ContactForm,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative">
        {/* 1. Hook - Captura atencion */}
        <Hero />

        {/* 2. Que hacemos - Muestra posibilidades */}
        <WhatWeDo />

        {/* 3. Por que nosotros - Diferenciadores */}
        <Differentiators />

        {/* 4. Industrias - Versatilidad */}
        <Industries />

        {/* 5. Proceso - Como funciona */}
        <Process />

        {/* 6. Presencia Global - Mexico + Internacional + Crypto */}
        <GlobalPresence />

        {/* 7. Garantias - Reduce riesgo */}
        <Guarantees />

        {/* 8. Formulario - Captura lead */}
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
