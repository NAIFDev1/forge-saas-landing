import { ArrowUpRight } from 'lucide-react'

export default function Announcement() {
  return (
    <a
      href="#changelog"
      className="group flex items-center justify-center gap-2 border-b border-border/60 bg-muted/30 px-4 py-2 text-xs text-muted-foreground transition-colors hover:text-foreground"
    >
      <span className="rounded bg-primary/15 px-1.5 py-0.5 font-mono text-[10px] font-semibold text-primary">
        NEW
      </span>
      Forge CLI 2.0 is now available
      <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </a>
  )
}