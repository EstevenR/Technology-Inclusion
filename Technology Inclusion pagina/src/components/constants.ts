export const SECTOR_OPTIONS = [
  { value: "Tienda minorista", label: "Tienda minorista / E-commerce" },
  { value: "Restaurante-Bar", label: "Restaurante / Bar" },
  { value: "Servicios profesionales", label: "Servicios Profesionales (Consultor, abogado, etc.)" },
  { value: "Manufactura ligera", label: "Manufactura Ligera" },
  { value: "Salud y Bienestar", label: "Salud y Bienestar (Gimnasio, estética, etc.)" },
  { value: "Otro", label: "Otro" },
];

export const USER_ROLE_OPTIONS = [
  { value: "Propietario(a)-Gerente", label: "Propietario(a) / Gerente" },
  { value: "Líder de Área", label: "Líder de Área" },
  { value: "Administrativo-Operativo", label: "Administrativo / Operativo" },
];

export const EMPLOYEE_RANGE_OPTIONS = [
  { value: "1-5", label: "1 a 5 personas" },
  { value: "6-15", label: "6 a 15 personas" },
  { value: "16-50", label: "16 a 50 personas" },
  { value: "+50", label: "Más de 50 personas" },
];

export const KEY_AREAS_OPTIONS = [
  "Ventas y Marketing",
  "Gestión de Clientes (CRM)",
  "Compras y Proveedores",
  "Producción o Preparación de Servicios",
  "Inventario y Almacén",
  "Logística y Envíos",
  "Finanzas y Contabilidad",
  "Gestión Post-venta",
];

export const MANUAL_PROCESS_OPTIONS = [
  "Generación de cotizaciones",
  "Facturación y cobros",
  "Control de inventario",
  "Agenda y reservas",
  "Conciliación bancaria y gastos",
  "Generación de reportes",
  "Seguimiento a clientes",
];

export const CUSTOMER_ACQUISITION_OPTIONS = [
    { value: "Recomendaciones y referidos", label: "Recomendaciones y referidos" },
    { value: "Redes Sociales", label: "Redes Sociales" },
    { value: "Página Web / SEO", label: "Página Web / SEO" },
    { value: "Publicidad digital (Pauta)", label: "Publicidad digital (Pauta)" },
    { value: "Contacto en frío (Llamadas, visitas)", label: "Contacto en frío (Llamadas, visitas)" },
];

export const CUSTOMER_COMMUNICATION_OPTIONS = [
    "WhatsApp personal o Business",
    "Correo electrónico manual",
    "Sistema de tickets o CRM",
    "Llamadas telefónicas",
];

export const DIAN_INVOICING_OPTIONS = [
    { value: "Integrado a mis procesos", label: "Sí, está integrado a mis procesos" },
    { value: "Portal DIAN", label: "Sí, pero lo hago directo en el portal de la DIAN" },
    { value: "En proceso", label: "No, estoy en proceso de implementación" },
    { value: "No aplica", label: "No aplica para mi negocio" },
];

export const REPETITIVE_HOURS_OPTIONS = [
    { value: "0-5", label: "0 a 5 horas" },
    { value: "6-15", label: "6 a 15 horas" },
    { value: "16-30", label: "16 a 30 horas" },
    { value: "+30", label: "Más de 30 horas" },
];

export const ERROR_FREQUENCY_OPTIONS = [
    { value: "Rara vez", label: "Rara vez" },
    { value: "Ocasionalmente", label: "Ocasionalmente" },
    { value: "Frecuentemente", label: "Frecuentemente, es un dolor de cabeza" },
    { value: "No estoy seguro", label: "No estoy seguro" },
];

export const CURRENT_TOOLS_OPTIONS = [
    "Suite de oficina (Google/Microsoft)",
    "Software Contable (Siigo, Alegra, etc.)",
    "Terminal Punto de Venta (POS)",
    "Gestor de Clientes (CRM)",
    "Plataforma de E-commerce",
    "Herramientas de BI (Power BI, etc.)",
    "Automatizaciones (Zapier, Bots, etc.)",
    "Ninguna, usamos principalmente Excel y papel",
];

export const BIGGEST_OBSTACLE_OPTIONS = [
    { value: "Falta de tiempo y estrés operativo", label: "Falta de tiempo y estrés operativo" },
    { value: "Errores constantes y quejas de clientes", label: "Errores constantes y quejas de clientes" },
    { value: "No saber qué pasa con las finanzas", label: "No saber qué pasa con las finanzas en tiempo real" },
    { value: "Poca capacidad para vender más", label: "Poca capacidad para vender y atender a más clientes" },
    { value: "Dificultad para delegar con confianza", label: "Dificultad para delegar con confianza" },
];

export const INVESTMENT_BUDGET_OPTIONS = [
    { value: "No definido", label: "No lo he definido, espero que la solución se pague sola" },
    { value: "< 2M COP", label: "Sí, un monto inicial bajo (menos de $2M COP)" },
    { value: "> 2M COP", label: "Sí, estoy dispuesto a invertir si el retorno es claro" },
    { value: "Evaluar según propuesta", label: "Prefiero evaluarlo según el potencial de la solución" },
];