# Gestos Inolvidables

**Sitio:** https://gestosinolvidables.com
**Desarrollado por:** Technology Inclusion

Plataforma web de **regalos personalizados**. Tiene dos partes: una vitrina de ideas de regalo y un **personalizador de cobijas** en el que el cliente diseña su producto y lo paga en línea, sin hablar con un vendedor.

---

## 1. Vitrina de regalos (`gestosinolvidables.com`)

Es la página de inicio. Muestra unas 20 tarjetas con imagen y nombre de un regalo personalizado.

- **Producto propio:** *Cobijas Gestos Inolvidables*. Lleva al personalizador (`cobijas.gestosinolvidables.com`).
- **Aliados y tiendas externas:** Notas Infinitas, Charly Body Care, Timo & Violet, Great Canvas Prints, Carved Solutions, Lane Woods, Lovevook, Photo Book America, Table Topics y My Tag Alongs, además de varios productos de Etsy, Barnes & Noble y myspotifyplaque.
- Cuando el cliente hace clic en una tarjeta externa, sale a la tienda donde se compra ese producto.

**Para qué sirve:** junta en un solo lugar opciones de regalo que están regadas por internet. También puede funcionar con un modelo de afiliados (comisión por cada venta que llega desde los enlaces).

📷 Capturas: `01` a `03`

---

## 2. Personalizador de cobijas (`cobijas.gestosinolvidables.com`)

### Paso 1: Escoger el personaje
Hay 8 opciones: Niña 1, Niña 2, Adolescente, Mujer Adulta, Niño, Joven, Adulto 1 y Adulto 2.
📷 `04`, `05`

### Paso 2: Escoger el tono de piel
Clara, Intermedia u Oscura.
📷 `06`

### Paso 3: Resumen
Muestra el personaje elegido con el tono de piel (por ejemplo, "Niña 1 con tono de piel Medio") y el botón **Diseñe el personaje**.
📷 `07`

### Editor visual (`/editor`)
La vista previa de la cobija se actualiza en tiempo real con cada cambio. Las herramientas de la barra lateral son:

| Herramienta | Qué permite |
|---|---|
| Fondos | Cambiar el diseño de fondo de la cobija (por ejemplo, "Para Dios yo soy") |
| Texto | Escribir el nombre que va impreso en la cobija |
| Ropa | Escoger entre 3 estilos de prenda y una paleta de colores |
| Cabello | Rubio, rubio oscuro, negro, castaño oscuro, castaño claro, rojo… |
| Ojos | Azul, marrón o verde |
| Lentes | Ninguno o 3 modelos, con color |

📷 `08` a `16`

### Compra
1. El cliente pulsa **Comprar Diseño**.
2. El sistema genera la imagen final del diseño ("Preparando tu diseño…").
3. Redirige al **checkout de Stripe**: el producto es "Manta Personalizada", cuesta unos COP 152.800 o USD 45, se paga con tarjeta, Apple Pay o Link, y pide los datos de envío.

📷 `17`, `18`

---

## Qué automatiza

Sin esta web, el proceso sería ir y venir por WhatsApp: el cliente pide la cobija, el diseñador le manda bocetos, le piden cambios, se cotiza, se confirma el pago y se piden los datos de envío.

Con la web, todo eso pasa solo:

- **El diseño lo hace el cliente:** escoge personaje, rasgos, fondo y nombre, y ve el resultado al instante.
- **El arte final sale automático:** el sistema genera la imagen lista para producción.
- **El cobro sale automático:** el pago con Stripe y los datos de envío quedan capturados en un solo paso.
- **No hace falta un vendedor:** el cliente compra a cualquier hora.

---

## Observaciones

- El checkout de Stripe está en **modo real (live)**.
- En la dirección de envío solo se puede escoger **Estados Unidos, Canadá o México**. Si se quiere vender en Colombia, hay que habilitarlo en la configuración de Stripe.
- La vitrina no tiene buscador ni filtros por ocasión o presupuesto. Se podrían agregar para mejorarla.
