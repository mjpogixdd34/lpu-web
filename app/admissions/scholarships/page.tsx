import SiteShell from "@/components/site-shell"

export default function Page() {
  const items = [
    { name: "Merit Scholarship", criteria: "Top 10% of graduating class or board placers", deadline: "June 30" },
    { name: "Needs-Based Grant", criteria: "Income assessment and recommendation", deadline: "July 15" },
  ]
  return (
    <SiteShell>
      <section className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-amber-900">Scholarships</h1>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {items.map(s => (
            <div key={s.name} className="rounded-lg border bg-white p-4">
              <div className="text-sm font-semibold">{s.name}</div>
              <div className="mt-1 text-sm text-muted-foreground">Criteria: {s.criteria}</div>
              <div className="mt-1 text-xs text-muted-foreground">Deadline: {s.deadline}</div>
              <div className="mt-3">
                <a className="underline text-sm" href="/docs/scholarship-application.pdf" download>Download Application (PDF)</a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </SiteShell>
  )
}
