import { studentGrades } from "@/lib/student-mock"

export default function Page() {
  return (
    <div className="space-y-3">
      <h1 className="text-xl font-semibold text-amber-900">Records</h1>
      <div className="rounded-lg border bg-white p-4">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="text-muted-foreground">
              <th className="py-2">Course</th>
              <th className="py-2">Item</th>
              <th className="py-2">Score</th>
            </tr>
          </thead>
          <tbody>
            {studentGrades.map((g, i) => (
              <tr key={i} className="border-t">
                <td className="py-2">{g.code}</td>
                <td className="py-2">{g.item}</td>
                <td className="py-2">{g.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <a className="underline" href="/docs/registrar-transcript-request.pdf" download>Request Official Transcript (PDF)</a>
      </div>
    </div>
  )
}
