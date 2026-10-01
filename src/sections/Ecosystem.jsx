import { FadeIn, Stagger, StaggerItem } from '../components/ui/motion'
import { ECOSYSTEM } from '../data/content'

export default function Ecosystem() {
  return (
    <section className="border-y border-border/60 bg-muted/20 py-14">
      <div className="container">
        <FadeIn className="text-center">
          <p className="text-sm font-medium text-muted-foreground">
            Forge integrates with your existing stack
          </p>
        </FadeIn>
        <Stagger className="mt-8 flex flex-wrap items-center justify-center gap-x-3 gap-y-2.5" stagger={0.05}>
          {ECOSYSTEM.map((name) => (
            <StaggerItem
              key={name}
              className="rounded-md border border-border bg-background px-4 py-2 font-mono text-[13px] font-medium text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
            >
              {name}
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}