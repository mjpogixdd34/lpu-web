import SiteShell from "@/components/site-shell"
import CardGrid from "@/components/card-grid"

export default function Page() {
  const items = [
    { title: "OPAC Search", description: "Find books and journals by title, author, or keyword.", href: "/library/opac", image: "/placeholder.svg?height=180&width=320" },
    { title: "E-Resources", description: "Journals, databases, and eBooks from providers.", href: "/library/e-resources", image: "/placeholder.svg?height=180&width=320" },
    { title: "ARC Policies", description: "Access, borrowing, and research policies.", href: "/library/policies", image: "/placeholder.svg?height=180&width=320" },
  ]
  return (
    <SiteShell>
      <section className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-amber-900">Library & ARC</h1>
        <p className="mt-2 text-muted-foreground">Discover our collections and services.</p>
        <div className="mt-6">
          <CardGrid items={items} columns={{ base: 1, md: 2, xl: 3 }} />
        </div>
      </section>
    </SiteShell>
  )
}
