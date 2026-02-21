"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "../ui";
import { useState } from "react";

const projects = [
  {
    id: "fintech",
    tab: "NovaCoin · Fintech & Crypto",
    client: "NovaCoin OTC — novacoin.mx",
    description: "Ecosistema financiero completo: NovaCoin para compra/venta OTC de criptomonedas, NovaCore como motor de procesamiento de transacciones, y NovaPay como pasarela de pagos cripto. Tecnología financiera y criptográfica de nivel institucional.",
    mockup: FintechMockup,
  },
  {
    id: "dashboard",
    tab: "Dashboard de Ventas",
    client: "Cadena de restaurantes",
    description: "Panel en tiempo real para monitorear ventas, inventario y rendimiento de sucursales desde cualquier dispositivo.",
    mockup: DashboardMockup,
  },
  {
    id: "crm",
    tab: "Portal de Clientes",
    client: "Despacho contable",
    description: "Portal donde cada cliente sube documentos, ve el estatus de sus trámites y recibe notificaciones automáticas.",
    mockup: CRMMockup,
  },
  {
    id: "logistics",
    tab: "Sistema de Envíos",
    client: "Empresa de logística",
    description: "Plataforma de rastreo en tiempo real con rutas optimizadas, notificaciones automáticas y panel de control.",
    mockup: LogisticsMockup,
  },
];

function FintechMockup() {
  return (
    <div className="bg-[#0B0E14] rounded-xl border border-white/10 overflow-hidden">
      {/* Top bar */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/5">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/60" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
          <div className="w-3 h-3 rounded-full bg-green-500/60" />
        </div>
        <div className="text-[10px] text-gray-500 font-body">NovaCoin OTC — Panel de Operaciones</div>
        <div className="w-16" />
      </div>

      <div className="p-4">
        {/* Product tabs */}
        <div className="flex gap-2 mb-4">
          {[
            { name: "NovaCoin", active: true },
            { name: "NovaCore", active: false },
            { name: "NovaPay", active: false },
          ].map((tab) => (
            <span
              key={tab.name}
              className={`px-3 py-1.5 rounded-lg text-[10px] font-body ${
                tab.active
                  ? "bg-[#00E5FF]/20 text-[#00E5FF] border border-[#00E5FF]/30"
                  : "bg-[#1C1F26] text-gray-500 border border-white/5"
              }`}
            >
              {tab.name}
            </span>
          ))}
        </div>

        {/* KPIs */}
        <div className="grid grid-cols-4 gap-3 mb-4">
          {[
            { label: "Volumen 24h", value: "$2.4M", change: "+18%", up: true },
            { label: "Operaciones", value: "847", change: "+24%", up: true },
            { label: "BTC/MXN", value: "$1.82M", change: "+2.3%", up: true },
            { label: "USDT/MXN", value: "$17.42", change: "-0.1%", up: false },
          ].map((kpi) => (
            <div key={kpi.label} className="bg-[#1C1F26] rounded-lg p-3">
              <p className="text-[9px] text-gray-500 font-body">{kpi.label}</p>
              <p className="text-sm font-bold text-white font-heading mt-1">{kpi.value}</p>
              <span className={`text-[9px] ${kpi.up ? "text-emerald-400" : "text-red-400"}`}>{kpi.change}</span>
            </div>
          ))}
        </div>

        {/* Price chart */}
        <div className="bg-[#1C1F26] rounded-lg p-4 mb-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <span className="text-[10px] text-gray-400 font-body">BTC/MXN — Últimas 24h</span>
            </div>
            <div className="flex gap-1">
              {["1H", "4H", "1D", "1S"].map((t) => (
                <span key={t} className={`text-[8px] px-2 py-0.5 rounded font-body ${t === "1D" ? "bg-[#00E5FF]/20 text-[#00E5FF]" : "text-gray-500"}`}>{t}</span>
              ))}
            </div>
          </div>
          {/* Fake candlestick-style chart */}
          <div className="flex items-end gap-1 h-20">
            {[40, 45, 42, 48, 52, 50, 55, 58, 54, 60, 63, 58, 65, 62, 68, 72, 70, 75, 73, 78, 80, 76, 82, 85].map((h, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-0.5">
                <div
                  className="w-full rounded-sm"
                  style={{
                    height: `${h}%`,
                    background: h > (i > 0 ? [40, 45, 42, 48, 52, 50, 55, 58, 54, 60, 63, 58, 65, 62, 68, 72, 70, 75, 73, 78, 80, 76, 82, 85][i - 1] : 40)
                      ? "linear-gradient(to top, #00E5FF, #1f41bb)"
                      : "#ef444480",
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Recent OTC operations */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-[#1C1F26] rounded-lg p-3">
            <p className="text-[10px] text-gray-400 font-body mb-2">Operaciones OTC recientes</p>
            <div className="space-y-2">
              {[
                { type: "Compra", crypto: "BTC", amount: "0.5", mxn: "$910,000", status: "Completada" },
                { type: "Venta", crypto: "USDT", amount: "50,000", mxn: "$871,000", status: "En proceso" },
                { type: "Compra", crypto: "ETH", amount: "12.3", mxn: "$485,000", status: "Completada" },
              ].map((op, i) => (
                <div key={i} className="flex items-center justify-between text-[9px]">
                  <span className={`font-body ${op.type === "Compra" ? "text-emerald-400" : "text-red-400"}`}>{op.type}</span>
                  <span className="text-white font-body">{op.amount} {op.crypto}</span>
                  <span className="text-gray-400 font-body">{op.mxn}</span>
                  <span className={`px-1.5 py-0.5 rounded text-[8px] font-body ${
                    op.status === "Completada" ? "bg-emerald-500/20 text-emerald-400" : "bg-yellow-500/20 text-yellow-400"
                  }`}>{op.status}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-[#1C1F26] rounded-lg p-3">
            <p className="text-[10px] text-gray-400 font-body mb-2">NovaPay — Pagos procesados</p>
            <div className="space-y-2">
              {[
                { merchant: "Tienda Online MX", amount: "$12,400", crypto: "USDT", status: "Liquidado" },
                { merchant: "Servicios Pro", amount: "$8,750", crypto: "BTC", status: "Liquidado" },
                { merchant: "Import Express", amount: "$45,200", crypto: "USDT", status: "Pendiente" },
              ].map((pay, i) => (
                <div key={i} className="flex items-center justify-between text-[9px]">
                  <span className="text-white font-body truncate max-w-[80px]">{pay.merchant}</span>
                  <span className="text-gray-400 font-body">{pay.amount}</span>
                  <span className="text-[#00E5FF] font-body">{pay.crypto}</span>
                  <span className={`px-1.5 py-0.5 rounded text-[8px] font-body ${
                    pay.status === "Liquidado" ? "bg-emerald-500/20 text-emerald-400" : "bg-yellow-500/20 text-yellow-400"
                  }`}>{pay.status}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DashboardMockup() {
  return (
    <div className="bg-[#0B0E14] rounded-xl border border-white/10 overflow-hidden">
      {/* Top bar */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/5">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/60" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
          <div className="w-3 h-3 rounded-full bg-green-500/60" />
        </div>
        <div className="text-[10px] text-gray-500 font-body">Panel de Ventas — Grupo Gastronómico</div>
        <div className="w-16" />
      </div>

      <div className="p-4">
        {/* KPI cards */}
        <div className="grid grid-cols-4 gap-3 mb-4">
          {[
            { label: "Ventas hoy", value: "$48,320", change: "+12%", up: true },
            { label: "Pedidos", value: "186", change: "+8%", up: true },
            { label: "Ticket prom.", value: "$259", change: "+3%", up: true },
            { label: "Sucursales", value: "3/3", change: "Online", up: true },
          ].map((kpi) => (
            <div key={kpi.label} className="bg-[#1C1F26] rounded-lg p-3">
              <p className="text-[9px] text-gray-500 font-body">{kpi.label}</p>
              <p className="text-sm font-bold text-white font-heading mt-1">{kpi.value}</p>
              <span className={`text-[9px] ${kpi.up ? "text-emerald-400" : "text-red-400"}`}>{kpi.change}</span>
            </div>
          ))}
        </div>

        {/* Chart area */}
        <div className="bg-[#1C1F26] rounded-lg p-4 mb-4">
          <div className="flex items-center justify-between mb-3">
            <p className="text-[10px] text-gray-400 font-body">Ventas por sucursal — Últimos 7 días</p>
            <div className="flex gap-2">
              {["Polanco", "Roma", "Condesa"].map((s) => (
                <span key={s} className="text-[8px] px-2 py-0.5 rounded-full bg-[#00E5FF]/10 text-[#00E5FF] font-body">{s}</span>
              ))}
            </div>
          </div>
          {/* Fake bar chart */}
          <div className="flex items-end gap-1.5 h-24">
            {[65, 45, 80, 55, 72, 90, 60, 48, 85, 70, 95, 75, 50, 88, 62, 78, 92, 58, 83, 68, 76].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t-sm"
                style={{
                  height: `${h}%`,
                  background: i % 3 === 0 ? "#00E5FF" : i % 3 === 1 ? "#1f41bb" : "#00E5FF50",
                }}
              />
            ))}
          </div>
        </div>

        {/* Recent orders table */}
        <div className="bg-[#1C1F26] rounded-lg p-3">
          <p className="text-[10px] text-gray-400 font-body mb-2">Últimos pedidos</p>
          <div className="space-y-2">
            {[
              { id: "#1847", table: "Mesa 12", items: "3 items", total: "$485", status: "Entregado" },
              { id: "#1846", table: "Mesa 7", items: "5 items", total: "$892", status: "En cocina" },
              { id: "#1845", table: "Barra 2", items: "2 items", total: "$234", status: "Nuevo" },
            ].map((order) => (
              <div key={order.id} className="flex items-center justify-between text-[9px]">
                <span className="text-[#00E5FF] font-mono">{order.id}</span>
                <span className="text-gray-400 font-body">{order.table}</span>
                <span className="text-gray-500 font-body">{order.items}</span>
                <span className="text-white font-body">{order.total}</span>
                <span className={`px-1.5 py-0.5 rounded text-[8px] font-body ${
                  order.status === "Entregado" ? "bg-emerald-500/20 text-emerald-400" :
                  order.status === "En cocina" ? "bg-yellow-500/20 text-yellow-400" :
                  "bg-[#00E5FF]/20 text-[#00E5FF]"
                }`}>{order.status}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function CRMMockup() {
  return (
    <div className="bg-[#0B0E14] rounded-xl border border-white/10 overflow-hidden">
      {/* Top bar */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/5">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/60" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
          <div className="w-3 h-3 rounded-full bg-green-500/60" />
        </div>
        <div className="text-[10px] text-gray-500 font-body">Portal de Clientes — Martínez & Asociados</div>
        <div className="w-16" />
      </div>

      <div className="p-4">
        {/* Header with greeting */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-xs text-white font-heading">Bienvenido, Roberto</p>
            <p className="text-[9px] text-gray-500 font-body">Tienes 2 trámites pendientes</p>
          </div>
          <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-emerald-500/20">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span className="text-[8px] text-emerald-400 font-body">Al corriente</span>
          </div>
        </div>

        {/* Status cards */}
        <div className="grid grid-cols-3 gap-3 mb-4">
          {[
            { label: "Declaración mensual", status: "En proceso", color: "yellow" },
            { label: "Facturación Feb", status: "Completado", color: "green" },
            { label: "DIOT", status: "Pendiente", color: "cyan" },
          ].map((item) => (
            <div key={item.label} className="bg-[#1C1F26] rounded-lg p-3">
              <p className="text-[9px] text-gray-400 font-body mb-2">{item.label}</p>
              <div className={`w-full h-1.5 rounded-full bg-gray-700`}>
                <div className={`h-full rounded-full ${
                  item.color === "green" ? "bg-emerald-400 w-full" :
                  item.color === "yellow" ? "bg-yellow-400 w-3/5" :
                  "bg-[#00E5FF] w-1/4"
                }`} />
              </div>
              <p className={`text-[8px] mt-1.5 font-body ${
                item.color === "green" ? "text-emerald-400" :
                item.color === "yellow" ? "text-yellow-400" :
                "text-[#00E5FF]"
              }`}>{item.status}</p>
            </div>
          ))}
        </div>

        {/* Documents section */}
        <div className="bg-[#1C1F26] rounded-lg p-3 mb-4">
          <div className="flex items-center justify-between mb-2">
            <p className="text-[10px] text-gray-400 font-body">Documentos recientes</p>
            <span className="text-[8px] text-[#00E5FF] font-body">Ver todos</span>
          </div>
          <div className="space-y-2">
            {[
              { name: "Constancia_Fiscal_2024.pdf", date: "Hace 2 días", size: "1.2 MB" },
              { name: "Estado_Cuenta_Ene.pdf", date: "Hace 5 días", size: "856 KB" },
              { name: "Facturas_Febrero.zip", date: "Hace 1 hora", size: "3.4 MB" },
            ].map((doc) => (
              <div key={doc.name} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-7 rounded bg-[#00E5FF]/10 flex items-center justify-center">
                    <span className="text-[7px] text-[#00E5FF] font-bold">PDF</span>
                  </div>
                  <div>
                    <p className="text-[9px] text-white font-body">{doc.name}</p>
                    <p className="text-[7px] text-gray-500 font-body">{doc.date} · {doc.size}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Alert */}
        <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-3">
          <p className="text-[9px] text-yellow-400 font-body">Recordatorio: Tu declaración mensual vence el 17 de marzo. Sube tus estados de cuenta antes del 10.</p>
        </div>
      </div>
    </div>
  );
}

function LogisticsMockup() {
  return (
    <div className="bg-[#0B0E14] rounded-xl border border-white/10 overflow-hidden">
      {/* Top bar */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/5">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/60" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
          <div className="w-3 h-3 rounded-full bg-green-500/60" />
        </div>
        <div className="text-[10px] text-gray-500 font-body">Control de Envíos — EnvíoRápido</div>
        <div className="w-16" />
      </div>

      <div className="p-4">
        {/* Live stats */}
        <div className="grid grid-cols-4 gap-3 mb-4">
          {[
            { label: "En ruta", value: "24", icon: "🚛" },
            { label: "Entregados hoy", value: "67", icon: "✅" },
            { label: "Pendientes", value: "12", icon: "📦" },
            { label: "Incidencias", value: "1", icon: "⚠️" },
          ].map((stat) => (
            <div key={stat.label} className="bg-[#1C1F26] rounded-lg p-3 text-center">
              <span className="text-lg">{stat.icon}</span>
              <p className="text-sm font-bold text-white font-heading">{stat.value}</p>
              <p className="text-[8px] text-gray-500 font-body">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Map placeholder */}
        <div className="bg-[#1C1F26] rounded-lg p-3 mb-4 relative overflow-hidden">
          <p className="text-[10px] text-gray-400 font-body mb-2">Rastreo en tiempo real</p>
          {/* Fake map grid */}
          <div className="h-28 relative">
            <div className="absolute inset-0 grid grid-cols-8 grid-rows-4 gap-px opacity-20">
              {[...Array(32)].map((_, i) => (
                <div key={i} className="border border-[#00E5FF]/20 rounded-sm" />
              ))}
            </div>
            {/* Delivery dots */}
            <div className="absolute top-4 left-8 w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <div className="absolute top-12 left-20 w-2.5 h-2.5 rounded-full bg-[#00E5FF] animate-pulse" style={{ animationDelay: "0.5s" }} />
            <div className="absolute top-8 right-16 w-2.5 h-2.5 rounded-full bg-yellow-400 animate-pulse" style={{ animationDelay: "1s" }} />
            <div className="absolute bottom-6 left-32 w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" style={{ animationDelay: "1.5s" }} />
            <div className="absolute top-16 right-8 w-2.5 h-2.5 rounded-full bg-[#00E5FF] animate-pulse" style={{ animationDelay: "0.3s" }} />
            {/* Legend */}
            <div className="absolute bottom-1 right-2 flex gap-3">
              <div className="flex items-center gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span className="text-[7px] text-gray-500 font-body">Entregando</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-[#00E5FF]" />
                <span className="text-[7px] text-gray-500 font-body">En ruta</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                <span className="text-[7px] text-gray-500 font-body">Retraso</span>
              </div>
            </div>
          </div>
        </div>

        {/* Recent deliveries */}
        <div className="bg-[#1C1F26] rounded-lg p-3">
          <p className="text-[10px] text-gray-400 font-body mb-2">Entregas recientes</p>
          <div className="space-y-2">
            {[
              { id: "ENV-2847", dest: "Col. Roma Norte", driver: "Juan M.", eta: "12:30", status: "En ruta" },
              { id: "ENV-2846", dest: "Polanco", driver: "Pedro L.", eta: "12:15", status: "Entregado" },
              { id: "ENV-2845", dest: "Condesa", driver: "Ana R.", eta: "13:00", status: "Recolectando" },
            ].map((delivery) => (
              <div key={delivery.id} className="flex items-center justify-between text-[9px]">
                <span className="text-[#00E5FF] font-mono">{delivery.id}</span>
                <span className="text-gray-400 font-body">{delivery.dest}</span>
                <span className="text-gray-500 font-body">{delivery.driver}</span>
                <span className="text-white font-body">{delivery.eta}</span>
                <span className={`px-1.5 py-0.5 rounded text-[8px] font-body ${
                  delivery.status === "Entregado" ? "bg-emerald-500/20 text-emerald-400" :
                  delivery.status === "En ruta" ? "bg-[#00E5FF]/20 text-[#00E5FF]" :
                  "bg-yellow-500/20 text-yellow-400"
                }`}>{delivery.status}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

export default function Portfolio() {
  const [activeProject, setActiveProject] = useState(0);
  const ActiveMockup = projects[activeProject].mockup;

  return (
    <section className="relative bg-[#0B0E14] py-24 lg:py-32 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            eyebrow="Ejemplos de proyectos"
            title="Así se ve un proyecto hecho por Nahui Labs"
            description="Cada negocio es diferente. Diseñamos soluciones que se adaptan a tu operación, no al revés. Estos son ejemplos de lo que construimos."
            centered
          />
        </motion.div>

        {/* Tab navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {projects.map((project, index) => (
            <button
              key={project.id}
              onClick={() => setActiveProject(index)}
              className={`px-5 py-2.5 rounded-full text-sm font-body transition-all duration-300 ${
                activeProject === index
                  ? "bg-[#00E5FF]/20 text-[#00E5FF] border border-[#00E5FF]/30"
                  : "bg-[#1C1F26] text-gray-400 border border-white/10 hover:border-white/20"
              }`}
            >
              {project.tab}
            </button>
          ))}
        </motion.div>

        {/* Project display */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid lg:grid-cols-5 gap-8 items-start"
        >
          {/* Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="inline-flex px-3 py-1 rounded-full bg-[#1f41bb]/20 border border-[#1f41bb]/30">
              <span className="text-[#00E5FF] text-xs font-body">{projects[activeProject].client}</span>
            </div>
            <p className="text-gray-300 font-body leading-relaxed">
              {projects[activeProject].description}
            </p>
            <div className="space-y-2 pt-2">
              {[
                "Diseño personalizado a tu marca",
                "Panel de administración incluido",
                "Funciona en celular, tablet y computadora",
                "Soporte y actualizaciones",
              ].map((feature) => (
                <div key={feature} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00E5FF]" />
                  <span className="text-sm text-gray-400 font-body">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Mockup */}
          <div className="lg:col-span-3">
            <motion.div
              key={activeProject}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              <ActiveMockup />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
