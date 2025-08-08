import SiteShell from "@/components/site-shell"
import { CAMPUSES } from "@/lib/mock-data"

export default function Page() {
  return (
    <SiteShell>
      <section className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-amber-900">Campuses</h1>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {CAMPUSES.map(c => (
            <article id={c.slug} key={c.slug} className="overflow-hidden rounded-lg border bg-white">
              <img src={c.image || "/placeholder.svg"} alt={`${c.name} campus`} className="h-48 w-full object-cover" />
              <div className="p-4">
                <div className="text-sm text-muted-foreground">{c.city}</div>
                <h2 className="text-lg font-semibold">{c.name}</h2>
                <p className="mt-1 text-sm text-muted-foreground">{c.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </SiteShell>
  )
}
