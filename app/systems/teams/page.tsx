import SiteShell from "@/components/site-shell"

export default function Page() {
  return (
    <SiteShell>
      <section className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-amber-900">Microsoft Teams</h1>
        <p className="mt-2 text-muted-foreground">Your classes and collaboration spaces appear here after sign-in.</p>
        <div className="mt-6 rounded-lg border bg-white p-4 text-sm text-muted-foreground">
          This is a placeholder interface showing channels, assignments, and meetings.
        </div>
      </section>
    </SiteShell>
  )
}
