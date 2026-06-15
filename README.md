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
manejo de estado, efectos, referencias, consumo de APIs y reutilización de lógica.

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
| Galería de ejemplos | Navegación por hash y componentes dinámicos |

La galería permite cambiar entre ejercicios sin editar ni comentar código.
También genera rutas compartibles como `#use-state`, `#pokemon` y `#use-ref`.

## Tecnologías

- React 19
- TypeScript
- Vite
- Tailwind CSS
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
├── 01-useState/       # Ejercicios de estado
├── 02-useEffect/      # Ejercicios de efectos
├── 03-examples/       # Ejemplos que combinan varios conceptos
├── 04-useRef/         # Ejercicios con referencias
├── hooks/             # Custom Hooks reutilizables
├── ExamplesGallery.tsx
└── main.tsx
```

## Objetivos de aprendizaje

- Comprender el ciclo de renderizado de los componentes.
- Administrar estado local con `useState`.
- Ejecutar y limpiar efectos correctamente con `useEffect`.
- Interactuar con elementos del DOM mediante `useRef`.
- Crear Custom Hooks para separar responsabilidades.
- Consumir APIs y representar estados de carga y error.
- Organizar ejemplos en una aplicación fácil de explorar y compartir.

## Próximos pasos

- [ ] Agregar ejemplos de `useMemo` y `useCallback`.
- [ ] Incorporar `useReducer` y Context API.
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
