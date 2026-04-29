# ArgenCloud - Documentación de Proyecto V1.1.5

## 1. Introducción
**ArgenCloud** es una plataforma avanzada de monitoreo de infraestructura en la nube, diseñada para proporcionar a los administradores de TI una visión clara, en tiempo real y accionable de sus recursos distribuidos. El objetivo principal es centralizar métricas críticas, gestión de sucursales y alertas en una interfaz intuitiva y profesional.

---

## 2. Especificaciones Técnicas
*   **Framework**: React 18+ (Vite)
*   **Lenguaje**: TypeScript (Tipado estricto para mayor robustez)
*   **Estilos**: Tailwind CSS (Optimización de bundle y diseño sistemático)
*   **Iconografía**: Lucide React
*   **Animaciones**: Framer Motion (Transiciones de ruta y estados)
*   **Visualización**: Recharts (Gráficos dinámicos de rendimiento)

---

## 3. Design System & UI Documentation

### 3.1 Filosofía de Diseño
El diseño de ArgenCloud se basa en la **limpieza visual, jerarquía clara y eficiencia**. Se utiliza una estética "Technical Modern" que transmite confianza y precisión.

### 3.2 Paleta de Colores (Brand Identity)
*   **Primario (Action)**: `#2563EB` (Blue-600) - Utilizado para énfasis, branding y botones principales.
*   **Fondo de Interfaz**: `#F9FAFB` (Gray-50) - Para reducir la fatiga visual.
*   **Superficies (Cards)**: `#FFFFFF` - Con sombras suaves (`shadow-sm`) para dar profundidad.
*   **Semántica**:
    *   Éxito: Verde (Uptime, métricas positivas)
    *   Alerta: Rojo (Capacidad crítica, desconexiones)
    *   Advertencia: Ámbar (Mantenimientos previstos)

### 3.3 Tipografía
*   **Familia**: Inter (Sans-serif)
*   **Criterio**:
    *   Títulos: `font-bold`, `tracking-tight`, gris oscuro (`text-gray-900`).
    *   Cuerpo/Datos: `font-medium`, gris neutro (`text-gray-600`).
    *   Metadatos: `text-xs`, gris claro para información secundaria.

### 3.4 Componentes de Interfaz
1.  **Sidebar Dinámico**: Soporta estados Expandido, Contraído y modo Móvil (Overlay). Incluye navegación por secciones y branding persistente.
2.  **Smart Header**: 
    *   En Escritorio: Búsqueda global a la izquierda, herramientas a la derecha.
    *   En Tablet: Búsqueda agrupada con herramientas para optimizar espacio.
    *   En Móvil: Búsqueda expansiva que prioriza la ergonomía.
3.  **Bento Metrics**: Tarjetas de métricas con micro-gráficos integrados para visualización rápida de tendencias.

---

## 4. UX & Responsive Strategy

### 4.1 Adaptabilidad (Responsive Design)
El proyecto implementa una estrategia **Mobile-First** con ajustes específicos para 4 breakpoints principales:
*   **Mobile (Default)**: UI compacta, sidebar oculto con menú burger.
*   **Tablet Vertical (md)**: Búsqueda inteligente agrupada, padding ajustado.
*   **Tablet Horizontal (lg)**: Sidebar persistente en modo contraído si se desea, tablas optimizadas (ocultando acciones no críticas).
*   **Desktop (xl)**: Experiencia completa con columnas de información expandidas.

### 4.2 Características Especiales V1.1.5
*   **Dashboard Personalizado**: "Welcome Header" con saludo dinámico, fecha real formateada y widget de clima integrado.
*   **Seguridad Visual**: Control de acceso simulado en tablas de administración con estados de actividad (online/offline).
*   **Performance**: Carga diferida de componentes y animaciones suaves para evitar el parpadeo de la interfaz.

---

## 5. Próximos Pasos (Roadmap)
1. Integración de base de datos en tiempo real (Firebase/Supabase).
2. Sistema de reportes descargables automáticos.
3. Modo Oscuro (Dark Mode) nativo.

---
**Desarrollado para ArgenCloud - 2024**
*Documentación técnica generada para presentación profesional.*
