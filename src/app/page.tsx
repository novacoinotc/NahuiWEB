import { Navbar, Footer } from "@/components/layout";
import {
  Hero,
  Stats,
  WhatWeDo,
  Differentiators,
  Industries,
  Process,
  GlobalPresence,
  Guarantees,
  ContactForm,
} from "@/components/sections";
import ClientShell from "@/components/layout/ClientShell";

export default function Home() {
  return (
    <ClientShell>
      <Navbar />
      <main className="relative">
        {/* 1. Hook - Captura atencion */}
        <Hero />

        {/* 2. Social proof - Numeros que validan */}
        <Stats />

        {/* 3. Que hacemos - Muestra posibilidades */}
        <WhatWeDo />

        {/* 4. Por que nosotros - Diferenciadores */}
        <Differentiators />

        {/* 5. Industrias - Versatilidad */}
        <Industries />

        {/* 6. Proceso - Como funciona */}
        <Process />

        {/* 7. Presencia Global - Mexico + Internacional + Crypto */}
        <GlobalPresence />

        {/* 8. Garantias - Reduce riesgo */}
        <Guarantees />

        {/* 9. Formulario - Captura lead */}
        <ContactForm />
      </main>
      <Footer />
    </ClientShell>
  );
}
