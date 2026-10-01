import { useState } from 'react'
import CodeBlock from '../components/CodeBlock'
import { FadeIn, FadeInScale } from '../components/ui/motion'
import { SectionHeading } from '../components/SectionHeading'
import { cn } from '@/lib/utils'

const BUILTIN_SAMPLE = `// with-forge.ts
import { deploy, type Deployment } from '@forge/sdk'

const result: Deployment = await deploy({
  project: 'api-server',
  branch: 'main',
  region: 'auto',
  environment: 'production',
})

if (result.healthy) {
  console.log(\`Live at \${result.url}\`)
} else {
  throw new Error('Rollback triggered: ' + result.reason)
}`

const PROXIES_SAMPLE = `// with-proxy.ts
import { proxy, rateLimit, auth } from '@forge/proxies'

export default proxy({
  prefix: 'https://legacy.internal',
  middleware: [auth(), rateLimit({ max: 500, window: '1m' })],
})`

const SECRETS_SAMPLE = `// with-secrets.ts
import { deploy } from '@forge/sdk'

await deploy({
  project: 'api-server',
  env: {
    DATABASE_URL: secrets.from('prod/db'),
    STRIPE_KEY: secrets.from('prod/payments'),
  },
}) // Secrets are encrypted at rest.`

const TABS = [
  { label: 'TypeScript', sample: BUILTIN_SAMPLE, lang: 'typescript' },
  { label: 'JavaScript', sample: PROXIES_SAMPLE, lang: 'javascript' },
  { label: 'Go', sample: SECRETS_SAMPLE, lang: 'go' },
]

export default function CodeIntegration() {
  const [tab, setTab] = useState(0)

  return (
    <section id="integration" className="py-24 md:py-32">
      <div className="container">
        <SectionHeading
          tag="Integrations"
          title="Works the way you code"
          description="Drop into your editor, add a config file, and let Forge handle the rest. Language, framework, and deployment target are up to you."
        />

        <FadeIn className="mx-auto mt-12 flex justify-center">
          <div className="inline-flex rounded-md border border-border bg-muted/40 p-1">
            {TABS.map((t, i) => (
              <button
                key={t.label}
                type="button"
                aria-pressed={i === tab}
                onClick={() => setTab(i)}
                className={cn(
                  'rounded px-4 py-2 font-mono text-xs transition-colors',
                  i === tab ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground',
                )}
              >
                {t.label}
              </button>
            ))}
          </div>
        </FadeIn>

        <FadeInScale className="mx-auto mt-8 max-w-3xl" delay={0.05}>
          <CodeBlock key={tab} code={TABS[tab].sample} language={TABS[tab].lang} />
        </FadeInScale>
      </div>
    </section>
  )
}