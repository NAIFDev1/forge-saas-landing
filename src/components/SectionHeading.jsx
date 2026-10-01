import { cn } from '@/lib/utils'
import { FadeIn } from './ui/motion'

export function SectionHeading({ tag, title, description, className, align = 'center' }) {
  return (
    <FadeIn
      className={cn(
        'flex flex-col gap-4',
        align === 'center' ? 'mx-auto max-w-2xl text-center items-center' : 'max-w-2xl',
        className,
      )}
    >
      <span className="inline-flex items-center justify-center font-mono text-xs font-medium uppercase tracking-[0.18em] text-primary">
        {tag}
      </span>
      <h2 className="font-display text-3xl font-semibold leading-tight tracking-[-0.02em] sm:text-4xl md:text-[2.6rem]">
        {title}
      </h2>
      {description && (
        <p className="text-base leading-relaxed text-muted-foreground md:text-lg">{description}</p>
      )}
    </FadeIn>
  )
}