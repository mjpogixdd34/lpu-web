import { getCourse } from "@/lib/lms-mock"

export default function Page({ params }: { params: { id: string } }) {
  const c = getCourse(params.id)
  if (!c) return null
  return (
    <div className="space-y-4">
      {c.modules.map(m => (
        <section key={m.id} className="rounded-lg border bg-white p-4">
          <h2 className="text-lg font-semibold">{m.title}</h2>
          <ul className="mt-2 space-y-2">
            {m.items.map((it) => (
              <li key={it.id} className="rounded border bg-amber-50 p-3">
                <div className="font-medium">
                  {it.kind === "file" && <a className="underline" href={it.file} download>{it.title}</a>}
                  {it.kind !== "file" && it.title}
                </div>
                {"content" in it && (<p className="text-sm text-muted-foreground mt-1">{it.content}</p>)}
                {"instructions" in it && (<p className="text-sm text-muted-foreground mt-1">{it.instructions}</p>)}
                {"due" in it && (<div className="text-xs text-muted-foreground mt-1">Due: {new Date(it.due).toLocaleString()}</div>)}
                {it.kind === "assignment" && (
                  <div className="mt-2 text-sm">
                    <a className="underline" href={`/lms/courses/${c.id}/assignments/${it.id}`}>Open Assignment</a>
                  </div>
                )}
                {it.kind === "quiz" && (
                  <div className="mt-2 text-sm">
                    <a className="underline" href={`/lms/courses/${c.id}/quizzes/${it.id}`}>Start Quiz</a>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  )
}
