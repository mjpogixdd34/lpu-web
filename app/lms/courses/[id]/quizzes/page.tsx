import { getCourse } from "@/lib/lms-mock"

export default function Page({ params }: { params: { id: string } }) {
  const c = getCourse(params.id)
  if (!c) return null
  return (
    <div className="rounded-lg border bg-white p-4">
      <h2 className="text-lg font-semibold">Quizzes</h2>
      {c.quizzes.length === 0 ? (
        <p className="mt-2 text-sm text-muted-foreground">No quizzes yet.</p>
      ) : (
        <ul className="mt-2 space-y-2">
          {c.quizzes.map(q => (
            <li key={q.id} className="flex items-center justify-between rounded border bg-amber-50 p-3">
              <div>
                <div className="font-medium">{q.title}</div>
                <div className="text-xs text-muted-foreground">{q.points} pts</div>
              </div>
              <a className="underline text-sm" href={`/lms/courses/${c.id}/quizzes/${q.id}`}>Start</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
