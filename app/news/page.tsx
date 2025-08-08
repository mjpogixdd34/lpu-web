import SiteShell from "@/components/site-shell"
import CardGrid from "@/components/card-grid"
import { NEWS } from "@/lib/mock-data"

export default function Page() {
  const items = NEWS.map(n => ({
    title: n.title,
    meta: `${n.kind} • ${new Date(n.date).toLocaleString(undefined, { month: "short", year: "numeric" })}`,
    href: `/news/${n.slug}`,
    image: n.image,
  }))
  return (
    <SiteShell>
      <section className="container mx-auto px-4 py-8">
        <header>
          <h1 className="text-3xl font-bold text-amber-900">News & Events</h1>
          <p className="mt-2 text-muted-foreground">Stay up to date with university happenings.</p>
        </header>
        <div className="mt-6">
          <CardGrid items={items} columns={{ base: 1, md: 2, xl: 3 }} />
        </div>
      </section>
    </SiteShell>
  )
}
