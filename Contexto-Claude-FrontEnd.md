# Contexto Claude - Frontend Nahui Labs Landing

## Fecha de Desarrollo
4 de Febrero, 2026

---

## 1. BRIEFING INICIAL

### Sobre Nahui Labs
Nahui Labs es un equipo de **desarrolladores de software** que crean soluciones **100% a medida**, impulsados por **Inteligencia Artificial**. No hacemos sitios web genericos ni usamos plantillas.

**Enfoque:** Desarrollo de software funcional y completo para cualquier tipo de proyecto:
- Apps moviles (iOS/Android)
- Plataformas web
- Sistemas empresariales (ERP, CRM)
- Automatizaciones e integraciones
- E-commerce personalizado
- APIs y bases de datos
- Cualquier cosa que se pueda programar

**Propuesta de valor:** Convertimos ideas en software funcionando en **dias, no meses**, gracias a nuestra metodologia potenciada por IA.

**Mercado objetivo:** Cliente final e intermediarios a nivel internacional. Lenguaje simple, sin tecnicismos.

### ADN de Marca
**Somos:**
- Desarrolladores expertos
- Constructores de software a medida
- Impulsados por IA

**Rasgos:**
- Velocidad extrema
- Flexibilidad total
- Comunicacion clara
- Resultados tangibles
- Tecnologia de punta

### Identidad Visual - Principios
- Dark mode por defecto
- Estetica futurista Web3
- Animaciones de fondo (particulas, orbes, redes neuronales)
- Interfaces limpias y profesionales
- Sensacion de innovacion tecnologica

### Elementos Graficos
- Lineas animadas
- Nodos conectados (neural network)
- Particulas flotantes
- Gradientes (cyan a azul)
- Orbes de luz animados

---

## 2. PALETA DE COLORES OFICIAL (OBLIGATORIA)

| Color | Hex | Uso |
|-------|-----|-----|
| Negro profundo | `#0B0E14` | Background principal, secciones alternas |
| Negro puro | `#000000` | Background hero, secciones alternas |
| Gris grafito | `#1C1F26` | Bordes, líneas, backgrounds secundarios |
| Cian eléctrico | `#00E5FF` | Acentos, interacciones, parte del gradiente |
| Azul profundo | `#1f41bb` | Parte del gradiente para CTAs y elementos destacados |

**Colores adicionales del Brandbook:**
- `#5a5c60` (gris medio)
- `#324459` (azul grisáceo)

### Gradiente Nahui (NUEVO)
Los elementos que antes tenían background sólido cian ahora usan gradiente:
```css
background: linear-gradient(to left, #1f41bb, #00E5FF);
```
**Se aplica en:**
- Botones primarios
- Badge "Más popular" en servicios
- Bordes de cards destacadas
- Glow effects

---

## 3. TIPOGRAFÍA

Según el Brandbook:
- **Clother** - Tipografía para títulos y textos grandes
- **JetBrains Mono** - Para textos pequeños y cuerpo

### Implementación Actual
- **Títulos/Headings:** Sistema de fallback (system-ui) con clase `.font-heading`
- **Textos pequeños/Body:** JetBrains Mono (Google Fonts) con clase `.font-body`

### Para habilitar Clother
1. Agregar archivos a `/public/fonts/`:
   - `Clother-Regular.woff2`
   - `Clother-Medium.woff2`
   - `Clother-Bold.woff2`
2. Descomentar el `@font-face` en `globals.css`
3. Cambiar `--font-heading` de `system-ui` a `'Clother'`

### Clases de tipografía
```css
.font-heading { font-family: var(--font-heading); } /* Títulos */
.font-body { font-family: var(--font-body); }       /* Textos pequeños */
```

---

## 4. REQUISITOS TÉCNICOS IMPLEMENTADOS

1. ✅ Next.js (App Router) con TypeScript
2. ✅ TailwindCSS con tokens de color `nahui.*`
3. ✅ Copy exacto del documento de diseño
4. ✅ Smooth scroll en navegación interna
5. ✅ Framer Motion para animaciones (fade-up + stagger)
6. ✅ `next/font` para Inter con `display: swap`
7. ✅ `next/image` ready (placeholders listos para WebP/AVIF)
8. ✅ Lazy load implícito con viewport-triggered animations
9. ✅ Accesibilidad: focus states, aria-labels, contraste correcto
10. ✅ Uso del cian controlado (#00E5FF): solo CTAs, hovers, badges y highlights
11. ✅ Estructura de carpetas exacta del documento

---

## 5. STACK DE DEPLOY TÍPICO

- **Frontend:** Vercel
- **Backend:** Railway
- **Database:** Neon (PostgreSQL serverless)
- **Cloud:** AWS (cuando aplica)

### Integraciones Estándar
- GA4 + Google Ads tracking
- SEO técnico
- Performance (Lighthouse 95+)
- Animaciones sutiles

---

## 6. ESTRUCTURA DE ARCHIVOS CREADA

```
nahui-landing/
├── src/
│   ├── app/
│   │   ├── globals.css          # Tokens Tailwind, gradientes, tipografia
│   │   ├── layout.tsx           # Metadata SEO + Tracking scripts (GA4, GTM, FB Pixel)
│   │   └── page.tsx             # Landing con estructura de embudo
│   └── components/
│       ├── layout/
│       │   ├── Navbar.tsx       # Fixed navbar, CTA a formulario
│       │   ├── Footer.tsx       # Links, social, copyright
│       │   ├── Logo.tsx         # next/image para logo PNG
│       │   └── index.ts
│       ├── sections/
│       │   ├── Hero.tsx              # Hook principal
│       │   ├── WhatWeDo.tsx          # Tipos de software (6 cards)
│       │   ├── Differentiators.tsx   # Problemas vs soluciones (6 cards)
│       │   ├── Industries.tsx        # Industrias que atendemos (8 cards)
│       │   ├── Process.tsx           # 4 pasos simples
│       │   ├── Guarantees.tsx        # 6 garantias
│       │   ├── ContactForm.tsx       # Formulario de captura de leads
│       │   └── index.ts
│       └── ui/
│           ├── Button.tsx            # Soporte para href + variants
│           ├── Badge.tsx
│           ├── Card.tsx
│           ├── IconBox.tsx
│           ├── SectionHeader.tsx
│           ├── AnimatedBackground.tsx # Particulas, orbes, neural network, etc.
│           └── index.ts
├── public/
│   └── logo.png              # Logo (Favicon Nahui Labs.png)
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.ts
```

---

## 7. DEPENDENCIAS INSTALADAS

```json
{
  "dependencies": {
    "framer-motion": "^11.x",
    "lucide-react": "^0.x",
    "next": "16.1.6",
    "react": "^19.x",
    "react-dom": "^19.x"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4.x",
    "@types/node": "^20.x",
    "@types/react": "^19.x",
    "@types/react-dom": "^19.x",
    "eslint": "^9.x",
    "eslint-config-next": "16.1.6",
    "tailwindcss": "^4.x",
    "typescript": "^5.x"
  }
}
```

---

## 8. CONFIGURACIÓN DE ESTILOS (globals.css)

```css
@import "tailwindcss";

@theme inline {
  /* Nahui Labs Color Palette */
  --color-nahui-black-deep: #0B0E14;
  --color-nahui-black-pure: #000000;
  --color-nahui-gray-graphite: #1C1F26;
  --color-nahui-cyan-electric: #00E5FF;
  --color-nahui-blue-deep: #1f41bb;

  /* Extended grays for text */
  --color-gray-400: #9ca3af;
  --color-gray-500: #6b7280;

  /* Font families */
  --font-heading: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --font-body: var(--font-jetbrains), 'JetBrains Mono', ui-monospace, monospace;
}

html {
  scroll-behavior: smooth;
}

body {
  background: var(--color-nahui-black-pure);
  color: #ffffff;
  font-family: var(--font-body);
}

/* Typography classes */
.font-heading { font-family: var(--font-heading); }
.font-body { font-family: var(--font-body); }

h1, h2, h3, h4, h5, h6 { font-family: var(--font-heading); }

/* Custom scrollbar */
::-webkit-scrollbar { width: 8px; }
::-webkit-scrollbar-track { background: var(--color-nahui-black-deep); }
::-webkit-scrollbar-thumb { background: var(--color-nahui-gray-graphite); border-radius: 4px; }
::-webkit-scrollbar-thumb:hover { background: var(--color-nahui-cyan-electric); }

/* Focus visible for accessibility */
*:focus-visible {
  outline: 2px solid var(--color-nahui-cyan-electric);
  outline-offset: 2px;
}

/* Grid pattern for hero */
.hero-grid {
  background-image: radial-gradient(circle, var(--color-nahui-gray-graphite) 1px, transparent 1px);
  background-size: 32px 32px;
}

/* Nahui Gradient - right to left: blue to cyan */
.bg-nahui-gradient {
  background: linear-gradient(to left, #1f41bb, #00E5FF);
}

/* Text gradient */
.text-nahui-gradient {
  background: linear-gradient(to left, #1f41bb, #00E5FF);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Border gradient (using pseudo-element) */
.border-nahui-gradient {
  position: relative;
  background: var(--color-nahui-black-deep);
}
.border-nahui-gradient::before {
  content: "";
  position: absolute;
  inset: 0;
  padding: 1px;
  border-radius: inherit;
  background: linear-gradient(to left, #1f41bb, #00E5FF);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
}

/* Glow effects */
.glow-cyan {
  box-shadow: 0 0 60px rgba(0, 229, 255, 0.15);
}

.glow-gradient {
  box-shadow: 0 0 40px rgba(0, 229, 255, 0.2), 0 0 80px rgba(31, 65, 187, 0.15);
}

/* Line pattern for sections */
.line-pattern {
  background-image: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 79px,
    var(--color-nahui-gray-graphite) 79px,
    var(--color-nahui-gray-graphite) 80px
  );
}
```

---

## 9. SECCIONES Y COPY IMPLEMENTADO

### NAVBAR
- Logo: **NAHUI LABS** (con símbolo SVG)
- Links: Qué hacemos, Diferenciadores, Servicios, Proceso
- CTA: **Iniciar proyecto**
- Comportamiento: Fixed, backdrop-blur al scroll, mobile responsive

### HERO
- Badge: `Software Lab powered by AI`
- H1: `Construimos productos digitales que otros tardan meses en imaginar`
- Subheadline: `No somos una agencia. Somos un laboratorio de software que usa Inteligencia Artificial para diseñar, construir y escalar ecosistemas digitales completos — listos para vender desde el día uno.`
- CTA Primario: `Agendar llamada estratégica`
- CTA Secundario: `Ver cómo trabajamos →`
- Trust Indicators: `+50 productos lanzados` | `10x más rápido` | `Stack enterprise-grade`

### QUÉ HACEMOS
- Eyebrow: `Qué hacemos`
- H2: `Ecosistemas digitales diseñados para escalar`
- Descripción: `Diseñamos y desarrollamos productos digitales completos: desde la arquitectura de datos hasta la interfaz final. Cada proyecto incluye medición profesional, SEO técnico y las integraciones necesarias para operar desde el primer día.`

**Feature Cards:**
1. **Productos web de alto rendimiento** - Aplicaciones y plataformas construidas sobre arquitectura serverless moderna. Performance extremo, escalabilidad automática.
2. **Landing pages de conversión** - No hacemos "páginas bonitas". Diseñamos sistemas de conversión con tracking completo, A/B testing ready y SEO técnico perfecto.
3. **MVPs y prototipos funcionales** - Validamos tu idea con un producto real en semanas. Arquitectura lista para escalar cuando el mercado responda.

### DIFERENCIADORES
- Eyebrow: `Por qué Nahui Labs`
- H2: `No competimos con agencias. Las reemplazamos.`

**Tabla Comparativa:**
| Aspecto | Agencia tradicional | Nahui Labs |
|---------|---------------------|------------|
| Proceso de diseño | Semanas de ida y vuelta | IA + expertos = iteración en días |
| Entregable | "Página web" | Ecosistema digital completo |
| Medición | Google Analytics básico (si acaso) | Tracking profesional desde día 1 |
| SEO | Checklist genérico | SEO técnico integrado en arquitectura |
| Tecnología | WordPress, plantillas | Vercel, Railway, Neon, AWS |
| Escalabilidad | "Eso es otra cotización" | Arquitectura serverless nativa |

**Cards diferenciadores:**
1. **IA como arquitecto, no como atajo** - No usamos IA para "ir más rápido" cortando esquinas. La usamos para analizar, diseñar y optimizar cada decisión antes de escribir una línea de código.
2. **Obsesión por la medición** - Si no se mide, no existe. Cada proyecto incluye implementación profesional de analytics, eventos personalizados, embudos de conversión.
3. **Stack de Silicon Valley** - Trabajamos con la misma infraestructura que usan las startups más valoradas del mundo.

### ESTÁNDAR NAHUI
- Eyebrow: `Estándar Nahui`
- H2: `Lo que otros cobran extra, nosotros lo incluimos siempre`
- Descripción: `Cada proyecto que sale de Nahui Labs cumple con un estándar técnico que garantiza rendimiento, medición y escalabilidad desde el primer deploy.`

**Items:**
1. **SEO técnico perfecto** - Meta tags, structured data, sitemap, robots.txt, Core Web Vitals optimizados.
2. **Medición profesional** - Google Analytics 4, eventos personalizados, embudos de conversión, píxeles configurados.
3. **Integraciones inteligentes** - CRM, WhatsApp Business, calendario de citas, email automation.
4. **Arquitectura serverless** - Infraestructura que escala automáticamente. Sin servidores que mantener.
5. **Performance extremo** - Lighthouse 95+ garantizado. Carga instantánea, experiencia fluida.
6. **Código limpio y documentado** - Arquitectura profesional lista para continuar.

### SERVICIOS
- Eyebrow: `Servicios`
- H2: `Productos digitales para cada etapa de tu empresa`

**Card 1 — STARTER: Landing de conversión**
- Diseño futurista personalizado
- Copywriting estratégico
- SEO técnico completo
- Medición y analytics configurados
- Formulario integrado con CRM
- Responsive perfecto
- Deploy en Vercel
- CTA: `Cotizar landing →`

**Card 2 — GROWTH: Producto web completo** (destacado)
- Todo lo de Starter +
- Múltiples páginas/vistas
- Base de datos serverless
- Autenticación si aplica
- Panel de administración
- API personalizada
- Integraciones avanzadas
- Arquitectura para escalar
- CTA: `Cotizar producto →`

**Card 3 — SCALE: Plataforma a medida**
- Todo lo de Growth +
- Arquitectura de microservicios
- Multi-tenancy si aplica
- Integraciones enterprise
- Alta disponibilidad
- Soporte técnico dedicado
- Roadmap de evolución
- CTA: `Agendar llamada →`

### TECH STACK
- Eyebrow: `Stack tecnológico`
- H2: `Infraestructura de clase mundial`
- Descripción: `Las mismas herramientas que usan Airbnb, Notion y las startups más exitosas del mundo.`

**Tecnologías:**
1. **Vercel** - Frontend deployment. Performance extremo, edge computing, previews automáticos.
2. **Railway** - Backend moderno. Deploy instantáneo, escalado automático, zero DevOps.
3. **Neon** - Base de datos serverless. PostgreSQL que escala a cero y crece sin límites.
4. **AWS** - Infraestructura enterprise. Cuando el proyecto requiere servicios cloud avanzados.
5. **Google Analytics 4** - Medición profesional. Eventos, embudos, audiencias.
6. **Google Ads** - Adquisición. Tracking de conversiones, remarketing, integración completa.

### PROCESO
- Eyebrow: `Proceso`
- H2: `De idea a producto en semanas, no meses`
- Descripción: `Un proceso diseñado para eliminar fricciones, reducir iteraciones innecesarias y entregar resultados tangibles rápidamente.`

**Steps:**
1. **01 — Llamada estratégica** - 30 minutos para entender tu negocio, tus objetivos y definir el alcance real del proyecto. Sin compromiso, sin pitch de ventas. Pura estrategia.
2. **02 — Propuesta y arquitectura** - Recibes un documento detallado con alcance, arquitectura técnica, stack propuesto y timeline.
3. **03 — Diseño y desarrollo** - Nuestro equipo + IA trabajan en paralelo. Recibes previews funcionales durante el proceso.
4. **04 — Launch y medición** - Deploy en producción con todo configurado: analytics, SEO, integraciones.

### CTA FINAL
- H2: `¿Listo para construir algo extraordinario?`
- Descripción: `Agenda una llamada de 30 minutos con nuestro equipo. Analizamos tu proyecto, definimos el alcance real y te mostramos exactamente cómo podemos ayudarte. Sin pitch de ventas. Sin compromiso.`
- CTA: `Agendar llamada estratégica`
- Secondary: `30 min · Sin compromiso · 100% estrategia`

### FOOTER
- Logo + Tagline: `Software Lab powered by AI`
- Navegación: Qué hacemos, Diferenciadores, Servicios, Proceso, Contacto
- Legal: Aviso de privacidad, Términos de servicio
- Contacto: hola@nahuilabs.com, LinkedIn, Twitter/X
- Copyright: `© 2025 Nahui Labs. Todos los derechos reservados.`

---

## 10. META TAGS SEO IMPLEMENTADOS

```tsx
export const metadata: Metadata = {
  title: "Nahui Labs | Software Lab powered by AI — Desarrollo de productos digitales",
  description: "Laboratorio de software que usa Inteligencia Artificial para diseñar, construir y escalar ecosistemas digitales completos. No somos una agencia. Somos algo mejor.",
  keywords: "desarrollo software, productos digitales, landing pages, aplicaciones web, IA, inteligencia artificial, Vercel, startup",
  openGraph: {
    title: "Nahui Labs | Software Lab powered by AI",
    description: "Laboratorio de software que usa IA para diseñar, construir y escalar ecosistemas digitales completos.",
    type: "website",
    locale: "es_MX",
  },
  robots: {
    index: true,
    follow: true,
  },
};
```

---

## 11. COMPONENTES UI REUTILIZABLES

### Button
```tsx
interface ButtonProps {
  variant?: "primary" | "secondary" | "outline";
  size?: "default" | "large";
}
```
- **primary**: `bg-gradient-to-l from-[#1f41bb] to-[#00E5FF] text-black` con hover glow gradient
- **secondary**: `border border-white/20` con hover cyan
- **outline**: `border border-[#00E5FF]` con hover fill

### Badge
- Border cyan, texto cyan, rounded-full

### Card
- `bg-[#1C1F26]`, border sutil, hover border cyan

### IconBox
- Wrapper para Lucide icons con color cyan

### SectionHeader
- Eyebrow (cyan uppercase tracking-widest, font-body)
- H2 (text-2xl lg:text-3xl font-bold, font-heading)
- Description opcional (text-base text-gray-400, font-body)

### AnimatedBackground (Componentes de animación visual)
```tsx
// Partículas flotantes
<FloatingParticles count={50} />

// Orbes de gradiente animados
<AnimatedOrbs />

// Grid de líneas animadas
<NetworkGrid />

// Red neuronal con nodos conectados
<NeuralNetwork />

// Línea de escaneo
<ScanLine />

// Combinaciones predefinidas
<HeroBackground />      // orbs + particles + grid
<SectionBackground />   // particles + subtle gradient
```

---

## 12. ANIMACIONES IMPLEMENTADAS

Usando Framer Motion:

```tsx
// Fade up individual
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6 }}

// Stagger container
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

// Item variants
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// Viewport triggered
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true, margin: "-100px" }}
```

---

## 13. LOGO (Símbolo Nahui Ollin)

El logo es un símbolo inspirado en el Nahui Ollin (cuatro movimientos en náhuatl), representado con nodos interconectados que simbolizan:
- Conexión de sistemas
- Flujo de datos
- Arquitectura modular
- Crecimiento escalable

### Implementación
- **Archivo:** `/public/logo.png` (copiado desde `/Users/alexisirg/Desktop/Nova/Nahui Labs/Icono Nahui Labs-01.png`)
- **Componente:** `Logo.tsx` usa `next/image` para optimización
- **Props:** `width`, `height`, `className`

```tsx
import Image from "next/image";
export default function Logo({ width = 40, height = 40, className = "" }) {
  return <Image src="/logo.png" alt="Nahui Labs" width={width} height={height} className={className} priority />;
}
```

---

## 14. TAMAÑOS DE TEXTO (Reducidos ~60%)

Los textos grandes fueron reducidos para mejor legibilidad:

| Componente | Antes | Después |
|------------|-------|---------|
| Hero título | `text-5xl lg:text-7xl` | `text-3xl lg:text-5xl` |
| Hero subtítulo | `text-xl` | `text-base lg:text-lg` |
| SectionHeader título | `text-4xl lg:text-5xl` | `text-2xl lg:text-3xl` |
| SectionHeader descripción | `text-lg` | `text-base` |
| FinalCTA título | `text-4xl lg:text-5xl` | `text-2xl lg:text-3xl` |
| FinalCTA párrafo | `text-xl` | `text-base` |
| Process números | `text-6xl` | `text-4xl` |
| Process títulos | `text-xl` | `text-lg` |
| NahuiStandard números | `text-5xl` | `text-3xl` |
| NahuiStandard títulos | `text-lg` | `text-base` |
| Differentiators card títulos | `text-xl` | `text-lg` |
| WhatWeDo card títulos | `text-xl` | `text-lg` |
| Services card títulos | `text-2xl` | `text-xl` |

---

## 15. COMANDOS DE DESARROLLO

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev

# Build de producción
npm run build

# Iniciar producción
npm start

# Linting
npm run lint
```

---

## 16. PRÓXIMOS PASOS SUGERIDOS

1. **Agregar imágenes reales** - Reemplazar placeholders con assets de marca
2. **Configurar formularios** - Integrar con CRM (HubSpot, Notion, etc.)
3. **Analytics** - Implementar GA4 y Google Ads tracking
4. **SEO avanzado** - Agregar structured data (JSON-LD)
5. **Performance** - Optimizar imágenes (WebP/AVIF)
6. **Testing** - Agregar pruebas E2E con Playwright
7. **CI/CD** - Configurar GitHub Actions para deploy automático
8. **Internacionalización** - Agregar soporte para inglés si es necesario

---

## 17. DOCUMENTOS DE REFERENCIA ORIGINALES

### Documento de Diseño
`/Users/alexisirg/Desktop/Nova/Nahui Labs/Estructura del proyecto.md`

### Mini Brandbook
`/Users/alexisirg/Desktop/Nova/Nahui Labs/Nahui Labs Mini Brandbook.pdf`

---

## 18. SERVIDOR DE DESARROLLO

El proyecto está corriendo en:
- **Local:** http://localhost:3000
- **Network:** http://192.168.0.32:3000

Build exitoso sin errores de TypeScript ni ESLint.

---

---

## 19. CHANGELOG

### Sesión 4 - 5 de Febrero, 2026

**REESTRUCTURACION COMPLETA - Enfoque en Software a Medida + Embudo de Conversion**

**Cambio de enfoque del negocio:**
- De "agencia web" a "desarrollo de software 100% a medida"
- Lenguaje menos tecnico, orientado a cliente final e intermediarios
- Enfasis en velocidad (dias, no meses) gracias a IA
- Posibilidades infinitas: apps, plataformas, sistemas, APIs, etc.

**Nueva estructura de embudo de ventas:**
1. Hero - Hook con propuesta de valor clara
2. WhatWeDo (Soluciones) - Tipos de software que creamos
3. Differentiators - Por que elegirnos vs problemas tradicionales
4. Industries - Industrias que atendemos
5. Process - 4 pasos simples
6. Guarantees - Reducir riesgo/objeciones
7. ContactForm - Formulario de captura de leads

**Secciones eliminadas:**
- NahuiStandard (muy tecnico)
- Services (pricing tiers)
- TechStack (muy tecnico)
- FinalCTA (reemplazado por ContactForm)

**Secciones nuevas:**
- `Industries.tsx` - 8 industrias con iconos
- `Guarantees.tsx` - 6 garantias para reducir riesgos
- `ContactForm.tsx` - Formulario completo con tracking de conversiones

**Tracking configurado (listos para campañas):**
- Google Tag Manager (GTM)
- Google Analytics 4 (GA4)
- Facebook Pixel
- Eventos de conversion en formulario

**Variables de entorno para tracking:**
```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
NEXT_PUBLIC_FB_PIXEL_ID=XXXXXXXXXXXXXXX
```

**Copy actualizado (menos tecnico):**
- "Convertimos tu idea en software funcionando en dias, no meses"
- "Si lo puedes imaginar, lo podemos construir"
- "Olvidate de los problemas del desarrollo tradicional"
- "De tu idea a software funcionando en 4 pasos"

**Archivos modificados/creados:**
- `src/app/layout.tsx` - Metadata SEO + scripts tracking
- `src/app/page.tsx` - Nueva estructura de embudo
- `src/components/sections/Hero.tsx` - Nuevo copy
- `src/components/sections/WhatWeDo.tsx` - 6 tipos de software
- `src/components/sections/Differentiators.tsx` - Problemas vs soluciones
- `src/components/sections/Industries.tsx` (NUEVO)
- `src/components/sections/Process.tsx` - Simplificado
- `src/components/sections/Guarantees.tsx` (NUEVO)
- `src/components/sections/ContactForm.tsx` (NUEVO)
- `src/components/sections/index.ts` - Exports actualizados
- `src/components/ui/Button.tsx` - Soporte para href/links
- `src/components/layout/Navbar.tsx` - Nav simplificada
- `src/components/layout/Footer.tsx` - Actualizado
- `public/logo.png` - Nuevo logo (Favicon Nahui Labs.png)

---

### Sesión 3 - 5 de Febrero, 2026

**Animaciones visuales de fondo agregadas:**

1. **Nuevo componente AnimatedBackground.tsx**
   - `FloatingParticles` - Partículas flotantes con movimiento suave
   - `AnimatedOrbs` - Orbes de gradiente que se mueven lentamente
   - `NetworkGrid` - Líneas de cuadrícula animadas con gradiente
   - `NeuralNetwork` - Nodos conectados estilo red neuronal
   - `ScanLine` - Línea de escaneo que recorre la pantalla
   - `HeroBackground` - Combinación de orbes + partículas + grid
   - `SectionBackground` - Background sutil para otras secciones

2. **Secciones con animaciones de fondo:**
   - **Hero** - `HeroBackground` (orbes animados + partículas + grid)
   - **TechStack** - `NeuralNetwork` (nodos conectados)
   - **Process** - `ScanLine` + `FloatingParticles`
   - **FinalCTA** - `AnimatedOrbs` + `FloatingParticles`

3. **Nuevo logo actualizado**
   - Archivo: `/public/logo.png` (desde `Favicon Nahui Labs.png`)

**Archivos creados/modificados:**
- `src/components/ui/AnimatedBackground.tsx` (NUEVO)
- `src/components/ui/index.ts` - Exports agregados
- `src/components/sections/Hero.tsx` - HeroBackground
- `src/components/sections/TechStack.tsx` - NeuralNetwork
- `src/components/sections/Process.tsx` - ScanLine + FloatingParticles
- `src/components/sections/FinalCTA.tsx` - AnimatedOrbs + FloatingParticles
- `public/logo.png` - Nuevo logo

---

### Sesión 2 - 4 de Febrero, 2026

**Cambios de diseño:**

1. **Gradiente Nahui implementado**
   - Backgrounds sólidos cyan → gradiente `linear-gradient(to left, #1f41bb, #00E5FF)`
   - Aplicado en: botones primarios, badge "Más popular", bordes destacados, glow effects

2. **Sistema de tipografía actualizado**
   - Títulos/headings: clase `.font-heading` (fallback system-ui, preparado para Clother)
   - Textos pequeños/body: clase `.font-body` (JetBrains Mono vía Google Fonts)
   - Aplicado en todas las secciones

3. **Logo actualizado**
   - Cambiado de SVG inline a imagen PNG
   - Archivo: `/public/logo.png`
   - Usando `next/image` para optimización

4. **Tamaños de texto reducidos (~60%)**
   - Hero título: `text-5xl lg:text-7xl` → `text-3xl lg:text-5xl`
   - SectionHeader: `text-4xl lg:text-5xl` → `text-2xl lg:text-3xl`
   - Todos los títulos y textos grandes proporcionales

**Archivos modificados:**
- `src/app/globals.css` - Agregadas clases de gradiente y tipografía
- `src/app/layout.tsx` - Cambiado a JetBrains Mono
- `src/components/ui/Button.tsx` - Gradiente en variante primary
- `src/components/layout/Logo.tsx` - Cambiado a next/image con PNG
- `src/components/layout/Navbar.tsx` - Clases de tipografía
- `src/components/layout/Footer.tsx` - Clases de tipografía
- `src/components/ui/SectionHeader.tsx` - Tamaños reducidos + tipografía
- `src/components/sections/Hero.tsx` - Tamaños reducidos + glow gradient
- `src/components/sections/WhatWeDo.tsx` - Tamaños + tipografía
- `src/components/sections/Differentiators.tsx` - Tamaños + tipografía
- `src/components/sections/NahuiStandard.tsx` - Tamaños + tipografía
- `src/components/sections/Services.tsx` - Gradiente badge + border + tipografía
- `src/components/sections/TechStack.tsx` - Tipografía
- `src/components/sections/Process.tsx` - Tamaños + tipografía
- `src/components/sections/FinalCTA.tsx` - Tamaños + gradiente glow + tipografía

---

*Documento generado por Claude Opus 4.5 como referencia completa del desarrollo frontend de Nahui Labs Landing Page.*
