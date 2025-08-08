import { studentBilling } from "@/lib/student-mock"

export default function Page() {
  const total = studentBilling.items.reduce((s, it) => s + it.amount, 0) + studentBilling.payments.reduce((s, p) => s + p.amount, 0)
  return (
    <div className="space-y-3">
      <h1 className="text-xl font-semibold text-amber-900">Billing</h1>
      <div className="rounded-lg border bg-white p-4 text-sm">
        <div className="font-semibold">{studentBilling.term}</div>
        <div className="mt-2">
          <div className="font-medium">Charges</div>
          <ul className="mt-1">
            {studentBilling.items.map((it) => (
              <li key={it.label} className="flex justify-between">
                <span>{it.label}</span>
                <span>₱ {it.amount.toLocaleString()}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-2">
          <div className="font-medium">Payments</div>
          <ul className="mt-1">
            {studentBilling.payments.map((p) => (
              <li key={p.label} className="flex justify-between">
                <span>{p.label}</span>
                <span>₱ {p.amount.toLocaleString()}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-3 flex justify-between border-t pt-2 font-semibold">
          <span>Balance</span>
          <span>₱ {total.toLocaleString()}</span>
        </div>
        <div className="mt-3">
          <a className="underline" href="/docs/refund-request.pdf" download>Request Refund (PDF)</a>
        </div>
      </div>
    </div>
  )
}
