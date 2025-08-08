import SiteShell from "@/components/site-shell"
import CardGrid from "@/components/card-grid"
import { ERESOURCES } from "@/lib/mock-data"

export default function Page({ params }: { params: { provider: "gale" | "emerald" | "cambridge" } }) {
  const providerName = params.provider.charAt(0).toUpperCase() + params.provider.slice(1)
  const items = ERESOURCES.filter(r => r.provider.toLowerCase() === params.provider).map(r => ({
    title: r.title,
    description: r.description ?? "",
    href: "/library/opac",
    image: "/placeholder.svg?height=180&width=320",
    meta: `${r.type}${r.year ? " • " + r.year : ""}`,
    tags: [providerName],
  }))
  return (
    <SiteShell>
      <section className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-amber-900">{providerName} Resources</h1>
        <p className="mt-2 text-muted-foreground">Browse featured titles and databases. Use OPAC for full search.</p>
        <div className="mt-6">
          <CardGrid items={items} columns={{ base: 1, md: 2, xl: 3 }} />
        </div>
      </section>
    </SiteShell>
  )
}
