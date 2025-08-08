import SiteShell from "@/components/site-shell"
import CardGrid from "@/components/card-grid"

export default function Page() {
  const items = [
    { title: "Alumni Association", description: "Connect with your batch and mentors.", href: "/alumni-careers#alumni", image: "/placeholder.svg?height=180&width=320" },
    { title: "Careers Portal", description: "Find internships and jobs.", href: "/alumni-careers#careers", image: "/placeholder.svg?height=180&width=320" },
    { title: "Industry Partners", description: "Our network of partner organizations.", href: "/alumni-careers#partners", image: "/placeholder.svg?height=180&width=320" },
  ]
  return (
    <SiteShell>
      <section className="container mx-auto px-4 py-8">
        <header>
          <h1 className="text-3xl font-bold text-amber-900">Alumni & Careers</h1>
        </header>
        <div className="mt-6">
          <CardGrid items={items} columns={{ base: 1, md: 2, xl: 3 }} />
        </div>
      </section>
    </SiteShell>
  )
}
