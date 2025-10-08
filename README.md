Spain Info Design System

Un sistema de diseño completo construido con Storybook que muestra componentes de interfaz de usuario, design tokens y ejemplos interactivos.

🚀 Inicio Rápido
Requisitos Previos

Node.js (v16 o superior)

npm o yarn

Instalación

Clonar el repositorio

git clone https://github.com/Diego-Dos-Santos-Accenture/spain.info
cd spain.info


Instalar dependencias

cd storybook
npm install


Iniciar Storybook

cd spain.info
cd storybook
npm install
npm run storybook

⚠️ **Importante**: Todos los comandos npm deben ejecutarse desde el directorio `storybook/`, no desde la raíz del proyecto.


Abrir en el navegador

Local: http://localhost:6006/

Red: http://192.168.0.41:6006/

📦 Scripts Disponibles

npm run storybook – Inicia el servidor de desarrollo

npm run build-storybook – Genera los archivos estáticos para producción

npm run check:inline – Verifica estilos en línea dentro de las historias

🎨 Componentes

El sistema de diseño incluye los siguientes componentes:

Componentes Principales

Accordion – Secciones de contenido colapsables

Alert – Mensajes de notificación con variantes

Button – Botones primarios, secundarios, terciarios y de enlace

Card – Contenedores de contenido con diferentes diseños

Dropdown – Listas de opciones seleccionables

Pagination – Controles de navegación para contenido paginado

Segmented Buttons – Grupos de botones tipo toggle

Slider – Control deslizante con indicadores de progreso

Table – Visualización de datos con capacidad de ordenamiento

Tabs – Interfaz de navegación mediante pestañas

Text Field – Campos de formulario con etiquetas flotantes

Design Tokens

Colores – Colores de marca y tokens semánticos

Tipografía – Familias de fuentes, tamaños y pesos

Layout – Espaciado, sistemas de cuadrícula y puntos de ruptura responsivos

Iconografía – Biblioteca de íconos y guías de uso

🛠 Desarrollo
Estructura del Proyecto
spain.info/
├── storybook/
│   ├── .storybook/          # Configuración de Storybook
│   ├── stories/             # Historias de componentes
│   ├── public/              # Recursos estáticos
│   │   ├── images/          # Imágenes de componentes
│   │   └── styles/          # Archivos CSS
│   └── package.json         # Dependencias
└── README.md                # Este archivo

Añadir Nuevos Componentes

Crear la historia del componente en stories/

Añadir el CSS correspondiente en public/styles/

Incluir imágenes en public/images/

Seguir la metodología BEM para las clases CSS

Fragmentos de Código

Cada componente incluye fragmentos de código HTML, CSS y Stencil TSX en la pestaña “Code” para una reutilización rápida.

🎯 Características

Ejemplos Interactivos – Demostraciones funcionales de los componentes

Fragmentos de Código – HTML, CSS y Stencil listos para copiar y pegar

Design Tokens – Sistema centralizado de color y tipografía

Diseño Responsivo – Enfoque mobile-first

Accesibilidad – Componentes compatibles con WCAG

Metodología BEM – Convención coherente de nombres en CSS

📱 Compatibilidad con Navegadores

Chrome (última versión)

Firefox (última versión)

Safari (última versión)

Edge (última versión)

🤝 Contribución

Seguir el estilo de código existente

Usar la metodología BEM para CSS

Incluir ejemplos interactivos

Actualizar la documentación

📄 Licencia

Este proyecto es propietario y confidencial.
