import SiteShell from "@/components/site-shell"
import { ContextualLayout } from "@/components/contextual-sidebar"
import BottomCTA from "@/components/bottom-cta"
import { PROGRAMS } from "@/lib/mock-data"

export default function Page({ params }: { params: { slug: string } }) {
  const program = PROGRAMS.find(p => p.slug === params.slug)
  const name = program?.title ?? decodeURIComponent(params.slug).replace(/-/g, " ").toUpperCase()

  const content = (
    <>
      <header>
        <h1 className="text-3xl font-bold text-amber-900">{name}</h1>
        <p className="mt-2 text-muted-foreground">Program overview, curriculum, requirements, and downloads.</p>
      </header>
      <section id="overview" className="mt-6">
        <p className="text-sm">This program prepares students with theoretical and practical foundations across a modern curriculum. Students engage in projects, labs, and industry partnerships.</p>
      </section>
      <section id="curriculum" className="mt-6">
        <h2 className="text-xl font-semibold text-amber-900">Curriculum</h2>
        <div className="grid gap-4 xl:grid-cols-2">
          <ul className="list-inside list-disc text-sm text-muted-foreground">
            <li>Year 1: Foundations</li>
            <li>Year 2: Core Courses</li>
          </ul>
          <ul className="list-inside list-disc text-sm text-muted-foreground">
            <li>Year 3: Specializations</li>
            <li>Year 4: Capstone</li>
          </ul>
        </div>
      </section>
      <section id="requirements" className="mt-6">
        <h2 className="text-xl font-semibold text-amber-900">Requirements</h2>
        <ul className="mt-2 list-inside list-disc text-sm text-muted-foreground">
          <li>HS/College transcripts</li>
          <li>Entrance exam / interview</li>
        </ul>
      </section>
      <section id="downloads" className="mt-6">
        <a className="underline" href="/docs/program-brochure.pdf" download>Download Program Brochure (PDF)</a>
      </section>
    </>
  )

  return (
    <SiteShell>
      <div className="container mx-auto px-4 py-8">
        <div className="xl:hidden">{content}</div>
        <ContextualLayout
          title="Program"
          menu={[
            { title: "Overview", href: "#overview" },
            { title: "Curriculum", href: "#curriculum" },
            { title: "Requirements", href: "#requirements" },
            { title: "Downloads", href: "#downloads" },
            { title: "Apply", href: "/admissions/apply" },
          ]}
        >
          {content}
        </ContextualLayout>
      </div>
      <BottomCTA label="Apply to this Program" href="/admissions/apply" />
    </SiteShell>
  )
}
