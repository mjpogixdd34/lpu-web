import SiteShell from "@/components/site-shell"

export default function Page() {
  const downloads = [
    { label: "Scholarship Application Form (PDF)", file: "/docs/scholarship-application.pdf" },
    { label: "Refund Request Form (PDF)", file: "/docs/refund-request.pdf" },
  ]
  return (
    <SiteShell>
      <section className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-amber-900">Financial Services</h1>
        <p className="mt-2 text-muted-foreground">Billing, payments, scholarships, refunds.</p>
        <div className="mt-6 rounded-lg border bg-white p-4">
          <h2 className="text-lg font-semibold">Downloads</h2>
          <ul className="mt-2 space-y-2 text-sm">
            {downloads.map(d => (
              <li key={d.file}><a className="underline" href={d.file} download>{d.label}</a></li>
            ))}
          </ul>
        </div>
      </section>
    </SiteShell>
  )
}
