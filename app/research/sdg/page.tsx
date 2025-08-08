import SiteShell from "@/components/site-shell"
import CardGrid from "@/components/card-grid"
import { SDG_TAGS, PUBLICATIONS } from "@/lib/mock-data"

export default function Page() {
  const items = SDG_TAGS.map(tag => {
    const count = PUBLICATIONS.filter(p => (p.tags || []).includes(tag)).length
    return {
      title: tag,
      description: `${count} publication${count !== 1 ? "s" : ""}`,
      href: `/research?view=sdg&q=${encodeURIComponent(tag)}`,
      image: "/placeholder.svg?height=180&width=320",
    }
  })
  return (
    <SiteShell>
      <section className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-amber-900">Publications by SDG</h1>
        <div className="mt-6">
          <CardGrid items={items} columns={{ base: 1, md: 2, xl: 3 }} />
        </div>
      </section>
    </SiteShell>
  )
}
