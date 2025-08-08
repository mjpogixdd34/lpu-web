"use client"

import { useMemo, useState } from "react"
import { getCourse } from "@/lib/lms-mock"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function Page({ params }: { params: { id: string; aid: string } }) {
  const c = getCourse(params.id)
  const a = useMemo(() => c?.assignments.find(x => x.id === params.aid), [c, params.aid])
  const [filename, setFilename] = useState("")
  const [comments, setComments] = useState("")
  const [submitted, setSubmitted] = useState(false)

  if (!c || !a) return <div className="text-sm text-muted-foreground">Assignment not found.</div>

  function submit(e: React.FormEvent) {
    e.preventDefault()
    if (!filename.trim()) return
    setSubmitted(true)
    alert("Submission received (mock).")
  }

  return (
    <article className="grid gap-4 xl:grid-cols-[2fr_1fr]">
      <div className="rounded-lg border bg-white p-4">
        <h1 className="text-lg font-semibold">{a.title}</h1>
        <div className="text-xs text-muted-foreground">Due: {new Date(a.due).toLocaleString()} • {a.points} pts</div>
        <p className="mt-2 text-sm text-muted-foreground">{a.instructions}</p>
        <form className="mt-4 grid gap-3" onSubmit={submit}>
          <div>
            <Label htmlFor="file">File Name (mock upload)</Label>
            <Input id="file" placeholder="lab1-alex-student.zip" value={filename} onChange={(e) => setFilename(e.target.value)} required />
          </div>
          <div>
            <Label htmlFor="comments">Comments</Label>
            <Textarea id="comments" rows={3} value={comments} onChange={(e) => setComments(e.target.value)} />
          </div>
          <Button type="submit" disabled={submitted} className="bg-amber-700 text-amber-50 hover:bg-amber-800">
            {submitted ? "Submitted" : "Submit Assignment"}
          </Button>
        </form>
      </div>
      <aside className="h-max rounded-lg border bg-amber-50 p-4 text-sm">
        <div className="font-semibold text-amber-900">Resources</div>
        <ul className="mt-2 list-inside list-disc text-muted-foreground">
          <li><a className="underline" href="/docs/cs101-lab1.pdf" download>Lab 1 Brief (PDF)</a></li>
          <li><a className="underline" href={`/lms/courses/${c.id}/modules`}>Related Module</a></li>
        </ul>
      </aside>
    </article>
  )
}
