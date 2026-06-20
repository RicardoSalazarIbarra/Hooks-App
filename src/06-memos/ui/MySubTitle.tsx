import { RadioTower } from "lucide-react";
import { memo, useRef } from "react";

interface Props {
  subTitle: string;

  callMyApi: () => void;
}


export const MySubTitle = memo(({ subTitle, callMyApi }: Props) => {
  const renderCount = useRef(0)
  renderCount.current++
  console.log('MySubTitle Re-render');


  return (
    <article className="rounded-lg border border-emerald-200/20 bg-emerald-100/10 p-5 shadow-xl shadow-black/10">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-200">
          memo + useCallback
        </p>
        <span className="rounded-md bg-slate-950/60 px-2.5 py-1 text-xs font-semibold text-slate-300">
          Renders: {renderCount.current}
        </span>
      </div>

      <h2 className="mt-4 text-3xl font-bold tracking-normal text-white">{subTitle}</h2>
      <p className="mt-2 text-sm leading-6 text-slate-300">
        El callback conserva su referencia hasta que cambia el subtítulo.
      </p>

      <button className="mt-5 inline-flex items-center gap-2 rounded-md border border-emerald-200/30 bg-emerald-300 px-3 py-2 text-sm font-semibold text-slate-950 transition hover:bg-emerald-200 cursor-pointer"
        onClick={callMyApi}
      >
        <RadioTower size={16} aria-hidden="true" />
        Llamar a función
      </button>
    </article>
  )
})
