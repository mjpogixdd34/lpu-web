"use client"

import { useMemo, useState } from "react"
import { getCourse } from "@/lib/lms-mock"
import { Button } from "@/components/ui/button"

export default function Page({ params }: { params: { id: string; qid: string } }) {
  const c = getCourse(params.id)
  const quiz = useMemo(() => c?.quizzes.find(q => q.id === params.qid), [c, params.qid])
  const [answers, setAnswers] = useState<number[]>([])
  const [score, setScore] = useState<number | null>(null)

  if (!c || !quiz) return <div className="text-sm text-muted-foreground">Quiz not found.</div>

  function select(idx: number, opt: number) {
    setAnswers(prev => {
      const next = [...prev]
      next[idx] = opt
      return next
    })
  }

  function submit() {
    let s = 0
    quiz.questions.forEach((q, i) => {
      if (answers[i] === q.correctIndex) s += 1
    })
    setScore(s)
  }

  return (
    <article className="rounded-lg border bg-white p-4">
      <h1 className="text-lg font-semibold">{quiz.title}</h1>
      <ol className="mt-4 space-y-3">
        {quiz.questions.map((q, i) => (
          <li key={q.id} className="rounded border bg-amber-50 p-3">
            <div className="font-medium">{i + 1}. {q.prompt}</div>
            <div className="mt-2 grid gap-2">
              {q.options.map((opt, k) => (
                <label key={k} className="flex items-center gap-2 text-sm">
                  <input
                    type="radio"
                    name={`q-${i}`}
                    checked={answers[i] === k}
                    onChange={() => select(i, k)}
                  />
                  <span>{opt}</span>
                </label>
              ))}
            </div>
          </li>
        ))}
      </ol>
      <div className="mt-4">
        <Button className="bg-amber-700 text-amber-50 hover:bg-amber-800" onClick={submit}>Submit Quiz</Button>
        {score !== null && (
          <div className="mt-3 text-sm">
            Score: {score}/{quiz.questions.length}
          </div>
        )}
      </div>
    </article>
  )
}
