export type HeroImageProps = React.HTMLAttributes<HTMLDivElement>

export function HeroImage({ ...props }: HeroImageProps) {
  return (
    <blockquote className="h-screen bg-hero-pattern-background bg-cover p-40">
      <blockquote className="h-50 rounded-full bg-hero-pattern-outer bg-cover p-20">
        <blockquote className="h-screen rounded-full bg-hero-pattern-inner bg-cover" />
      </blockquote>
    </blockquote>
  )
}
