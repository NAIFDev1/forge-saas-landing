import { FadeIn, Stagger, StaggerItem } from '../components/ui/motion'
import { SectionHeading } from '../components/SectionHeading'
import { CHANGELOG } from '../data/content'
import { cn } from '@/lib/utils'

const TAG_STYLES = {
  Featured: 'border-amber-400/30 bg-amber-400/10 text-amber-300',
  CLI: 'border-sky-400/30 bg-sky-400/10 text-sky-300',
  Performance: 'border-violet-400/30 bg-violet-400/10 text-violet-300',
  Dashboard: 'border-primary/30 bg-primary/10 text-primary',
}

export default function Changelog() {
  return (
    <section id="changelog" className="py-24 md:py-32">
      <div className="container">
        <SectionHeading
          tag="Changelog"
          title="Built in the open"
          description="Forge ships often. Here's what's new in the platform recently."
        />

        <div className="mx-auto mt-14 max-w-2xl">
          <Stagger className="space-y-3" stagger={0.08}>
            {CHANGELOG.map((c) => (
              <StaggerItem
                key={c.version}
                className="group flex flex-col gap-2 rounded-lg border border-border bg-card/50 p-5 transition-colors hover:border-primary/30 sm:flex-row sm:items-center sm:gap-5"
              >
                <span className="shrink-0 font-mono text-lg font-bold text-muted-foreground/80 transition-colors group-hover:text-foreground">
                  v{c.version}
                </span>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-display text-base font-semibold">{c.title}</h3>
                    {c.tag && (
                      <span
                        className={cn(
                          'rounded-full border px-2 py-0.5 font-mono text-[10px] font-medium',
                          TAG_STYLES[c.tag] ?? 'border-border text-muted-foreground',
                        )}
                      >
                        {c.tag}
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
          <FadeIn delay={0.15} className="mt-8 text-center">
            <a
              href="#top"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-opacity hover:opacity-80"
            >
              View full changelog
              <span aria-hidden="true">→</span>
            </a>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}