"use client"

import { createContext, useContext, useEffect, useMemo, useState } from "react"

export type StudentUser = {
  id: string
  email: string
  firstName: string
  lastName: string
}

type AuthContextType = {
  user: StudentUser | null
  loading: boolean
  login: (email: string, password: string) => Promise<{ ok: boolean; error?: string }>
  register: (data: { email: string; password: string; firstName: string; lastName: string }) => Promise<{ ok: boolean; error?: string }>
  logout: () => void
}

const AuthContext = createContext<AuthContextType | null>(null)

type RawUser = StudentUser & { password: string }

const USERS_KEY = "demo:users"
const SESSION_KEY = "demo:session"

function seedDefaultUser() {
  try {
    const existing = JSON.parse(localStorage.getItem(USERS_KEY) || "[]") as RawUser[]
    if (!existing.find((u) => u.email === "student@demo.lpu.edu")) {
      const seeded: RawUser = {
        id: "u_1001",
        email: "student@demo.lpu.edu",
        firstName: "Alex",
        lastName: "Student",
        password: "Password123",
      }
      localStorage.setItem(USERS_KEY, JSON.stringify([...existing, seeded]))
    }
  } catch {
    // ignore
  }
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<StudentUser | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Init
    try {
      seedDefaultUser()
      const sess = localStorage.getItem(SESSION_KEY)
      if (sess) {
        const parsed = JSON.parse(sess) as StudentUser
        setUser(parsed)
      }
    } catch {
      // ignore
    } finally {
      setLoading(false)
    }
  }, [])

  async function login(email: string, password: string) {
    const users = JSON.parse(localStorage.getItem(USERS_KEY) || "[]") as RawUser[]
    const found = users.find((u) => u.email.toLowerCase() === email.toLowerCase())
    if (!found || found.password !== password) {
      return { ok: false, error: "Invalid email or password" }
    }
    const profile: StudentUser = { id: found.id, email: found.email, firstName: found.firstName, lastName: found.lastName }
    localStorage.setItem(SESSION_KEY, JSON.stringify(profile))
    setUser(profile)
    return { ok: true }
  }

  async function register(data: { email: string; password: string; firstName: string; lastName: string }) {
    const users = JSON.parse(localStorage.getItem(USERS_KEY) || "[]") as RawUser[]
    if (users.some((u) => u.email.toLowerCase() === data.email.toLowerCase())) {
      return { ok: false, error: "Email already registered" }
    }
    const newUser: RawUser = {
      id: `u_${Date.now()}`,
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
      password: data.password,
    }
    localStorage.setItem(USERS_KEY, JSON.stringify([...users, newUser]))
    const profile: StudentUser = { id: newUser.id, email: newUser.email, firstName: newUser.firstName, lastName: newUser.lastName }
    localStorage.setItem(SESSION_KEY, JSON.stringify(profile))
    setUser(profile)
    return { ok: true }
  }

  function logout() {
    localStorage.removeItem(SESSION_KEY)
    setUser(null)
  }

  const value = useMemo<AuthContextType>(() => ({ user, loading, login, register, logout }), [user, loading])

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error("useAuth must be used within AuthProvider")
  return ctx
}
