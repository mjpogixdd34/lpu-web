import SiteShell from "@/components/site-shell"

export default function Page() {
  const downloads = [
    { label: "Undergraduate Checklist (PDF)", file: "/docs/undergrad-requirements.pdf" },
    { label: "Graduate Checklist (PDF)", file: "/docs/graduate-requirements.pdf" },
  ]
  return (
    <SiteShell>
      <section className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-amber-900">Admission Requirements</h1>
        <div className="mt-6 grid gap-6 lg:grid-cols-[2fr_1fr]">
          <div className="rounded-lg border bg-white p-4">
            <h2 className="text-lg font-semibold">General Requirements</h2>
            <ul className="mt-2 list-inside list-disc text-sm text-muted-foreground">
              <li>Completed application form</li>
              <li>Secondary/tertiary transcripts</li>
              <li>Valid government-issued ID</li>
              <li>Program-specific prerequisites</li>
            </ul>
          </div>
          <aside className="h-max rounded-lg border bg-amber-50 p-4">
            <div className="text-sm font-semibold text-amber-900">Downloads</div>
            <ul className="mt-2 text-sm space-y-2">
              {downloads.map(d => <li key={d.file}><a className="underline" href={d.file} download>{d.label}</a></li>)}
            </ul>
          </aside>
        </div>
      </section>
    </SiteShell>
  )
}
