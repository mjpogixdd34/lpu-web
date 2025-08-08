import { getCourse } from "@/lib/lms-mock"

export default function Page({ params }: { params: { id: string } }) {
  const c = getCourse(params.id)
  if (!c) return null
  return (
    <div className="rounded-lg border bg-white p-4">
      <h2 className="text-lg font-semibold">Announcements</h2>
      <ul className="mt-2 space-y-2">
        {c.announcements.map(a => (
          <li key={a.id} className="rounded border bg-amber-50 p-3">
            <div className="text-xs text-muted-foreground">{new Date(a.date).toLocaleDateString()}</div>
            <div className="font-medium">{a.title}</div>
            <p className="text-sm text-muted-foreground">{a.body}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
