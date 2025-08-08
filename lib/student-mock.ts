export const studentProfile = {
  id: "u_1001",
  name: "Jay Literal",
  email: "student@demo.lpu.edu",
  degree: "BS Computer Science",
  yearLevel: "3rd Year",
}

export const studentCourses = [
  { code: "CS 101", title: "Programming Fundamentals", units: 3, professor: "Prof. Reyes", schedule: "Mon/Wed 9:00–10:30" },
  { code: "CS 220", title: "Data Structures", units: 3, professor: "Prof. Cruz", schedule: "Tue/Thu 10:00–11:30" },
  { code: "STAT 210", title: "Statistics for CS", units: 3, professor: "Dr. Santos", schedule: "Mon 14:00–17:00" },
  { code: "ENG 115", title: "Technical Writing", units: 3, professor: "Prof. Gomez", schedule: "Fri 13:00–16:00" },
]

export const studentGrades = [
  { code: "CS 101", item: "Quiz 1", score: "92%" },
  { code: "CS 220", item: "Lab 2", score: "95%" },
  { code: "STAT 210", item: "Midterm", score: "89%" },
  { code: "ENG 115", item: "Essay", score: "91%" },
]

export const studentSchedule = [
  { day: "Mon", items: ["CS 101 (9:00)", "STAT 210 Lab (14:00)"] },
  { day: "Tue", items: ["CS 220 (10:00)"] },
  { day: "Wed", items: ["CS 101 (9:00)"] },
  { day: "Thu", items: ["CS 220 (10:00)"] },
  { day: "Fri", items: ["ENG 115 (13:00)"] },
]

export const studentBilling = {
  term: "1st Term AY 2025–2026",
  items: [
    { label: "Tuition", amount: 42000 },
    { label: "Laboratory Fees", amount: 6500 },
    { label: "Library Fee", amount: 1200 },
    { label: "Miscellaneous", amount: 1800 },
  ],
  payments: [{ label: "Payment (July 15)", amount: -20000 }],
}

export const studentMessages = [
  { from: "Registrar", subject: "Enrollment window opens", date: "2025-07-10" },
  { from: "CS 220", subject: "Lab 3 instructions", date: "2025-07-12" },
  { from: "Library", subject: "Workshop: Research Databases", date: "2025-07-14" },
]

export const studentSavedResources = [
  { title: "Business Analytics Journal", provider: "Emerald", link: "/library/e-resources/emerald" },
  { title: "Education Source", provider: "Gale", link: "/library/e-resources/gale" },
]
