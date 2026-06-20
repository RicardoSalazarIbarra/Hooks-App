import { useCounter } from "@/hooks/useCounter"
import { Activity, Gauge, Plus, TimerReset } from "lucide-react";
import { useMemo } from "react";

const heavyStuff = (iterationNumber: number) => {
  console.time('Heavy_stuff_started');

  for (let index = 0; index < iterationNumber; index++) {
    console.log('Ahi vamos...');
  }
  console.timeEnd('Heavy_stuff_started');

  return `${iterationNumber} iteraciones realizadas`
}

export const MemoCounter = () => {
  const { counter, increment } = useCounter(40_000)
  const { counter: counter2, increment: increment2 } = useCounter(10)

  const myHeavyValue = useMemo(() => heavyStuff(counter), [counter])

  return (
    <section className="min-h-screen bg-gradient px-4 py-8 text-white sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-6">
        <header className="rounded-lg border border-white/10 bg-slate-950/80 p-6 shadow-2xl shadow-black/30 sm:p-8">
          <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-cyan-200">
            <Gauge size={17} aria-hidden="true" />
            Cálculo memorizado
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-normal text-white sm:text-5xl">
            useMemo
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300 sm:text-base">
            El cálculo pesado depende solo del contador principal. El contador secundario puede cambiar sin volver a ejecutar esa operación.
          </p>
        </header>

        <main className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_20rem]">
          <section className="rounded-lg border border-white/10 bg-slate-900/80 p-6 shadow-xl shadow-black/20">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-emerald-200">
                  <Activity size={17} aria-hidden="true" />
                  Resultado
                </p>
                <h2 className="mt-3 text-2xl font-bold text-white">{myHeavyValue}</h2>
              </div>
              <span className="rounded-md border border-emerald-200/25 bg-emerald-100/10 px-3 py-1 text-sm font-semibold text-emerald-100">
                Dependencia: counter
              </span>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <article className="rounded-lg border border-cyan-200/20 bg-cyan-100/10 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-200">
                  Counter
                </p>
                <p className="mt-3 text-4xl font-black text-white">{counter}</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Cambiar este valor recalcula `heavyStuff`.
                </p>
              </article>

              <article className="rounded-lg border border-fuchsia-200/20 bg-fuchsia-100/10 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-fuchsia-200">
                  Counter 2
                </p>
                <p className="mt-3 text-4xl font-black text-white">{counter2}</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Cambia la UI, pero no dispara el cálculo memorizado.
                </p>
              </article>
            </div>
          </section>

          <aside className="rounded-lg border border-white/10 bg-slate-900/80 p-5 shadow-xl shadow-black/20">
            <h2 className="text-xl font-bold text-white">Controles</h2>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              Observa la consola para confirmar cuándo se ejecuta la función pesada.
            </p>

            <div className="mt-5 grid gap-3">
              <button
                className="inline-flex items-center justify-center gap-2 rounded-md bg-cyan-300 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200 cursor-pointer"
                onClick={increment}
              >
                <Plus size={16} aria-hidden="true" />
                Incrementar counter
              </button>
              <button
                className="inline-flex items-center justify-center gap-2 rounded-md bg-fuchsia-300 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-fuchsia-200 cursor-pointer"
                onClick={increment2}
              >
                <Plus size={16} aria-hidden="true" />
                Incrementar counter 2
              </button>
              <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                <p className="flex items-center gap-2 text-sm font-semibold text-slate-200">
                  <TimerReset size={16} aria-hidden="true" className="text-emerald-300" />
                  Nota rápida
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  `useMemo` no evita renders; evita repetir el cálculo mientras sus dependencias no cambien.
                </p>
              </div>
            </div>
          </aside>
        </main>
      </div>
    </section>
  )
}
