import { UserContext } from "@/09-useContext/context/user.context"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  BadgeCheck,
  KeyRound,
  LogIn,
  LogOut,
  Route,
  ShieldCheck,
  UserRound,
} from "lucide-react"
import { use } from "react"
import { Link } from "react-router"

export const AboutPage = () => {

  const { isAuthenticated, logout, user } = use(UserContext)

  const features = [
    {
      icon: ShieldCheck,
      title: "Context API",
      description: "El provider comparte la sesión activa con todas las rutas del módulo.",
    },
    {
      icon: Route,
      title: "Rutas privadas",
      description: "El perfil solo se muestra cuando el usuario está autenticado.",
    },
    {
      icon: KeyRound,
      title: "Persistencia local",
      description: "El ID se guarda en localStorage para restaurar la sesión al recargar.",
    },
  ]

  return (
    <section className="min-h-screen px-4 py-8 text-white sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[minmax(0,1fr)_24rem] lg:items-start">
        <main className="overflow-hidden rounded-lg border border-white/10 bg-slate-950/80 shadow-2xl shadow-black/30">
          <div className="bg-gradient-to-r from-cyan-500/25 via-emerald-400/15 to-fuchsia-500/20 px-6 py-10 sm:px-8">
            <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-cyan-100">
              <BadgeCheck size={17} aria-hidden="true" />
              Módulo 09
            </p>
            <h1 className="mt-3 max-w-3xl text-3xl font-bold tracking-normal text-white sm:text-5xl">
              Context API con sesión y navegación protegida
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-200">
              Este ejemplo conecta un provider de usuario con React Router para practicar
              login simulado, restauración de sesión y control de acceso a páginas privadas.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {isAuthenticated ? (
                <>
                  <Button asChild>
                    <Link to="/profile">
                      Ver perfil
                      <ArrowRight aria-hidden="true" />
                    </Link>
                  </Button>
                  <Button variant="destructive" onClick={logout}>
                    <LogOut aria-hidden="true" />
                    Salir
                  </Button>
                </>
              ) : (
                <Button asChild>
                  <Link to="/login">
                    <LogIn aria-hidden="true" />
                    Iniciar sesión
                  </Link>
                </Button>
              )}
            </div>
          </div>

          <div className="grid gap-4 border-t border-white/10 bg-slate-900/80 p-6 sm:grid-cols-3 sm:p-8">
            {features.map(({ icon: Icon, title, description }) => (
              <article key={title} className="rounded-lg border border-white/10 bg-white/5 p-4">
                <Icon size={22} aria-hidden="true" className="text-cyan-300" />
                <h2 className="mt-4 font-semibold text-white">{title}</h2>
                <p className="mt-2 text-sm leading-6 text-slate-300">{description}</p>
              </article>
            ))}
          </div>
        </main>

        <aside className="rounded-lg border border-white/10 bg-slate-900/80 p-6 shadow-xl shadow-black/20">
          <div className="flex items-center gap-3">
            <div className="flex size-11 items-center justify-center rounded-lg border border-cyan-200/25 bg-cyan-100/10">
              <UserRound aria-hidden="true" className="text-cyan-200" />
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-300">Estado actual</p>
              <h2 className="text-xl font-bold text-white">
                {isAuthenticated ? "Sesión activa" : "Sin sesión"}
              </h2>
            </div>
          </div>

          {isAuthenticated && user ? (
            <div className="mt-6 space-y-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
                  Usuario
                </p>
                <p className="mt-1 text-lg font-semibold text-white">{user.name}</p>
                <p className="text-sm text-cyan-200">{user.title}</p>
              </div>

              <div className="flex flex-wrap gap-2">
                {user.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-cyan-200/25 bg-cyan-100/10 px-3 py-1 text-sm font-semibold text-cyan-50"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ) : (
            <p className="mt-6 text-sm leading-6 text-slate-300">
              Inicia sesión con un ID demo para desbloquear el perfil profesional y probar el guard privado.
            </p>
          )}
        </aside>
      </div>
    </section>
  )
}
