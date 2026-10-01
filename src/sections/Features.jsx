import { FeatureIcon } from '../components/ui/icons'
import { Stagger, StaggerItem } from '../components/ui/motion'
import { SectionHeading } from '../components/SectionHeading'
import { FEATURES } from '../data/content'

export default function Features() {
  return (
    <section id="product" className="relative py-24 md:py-32">
      <div className="bg-dots absolute inset-0 opacity-40" aria-hidden="true" />
      <div className="container relative">
        <SectionHeading
          tag="Features"
          title="Everything you need to ship"
          description="Forge brings together the tools modern developers reach for every day — from a powerful CLI to a full web dashboard — in one coherent workflow."
        />

        <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" stagger={0.09}>
          {FEATURES.map((f) => (
            <StaggerItem
              key={f.title}
              className="group rounded-xl border border-border bg-card/60 p-6 transition-all duration-300 hover:border-primary/30 hover:bg-card"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-muted/40 text-primary transition-colors group-hover:bg-primary/10">
                <FeatureIcon name={f.icon} className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.description}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}