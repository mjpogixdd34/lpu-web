import SiteShell from "@/components/site-shell"
import CardGrid from "@/components/card-grid"

export default function Page() {
  const providers = [
    { title: "Gale", description: "Databases, journals, and eBooks.", href: "/library/e-resources/gale", image: "/placeholder.svg?height=180&width=320" },
    { title: "Emerald", description: "Business and management journals.", href: "/library/e-resources/emerald", image: "/placeholder.svg?height=180&width=320" },
    { title: "Cambridge", description: "Academic journals and books.", href: "/library/e-resources/cambridge", image: "/placeholder.svg?height=180&width=320" },
  ]
  return (
    <SiteShell>
      <section className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-amber-900">E-Resources</h1>
        <p className="mt-2 text-muted-foreground">Access digital collections from partner providers.</p>
        <div className="mt-6">
          <CardGrid items={providers} columns={{ base: 1, md: 2, xl: 3 }} />
        </div>
      </section>
    </SiteShell>
  )
}
