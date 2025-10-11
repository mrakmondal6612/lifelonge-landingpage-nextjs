export function SectionTitle({
  eyebrow,
  title,
}: {
  eyebrow: string
  title: string
}) {
  return (
    <div className="mb-6">
      <h3 className="text-xs tracking-widest text-primary/70 font-semibold uppercase">{eyebrow}</h3>
      <h2 className="text-2xl md:text-3xl font-semibold text-primary mt-1">{title}</h2>
    </div>
  )
}
