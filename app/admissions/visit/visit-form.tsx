'use client'

export default function VisitForm() {
  return (
    <form className="grid gap-3" onSubmit={(e) => { e.preventDefault(); alert("Tour request submitted!"); }}>
      <label className="text-sm">Preferred Date <input className="mt-1 w-full rounded border p-2" type="date" required /></label>
      <label className="text-sm">Guests <input className="mt-1 w-full rounded border p-2" type="number" min={1} defaultValue={1} required /></label>
      <button className="mt-2 w-full rounded bg-amber-700 px-4 py-2 text-white hover:bg-amber-800 md:w-auto" type="submit">Request Tour</button>
    </form>
  )
}
