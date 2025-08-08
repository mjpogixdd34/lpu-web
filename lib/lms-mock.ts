export type LMSCourse = {
  id: string
  code: string
  title: string
  term: string
  professor: string
  cover?: string
  schedule: string
  announcements: { id: string; title: string; date: string; body: string }[]
  modules: {
    id: string
    title: string
    items: (
      | { kind: "page"; id: string; title: string; content: string }
      | { kind: "file"; id: string; title: string; file: string }
      | { kind: "assignment"; id: string; title: string; due: string; points: number; instructions: string }
      | { kind: "quiz"; id: string; title: string; questions: QuizQuestion[]; points: number }
    )[]
  }[]
  assignments: { id: string; title: string; due: string; points: number; instructions: string }[]
  quizzes: { id: string; title: string; points: number; questions: QuizQuestion[] }[]
  files: { id: string; title: string; file: string }[]
  grades: { item: string; score: string; weight?: string }[]
  discussions: { id: string; title: string; posts: number; lastActivity: string }[]
}

export type QuizQuestion = {
  id: string
  prompt: string
  options: string[]
  correctIndex: number
}

export const LMS_COURSES: LMSCourse[] = [
  {
    id: "cs-101",
    code: "CS 101",
    title: "Programming Fundamentals",
    term: "1st Term AY 2025–2026",
    professor: "Prof. Reyes",
    cover: "/computer-science-students.png",
    schedule: "Mon/Wed 9:00–10:30",
    announcements: [
      { id: "a1", title: "Welcome to CS 101", date: "2025-07-05", body: "Please read the syllabus and be ready for our first lab session." },
      { id: "a2", title: "Lab 1 Released", date: "2025-07-08", body: "Download the lab brief and submit via Assignments by next week." },
    ],
    modules: [
      {
        id: "m1",
        title: "Week 1: Introduction",
        items: [
          { kind: "page", id: "p1", title: "Course Overview", content: "Objectives, grading policy, and expectations." },
          { kind: "file", id: "f1", title: "Syllabus (PDF)", file: "/docs/cs101-syllabus.pdf" },
        ],
      },
      {
        id: "m2",
        title: "Week 2: Variables & Types",
        items: [
          { kind: "page", id: "p2", title: "Lecture Notes", content: "Basics of variables, data types, and operations." },
          { kind: "assignment", id: "as1", title: "Lab 1 – Basics", due: "2025-07-15T23:59:00", points: 100, instructions: "Complete the exercises and upload a single .zip file." },
          { kind: "quiz", id: "q1", title: "Quiz 1", points: 10, questions: [
            { id: "q1-1", prompt: "Which is a valid variable name in many languages?", options: ["1var", "var1", "var-1", "var 1"], correctIndex: 1 },
            { id: "q1-2", prompt: "Which type typically represents whole numbers?", options: ["int", "float", "string", "bool"], correctIndex: 0 },
          ]},
        ],
      },
    ],
    assignments: [
      { id: "as1", title: "Lab 1 – Basics", due: "2025-07-15T23:59:00", points: 100, instructions: "Upload a .zip with your source files. Include README." },
      { id: "as2", title: "Programming Exercise 1", due: "2025-07-22T23:59:00", points: 100, instructions: "Implement basic functions and unit tests." },
    ],
    quizzes: [
      { id: "q1", title: "Quiz 1", points: 10, questions: [
        { id: "q1-1", prompt: "Which is a valid variable name in many languages?", options: ["1var", "var1", "var-1", "var 1"], correctIndex: 1 },
        { id: "q1-2", prompt: "Which type typically represents whole numbers?", options: ["int", "float", "string", "bool"], correctIndex: 0 },
      ]},
    ],
    files: [
      { id: "f1", title: "Syllabus (PDF)", file: "/docs/cs101-syllabus.pdf" },
      { id: "f2", title: "Lab 1 Brief (PDF)", file: "/docs/cs101-lab1.pdf" },
    ],
    grades: [
      { item: "Quiz 1", score: "9/10" },
      { item: "Lab 1", score: "92/100" },
    ],
    discussions: [
      { id: "d1", title: "Introduce yourself", posts: 28, lastActivity: "2025-07-09" },
      { id: "d2", title: "Lab 1 questions", posts: 12, lastActivity: "2025-07-11" },
    ],
  },
  {
    id: "stat-210",
    code: "STAT 210",
    title: "Statistics for CS",
    term: "1st Term AY 2025–2026",
    professor: "Dr. Santos",
    cover: "/placeholder.svg?height=180&width=320",
    schedule: "Mon 14:00–17:00",
    announcements: [
      { id: "a1", title: "Welcome to Statistics", date: "2025-07-05", body: "Read chapter 1 and bring your calculator." },
    ],
    modules: [
      {
        id: "m1",
        title: "Descriptive Statistics",
        items: [
          { kind: "page", id: "p1", title: "Mean/Median/Mode", content: "Central tendency and dispersion measures." },
          { kind: "file", id: "f1", title: "Worksheet 1 (PDF)", file: "/docs/stat210-worksheet1.pdf" },
        ],
      },
    ],
    assignments: [
      { id: "as1", title: "Worksheet 1", due: "2025-07-18T23:59:00", points: 50, instructions: "Solve problems and upload a single PDF." },
    ],
    quizzes: [],
    files: [{ id: "f1", title: "Worksheet 1 (PDF)", file: "/docs/stat210-worksheet1.pdf" }],
    grades: [{ item: "Worksheet 1", score: "45/50" }],
    discussions: [{ id: "d1", title: "Intro Thread", posts: 10, lastActivity: "2025-07-06" }],
  },
]

export const LMS_UPCOMING = [
  { courseId: "cs-101", kind: "Assignment", title: "Lab 1 – Basics", due: "2025-07-15T23:59:00" },
  { courseId: "cs-101", kind: "Quiz", title: "Quiz 1", due: "2025-07-16T10:30:00" },
  { courseId: "stat-210", kind: "Assignment", title: "Worksheet 1", due: "2025-07-18T23:59:00" },
]

export function getCourse(id: string) {
  return LMS_COURSES.find(c => c.id === id)
}
