import { Check, Loader2, X } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { FadeInScale } from '../components/ui/motion'
import { SectionHeading } from '../components/SectionHeading'
import { BUILD_HISTORY, RECENT_LOGS } from '../data/content'

const METRICS = [
  { label: 'CPU', value: '34%', ok: true },
  { label: 'Memory', value: '1.1 GB', ok: true },
  { label: 'Requests', value: '2.4k/min', ok: true },
]

function StateIcon({ state }) {
  if (state === 'success') return <Check className="h-3.5 w-3.5 text-ok" />
  if (state === 'failed') return <X className="h-3.5 w-3.5 text-err" />
  return <Loader2 className="h-3.5 w-3.5 animate-spin text-amber-300" />
}

function DashboardPreview() {
  const reduced = useReducedMotion()
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-background shadow-2xl shadow-black/60">
      {/* window chrome */}
      <div className="flex items-center justify-between border-b border-border/70 bg-muted/20 px-4 py-2.5">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
          <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
          <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
          <span className="ml-2 font-mono text-[11px] text-muted-foreground">
            app.forge.dev/dashboard
          </span>
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-md border border-primary/30 bg-primary/10 px-2 py-0.5 font-mono text-[10px] text-primary">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" /> ALL SYSTEMS OPERATIONAL
        </span>
      </div>

      <div className="grid gap-0 md:grid-cols-[1fr_16rem]">
        {/* Left column */}
        <div className="p-5">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-display text-sm font-semibold">project / api-server</h3>
              <p className="font-mono text-[11px] text-muted-foreground">main · 2m ago · prod-1842</p>
            </div>
            <span className="inline-flex items-center gap-1.5 rounded-md border border-ok/30 bg-ok/10 px-2.5 py-1 font-mono text-[11px] text-ok">
              <Check className="h-3 w-3" /> Healthy
            </span>
          </div>

          {/* metric cards */}
          <div className="mt-5 grid grid-cols-3 gap-3">
            {METRICS.map((m) => (
              <div key={m.label} className="rounded-lg border border-border bg-muted/30 p-3">
                <p className="text-[11px] uppercase tracking-wider text-muted-foreground">{m.label}</p>
                <p className="mt-1 font-mono text-lg font-semibold">{m.value}</p>
                {!reduced && (
                  <motion.div
                    className="mt-2 h-1 overflow-hidden rounded-full bg-muted"
                    aria-hidden="true"
                  >
                    <motion.div
                      className="h-full rounded-full bg-cyan-400"
                      initial={{ width: 0 }}
                      whileInView={{ width: m.label === 'CPU' ? '34%' : m.label === 'Memory' ? '55%' : '72%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: 'easeOut' }}
                    />
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          {/* request graph */}
          <div className="mt-4 rounded-lg border border-border bg-muted/20 p-4">
            <div className="flex items-center justify-between">
              <p className="text-[11px] uppercase tracking-wider text-muted-foreground">Requests</p>
              <p className="font-mono text-[11px] text-ok">2.4k/min</p>
            </div>
            <div className="mt-3 flex h-16 items-end gap-1" aria-hidden="true">
              {[35, 55, 42, 70, 90, 58, 74, 46, 66, 84, 62, 78, 96, 50, 38].map((h, i) => (
                <motion.span
                  key={i}
                  className="flex-1 rounded-t-sm bg-cyan-400/70"
                  initial={reduced ? false : { scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.03, duration: 0.5, ease: 'easeOut' }}
                  style={{ height: `${h}%`, transformOrigin: 'bottom' }}
                />
              ))}
            </div>
            <div className="mt-2 flex justify-between font-mono text-[10px] text-muted-foreground">
              <span>09:30</span>
              <span>09:45</span>
              <span>10:00</span>
            </div>
          </div>
        </div>

        {/* Right column: build history + live logs */}
        <div className="flex flex-col border-t border-border/70 md:border-l md:border-t-0">
          <div className="p-4">
            <p className="text-[11px] uppercase tracking-wider text-muted-foreground">Builds</p>
            <div className="mt-3 space-y-1.5">
              {BUILD_HISTORY.map((b) => (
                <div
                  key={b.id}
                  className="flex items-center justify-between rounded-md border border-border/70 px-3 py-1.5"
                >
                  <div className="flex items-center gap-2">
                    <StateIcon state={b.state} />
                    <div>
                      <p className="font-mono text-[11px]">{b.id}</p>
                      <p className="font-mono text-[10px] text-muted-foreground">{b.branch}</p>
                    </div>
                  </div>
                  <span className="font-mono text-[10px] text-muted-foreground">{b.time}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 border-t border-border/70 bg-[#0b0b0f] p-4">
            <p className="text-[11px] uppercase tracking-wider text-muted-foreground">Live Logs</p>
            <div className="mt-3 space-y-1 font-mono text-[11px] leading-relaxed">
              {RECENT_LOGS.map((l, i) => (
                <p key={i} className="flex gap-2">
                  <span className="shrink-0 text-zinc-600">{l.time}</span>
                  <span
                    className={cn(
                      'shrink-0',
                      l.level === 'WARN' ? 'text-amber-300' : l.level === 'ERROR' ? 'text-err' : 'text-ok',
                    )}
                  >
                    {l.level}
                  </span>
                  <span className="truncate text-zinc-300">{l.msg}</span>
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Dashboard() {
  return (
    <section id="dashboard" className="border-t border-border/60 bg-muted/10 py-24 md:py-32">
      <div className="container">
        <SectionHeading
          tag="Dashboard"
          title="Your entire pipeline, at a glance"
          description="Monitor health, watch builds, and tail live logs from one surface — without leaving your flow."
        />
        <FadeInScale className="relative mx-auto mt-14 max-w-4xl">
          <div
            className="absolute -inset-x-8 -inset-y-4 rounded-2xl bg-gradient-to-b from-cyan-500/[0.08] to-transparent"
            aria-hidden="true"
          />
          <DashboardPreview />
        </FadeInScale>
      </div>
    </section>
  )
}