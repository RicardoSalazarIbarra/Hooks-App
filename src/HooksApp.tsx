import { BookOpen, Boxes, Code, GraduationCap } from 'lucide-react'

const highlights = [
  {
    label: 'Hooks principales',
    value: '6',
    detail: 'Estado, efectos, referencias, reducers y memorización.',
  },
  {
    label: 'Ejercicios prácticos',
    value: '10',
    detail: 'Componentes interactivos para practicar conceptos reales.',
  },
  {
    label: 'Stack moderno',
    value: 'TS',
    detail: 'React, TypeScript, Vite, Tailwind CSS y shadcn/ui.',
  },
]

const learningSections = [
  'Estado local y renderizado condicional',
  'Efectos, intervalos y limpieza',
  'Custom Hooks y reutilización de lógica',
  'Reducers, acciones y persistencia',
  'Optimización con React.memo, useMemo y useCallback',
]

export const HooksApp = () => {
  return (
    <section className="min-h-[calc(100vh-160px)] bg-slate-950 px-4 py-10 text-white sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 rounded-md border border-cyan-300/30 bg-cyan-300/10 px-3 py-2 text-sm font-medium text-cyan-100">
            <GraduationCap size={18} aria-hidden="true" />
            Laboratorio personal de React Hooks
          </div>

          <div className="space-y-5">
            <h1 className="max-w-3xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              React Hooks Lab
            </h1>
            <p className="max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
              Una galería de ejercicios construida para practicar React con TypeScript,
              documentar avances del curso y reforzar conceptos mediante ejemplos
              interactivos.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {highlights.map((item) => (
              <article
                key={item.label}
                className="rounded-lg border border-white/10 bg-white/4 p-4"
              >
                <p className="text-3xl font-bold text-white">{item.value}</p>
                <h2 className="mt-3 text-sm font-semibold text-cyan-100">{item.label}</h2>
                <p className="mt-2 text-sm leading-6 text-slate-400">{item.detail}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="rounded-lg border border-white/10 bg-white/4 p-5 shadow-2xl shadow-black/30">
          <div className="mb-6 flex items-center justify-between gap-4 border-b border-white/10 pb-5">
            <div>
              <p className="text-sm font-medium text-emerald-300">Ruta de aprendizaje</p>
              <h2 className="mt-1 text-2xl font-bold text-white">Conceptos practicados</h2>
            </div>
            <div className="flex size-11 items-center justify-center rounded-md bg-emerald-400 text-slate-950">
              <BookOpen size={22} aria-hidden="true" />
            </div>
          </div>

          <div className="space-y-3">
            {learningSections.map((section, index) => (
              <div
                key={section}
                className="flex items-start gap-3 rounded-md border border-white/10 bg-slate-900/70 p-3"
              >
                <span className="flex size-7 shrink-0 items-center justify-center rounded-md bg-white text-sm font-bold text-slate-950">
                  {index + 1}
                </span>
                <p className="pt-1 text-sm leading-6 text-slate-200">{section}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <div className="flex items-center gap-3 rounded-md border border-amber-300/20 bg-amber-300/10 p-3 text-amber-100">
              <Boxes size={20} aria-hidden="true" />
              <span className="text-sm font-medium">Ejemplos organizados por tema</span>
            </div>
            <div className="flex items-center gap-3 rounded-md border border-rose-300/20 bg-rose-300/10 p-3 text-rose-100">
              <Code size={20} aria-hidden="true" />
              <span className="text-sm font-medium">Código separado por módulos</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
