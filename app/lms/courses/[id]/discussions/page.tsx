import { getCourse } from "@/lib/lms-mock"

export default function Page({ params }: { params: { id: string } }) {
  const c = getCourse(params.id)
  if (!c) return null
  return (
    <div className="rounded-lg border bg-white p-4">
      <h2 className="text-lg font-semibold">Discussions</h2>
      <ul className="mt-2 space-y-2">
        {c.discussions.map(d => (
          <li key={d.id} className="rounded border bg-amber-50 p-3 text-sm">
            <div className="font-medium">{d.title}</div>
            <div className="text-xs text-muted-foreground">{d.posts} posts • Last activity {new Date(d.lastActivity).toLocaleDateString()}</div>
          </li>
        ))}
      </ul>
    </div>
  )
}
