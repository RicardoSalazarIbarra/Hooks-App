import { useCallback, useState } from "react"
import { MyTitle } from "./ui/MyTitle"
import { MySubTitle } from "./ui/MySubTitle"
import { RefreshCcw, Sparkles, Type } from "lucide-react"

// const handleMyApiCall = () => {
//   console.log('Llamando a mi API');

// }

export const MemoHook = () => {
  const [title, setTitle] = useState('Hola')
  const [subTitle, setSubTitle] = useState('Mundo')

  const handleMyApiCall = useCallback(() => {
    console.log('Llamando a mi API -', subTitle);
  }, [subTitle])

  return (
    <section className='min-h-screen bg-gradient px-4 py-8 text-white sm:px-6 lg:px-8'>
      <div className="mx-auto flex max-w-6xl flex-col gap-6">
        <header className="rounded-lg border border-white/10 bg-slate-950/80 p-6 shadow-2xl shadow-black/30 sm:p-8">
          <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-cyan-200">
            <Sparkles size={17} aria-hidden="true" />
            Optimización de componentes
          </p>
          <div className="mt-3 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h1 className='text-3xl font-bold tracking-normal text-white sm:text-5xl'>
                React.memo + useCallback
              </h1>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300 sm:text-base">
                Cambia cada prop por separado y observa en consola o en las tarjetas qué componente vuelve a renderizar.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">Title</p>
                <p className="mt-1 text-lg font-bold text-white">{title}</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">Subtitle</p>
                <p className="mt-1 text-lg font-bold text-white">{subTitle}</p>
              </div>
            </div>
          </div>
        </header>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_20rem]">
          <main className="grid gap-4 md:grid-cols-2">
            <MyTitle title={title} />
            <MySubTitle subTitle={subTitle} callMyApi={handleMyApiCall} />
          </main>

          <aside className="rounded-lg border border-white/10 bg-slate-900/80 p-5 shadow-xl shadow-black/20">
            <h2 className="text-xl font-bold text-white">Controles</h2>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              Cada botón cambia una prop distinta para comparar renderizados.
            </p>

            <div className="mt-5 grid gap-3">
              <button className='inline-flex items-center justify-center gap-2 rounded-md bg-cyan-300 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200 cursor-pointer'
                onClick={() => setTitle((current) => current === 'Hola' ? 'Hello' : 'Hola')}
              >
                <Type size={16} aria-hidden="true" />
                Cambiar título
              </button>
              <button className='inline-flex items-center justify-center gap-2 rounded-md bg-emerald-300 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-emerald-200 cursor-pointer'
                onClick={() => setSubTitle((current) => current === 'Mundo' ? 'World' : 'Mundo')}
              >
                <Type size={16} aria-hidden="true" />
                Cambiar subtítulo
              </button>
              <button className='inline-flex items-center justify-center gap-2 rounded-md border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:bg-white/10 cursor-pointer'
                onClick={() => {
                  setTitle('Hola')
                  setSubTitle('Mundo')
                }}
              >
                <RefreshCcw size={16} aria-hidden="true" />
                Reiniciar
              </button>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
