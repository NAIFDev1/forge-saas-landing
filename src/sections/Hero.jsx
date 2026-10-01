import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, Check, Copy, FileDown, FilePlus2, FileCode2, Folder } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Badge } from '../components/ui/badge'
import { Button } from '../components/ui/button'
import { EASE } from '../components/ui/motion'
import FluxVortex from '@/components/ui/flux-vortex'
import { cn } from '@/lib/utils'

const terminalSteps = [
  '✓ Building application',
  '✓ Running tests',
  '✓ Optimizing assets',
  '✓ Creating deployment',
]

const fileTree = [
  { icon: Folder, name: 'src', depth: 0, dir: true },
  { icon: FileCode2, name: 'index.ts', depth: 1 },
  { icon: FileCode2, name: 'app.ts', depth: 1 },
  { icon: FilePlus2, name: 'forge.config.ts', depth: 0, dir: false, root: true },
  { icon: FileDown, name: 'package.json', depth: 0, root: true },
]

function TerminalPreview() {
  const reduced = useReducedMotion()
  const [line, setLine] = useState(reduced ? terminalSteps.length : 0)

  useEffect(() => {
    if (reduced || line >= terminalSteps.length) return
    const t = setTimeout(() => setLine((l) => l + 1), reduced ? 0 : 650)
    return () => clearTimeout(t)
  }, [line, reduced])

  return (
    <div className="overflow-hidden rounded-xl border border-border bg-[#0b0b0f] shadow-2xl shadow-black/50">
      {/* Chrome */}
      <div className="flex items-center justify-between border-b border-border/70 bg-muted/20 px-4 py-2.5">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
          <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
          <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
          <span className="ml-2 font-mono text-[11px] text-muted-foreground">forge — zsh</span>
        </div>
        <span className="rounded-md border border-border bg-background px-2 py-0.5 font-mono text-[10px] text-muted-foreground">
          deploy
        </span>
      </div>

      <div className="grid gap-0 sm:grid-cols-[11rem_1fr]">
        {/* File tree */}
        <div className="hidden border-r border-border/70 bg-muted/10 p-3 sm:block">
          <p className="mb-3 px-2 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
            Explorer
          </p>
          {fileTree.map((f, i) => (
            <div
              key={f.name}
              className={cn(
                'flex items-center gap-2 rounded px-2 py-1 font-mono text-[12px]',
                i === 1 ? 'bg-muted text-foreground' : 'text-muted-foreground',
              )}
              style={{ paddingLeft: `${0.75 + f.depth * 1}rem` }}
            >
              <f.icon className="h-3.5 w-3.5 shrink-0" />
              {f.name}
            </div>
          ))}
        </div>

        {/* Terminal body */}
        <div className="p-4 font-mono text-[13px] leading-relaxed">
          <p>
            <span className="text-primary">$</span> <span className="text-foreground">forge deploy</span>
            <motion.span
              className="ml-1 inline-block h-4 w-2 translate-y-0.5 animate-blink bg-zinc-400"
              aria-hidden="true"
            />
          </p>
          <div className="mt-2 space-y-1">
            {line > 0 && <p className="text-ok">✓ Building application</p>}
            {line > 1 && <p className="text-ok">✓ Running tests</p>}
            {line > 2 && <p className="text-ok">✓ Optimizing assets</p>}
            {line > 3 && <p className="text-ok">✓ Creating deployment</p>}
            {line >= terminalSteps.length && (
              <motion.p
                initial={reduced ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="pt-1"
              >
                <span className="text-primary">✔</span>{' '}
                <span className="font-semibold text-foreground">Deployment successful</span>
                <br />
                <span className="text-cyan-300 underline decoration-cyan-300/40">
                  https://app.forge.dev/project/prod-1842
                </span>
              </motion.p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

function InstallCommand() {
  const [copied, setCopied] = useState(false)
  const cmd = 'npm install -g forge-cli'

  const onCopy = () => {
    navigator.clipboard?.writeText(cmd)
    setCopied(true)
    setTimeout(() => setCopied(false), 1600)
  }

  return (
    <div className="inline-flex items-center gap-3 rounded-md border border-border bg-muted/40 py-2 pl-4 pr-2 font-mono text-[13px] text-muted-foreground">
      <span className="text-primary">$</span>
      <span className="text-foreground">{cmd}</span>
      <button
        type="button"
        onClick={onCopy}
        aria-label={copied ? 'Copied' : 'Copy install command'}
        className="flex h-7 w-7 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
      >
        {copied ? <Check className="h-3.5 w-3.5 text-primary" /> : <Copy className="h-3.5 w-3.5" />}
      </button>
    </div>
  )
}

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: EASE, delay },
})

export default function Hero() {
  const reducedMotion = useReducedMotion()

  return (
    <section id="top" className="relative overflow-hidden pb-20 pt-20 md:pt-28">
      {/* Flux Vortex background */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <FluxVortex
          className="pointer-events-none"
          speed={reducedMotion ? 0 : 1}
          opacity={0.95}
          density={0.9}
        />
      </div>
      <div
        className="absolute inset-0 z-[1] bg-gradient-to-b from-background/70 via-transparent to-background"
        aria-hidden="true"
      />

      <div className="container relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div {...fadeUp(0)}>
            <Badge className="border-primary/25 font-mono text-xs tracking-wider text-primary">
              DEVELOPER TOOLKIT
            </Badge>
          </motion.div>

          <motion.h1
            {...fadeUp(0.08)}
            className="mt-6 font-display text-5xl font-semibold leading-[1.05] tracking-[-0.03em] sm:text-6xl md:text-7xl"
          >
            Ship better software, <span className="text-gradient">faster.</span>
          </motion.h1>

          <motion.p
            {...fadeUp(0.16)}
            className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg"
          >
            A modern developer platform for building, testing, debugging, and deploying applications
            without slowing down your workflow.
          </motion.p>

          <motion.div {...fadeUp(0.24)} className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <a href="#pricing">
                Get Started <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full font-mono sm:w-auto">
              <a href="#developers">View Documentation</a>
            </Button>
          </motion.div>

          <motion.div {...fadeUp(0.32)} className="mt-8 flex justify-center">
            <InstallCommand />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.3 }}
          className="relative mx-auto mt-14 max-w-3xl md:mt-20"
        >
          <div
            className="absolute -inset-x-6 inset-y-0 bg-gradient-to-b from-transparent via-cyan-500/[0.08] to-transparent"
            aria-hidden="true"
          />
          <TerminalPreview />
        </motion.div>
      </div>
    </section>
  )
}