import { getCourse } from "@/lib/lms-mock"

export default function Page({ params }: { params: { id: string } }) {
  const c = getCourse(params.id)
  if (!c) return null
  return (
    <div className="rounded-lg border bg-white p-4">
      <h2 className="text-lg font-semibold">Assignments</h2>
      <ul className="mt-2 space-y-2">
        {c.assignments.map(a => (
          <li key={a.id} className="rounded border bg-amber-50 p-3">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <div>
                <div className="font-medium">{a.title}</div>
                <div className="text-xs text-muted-foreground">Due: {new Date(a.due).toLocaleString()} • {a.points} pts</div>
              </div>
              <a className="underline text-sm" href={`/lms/courses/${c.id}/assignments/${a.id}`}>Open</a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
