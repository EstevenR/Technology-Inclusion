export interface ProjectOutcome {
  value: string;
  label: string;
}

export interface ProjectScreenshot {
  src: string;
  alt: string;
}

export interface ProjectCase {
  id: "barberia" | "parking" | "always-style" | "gestos-inolvidables";
  category: string;
  eyebrow: string;
  title: string;
  summary: string;
  challenge: string;
  solution: string;
  capabilities: string[];
  outcomes: ProjectOutcome[];
  technologies: string[];
  screenshots: ProjectScreenshot[];
  liveUrl?: string;
}

export const projectCases: ProjectCase[] = [
  {
    id: "barberia",
    category: "Gestión de citas y finanzas",
    eyebrow: "Aplicación web para barberías",
    title: "Barbery",
    summary:
      "Centralizamos la agenda, los clientes, los servicios y el control financiero en una aplicación diseñada para trabajar desde el celular.",
    challenge:
      "La operación diaria podía quedar repartida entre conversaciones, anotaciones y cuentas manuales. Esto dificultaba confirmar citas, consultar clientes y entender el resultado financiero del negocio.",
    solution:
      "Desarrollamos una plataforma web instalable en el celular para que el barbero administre su negocio y comparta un enlace de reservas con sus clientes.",
    capabilities: [
      "Agenda con confirmación y rechazo de citas",
      "Base de datos de clientes, servicios y precios",
      "Reservas públicas sin crear una cuenta",
      "Servicios en barbería o a domicilio",
      "Control de ingresos, gastos y ganancias",
      "Proyecciones financieras y servicios más rentables",
    ],
    outcomes: [
      {
        value: "1 plataforma",
        label: "para citas, clientes, servicios y finanzas",
      },
      {
        value: "Sin registro",
        label: "para que los clientes reserven en línea",
      },
    ],
    technologies: ["Next.js", "FastAPI", "PostgreSQL", "PWA"],
    liveUrl: "https://app-barberia-gray.vercel.app",
    screenshots: [
      {
        src: "/proyectos/barberia/capturas-barbery/01-inicio-1.jpg",
        alt: "Panel principal de Barbery con las citas pendientes del día",
      },
      {
        src: "/proyectos/barberia/capturas-barbery/02-citas-activas-1.jpg",
        alt: "Gestión de citas activas, realizadas y canceladas",
      },
      {
        src: "/proyectos/barberia/capturas-barbery/03-calendario.jpg",
        alt: "Calendario mensual con las citas agendadas",
      },
      {
        src: "/proyectos/barberia/capturas-barbery/04-servicios.jpg",
        alt: "Gestión de servicios y precios del negocio",
      },
      {
        src: "/proyectos/barberia/capturas-barbery/06-disponibilidad-1.jpg",
        alt: "Configuración del horario semanal de atención",
      },
    ],
  },
  {
    id: "parking",
    category: "Digitalización operativa",
    eyebrow: "Parqueadero con más de 300 vehículos",
    title: "ParkingApp",
    summary:
      "Llevamos el control del parqueadero del cuaderno a una plataforma que organiza la operación, los cobros y la cartera en tiempo real.",
    challenge:
      "El negocio dependía de registros manuales para controlar vehículos y pagos. La falta de información centralizada consumía tiempo y hacía más difícil identificar saldos pendientes.",
    solution:
      "Construimos un sistema de gestión para registrar entradas y salidas, calcular cobros, administrar mensualidades y consultar con claridad quién debe dinero.",
    capabilities: [
      "Registro de entradas y salidas por placa",
      "Control de aforo y sesiones activas",
      "Gestión de clientes, vehículos y mensualidades",
      "Tarifas flexibles y facturación automática",
      "Seguimiento de pagos y cartera pendiente",
      "Acceso por roles desde computador o celular",
    ],
    outcomes: [
      {
        value: "35 %",
        label: "de reducción documentada en la morosidad",
      },
      {
        value: "40 h",
        label: "de trabajo administrativo ahorradas al mes",
      },
    ],
    technologies: ["Next.js", "PostgreSQL", "Prisma", "PWA"],
    screenshots: [
      {
        src: "/proyectos/parking/01-inicio.png",
        alt: "Página de presentación de ParkingApp",
      },
      {
        src: "/proyectos/parking/05-dashboard.png",
        alt: "Panel de control con reservas y parqueaderos activos",
      },
      {
        src: "/proyectos/parking/06-check-in.png",
        alt: "Registro rápido de entrada de un vehículo",
      },
      {
        src: "/proyectos/parking/10-membresias.png",
        alt: "Gestión de mensualidades y membresías",
      },
    ],
  },
  {
    id: "always-style",
    category: "Presencia digital y ventas por WhatsApp",
    eyebrow: "Sitio web para marca de bolsos",
    title: "Always · Olwis Style",
    summary:
      "Diseñamos y desarrollamos el sitio web de esta marca de bolsos y morrales en cuero vegano de Medellín, pensado para mostrar la colección y vender por WhatsApp.",
    challenge:
      "La marca no tenía un lugar propio en internet para mostrar su colección completa: dependía de publicaciones sueltas en redes sociales, sin un catálogo ordenado con precios, materiales y disponibilidad.",
    solution:
      "Creamos una landing page de una sola página que presenta la colección, el detalle de materiales y una campaña de marca, con cada botón de compra llevando directo al catálogo de WhatsApp Business de la marca.",
    capabilities: [
      "Catálogo visual de la colección con precios y descuentos",
      "Selector de 'outfit del día' de lunes a viernes",
      "Galería de detalles de materiales y acabados",
      "Integración directa con el catálogo de WhatsApp Business",
      "Diseño responsive publicado en Netlify",
    ],
    outcomes: [
      {
        value: "0 fricción",
        label: "la compra se cierra directo por WhatsApp, sin carrito",
      },
      {
        value: "1 sitio",
        label: "para mostrar toda la colección y la identidad de marca",
      },
    ],
    technologies: ["Netlify", "WhatsApp Business"],
    liveUrl: "https://always-style.netlify.app",
    screenshots: [
      {
        src: "/proyectos/always-style/evidencia-always/01-inicio-la-semana.jpg",
        alt: "Sección 'Una semana, un bolso para cada día'",
      },
      {
        src: "/proyectos/always-style/evidencia-always/02-coleccion-bolsos.jpg",
        alt: "Carrusel de la colección de bolsos con precios",
      },
      {
        src: "/proyectos/always-style/evidencia-always/03-detalles-1.jpg",
        alt: "Detalles de materiales y acabados de los bolsos",
      },
      {
        src: "/proyectos/always-style/evidencia-always/05-campana-1.jpg",
        alt: "Campaña fotográfica de la colección en Medellín",
      },
      {
        src: "/proyectos/always-style/evidencia-always/07-campana-footer.jpg",
        alt: "Pie de página con redes sociales y contacto",
      },
    ],
  },
  {
    id: "gestos-inolvidables",
    category: "Producto personalizado con pago en línea",
    eyebrow: "Regalos a medida, diseñados y pagados sin vendedor",
    title: "Gestos Inolvidables",
    summary:
      "Una vitrina de regalos personalizados que incluye un personalizador propio: el cliente diseña su cobija en tiempo real y la paga en línea, sin hablar con un vendedor.",
    challenge:
      "Sin esta plataforma, vender un regalo personalizado significa ir y venir por WhatsApp: pedir referencias, mandar bocetos, cotizar, confirmar el pago y pedir los datos de envío a mano, uno por uno.",
    solution:
      "Construimos un personalizador visual donde el cliente arma su cobija paso a paso (personaje, tono de piel, fondo, nombre, ropa, cabello, ojos y lentes) viendo el resultado en tiempo real, genera el arte final automáticamente y paga de inmediato con Stripe.",
    capabilities: [
      "Editor visual en tiempo real con 8 personajes y personalización completa",
      "Generación automática del arte final listo para producción",
      "Checkout con Stripe: tarjeta, Apple Pay o Link, en COP o USD",
      "Vitrina con más de 20 ideas de regalo, propias y de tiendas aliadas",
    ],
    outcomes: [
      {
        value: "0 vendedor",
        label: "el cliente diseña, paga y queda listo para producción sin intervención humana",
      },
      {
        value: "8 pasos",
        label: "de personalización visual antes de llegar al pago",
      },
    ],
    technologies: ["Stripe", "Editor personalizado en tiempo real"],
    liveUrl: "https://gestosinolvidables.com",
    screenshots: [
      {
        src: "/proyectos/gestos-inolvidables/capturas-gestos-inolvidables/01-home-inicio.jpg",
        alt: "Vitrina de ideas de regalo personalizadas",
      },
      {
        src: "/proyectos/gestos-inolvidables/capturas-gestos-inolvidables/04-cobijas-paso1-personajes.jpg",
        alt: "Personalizador de cobijas: selección de personaje",
      },
      {
        src: "/proyectos/gestos-inolvidables/capturas-gestos-inolvidables/16-editor-diseno-final-con-nombre.jpg",
        alt: "Editor visual con el diseño final personalizado",
      },
      {
        src: "/proyectos/gestos-inolvidables/capturas-gestos-inolvidables/11-editor-ropa-cambiada.jpg",
        alt: "Editor visual cambiando la ropa del personaje en tiempo real",
      },
      {
        src: "/proyectos/gestos-inolvidables/capturas-gestos-inolvidables/18-checkout-stripe.jpg",
        alt: "Pago en línea con Stripe",
      },
    ],
  },
];
