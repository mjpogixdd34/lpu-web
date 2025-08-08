import CardGrid from "@/components/card-grid"
import { LMS_COURSES } from "@/lib/lms-mock"

export default function Page() {
  const items = LMS_COURSES.map(c => ({
    title: `${c.code}: ${c.title}`,
    description: `${c.professor} • ${c.schedule}`,
    href: `/lms/courses/${c.id}`,
    image: c.cover,
    meta: c.term,
  }))
  return (
    <div>
      <h1 className="text-2xl font-bold text-amber-900">My Courses</h1>
      <div className="mt-4">
        <CardGrid items={items} columns={{ base: 1, md: 2, xl: 3 }} />
      </div>
    </div>
  )
}
