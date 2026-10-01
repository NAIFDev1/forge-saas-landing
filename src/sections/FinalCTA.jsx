import { ArrowRight } from 'lucide-react'
import { Button } from '../components/ui/button'
import { FadeInScale } from '../components/ui/motion'

export default function FinalCTA() {
  return (
    <section id="cta" className="pb-24 md:pb-32">
      <div className="container">
        <FadeInScale>
          <div className="relative overflow-hidden rounded-2xl border border-primary/25 bg-card px-6 py-16 text-center sm:px-12">
            <div className="bg-grid absolute inset-0 opacity-60" aria-hidden="true" />
            <div
              className="absolute left-1/2 top-[-10rem] h-60 w-[36rem] -translate-x-1/2 rounded-full bg-cyan-500/15 blur-3xl"
              aria-hidden="true"
            />

            <div className="relative">
              <p className="font-mono text-sm text-primary">$ forge deploy</p>
              <h2 className="mx-auto mt-4 max-w-xl font-display text-3xl font-semibold leading-tight tracking-[-0.02em] sm:text-4xl md:text-5xl">
                Ready to build, ship, and{' '}
                <span className="text-gradient">scale?</span>
              </h2>
              <p className="mx-auto mt-5 max-w-md text-base text-muted-foreground md:text-lg">
                Start deploying in minutes — no credit card required.
              </p>
              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button asChild size="lg" className="w-full sm:w-auto">
                  <a href="#top">
                    Start deploying <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                  <a href="#top">Talk to us</a>
                </Button>
              </div>
            </div>
          </div>
        </FadeInScale>
      </div>
    </section>
  )
}