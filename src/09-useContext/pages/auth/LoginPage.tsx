import { UserContext } from "@/09-useContext/context/user.context"
import { users } from "@/09-useContext/data/user-mock.data"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowLeft, ArrowRight, IdCard, LogIn, UserRound } from "lucide-react"
import { use, useState } from "react"
import { Link, useNavigate } from "react-router"
import { toast } from "sonner"

export const LoginPage = () => {

  const { login } = use(UserContext)
  const [userId, setUserId] = useState('')

  const navigation = useNavigate();

  const authenticate = (id: number) => {
    const result = login(id);
    if (!result) {
      toast.error('Usuario no encontrado')
      return
    }

    navigation('/profile')
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!userId.trim()) {
      toast.error('Ingresa un ID de usuario')
      return
    }

    authenticate(+userId)
  }

  return (
    <section className="min-h-screen px-4 py-8 text-white sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[minmax(0,1fr)_24rem] lg:items-start">
        <main className="overflow-hidden rounded-lg border border-white/10 bg-slate-950/80 shadow-2xl shadow-black/30">
          <div className="bg-gradient-to-r from-cyan-500/25 via-emerald-400/15 to-fuchsia-500/20 px-6 py-10 sm:px-8">
            <Button asChild variant="ghost" className="mb-8 text-slate-200 hover:bg-white/10 hover:text-white">
              <Link to="/">
                <ArrowLeft aria-hidden="true" />
                Inicio
              </Link>
            </Button>

            <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-cyan-100">
              <LogIn size={17} aria-hidden="true" />
              Acceso demo
            </p>
            <h1 className="mt-3 max-w-2xl text-3xl font-bold tracking-normal text-white sm:text-5xl">
              Iniciar sesión
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-200">
              Escribe un ID válido o elige una cuenta demo para cargar el usuario en el contexto
              y navegar al perfil protegido.
            </p>
          </div>

          <div className="border-t border-white/10 bg-slate-900/80 p-6 sm:p-8">
            <form className="grid gap-4 sm:grid-cols-[minmax(0,1fr)_auto]" onSubmit={handleSubmit}>
              <label className="min-w-0">
                <span className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-200">
                  <IdCard size={17} aria-hidden="true" className="text-cyan-300" />
                  ID del usuario
                </span>
                <Input
                  type="number"
                  inputMode="numeric"
                  placeholder="Ej. 1001"
                  value={userId}
                  onChange={event => setUserId(event.target.value)}
                  className="border-white/10 bg-white/10 text-white placeholder:text-slate-400"
                />
              </label>

              <Button type="submit" className="self-end">
                Entrar
                <ArrowRight aria-hidden="true" />
              </Button>
            </form>
          </div>
        </main>

        <aside className="rounded-lg border border-white/10 bg-slate-900/80 p-6 shadow-xl shadow-black/20">
          <div className="flex items-center gap-3">
            <div className="flex size-11 items-center justify-center rounded-lg border border-cyan-200/25 bg-cyan-100/10">
              <UserRound aria-hidden="true" className="text-cyan-200" />
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-300">Cuentas disponibles</p>
              <h2 className="text-xl font-bold text-white">Usuarios demo</h2>
            </div>
          </div>

          <div className="mt-6 space-y-3">
            {users.slice(0, 5).map((user) => (
              <button
                key={user.id}
                type="button"
                onClick={() => authenticate(user.id)}
                className="w-full rounded-lg border border-white/10 bg-white/5 p-3 text-left transition hover:border-cyan-300/70 hover:bg-white/10"
              >
                <span className="flex items-start justify-between gap-3">
                  <span className="min-w-0">
                    <span className="block truncate font-semibold text-white">{user.name}</span>
                    <span className="block truncate text-sm text-slate-300">{user.title}</span>
                  </span>
                  <span className="rounded-md bg-cyan-100/10 px-2 py-1 text-xs font-bold text-cyan-100">
                    {user.id}
                  </span>
                </span>
              </button>
            ))}
          </div>
        </aside>
      </div>
    </section>
  )
}
