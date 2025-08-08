"use client"

import { useAuth } from "@/components/auth-provider"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function Page() {
  const { user, logout } = useAuth()
  const [values, setValues] = useState({
    firstName: user?.firstName || "",
    lastName: user?.lastName || "",
    email: user?.email || "",
  })

  function save(e: React.FormEvent) {
    e.preventDefault()
    alert("Saved (mock).")
  }

  return (
    <div className="rounded-lg border bg-white p-4">
      <h1 className="text-lg font-semibold">Profile</h1>
      <form className="mt-4 grid gap-3 max-w-md" onSubmit={save}>
        <div>
          <Label htmlFor="first">First Name</Label>
          <Input id="first" value={values.firstName} onChange={(e) => setValues(v => ({ ...v, firstName: e.target.value }))} />
        </div>
        <div>
          <Label htmlFor="last">Last Name</Label>
          <Input id="last" value={values.lastName} onChange={(e) => setValues(v => ({ ...v, lastName: e.target.value }))} />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" value={values.email} onChange={(e) => setValues(v => ({ ...v, email: e.target.value }))} />
        </div>
        <div className="flex gap-2">
          <Button type="submit" className="bg-amber-700 text-amber-50 hover:bg-amber-800">Save</Button>
          <Button type="button" variant="outline" onClick={() => logout()}>Logout</Button>
        </div>
      </form>
    </div>
  )
}
