import { getCourse } from "@/lib/lms-mock"

export default function Page({ params }: { params: { id: string } }) {
  const c = getCourse(params.id)
  if (!c) return null
  return (
    <div className="rounded-lg border bg-white p-4">
      <h2 className="text-lg font-semibold">Files</h2>
      <ul className="mt-2 space-y-2 text-sm">
        {c.files.map(f => (
          <li key={f.id} className="flex items-center justify-between rounded border bg-amber-50 p-3">
            <span>{f.title}</span>
            <a className="underline" href={f.file} download>Download</a>
          </li>
        ))}
      </ul>
    </div>
  )
}
