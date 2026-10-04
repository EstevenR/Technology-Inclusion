# ParkingApp SaaS

Plataforma web para administrar parqueaderos: controla la entrada y salida de vehículos por placa, cobra por tiempo de permanencia, gestiona mensualidades de clientes frecuentes y genera facturas con seguimiento de lo que cada cliente debe.

## Qué permite hacer
- **Ingreso y salida de vehículos:** registro por placa con fecha y hora exactas; al salir se calcula el cobro por tiempo.
- **Clientes y vehículos:** base de clientes con sus vehículos asociados.
- **Mensualidades (membresías):** planes por hora, día, semana, mes o año.
- **Facturación:** facturas generadas automáticamente, registro de pagos y control de deudas.
- **Tarifas configurables:** precios según tiempo, día o condiciones especiales.
- **Panel de control:** resumen con reservas, parqueaderos y total pagado.
- **Multiempresa y roles:** cada organización ve solo sus datos; roles de superadministrador, administrador, gerente, operario y usuario.

## Páginas
| Página | Función |
|---|---|
| Inicio | Presentación del producto |
| Iniciar sesión / Registro | Acceso y creación de cuenta |
| Demo | Acceso a la demostración |
| Panel | Resumen de actividad |
| Nuevo ingreso | Registrar entrada de un vehículo |
| Clientes | Gestión de clientes |
| Vehículos | Gestión de vehículos |
| Entradas y salidas | Historial de sesiones de parqueo |
| Mensualidades | Gestión de membresías |
| Facturas | Facturas y pagos |

## Tecnología
Next.js, React, TypeScript, PostgreSQL con Prisma, NextAuth, Tailwind CSS y shadcn/ui, con validación Zod. Listo para Docker y Vercel.
