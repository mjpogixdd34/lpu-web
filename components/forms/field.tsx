"use client"

import { useId } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

export function InputField({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  autoComplete,
  required,
  help,
  error,
  inputClassName,
  adornment,
  id,
}: {
  label: string
  name: string
  type?: string
  value?: string
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  placeholder?: string
  autoComplete?: string
  required?: boolean
  help?: string
  error?: string
  inputClassName?: string
  adornment?: React.ReactNode
  id?: string
}) {
  const fallbackId = useId()
  const _id = id || fallbackId
  const helpId = help ? `${_id}-help` : undefined
  const errorId = error ? `${_id}-error` : undefined
  return (
    <div>
      <Label htmlFor={_id} className="text-sm font-medium">{label}{required ? <span className="text-red-600">{' *'}</span> : null}</Label>
      <div className="mt-1 flex items-stretch gap-2">
        {adornment ? <div className="inline-flex items-center rounded-md border bg-muted px-2 text-sm text-muted-foreground">{adornment}</div> : null}
        <Input
          id={_id}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          autoComplete={autoComplete}
          required={required}
          aria-invalid={!!error}
          aria-describedby={error ? errorId : help ? helpId : undefined}
          className={cn(error && "ring-2 ring-red-500 focus-visible:ring-red-600", inputClassName)}
        />
      </div>
      {help && !error && <p id={helpId} className="mt-1 text-xs text-muted-foreground">{help}</p>}
      {error && <p id={errorId} className="mt-1 text-xs text-red-600">{error}</p>}
    </div>
  )
}

export function TextareaField({
  label,
  name,
  value,
  onChange,
  placeholder,
  required,
  help,
  error,
  id,
  rows = 4,
}: {
  label: string
  name: string
  value?: string
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>
  placeholder?: string
  required?: boolean
  help?: string
  error?: string
  id?: string
  rows?: number
}) {
  const fallbackId = useId()
  const _id = id || fallbackId
  const helpId = help ? `${_id}-help` : undefined
  const errorId = error ? `${_id}-error` : undefined
  return (
    <div>
      <Label htmlFor={_id} className="text-sm font-medium">{label}{required ? <span className="text-red-600">{' *'}</span> : null}</Label>
      <Textarea
        id={_id}
        name={name}
        rows={rows}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        aria-invalid={!!error}
        aria-describedby={error ? errorId : help ? helpId : undefined}
        className={error ? "ring-2 ring-red-500 focus-visible:ring-red-600" : ""}
      />
      {help && !error && <p id={helpId} className="mt-1 text-xs text-muted-foreground">{help}</p>}
      {error && <p id={errorId} className="mt-1 text-xs text-red-600">{error}</p>}
    </div>
  )
}
