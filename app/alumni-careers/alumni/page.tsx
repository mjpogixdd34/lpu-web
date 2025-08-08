import SiteShell from "@/components/site-shell"

export default function Page() {
  return (
    <SiteShell>
      <section className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-amber-900">Alumni</h1>
        <p className="mt-2 text-muted-foreground">Stay connected with your batch, mentors, and the university.</p>
        <ul className="mt-4 list-inside list-disc text-sm text-muted-foreground">
          <li>Join alumni chapters and special-interest groups.</li>
          <li>Access mentorship and networking events.</li>
        </ul>
      </section>
    </SiteShell>
  )
}
