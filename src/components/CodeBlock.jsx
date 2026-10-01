import { useState } from 'react'
import { Check, Copy } from 'lucide-react'

const palette = {
  keyword: 'text-fuchsia-300',
  func: 'text-cyan-300',
  string: 'text-emerald-300',
  number: 'text-amber-300',
  comment: 'text-zinc-500 italic',
  plain: 'text-zinc-300',
}

function tokenize(line) {
  const regex =
    /(\/\/[^\n]*|\/\*[\s\S]*?\*\/)|('(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*")|(\b(?:import|from|const|let|var|await|return|function|await|=>|\bnew\b|if|else|for|throw|class|extends|async)\b)|(\b\d+(?:\.\d+)?\b)|([A-Za-z_$][\w$]*)|([^\sA-Za-z0-9_$]+)/g
  const parts = []
  let last = 0
  for (const m of line.matchAll(regex)) {
    if (m.index > last) parts.push({ t: 'plain', v: line.slice(last, m.index) })
    const [full, comment, str, kw, num, ident, punct] = m
    if (comment !== undefined) parts.push({ t: 'comment', v: full })
    else if (str !== undefined) parts.push({ t: 'string', v: full })
    else if (kw !== undefined) parts.push({ t: 'keyword', v: full })
    else if (num !== undefined) parts.push({ t: 'number', v: full })
    else if (ident !== undefined) {
      const isFn = line.slice(m.index + full.length, m.index + full.length + 1) === '('
      parts.push({ t: isFn ? 'func' : 'plain', v: full })
    } else if (punct !== undefined) parts.push({ t: 'plain', v: full })
    last = m.index + full.length
  }
  if (last < line.length) parts.push({ t: 'plain', v: line.slice(last) })
  return parts
}

export default function CodeBlock({ code, language = 'javascript', className = '' }) {
  const [copied, setCopied] = useState(false)
  const lines = code.replace(/\n$/, '').split('\n')

  const onCopy = () => {
    navigator.clipboard?.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 1600)
  }

  return (
    <div className={`overflow-hidden rounded-lg border border-border bg-[#0b0b0f] ${className}`}>
      <div className="flex items-center justify-between border-b border-border/70 bg-muted/20 px-4 py-2">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
          <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
          <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
          <span className="ml-2 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
            {language}
          </span>
        </div>
        <button
          type="button"
          onClick={onCopy}
          aria-label="Copy code"
          className="inline-flex items-center gap-1.5 rounded-md px-2 py-1 font-mono text-[11px] text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
        >
          {copied ? (
            <>
              <Check className="h-3.5 w-3.5 text-primary" /> Copied
            </>
          ) : (
            <>
              <Copy className="h-3.5 w-3.5" /> Copy
            </>
          )}
        </button>
      </div>
      <div className="overflow-x-auto p-4">
        <pre className="font-mono text-[13px] leading-relaxed">
          <code>
            {lines.map((line, i) => (
              <div key={i} className="grid grid-cols-[2.5rem_1fr] gap-4">
                <span className="select-none text-right text-zinc-600">{i + 1}</span>
                <span>
                  {tokenize(line).map((t, j) => (
                    <span key={j} className={palette[t.t]}>
                      {t.v}
                    </span>
                  ))}
                  {line.length === 0 ? ' ' : ''}
                </span>
              </div>
            ))}
          </code>
        </pre>
      </div>
    </div>
  )
}