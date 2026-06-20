<div align="center">

# React Hooks Lab

### Galería de ejercicios prácticos con React y TypeScript

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-6-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)](https://vite.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

Proyecto de aprendizaje que reúne ejemplos desarrollados durante un curso de Udemy
y ejercicios propios para reforzar mis conocimientos de React.

</div>

---

## Sobre el proyecto

Este repositorio funciona como laboratorio personal y evidencia de mi progreso en
React. Cada sección presenta un ejemplo interactivo relacionado con hooks,
manejo de estado, efectos, referencias, consumo de APIs, reducers y reutilización
de lógica.

Además de acompañar mi formación, el proyecto me permite practicar y documentar
los conocimientos que utilizaré como preparación para futuras evaluaciones y
certificaciones.

> [!NOTE]
> Este es un proyecto educativo independiente. No representa una certificación
> oficial ni está afiliado o respaldado por Udemy.

## Ejemplos incluidos

| Ejemplo | Conceptos principales |
| --- | --- |
| Semáforo manual | `useState`, eventos y renderizado condicional |
| Semáforo automático | `useEffect`, intervalos y limpieza de efectos |
| Semáforo con Custom Hook | Extracción y reutilización de lógica |
| Explorador Pokémon | Consumo de API, estados de carga y contador |
| Control de foco | `useRef` y acceso a elementos del DOM |
| Lista de tareas | `useReducer`, acciones, estado derivado, `localStorage` y validación con Zod |
| Palabras desordenadas con `useState` | Manejo de múltiples estados locales, validación de respuestas y reinicio de juego |
| Palabras desordenadas con `useReducer` | Centralización de la lógica del juego mediante reducer y acciones |
| React Memo | `React.memo`, props, callbacks memorizados y prevención de renderizados innecesarios |
| Contador con `useMemo` | `useMemo`, cálculos costosos, dependencias y optimización de renderizado |
| Comentarios optimistas | `useOptimistic`, `useTransition`, actualización optimista y reversión de estado |
| Información de cliente | `use`, `Suspense`, promesas, fallback de carga y datos asíncronos |
| Perfil profesional | `useContext`, Context API, rutas privadas, login simulado y persistencia de sesión |
| Galería de ejemplos | Navegación por hash y componentes dinámicos |

La galería permite cambiar entre ejercicios sin editar ni comentar código.
También genera rutas compartibles como `#use-state`, `#pokemon`, `#use-ref`,
`#use-reducer`, `#scramble-us-state`, `#scramble-reducer`, `#react-memo` y
`#use-memo`, `#use-optimistic`, `#use-suspense` y `#use-context`.

## Tecnologías

- React 19
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui
- Lucide React
- React Router
- Zod
- Canvas Confetti
- Sonner
- ESLint
- PokéAPI

## Ejecutar localmente

### Requisitos

- Node.js 20 o superior
- npm

### Instalación

```bash
git clone <URL-DEL-REPOSITORIO>
cd hooks-app
npm install
npm run dev
```

Abre la dirección que muestre Vite, normalmente:

```text
http://localhost:5173
```

## Comandos disponibles

| Comando | Descripción |
| --- | --- |
| `npm run dev` | Inicia el servidor de desarrollo |
| `npm run build` | Genera la versión de producción |
| `npm run lint` | Analiza el código con ESLint |
| `npm run preview` | Previsualiza el build de producción |

## Estructura principal

```text
src/
|-- 01-useState/       # Ejercicios de estado
|-- 02-useEffect/      # Ejercicios de efectos
|-- 03-examples/       # Ejemplos que combinan varios conceptos
|-- 04-useRef/         # Ejercicios con referencias
|-- 05-useReducer/     # Ejercicios con reducers y acciones
|   |-- reducer/       # Reducers y estados iniciales
|-- 06-memos/          # Ejercicios de memorización y optimización
|   |-- ui/            # Componentes memorizados para los ejemplos
|-- 07-useOptimistic/  # Ejercicio de UI optimista con comentarios
|-- 08-use-suspense/   # Ejercicio de Suspense y carga de datos
|   |-- api/           # Acciones simuladas para obtener información
|-- 09-useContext/     # Context API, login simulado y rutas privadas
|   |-- context/       # Provider y contexto de usuario
|   |-- data/          # Datos mock para usuarios
|   |-- pages/         # Vistas de login, perfil y página principal
|   |-- router/        # Configuración de rutas y guard privado
|-- components/ui/     # Componentes base de shadcn/ui
|-- hooks/             # Custom Hooks reutilizables
|-- ExamplesGallery.tsx
`-- main.tsx
```

## Objetivos de aprendizaje

- Comprender el ciclo de renderizado de los componentes.
- Administrar estado local con `useState`.
- Ejecutar y limpiar efectos correctamente con `useEffect`.
- Interactuar con elementos del DOM mediante `useRef`.
- Crear Custom Hooks para separar responsabilidades.
- Modelar estados más complejos con `useReducer`.
- Definir acciones para actualizar el estado de forma predecible.
- Persistir datos en `localStorage` y validar la información recuperada.
- Optimizar renderizados con `React.memo`, `useMemo` y `useCallback`.
- Identificar cuándo una función o cálculo debe memorizarse según sus dependencias.
- Crear experiencias de UI optimista con `useOptimistic` y manejar reversión de estado.
- Cargar datos asíncronos con `use`, `Suspense` y fallbacks de espera.
- Compartir estado global con Context API y consumirlo con `useContext`/`use`.
- Proteger rutas con un guard basado en estado de autenticación.
- Persistir una sesión simulada en `localStorage`.
- Consumir APIs y representar estados de carga y error.
- Organizar ejemplos en una aplicación fácil de explorar y compartir.

## Próximos pasos

- [x] Incorporar Context API.
- [ ] Añadir pruebas automatizadas.
- [ ] Mejorar el manejo de errores de las peticiones.
- [ ] Publicar una demo en línea.

## Créditos

Parte de los conceptos y ejercicios se basa en el curso de React que estoy
realizando en Udemy. La organización de la galería, las adaptaciones y la
documentación forman parte de mi práctica personal.

---

<div align="center">
  Hecho como parte de mi proceso de aprendizaje continuo en desarrollo frontend.
</div>
