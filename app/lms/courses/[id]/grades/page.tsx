import { getCourse } from "@/lib/lms-mock"

export default function Page({ params }: { params: { id: string } }) {
  const c = getCourse(params.id)
  if (!c) return null
  return (
    <div className="rounded-lg border bg-white p-4">
      <h2 className="text-lg font-semibold">Grades</h2>
      <table className="mt-2 w-full text-left text-sm">
        <thead>
          <tr className="text-muted-foreground">
            <th className="py-2">Item</th>
            <th className="py-2">Score</th>
            <th className="py-2">Weight</th>
          </tr>
        </thead>
        <tbody>
          {c.grades.map((g, i) => (
            <tr key={i} className="border-t">
              <td className="py-2">{g.item}</td>
              <td className="py-2">{g.score}</td>
              <td className="py-2">{g.weight ?? "-"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
