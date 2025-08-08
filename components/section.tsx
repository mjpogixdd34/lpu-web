export default function Section({
  children,
  className = "",
  containerClassName = "",
}: {
  children: React.ReactNode
  className?: string
  containerClassName?: string
}) {
  return (
    <section className={`py-8 sm:py-10 lg:py-12 ${className}`}>
      <div className={`container mx-auto px-4 ${containerClassName}`}>{children}</div>
    </section>
  )
}
