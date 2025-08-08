import { studentCourses } from "@/lib/student-mock"

export default function Page() {
  function toCourseId(code: string) {
    return code.toLowerCase().replace(/\s+/g, "-")
  }
  return (
    <div className="space-y-3">
      <h1 className="text-xl font-semibold text-amber-900">My Courses</h1>
      <ul className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
        {studentCourses.map((c) => (
          <li key={c.code} className="rounded-lg border bg-white p-4">
            <div className="text-sm text-muted-foreground">{c.code}</div>
            <div className="font-semibold">{c.title}</div>
            <div className="mt-1 text-sm">{c.professor}</div>
            <div className="text-sm text-muted-foreground">{c.schedule}</div>
            <div className="mt-2 text-sm">
              <a className="underline" href={`/lms/courses/${toCourseId(c.code)}`}>Open in LMS</a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
