import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { studentProfile, studentCourses, studentGrades, studentSchedule } from "@/lib/student-mock"

export default function Page() {
  const units = studentCourses.reduce((sum, c) => sum + c.units, 0)
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <Card>
        <CardHeader>
          <CardTitle>Profile</CardTitle>
        </CardHeader>
        <CardContent className="text-sm">
          <div className="font-semibold">{studentProfile.name}</div>
          <div className="text-muted-foreground">{studentProfile.email}</div>
          <div className="mt-1">{studentProfile.degree}</div>
          <div className="text-muted-foreground">{studentProfile.yearLevel}</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Current Load</CardTitle>
        </CardHeader>
        <CardContent className="text-sm">
          <div>{studentCourses.length} courses</div>
          <div className="text-muted-foreground">{units} units</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Recent Grades</CardTitle>
        </CardHeader>
        <CardContent className="text-sm">
          <ul className="space-y-1">
            {studentGrades.slice(0, 3).map((g, i) => (
              <li key={i} className="flex items-center justify-between">
                <span>{g.code} {g.item}</span>
                <span className="font-medium">{g.score}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card className="md:col-span-2">
        <CardHeader>
          <CardTitle>Courses</CardTitle>
        </CardHeader>
        <CardContent className="text-sm">
          <ul className="grid gap-2 md:grid-cols-2">
            {studentCourses.map((c) => (
              <li key={c.code} className="rounded border bg-white p-2">
                <div className="font-medium">{c.code} — {c.title}</div>
                <div className="text-muted-foreground">{c.professor}</div>
                <div className="text-muted-foreground">{c.schedule}</div>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Weekly Schedule</CardTitle>
        </CardHeader>
        <CardContent className="text-sm">
          <ul className="space-y-1">
            {studentSchedule.map((d) => (
              <li key={d.day}>
                <div className="font-medium">{d.day}</div>
                <div className="text-muted-foreground">{d.items.join(", ")}</div>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
