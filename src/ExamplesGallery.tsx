import { useEffect, useState, type ComponentType } from 'react'
import { HooksApp } from './HooksApp'
import { TrafficLight } from './01-useState/TrafficLight'
import { TrafficLightWithEffect } from './02-useEffect/TrafficLightWithEffect'
import { TrafficLightWithHook } from './02-useEffect/TrafficLightWithHook'
import { PokemonPage } from './03-examples/PokemonPage'
import { FocusScreen } from './04-useRef/FocusScreen'

type Example = {
  id: string
  title: string
  description: string
  component: ComponentType
}

const examples: Example[] = [
  {
    id: 'inicio',
    title: 'Inicio',
    description: 'Componente principal del curso',
    component: HooksApp,
  },
  {
    id: 'use-state',
    title: 'useState',
    description: 'Semáforo controlado con botones',
    component: TrafficLight,
  },
  {
    id: 'use-effect',
    title: 'useEffect',
    description: 'Semáforo automático con temporizador',
    component: TrafficLightWithEffect,
  },
  {
    id: 'custom-hook',
    title: 'Custom Hook',
    description: 'Lógica del semáforo en un hook reutilizable',
    component: TrafficLightWithHook,
  },
  {
    id: 'pokemon',
    title: 'Pokémon',
    description: 'Consumo de API y contador',
    component: PokemonPage,
  },
  {
    id: 'use-ref',
    title: 'useRef',
    description: 'Control del foco de un input',
    component: FocusScreen,
  },
]

const getExampleFromHash = () => {
  const id = window.location.hash.slice(1)
  return examples.find((example) => example.id === id) ?? examples[0]
}

export const ExamplesGallery = () => {
  const [selectedExample, setSelectedExample] = useState(getExampleFromHash)
  const SelectedComponent = selectedExample.component

  useEffect(() => {
    const handleHashChange = () => setSelectedExample(getExampleFromHash())

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  return (
    <div className="min-h-screen bg-slate-950">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/95 text-white shadow-xl backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 py-4">
          <div className="mb-4">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
              React Hooks
            </p>
            <h1 className="text-2xl font-bold">Galería de ejemplos</h1>
            <p className="mt-1 text-sm text-slate-400">
              Selecciona un ejercicio para verlo en funcionamiento.
            </p>
          </div>

          <nav className="flex gap-2 overflow-x-auto pb-1" aria-label="Ejemplos del proyecto">
            {examples.map((example) => {
              const isActive = selectedExample.id === example.id

              return (
                <a
                  key={example.id}
                  href={`#${example.id}`}
                  title={example.description}
                  aria-current={isActive ? 'page' : undefined}
                  className={`shrink-0 rounded-lg border px-4 py-2 text-left transition cursor-pointer ${
                    isActive
                      ? 'border-cyan-400 bg-cyan-400 text-slate-950'
                      : 'border-white/15 bg-white/5 text-slate-200 hover:border-cyan-400/60 hover:bg-white/10'
                  }`}
                >
                  <span className="block text-sm font-semibold">{example.title}</span>
                  <span
                    className={`hidden text-xs sm:block ${
                      isActive ? 'text-slate-700' : 'text-slate-400'
                    }`}
                  >
                    {example.description}
                  </span>
                </a>
              )
            })}
          </nav>
        </div>
      </header>

      <main>
        <SelectedComponent key={selectedExample.id} />
      </main>
    </div>
  )
}
