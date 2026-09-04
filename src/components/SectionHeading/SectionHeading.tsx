interface SectionHeadingProps {
  id: string
  label: string
  title: string
  intro?: string
}

export function SectionHeading({ id, label, title, intro }: SectionHeadingProps) {
  return (
    <header className="section-heading" data-reveal>
      <p className="eyebrow">{label}</p>
      <div className="section-heading__content">
        <h2 id={id}>{title}</h2>
        {intro && <p>{intro}</p>}
      </div>
    </header>
  )
}
