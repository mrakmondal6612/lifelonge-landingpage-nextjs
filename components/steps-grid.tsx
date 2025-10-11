export function StepsGrid() {
  const steps = [
    { title: "Initial Consultation", desc: "We learn about you, your interests, and goals." },
    { title: "Pathway Selection", desc: "Explore courses, colleges, and align with your aspirations." },
    { title: "Application Process", desc: "Prepare documents, timelines, and submit strong applications." },
    { title: "Admission & Counseling", desc: "Choose the best offer with expert guidance." },
    { title: "Financial Planning", desc: "Scholarships, budgeting, and funding guidance." },
    { title: "Post-Admission Support", desc: "Onboarding, visa assistance, and smooth transition." },
  ]
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {steps.map((s, i) => (
        <div
          key={s.title}
          className="rounded-[var(--radius-lg)] bg-secondary text-secondary-foreground border border-border p-5"
        >
          <div className="text-xs font-semibold text-primary/70 uppercase tracking-widest">Step {i + 1}</div>
          <h4 className="mt-1 font-semibold text-primary">{s.title}</h4>
          <p className="text-sm mt-2 leading-relaxed">{s.desc}</p>
        </div>
      ))}
    </div>
  )
}
