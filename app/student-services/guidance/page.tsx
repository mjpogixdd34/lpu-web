import SiteShell from "@/components/site-shell"

export default function Page() {
  return (
    <SiteShell>
      <section className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-amber-900">Guidance</h1>
        <p className="mt-2 text-muted-foreground">Counseling, wellness programs, and student development.</p>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border bg-white p-4">
            <h2 className="text-lg font-semibold">Counseling Services</h2>
            <p className="mt-2 text-sm text-muted-foreground">Book an appointment with a counselor. Sessions are confidential.</p>
          </div>
          <div className="rounded-lg border bg-white p-4">
            <h2 className="text-lg font-semibold">Wellness & Workshops</h2>
            <p className="mt-2 text-sm text-muted-foreground">Mindfulness, time management, and career readiness workshops.</p>
          </div>
        </div>
      </section>
    </SiteShell>
  )
}
