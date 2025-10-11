import Image from "next/image"

export function FeatureCard({
  title,
  text,
  imageSrc,
}: {
  title: string
  text: string
  imageSrc: string
}) {
  return (
    <article className="rounded-[var(--radius-lg)] bg-card text-card-foreground border border-border shadow-sm overflow-hidden">
      <div className="relative h-36">
        <Image src={imageSrc || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <div className="p-4">
        <h4 className="font-semibold text-primary">{title}</h4>
        <p className="text-sm mt-2 leading-relaxed">{text}</p>
      </div>
    </article>
  )
}
