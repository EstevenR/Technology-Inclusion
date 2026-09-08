export interface ProjectOutcome {
  value: string;
  label: string;
}

export interface ProjectCase {
  id: "barberia" | "parking";
  category: string;
  eyebrow: string;
  title: string;
  summary: string;
  challenge: string;
  solution: string;
  capabilities: string[];
  outcomes: ProjectOutcome[];
  technologies: string[];
}

export const projectCases: ProjectCase[] = [
  {
    id: "barberia",
    category: "Gestión de citas y finanzas",
    eyebrow: "Aplicación móvil para barberías",
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
  },
];

