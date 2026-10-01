import { useState } from 'react'
import CodeBlock from '../components/CodeBlock'
import { FadeIn, FadeInScale } from '../components/ui/motion'
import { SectionHeading } from '../components/SectionHeading'
import { cn } from '@/lib/utils'

const REQUEST = `POST /v1/deployments
Host: api.forge.dev
Authorization: Bearer fg_live_xxxxxxxxxxxx
Content-Type: application/json

{
  "project": "api-server",
  "branch": "main",
  "environment": "production"
}`

const RESPONSE = `HTTP/1.1 201 Created
Content-Type: application/json

{
  "id": "prod-1842",
  "status": "ready",
  "url": "https://api.prod.forge.dev",
  "commit": "4ff2a91",
  "created_at": "2026-09-29T09:41:02Z"
}`

const JAVASCRIPT = `// forge-sdk.js
import { createClient } from '@forge/sdk'

const forge = createClient({
  token: process.env.FORGE_TOKEN,
})

const deployment = await forge.deployments.create({
  project: 'api-server',
  branch: 'main',
})

console.log('Live at', deployment.url)`

const CURL = `curl -X POST https://api.forge.dev/v1/deployments \\
  -H "Authorization: Bearer fg_live_xxxxxxxxxxxx" \\
  -H "Content-Type: application/json" \\
  -d '{"project":"api-server","branch":"main"}'`

const TABS = [
  { label: 'Request', sample: REQUEST, lang: 'http' },
  { label: 'Response', sample: RESPONSE, lang: 'json' },
  { label: 'JavaScript', sample: JAVASCRIPT, lang: 'javascript' },
  { label: 'cURL', sample: CURL, lang: 'bash' },
]

export default function API() {
  const [tab, setTab] = useState(0)

  return (
    <section id="api" className="border-t border-border/60 bg-muted/10 py-24 md:py-32">
      <div className="container">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              tag="API"
              title="Automate everything"
              description="A clean, versioned REST API for deployments, projects, environments, and more — built for scripts, CI pipelines, and integrations."
              align="left"
            />
            <FadeIn className="mt-8" delay={0.1}>
              <div className="inline-flex flex-wrap rounded-md border border-border bg-muted/40 p-1">
                {TABS.map((t, i) => (
                  <button
                    key={t.label}
                    type="button"
                    aria-pressed={i === tab}
                    onClick={() => setTab(i)}
                    className={cn(
                      'rounded px-3 py-2 font-mono text-xs transition-colors',
                      i === tab ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground',
                    )}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </FadeIn>
          </div>
          <FadeInScale className="order-first lg:order-none">
            <CodeBlock key={tab} code={TABS[tab].sample} language={TABS[tab].lang} className="max-h-[30rem] overflow-y-auto" />
          </FadeInScale>
        </div>
      </div>
    </section>
  )
}