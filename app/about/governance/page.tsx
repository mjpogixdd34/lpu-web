import SiteShell from "@/components/site-shell"

export default function Page() {
  const roles = [
    { role: "President", name: "Dr. Aurora D. Reyes" },
    { role: "VP for Academics", name: "Prof. Michael C. Santos" },
    { role: "VP for Research", name: "Dr. Janine P. Cruz" },
    { role: "Registrar", name: "Atty. Luis V. Gomez" },
  ]
  return (
    <SiteShell>
      <section className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-amber-900">Governance</h1>
        <p className="mt-2 text-muted-foreground">Leadership teams and advisory councils.</p>
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {roles.map(r => (
            <div key={r.role} className="rounded-lg border bg-white p-4">
              <div className="text-sm text-muted-foreground">{r.role}</div>
              <div className="font-semibold">{r.name}</div>
            </div>
          ))}
        </div>
      </section>
    </SiteShell>
  )
}
