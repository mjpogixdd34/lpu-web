import SiteShell from "@/components/site-shell"
import CardGrid from "@/components/card-grid"
import { PUBLICATIONS } from "@/lib/mock-data"

export default function Page() {
  const items = PUBLICATIONS.filter(p => p.type === "Journal").map(p => ({
    title: p.title,
    description: p.abstract,
    href: `/research/publications/${p.slug}`,
    image: p.image,
    meta: `Journal • ${p.year}`,
    tags: p.tags,
  }))
  return (
    <SiteShell>
      <section className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-amber-900">Journals</h1>
        <div className="mt-6">
          <CardGrid items={items} columns={{ base: 1, md: 2, xl: 3 }} />
        </div>
      </section>
    </SiteShell>
  )
}
