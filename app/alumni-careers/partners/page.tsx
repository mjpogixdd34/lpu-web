import SiteShell from "@/components/site-shell"

export default function Page() {
  return (
    <SiteShell>
      <section className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-amber-900">Industry Partners</h1>
        <p className="mt-2 text-muted-foreground">Our network supports internships, research, and placement.</p>
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {["TechCo", "BuildCorp", "FinanceX", "MediaHub", "GreenWorks", "HealthPlus"].map(p => (
            <div key={p} className="rounded-lg border bg-white p-4 text-sm">
              {p}
            </div>
          ))}
        </div>
      </section>
    </SiteShell>
  )
}
