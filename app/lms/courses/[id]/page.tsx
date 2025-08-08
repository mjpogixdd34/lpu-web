import { getCourse } from "@/lib/lms-mock"

export default function Page({ params }: { params: { id: string } }) {
  const c = getCourse(params.id)
  if (!c) return <div className="text-sm text-muted-foreground">Course not found.</div>
  return (
    <div className="grid gap-4 xl:grid-cols-[2fr_1fr]">
      <section className="rounded-lg border bg-white p-4">
        <h2 className="text-lg font-semibold">Recent Announcements</h2>
        <ul className="mt-2 space-y-2">
          {c.announcements.map(a => (
            <li key={a.id} className="rounded border bg-amber-50 p-3">
              <div className="text-xs text-muted-foreground">{new Date(a.date).toLocaleDateString()}</div>
              <div className="font-medium">{a.title}</div>
              <p className="text-sm text-muted-foreground">{a.body}</p>
            </li>
          ))}
        </ul>
      </section>
      <aside className="h-max rounded-lg border bg-white p-4">
        <h3 className="text-sm font-semibold text-amber-900">Quick Links</h3>
        <ul className="mt-2 list-inside list-disc text-sm">
          <li><a className="underline" href={`/lms/courses/${c.id}/modules`}>Modules</a></li>
          <li><a className="underline" href={`/lms/courses/${c.id}/assignments`}>Assignments</a></li>
          <li><a className="underline" href={`/lms/courses/${c.id}/quizzes`}>Quizzes</a></li>
          <li><a className="underline" href={`/lms/courses/${c.id}/grades`}>Grades</a></li>
        </ul>
      </aside>
    </div>
  )
}
