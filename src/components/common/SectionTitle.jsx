function SectionTitle({
  eyebrow,
  title,
  description,
  align = 'left',
}) {
  const alignment =
    align === 'center'
      ? 'items-center text-center'
      : 'items-start text-left'

  return (
    <div className={`flex flex-col ${alignment} max-w-2xl`}>
      {eyebrow && (
        <span className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#B49A70]">
          {eyebrow}
        </span>
      )}

      <h2 className="text-5xl font-medium leading-[0.95] text-[#1D2923] md:text-6xl">
        {title}
      </h2>

      {description && (
        <p className="mt-6 max-w-xl text-base leading-7 text-[#77766F]">
          {description}
        </p>
      )}
    </div>
  )
}

export default SectionTitle