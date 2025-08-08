import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import CardGrid from "@/components/card-grid"
import { LMS_COURSES, LMS_UPCOMING } from "@/lib/lms-mock"

export default function Page() {
  const courseCards = LMS_COURSES.map(c => ({
    title: `${c.code}: ${c.title}`,
    description: `${c.professor} • ${c.schedule}`,
    href: `/lms/courses/${c.id}`,
    image: c.cover,
    meta: c.term,
  }))

  return (
    <div className="grid gap-6 xl:grid-cols-[2fr_1fr]">
      <div>
        <h1 className="text-2xl font-bold text-amber-900">LMS Dashboard</h1>
        <div className="mt-4">
          <CardGrid items={courseCards} columns={{ base: 1, md: 2, xl: 2 }} />
        </div>
      </div>
      <aside className="h-max space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>Upcoming</CardTitle>
          </CardHeader>
          <CardContent className="text-sm">
            <ul className="space-y-2">
              {LMS_UPCOMING.map((u, i) => (
                <li key={i} className="rounded border bg-white p-2">
                  <div className="text-muted-foreground">{u.kind} • {new Date(u.due).toLocaleString()}</div>
                  <div className="font-medium">{u.title}</div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Tips</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            Check Modules before each class and submit Assignments ahead of the deadline.
          </CardContent>
        </Card>
      </aside>
    </div>
  )
}
