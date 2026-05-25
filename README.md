# 🧪 NEED BEAUTY — Scientific Clean Beauty D2C Platform (Showcase)

> **Rediseño Premium D2C e Interactivo para Portafolio de Agencia Web (Edición 2026)**

¡Bienvenido al repositorio de **NEED BEAUTY**! Este es un proyecto de portafolio web de nivel premium enfocado en el sector de **Scientific Clean Beauty** (Cosmética Científica y Sostenible). El desarrollo ha sido concebido bajo una **estética orgánica y cálida**, dejando de lado las plantillas genéricas para ofrecer una experiencia interactiva, inmersiva y de alto rendimiento.

El sitio web está optimizado para actuar como la carta de presentación perfecta frente a marcas de lujo D2C (Direct-to-Consumer) que buscan modernizar su infraestructura digital.

---

## 🎨 Resumen de Diseño & Estética
El proyecto adopta un sistema visual sofisticado inspirado en elementos de la naturaleza, la piedra caliza, la arcilla y la luz solar filtrada:

*   **Paleta de Colores HSL:**
    *   `Lino Cálido (Fondo)`: `hsl(36, 40%, 97%)` (#FAF6F0) — Evita el blanco genérico para dar un aspecto editorial de lujo.
    *   `Terracota Arcilla (Conversión)`: `hsl(14, 45%, 65%)` (#D48C70) — Tono cálido de tierra para llamadas a la acción (*CTAs*).
    *   `Verde Salvia (Ciencia y Calma)`: `hsl(75, 15%, 35%)` (#4E5340) — Tono sofisticado que proyecta credibilidad botánica.
*   **Tipografía Curada:**
    *   *Títulos Editoriales:* `Cormorant Garamond` (un serif de alta costura elegante e italiano).
    *   *Texto y Detalles:* `Plus Jakarta Sans` (sans-serif geométrico moderno y ultra-legible).
*   **Recursos Visuales Integrados:** Fotorrealismo de alta gama que abarca el catálogo físico de productos sin usar imágenes de stock genéricas.

---

## ⚙️ Características & Módulos Interactivos

El desarrollo cuenta con tres pilares funcionales programados en JavaScript puro (Vanilla JS):

### 1. Diagnóstico Clínico de Piel (Zero-Party Data)
*   **Qué es:** Un motor de diagnóstico inteligente diseñado mediante cuestionarios interactivos.
*   **Propósito D2C:** Permite recolectar datos directos de los consumidores (*Zero-Party Data*) para eliminar la fricción de compra.
*   **Interactividad:** Las transiciones de carga simulan el análisis en laboratorio. Computa dinámicamente el perfil del cutis y despliega la fórmula recomendada con opción de compra directa.

### 2. Mapeador Molecular Transparente (Efficacy Lab)
*   **Qué es:** Módulo de exploración científica para compuestos activos (Bakuchiol, Escualano, Ácido Hialurónico).
*   **Propósito D2C:** Combate el *greenwashing* educando de manera transparente al consumidor.
*   **Interactividad:** Al pasar el cursor (*hover*), el visor dinámico `#ingredient-display-card` se actualiza con una transición de opacidad suave mostrando el origen geográfico, la concentración activa y los resultados de eficacia clínica.

### 3. Bolsa de Belleza con Mecánica de Suscripción 3.0
*   **Qué es:** Carrito lateral deslizante (*off-canvas*) de alta fidelidad.
*   **Propósito D2C:** Promueve la recurrencia de compra mediante modelos de reposición automáticos.
*   **Interactividad:** Suma de productos en tiempo real, control de unidades e integración de un interruptor de **Suscripción 3.0** que aplica un **15% de descuento automático y dinámico** sobre el subtotal del carrito.

### 4. Micro-interacciones Dewy
*   *Scroll Reveal:* Carga asíncrona de tarjetas de productos y textos con desplazamientos ascendentes mediante `IntersectionObserver`.
*   *Línea de Trazabilidad:* Animación cíclica en la sección de cadena de suministro circular (Cultivo, Destilación, Envase Perpetuo).

---

## 🛠️ Tecnologías Empleadas

El desarrollo se mantiene libre de frameworks pesados y plugins lentos para garantizar tiempos de carga menores a **1.2 segundos** (Core Web Vitals óptimos):
*   **Estructura:** HTML5 Semántico e inclusivo (etiquetas ARIA de accesibilidad).
*   **Estilos:** Vanilla CSS3 con variables HSL personalizadas y animaciones `@keyframes`.
*   **Lógica:** JavaScript ES6 puro de alto rendimiento.

---

## 📁 Estructura del Proyecto

```bash
d2c-website/
├── assets/
│   └── images/
│       ├── model_campaign.png    # Imagen de Campaña - Rostro de Marca
│       ├── product_campaign.png  # Bodegón - Botanical Glow Elixir
│       ├── squalane_cream.png    # Bodegón - Squalane Dew Cream
│       └── mineral_shield.png    # Bodegón - Mineral Shield Sunscreen
├── index.html                     # Maquetación Semántica y SEO
├── styles.css                     # Sistema de Diseño y Responsividad
├── app.js                         # Lógica Interactiva y Carrito
└── README.md                      # Documentación del Portafolio
```

---

## 🚀 Cómo Ejecutar el Proyecto Localmente

1.  **Clona este repositorio:**
    ```bash
    git clone https://github.com/tu-usuario/need-beauty.git
    ```
2.  **Entra en la carpeta:**
    ```bash
    cd need-beauty
    ```
3.  **Ejecuta el servidor local:**
    Puedes abrir el archivo `index.html` directamente en tu navegador. Sin embargo, para disfrutar de la experiencia interactiva completa y evitar restricciones de CORS locales, te recomendamos levantarlo con un servidor local básico:
    *   *Si usas VS Code:* Instala la extensión **Live Server** y haz clic en "Go Live".
    *   *Desde la terminal (requiere Python):*
        ```bash
        python -m http.server 8000
        ```
        Luego abre `http://localhost:8000` en tu navegador.

---

## 🌐 Publicación en GitHub Pages (Gratis en 2 clics)

Para compartir este proyecto vivo con reclutadores y clientes:
1.  Sube este repositorio a tu cuenta de **GitHub**.
2.  Ve a la pestaña de **Settings** (Configuración) de tu repositorio.
3.  En la barra lateral izquierda, selecciona **Pages** (Páginas).
4.  En la sección *Build and deployment*, bajo *Source*, selecciona **Deploy from a branch**.
5.  En *Branch*, elige `main` (o la rama principal) y la carpeta `/ (root)`. Haz clic en **Save**.
6.  ¡Listo! En unos minutos, GitHub te dará un enlace público permanente de tu portafolio.

---

## ✍️ Desarrollado por
*   **Axl Peralta** — (https://www.linkedin.com/in/luis-axl-peralta-contreras-244433345/)
*   *Desarrollo diseñado bajo estándares de excelencia D2C en 2026.*
