import { studentSavedResources } from "@/lib/student-mock"

export default function Page() {
  return (
    <div className="space-y-3">
      <h1 className="text-xl font-semibold text-amber-900">Resources</h1>
      <ul className="grid gap-3 md:grid-cols-2">
        {studentSavedResources.map((r) => (
          <li key={r.title} className="rounded-lg border bg-white p-4">
            <div className="font-semibold">{r.title}</div>
            <div className="text-sm text-muted-foreground">{r.provider}</div>
            <div className="mt-2 text-sm">
              <a className="underline" href={r.link}>Browse</a>
            </div>
          </li>
        ))}
      </ul>
      <div className="text-sm text-muted-foreground">
        Tip: Use OPAC to search eBooks and journals by title, author, or keyword.
      </div>
    </div>
  )
}
