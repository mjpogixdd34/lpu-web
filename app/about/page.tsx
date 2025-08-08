import SiteShell from "@/components/site-shell"
import CardGrid from "@/components/card-grid"
import { CAMPUSES } from "@/lib/mock-data"

export default function Page() {
  const campusCards = CAMPUSES.map(c => ({
    title: c.name,
    description: c.description,
    href: `/about/campuses#${c.slug}`,
    image: c.image,
    meta: c.city,
  }))
  const aboutCards = [
    { title: "University Profile", description: "History, mission, vision, and values.", href: "/about/profile", image: "/placeholder.svg?height=180&width=320" },
    { title: "Governance", description: "Leadership, councils, and committees.", href: "/about/governance", image: "/placeholder.svg?height=180&width=320" },
    { title: "Campuses", description: "Explore our locations and facilities.", href: "/about/campuses", image: "/placeholder.svg?height=180&width=320" },
  ]
  return (
    <SiteShell>
      <section className="container mx-auto px-4 py-8">
        <header className="max-w-3xl">
          <h1 className="text-3xl font-bold text-amber-900">About</h1>
          <p className="mt-2 text-muted-foreground">Lighthouse Polytechnic University fosters a warm, research-driven environment.</p>
        </header>
        <div className="mt-6">
          <CardGrid items={aboutCards} columns={{ base: 1, md: 2, xl: 3 }} />
        </div>
        <div className="mt-10">
          <h2 className="text-xl font-semibold text-amber-900">Our Campuses</h2>
          <div className="mt-4">
            <CardGrid items={campusCards} columns={{ base: 1, md: 2, xl: 3 }} />
          </div>
        </div>
      </section>
    </SiteShell>
  )
}
