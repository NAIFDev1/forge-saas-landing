import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useState } from 'react'
import { cn } from '@/lib/utils'
import { FadeIn, FadeInScale } from '../components/ui/motion'
import { SectionHeading } from '../components/SectionHeading'
import { CLI_COMMANDS } from '../data/content'

function Terminal({ active }) {
  const reduced = useReducedMotion()
  const current = CLI_COMMANDS[active]

  return (
    <div className="overflow-hidden rounded-xl border border-border bg-[#0b0b0f]">
      <div className="flex items-center justify-between border-b border-border/70 bg-muted/20 px-4 py-2">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
          <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
          <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
        </div>
        <span className="font-mono text-[11px] text-muted-foreground">forge — interactive</span>
      </div>
      <div className="p-5 font-mono text-[13px] leading-relaxed">
        <p>
          <span className="text-primary">$</span> {current.cmd}
        </p>
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={reduced ? false : { opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduced ? undefined : { opacity: 0, y: -4 }}
            transition={{ duration: 0.22 }}
            className="mt-3 space-y-1.5"
          >
            {current.out.length === 0 ? (
              <p className="text-muted-foreground">…no output</p>
            ) : (
              current.out.map((o, i) => {
                const cls = o.startsWith('●')
                  ? 'text-amber-300'
                  : o.startsWith('https://')
                    ? 'text-cyan-300 underline decoration-cyan-300/40'
                    : o.startsWith('✓') || o.includes('✓ passed')
                      ? 'text-ok'
                      : 'text-zinc-300'
                return (
                  <p key={i} className={cn('whitespace-pre-wrap', cls)}>
                    {o}
                  </p>
                )
              })
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

export default function CLISection() {
  const [active, setActive] = useState(0)

  return (
    <section id="developers" className="border-t border-border/60 bg-muted/10 py-24 md:py-32">
      <div className="container">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              tag="CLI"
              title="Command line, without limits"
              description="Everything you need is one line away. Forge's CLI covers the whole lifecycle — jumping from an idea to a running deployment in seconds."
              align="left"
            />
            <FadeIn className="mt-8 flex flex-wrap gap-2" delay={0.1}>
              {CLI_COMMANDS.map((c, i) => (
                <button
                  key={c.cmd}
                  type="button"
                  aria-pressed={i === active}
                  onClick={() => setActive(i)}
                  className={cn(
                    'rounded-md border px-3 py-1.5 font-mono text-xs transition-colors',
                    i === active
                      ? 'border-primary/50 bg-primary/10 text-primary'
                      : 'border-border text-muted-foreground hover:border-primary/30 hover:text-foreground',
                  )}
                >
                  {c.cmd}
                </button>
              ))}
            </FadeIn>
          </div>
          <FadeInScale className="order-first lg:order-none">
            <Terminal active={active} />
          </FadeInScale>
        </div>
      </div>
    </section>
  )
}