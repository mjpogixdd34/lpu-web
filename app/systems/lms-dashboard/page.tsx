import SiteShell from "@/components/site-shell"

export default function Page() {
  return (
    <SiteShell>
      <section className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-amber-900">LMS Dashboard</h1>
        <p className="mt-2 text-muted-foreground">Courses, grades, and attendance overview.</p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="rounded-lg border bg-white p-4">
            <div className="text-sm font-semibold">Courses</div>
            <ul className="mt-2 list-inside list-disc text-sm text-muted-foreground">
              <li>CS 101 - Programming</li>
              <li>STAT 210 - Statistics</li>
              <li>ENG 115 - Technical Writing</li>
            </ul>
          </div>
          <div className="rounded-lg border bg-white p-4">
            <div className="text-sm font-semibold">Recent Grades</div>
            <ul className="mt-2 list-inside list-disc text-sm text-muted-foreground">
              <li>CS 101 Quiz 1: 92%</li>
              <li>STAT 210 Lab 2: 88%</li>
            </ul>
          </div>
          <div className="rounded-lg border bg-white p-4">
            <div className="text-sm font-semibold">Announcements</div>
            <ul className="mt-2 list-inside list-disc text-sm text-muted-foreground">
              <li>Welcome to the semester!</li>
              <li>Library workshop next week.</li>
            </ul>
          </div>
        </div>
      </section>
    </SiteShell>
  )
}
