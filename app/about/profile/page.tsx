import SiteShell from "@/components/site-shell"

export default function Page() {
  return (
    <SiteShell>
      <section className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-amber-900">University Profile</h1>
        <p className="mt-2 text-muted-foreground">Our mission is to develop competent and compassionate professionals.</p>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border bg-white p-4">
            <h2 className="text-lg font-semibold">Mission</h2>
            <p className="mt-2 text-sm text-muted-foreground">Provide quality education anchored on research, innovation, and service.</p>
          </div>
          <div className="rounded-lg border bg-white p-4">
            <h2 className="text-lg font-semibold">Vision</h2>
            <p className="mt-2 text-sm text-muted-foreground">To be a leading institution recognized for academic excellence and societal impact.</p>
          </div>
        </div>
      </section>
    </SiteShell>
  )
}
