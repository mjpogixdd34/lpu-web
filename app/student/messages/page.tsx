import { studentMessages } from "@/lib/student-mock"

export default function Page() {
  return (
    <div className="space-y-3">
      <h1 className="text-xl font-semibold text-amber-900">Messages</h1>
      <ul className="divide-y rounded-lg border bg-white">
        {studentMessages.map((m, i) => (
          <li key={i} className="p-3">
            <div className="text-sm text-muted-foreground">{m.from} • {new Date(m.date).toLocaleDateString()}</div>
            <div className="font-medium">{m.subject}</div>
            <div className="mt-1 text-sm">
              <a className="underline" href="/systems/campus-mail">Open in Campus Mail</a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
