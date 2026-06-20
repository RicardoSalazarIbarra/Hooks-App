import React, { useRef } from "react";

interface Props {
  title: string
}

export const MyTitle = React.memo(({ title }: Props) => {
  const renderCount = useRef(0)
  renderCount.current++
  console.log('My Title Re-render');

  return (
    <article className="rounded-lg border border-cyan-200/20 bg-cyan-100/10 p-5 shadow-xl shadow-black/10">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-200">
          React.memo
        </p>
        <span className="rounded-md bg-slate-950/60 px-2.5 py-1 text-xs font-semibold text-slate-300">
          Renders: {renderCount.current}
        </span>
      </div>

      <h2 className="mt-4 text-3xl font-bold tracking-normal text-white">{title}</h2>
      <p className="mt-2 text-sm leading-6 text-slate-300">
        Este título solo debería renderizar de nuevo cuando cambia su prop.
      </p>
    </article>
  )
})
