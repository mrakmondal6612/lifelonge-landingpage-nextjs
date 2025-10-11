"use client"

import { useState } from "react"

export function ContactForm({ submitLabel }: { submitLabel: string }) {
  const [status, setStatus] = useState<"idle" | "sent">("idle")

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        setStatus("sent")
        setTimeout(() => setStatus("idle"), 2500)
      }}
      className="grid gap-3"
    >
      <label className="grid gap-1">
        <span className="text-sm">Full Name</span>
        <input className="h-10 rounded-[var(--radius-md)] border border-border bg-card px-3" required />
      </label>
      <label className="grid gap-1">
        <span className="text-sm">Email Address</span>
        <input type="email" className="h-10 rounded-[var(--radius-md)] border border-border bg-card px-3" required />
      </label>
      <label className="grid gap-1">
        <span className="text-sm">Phone Number</span>
        <input type="tel" className="h-10 rounded-[var(--radius-md)] border border-border bg-card px-3" />
      </label>
      <label className="grid gap-1">
        <span className="text-sm">Subject</span>
        <input className="h-10 rounded-[var(--radius-md)] border border-border bg-card px-3" />
      </label>
      <label className="grid gap-1">
        <span className="text-sm">Your Message</span>
        <textarea className="min-h-32 rounded-[var(--radius-md)] border border-border bg-card px-3 py-2" />
      </label>
      <button
        className="mt-1 inline-flex items-center justify-center rounded-[var(--radius-md)] bg-primary text-primary-foreground h-10 px-4 font-medium"
        type="submit"
      >
        {status === "sent" ? "Sent!" : submitLabel}
      </button>
    </form>
  )
}
