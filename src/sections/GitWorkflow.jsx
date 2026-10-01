import { motion, useReducedMotion } from 'framer-motion'
import { Check, GitBranch, Rocket } from 'lucide-react'
import { SectionHeading } from '../components/SectionHeading'
import { FadeIn, Stagger, StaggerItem } from '../components/ui/motion'
import { GIT_FLOW } from '../data/content'

export default function GitWorkflow() {
  const reduced = useReducedMotion()

  return (
    <section id="guards" className="py-24 md:py-32">
      <div className="container">
        <SectionHeading
          tag="Workflow"
          title="From git push to production"
          description="Forge connects to your repository and walks each commit through the pipeline — build, tests, preview, and production — automatically."
        />

        <FadeIn className="mx-auto mt-14 max-w-3xl">
          <div className="relative">
            {/* Connector line */}
            <div
              className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-primary/40 via-border to-border"
              aria-hidden="true"
            />
            {!reduced && (
              <motion.div
                className="absolute left-1/2 top-0 h-24 w-px -translate-x-1/2 bg-primary"
                style={{ boxShadow: '0 0 12px 2px rgba(34,211,238,0.5)' }}
                initial={{ top: '-6rem' }}
                whileInView={{ top: ['-6rem', '100%'] }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ repeat: Infinity, duration: 3.2, ease: 'easeInOut', repeatDelay: 0.4 }}
                aria-hidden="true"
              />
            )}

            <div className="space-y-10">
              {GIT_FLOW.map((stage, i) => {
                return (
                  <Stagger key={stage}>
                    <div className="relative flex items-center gap-6">
                      <span className="absolute left-1/2 z-10 -translate-x-1/2">
                        <StaggerItem className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/40 bg-background shadow-[0_0_20px_rgba(34,211,238,0.15)]">
                          {i < GIT_FLOW.length - 1 ? (
                            <Check className="h-5 w-5 text-primary" />
                          ) : (
                            <Rocket className="h-5 w-5 text-primary" />
                          )}
                        </StaggerItem>
                      </span>
                      <StaggerItem className="ml-2 flex-1 rounded-xl border border-border bg-card/60 px-6 py-5 sm:ml-16">
                        <p className="font-display text-lg font-semibold">{stage}</p>
                        <p className="mt-1 font-mono text-xs text-muted-foreground">
                          {i === 0
                            ? 'pip install · npm ci'
                            : i === 1
                              ? 'forge test — 248 passed'
                              : i === 2
                                ? 'forge preview — https://preview.forge.dev/q7x'
                                : 'forge deploy — live · rollback enabled'}
                        </p>
                      </StaggerItem>
                    </div>
                  </Stagger>
                )
              })}
            </div>
          </div>

          <FadeIn delay={0.15} className="mt-12 flex flex-wrap items-center justify-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-md border border-border bg-muted/40 px-3 py-2 font-mono text-xs text-muted-foreground">
              <GitBranch className="h-3.5 w-3.5" /> main → prod-1842
            </span>
            <span className="hidden text-muted-foreground sm:inline">|</span>
            <span className="inline-flex items-center gap-2 rounded-md border border-border bg-muted/40 px-3 py-2 font-mono text-xs text-muted-foreground">
              <span className="flex items-center gap-2">
                <Check className="h-3.5 w-3.5 text-ok" /> <Check className="h-3.5 w-3.5 text-ok" />
              </span>
              All checks passed
            </span>
          </FadeIn>
        </FadeIn>
      </div>
    </section>
  )
}