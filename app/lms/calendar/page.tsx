import { LMS_UPCOMING, LMS_COURSES } from "@/lib/lms-mock"

export default function Page() {
  return (
    <div className="rounded-lg border bg-white p-4">
      <h1 className="text-lg font-semibold">Calendar</h1>
      <ul className="mt-2 space-y-2 text-sm">
        {LMS_UPCOMING.map((u, i) => {
          const course = LMS_COURSES.find(c => c.id === u.courseId)
          return (
            <li key={i} className="rounded border bg-amber-50 p-3">
              <div className="text-xs text-muted-foreground">{new Date(u.due).toLocaleString()}</div>
              <div className="font-medium">{course?.code} • {u.kind}: {u.title}</div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
