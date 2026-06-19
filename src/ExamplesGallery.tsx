import { useEffect, useState, type ComponentType } from 'react'
import { ChevronDown, FlaskConical, Layers } from 'lucide-react'
import { HooksApp } from './HooksApp'
import { TrafficLight } from './01-useState/TrafficLight'
import { TrafficLightWithEffect } from './02-useEffect/TrafficLightWithEffect'
import { TrafficLightWithHook } from './02-useEffect/TrafficLightWithHook'
import { PokemonPage } from './03-examples/PokemonPage'
import { FocusScreen } from './04-useRef/FocusScreen'
import { TasksApp } from './05-useReducer/TaskApp'
import { ScrambleWords } from './05-useReducer/ScrambleWords'
import { ScrambleWordsUseState } from './05-useReducer/ScrambleWordsUseState'
import { MemoHook } from './06-memos/MemoHook'
import { MemoCounter } from './06-memos/MemoCounter'

type Example = {
  id: string
  title: string
  description: string
  component: ComponentType
  group: string
}

const examples: Example[] = [
  {
    id: 'inicio',
    title: 'Inicio',
    description: 'Componente principal del curso',
    component: HooksApp,
    group: 'Proyecto',
  },
  {
    id: 'use-state',
    title: 'useState',
    description: 'Semáforo controlado con botones',
    component: TrafficLight,
    group: 'Fundamentos',
  },
  {
    id: 'use-effect',
    title: 'useEffect',
    description: 'Semáforo automático con temporizador',
    component: TrafficLightWithEffect,
    group: 'Fundamentos',
  },
  {
    id: 'custom-hook',
    title: 'Custom Hook',
    description: 'Lógica del semáforo en un hook reutilizable',
    component: TrafficLightWithHook,
    group: 'Reutilización',
  },
  {
    id: 'pokemon',
    title: 'Pokémon',
    description: 'Consumo de API y contador',
    component: PokemonPage,
    group: 'Integraciones',
  },
  {
    id: 'use-ref',
    title: 'useRef',
    description: 'Control del foco de un input',
    component: FocusScreen,
    group: 'DOM',
  },
  {
    id: 'use-reducer',
    title: 'useReducer',
    description: 'Lista de tareas con reducer y localStorage',
    component: TasksApp,
    group: 'Estado avanzado',
  },
  {
    id: 'scramble-us-state',
    title: 'Scramble useState',
    description: 'Juego de palabras con useState',
    component: ScrambleWords,
    group: 'Estado avanzado',
  },
  {
    id: 'scramble-reducer',
    title: 'Scramble Reducer',
    description: 'Juego de palabras con reducer',
    component: ScrambleWordsUseState,
    group: 'Estado avanzado',
  },
  {
    id: 'react-memo',
    title: 'React Memo',
    description: 'Componentes y callbacks memorizados',
    component: MemoHook,
    group: 'Optimización',
  },
  {
    id: 'use-Memo',
    title: 'useMemo',
    description: 'Contador con cálculo memorizado',
    component: MemoCounter,
    group: 'Optimización',
  },
]

const getExampleFromHash = () => {
  const id = window.location.hash.slice(1)
  return examples.find((example) => example.id === id) ?? examples[0]
}

export const ExamplesGallery = () => {
  const [selectedExample, setSelectedExample] = useState(getExampleFromHash)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const SelectedComponent = selectedExample.component

  useEffect(() => {
    const handleHashChange = () => {
      setSelectedExample(getExampleFromHash())
      setIsMenuOpen(false)
    }

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/95 shadow-xl shadow-black/20 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
          <div className="relative flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <div className="min-w-0">
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
                <FlaskConical size={15} aria-hidden="true" />
                React Hooks Lab
              </p>
              <div className="mt-1 flex flex-wrap items-end gap-x-3 gap-y-1">
                <h1 className="text-xl font-bold tracking-normal text-white sm:text-2xl">
                  Galería de ejemplos
                </h1>
                <p className="text-sm font-medium text-slate-400">
                  {selectedExample.group} / {selectedExample.title}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <div className="flex w-fit items-center gap-2 rounded-md border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-slate-300">
                <Layers size={15} aria-hidden="true" />
                <span className="font-semibold text-white">{examples.length}</span>
                <span>ejercicios</span>
              </div>

              <button
                type="button"
                aria-expanded={isMenuOpen}
                aria-controls="examples-menu"
                onClick={() => setIsMenuOpen((current) => !current)}
                className="inline-flex items-center gap-2 rounded-md border border-cyan-300/40 bg-cyan-300 px-3 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200 cursor-pointer"
              >
                Ejercicios
                <ChevronDown
                  size={16}
                  aria-hidden="true"
                  className={`transition-transform ${isMenuOpen ? 'rotate-180' : ''}`}
                />
              </button>
            </div>

            {isMenuOpen && (
              <nav
                id="examples-menu"
                className="absolute right-0 top-[calc(100%+0.75rem)] grid max-h-[70vh] w-full gap-2 overflow-y-auto rounded-lg border border-white/10 bg-slate-900 p-3 shadow-2xl shadow-black/50 sm:w-[420px] sm:grid-cols-2"
                aria-label="Ejemplos del proyecto"
              >
                {examples.map((example) => {
                  const isActive = selectedExample.id === example.id

                  return (
                    <a
                      key={example.id}
                      href={`#${example.id}`}
                      title={example.description}
                      aria-current={isActive ? 'page' : undefined}
                      onClick={() => setIsMenuOpen(false)}
                      className={`rounded-md border px-3 py-2.5 text-left transition cursor-pointer ${isActive
                        ? 'border-cyan-300 bg-cyan-300 text-slate-950 shadow-lg shadow-cyan-950/40'
                        : 'border-white/15 bg-white/[0.04] text-slate-200 hover:border-cyan-300/70 hover:bg-white/10'
                        }`}
                    >
                      <span
                        className={`block text-[11px] font-semibold leading-4 ${isActive ? 'text-slate-700' : 'text-slate-400'
                          }`}
                      >
                        {example.group}
                      </span>
                      <span className="block text-sm font-semibold leading-5">
                        {example.title}
                      </span>
                      <span
                        className={`mt-1 block text-xs leading-5 ${isActive ? 'text-slate-700' : 'text-slate-400'
                          }`}
                      >
                        {example.description}
                      </span>
                    </a>
                  )
                })}
              </nav>
            )}
          </div>
        </div>
      </header>

      <main className="bg-slate-950">
        <SelectedComponent key={selectedExample.id} />
      </main>
    </div>
  )
}
