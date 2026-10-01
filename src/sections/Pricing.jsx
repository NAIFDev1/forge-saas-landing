import { Check } from 'lucide-react'
import { Badge } from '../components/ui/badge'
import { Button } from '../components/ui/button'
import { Stagger, StaggerItem } from '../components/ui/motion'
import { SectionHeading } from '../components/SectionHeading'
import { PRICING } from '../data/content'
import { cn } from '@/lib/utils'

export default function Pricing() {
  return (
    <section id="pricing" className="border-t border-border/60 bg-muted/10 py-24 md:py-32">
      <div className="container">
        <SectionHeading
          tag="Pricing"
          title="Start free. Scale when you're ready."
          description="Simple, developer-friendly pricing. No hidden fees — deploy as much as you need."
        />

        <Stagger className="mx-auto mt-14 grid max-w-4xl gap-5 lg:grid-cols-3" stagger={0.1}>
          {PRICING.map((plan) => (
            <StaggerItem
              key={plan.name}
              className={cn(
                'relative flex flex-col rounded-xl border p-6 transition-colors',
                plan.highlight
                  ? 'border-primary/50 bg-card shadow-[0_0_0_1px_rgba(34,211,238,0.3),0_24px_48px_-24px_rgba(34,211,238,0.25)]'
                  : 'border-border bg-card/60 hover:border-border/80',
              )}
            >
              {plan.badge && (
                <Badge className="absolute -top-3 right-6 border-primary/40 bg-primary text-primary-foreground shadow-lg shadow-cyan-500/20">
                  {plan.badge}
                </Badge>
              )}
              <h3 className="font-display text-lg font-semibold">{plan.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{plan.description}</p>
              <p className="mt-6 flex items-baseline gap-1.5">
                <span className="font-display text-4xl font-semibold tracking-tight">{plan.price}</span>
                <span className="text-sm text-muted-foreground">{plan.period}</span>
              </p>
              <Button
                asChild
                className="mt-6 w-full"
                variant={plan.highlight ? 'default' : 'outline'}
              >
                <a href="#top">{plan.cta}</a>
              </Button>
              <ul className="mt-7 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {f}
                  </li>
                ))}
              </ul>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}