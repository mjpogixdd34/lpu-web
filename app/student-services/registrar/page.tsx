import SiteShell from "@/components/site-shell"

export default function Page() {
  const downloads = [
    { label: "Transcript Request Form (PDF)", file: "/docs/registrar-transcript-request.pdf" },
    { label: "Enrollment Verification Form (PDF)", file: "/docs/registrar-enrollment-verification.pdf" },
  ]
  return (
    <SiteShell>
      <section className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-amber-900">Registrar</h1>
        <p className="mt-2 text-muted-foreground">Records, grades, transcripts, and enrollment.</p>
        <div className="mt-6 grid gap-6 lg:grid-cols-[2fr_1fr]">
          <div className="rounded-lg border bg-white p-4">
            <h2 className="text-lg font-semibold">Common Requests</h2>
            <ul className="mt-2 list-inside list-disc text-sm text-muted-foreground">
              <li>Request for Transcript of Records</li>
              <li>Enrollment Verification</li>
              <li>Grade Correction</li>
            </ul>
            <div className="mt-4">
              <h3 className="text-sm font-semibold">Downloads</h3>
              <ul className="mt-2 space-y-2 text-sm">
                {downloads.map(d => (
                  <li key={d.file}><a className="underline" href={d.file} download>{d.label}</a></li>
                ))}
              </ul>
            </div>
          </div>
          <aside className="h-max rounded-lg border bg-amber-50 p-4">
            <div className="text-sm font-semibold text-amber-900">Contact</div>
            <ul className="mt-2 text-sm">
              <li>Email: registrar@demo.lpu.edu</li>
              <li>Phone: (02) 555-5678</li>
            </ul>
          </aside>
        </div>
      </section>
    </SiteShell>
  )
}
