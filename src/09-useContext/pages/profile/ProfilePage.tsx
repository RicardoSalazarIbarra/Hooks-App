import { UserContext } from "@/09-useContext/context/user.context"
import { Button } from "@/components/ui/button"
import {
  ArrowLeft,
  BriefcaseBusiness,
  CalendarDays,
  Globe,
  LogOut,
  Mail,
  MapPin,
  Phone,
  Star,
  Users,
} from "lucide-react"
import { use } from "react"
import { Link } from "react-router"

export const ProfilePage = () => {

  const { user, logout } = use(UserContext)

  if (!user) {
    return (
      <div className="flex min-h-screen items-center justify-center px-4 text-center">
        <div className="rounded-lg border border-white/10 bg-white/10 p-8 shadow-2xl shadow-black/20">
          <h1 className="text-2xl font-bold text-white">Perfil no disponible</h1>
          <p className="mt-2 text-sm text-slate-300">
            Inicia sesión para consultar la información del usuario.
          </p>
          <Button asChild className="mt-6">
            <Link to="/login">Ir al login</Link>
          </Button>
        </div>
      </div>
    )
  }

  const contactItems = [
    { icon: Mail, label: "Correo", value: user.contact.email },
    { icon: Phone, label: "Teléfono", value: user.contact.phone },
    { icon: MapPin, label: "Ubicación", value: user.contact.location },
    { icon: Globe, label: "Sitio web", value: user.contact.website },
    { icon: CalendarDays, label: "Miembro desde", value: user.contact.joined },
  ]

  const stats = [
    { icon: BriefcaseBusiness, label: "Proyectos", value: user.stats.projects },
    { icon: Users, label: "Contactos", value: user.stats.connections },
    { icon: Star, label: "Reviews", value: user.stats.reviews },
  ]

  return (
    <section className="min-h-screen px-4 py-8 text-white sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <Button asChild variant="ghost" className="text-slate-200 hover:bg-white/10 hover:text-white">
            <Link to="/">
              <ArrowLeft aria-hidden="true" />
              Inicio
            </Link>
          </Button>

          <Button variant="destructive" onClick={logout}>
            <LogOut aria-hidden="true" />
            Salir
          </Button>
        </div>

        <header className="overflow-hidden rounded-lg border border-white/10 bg-slate-950/80 shadow-2xl shadow-black/30">
          <div className="bg-gradient-to-r from-cyan-500/25 via-emerald-400/15 to-fuchsia-500/20 px-6 py-8 sm:px-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
                <div className="flex size-24 shrink-0 items-center justify-center rounded-lg border border-white/20 bg-white/15 text-4xl font-black text-white shadow-xl shadow-black/20">
                  {user.name
                    .split(" ")
                    .map((part) => part[0])
                    .slice(0, 2)
                    .join("")}
                </div>

                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-100">
                    Usuario #{user.id}
                  </p>
                  <h1 className="mt-2 text-3xl font-bold tracking-normal text-white sm:text-4xl">
                    {user.name}
                  </h1>
                  <p className="mt-2 max-w-2xl text-base text-slate-200">
                    {user.title}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {user.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-cyan-200/30 bg-cyan-100/15 px-3 py-1 text-sm font-semibold text-cyan-50"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-4 border-t border-white/10 bg-slate-900/80 p-6 sm:grid-cols-3 sm:p-8">
            {stats.map(({ icon: Icon, label, value }) => (
              <article key={label} className="rounded-lg border border-white/10 bg-white/5 p-4">
                <div className="flex items-center gap-2 text-sm font-medium text-slate-300">
                  <Icon size={17} aria-hidden="true" className="text-cyan-300" />
                  {label}
                </div>
                <p className="mt-3 text-3xl font-bold text-white">{value}</p>
              </article>
            ))}
          </div>
        </header>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_22rem]">
          <main className="flex flex-col gap-6">
            <section className="rounded-lg border border-white/10 bg-slate-900/80 p-6 shadow-xl shadow-black/20">
              <h2 className="text-xl font-bold text-white">Sobre el usuario</h2>
              <p className="mt-3 leading-7 text-slate-300">{user.about}</p>
            </section>

            <section className="rounded-lg border border-white/10 bg-slate-900/80 p-6 shadow-xl shadow-black/20">
              <h2 className="text-xl font-bold text-white">Experiencia</h2>
              <div className="mt-5 space-y-4">
                {user.experience.map((experience) => (
                  <article key={`${experience.company}-${experience.period}`} className="rounded-lg border border-white/10 bg-white/5 p-4">
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <h3 className="font-semibold text-white">{experience.role}</h3>
                        <p className="text-sm text-cyan-200">{experience.company}</p>
                      </div>
                      <span className="rounded-md bg-white/10 px-2.5 py-1 text-xs font-semibold text-slate-300">
                        {experience.period}
                      </span>
                    </div>
                    <p className="mt-3 text-sm leading-6 text-slate-300">{experience.description}</p>
                  </article>
                ))}
              </div>
            </section>
          </main>

          <aside className="flex flex-col gap-6">
            <section className="rounded-lg border border-white/10 bg-slate-900/80 p-6 shadow-xl shadow-black/20">
              <h2 className="text-xl font-bold text-white">Contacto</h2>
              <div className="mt-5 space-y-3">
                {contactItems.map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex gap-3 rounded-lg border border-white/10 bg-white/5 p-3">
                    <Icon size={18} aria-hidden="true" className="mt-0.5 shrink-0 text-cyan-300" />
                    <div className="min-w-0">
                      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
                        {label}
                      </p>
                      <p className="break-words text-sm font-medium text-slate-100">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-lg border border-white/10 bg-slate-900/80 p-6 shadow-xl shadow-black/20">
              <h2 className="text-xl font-bold text-white">Habilidades</h2>
              <div className="mt-5 flex flex-wrap gap-2">
                {user.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-emerald-300/20 bg-emerald-300/10 px-3 py-1.5 text-sm font-semibold text-emerald-100"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>
          </aside>
        </div>
      </div>
    </section>
  )
}
