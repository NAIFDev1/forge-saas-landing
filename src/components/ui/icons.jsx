import { Box, TerminalSquare, Rocket, Activity, Boxes, Code2, Users } from 'lucide-react'

export const LogoMark = ({ className = 'h-6 w-6' }) => (
  <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
    <rect width="32" height="32" rx="7" fill="url(#forge-bg)" stroke="url(#forge-stroke)" />
    <path d="M6 10h20M6 16h20M6 22h13" stroke="#ededf2" strokeWidth="2.4" strokeLinecap="round" />
    <circle cx="25" cy="22" r="2.6" fill="#22d3ee" />
    <defs>
      <linearGradient id="forge-bg" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
        <stop stop-color="#0c0c0f" />
        <stop offset="1" stop-color="#101013" />
      </linearGradient>
      <linearGradient id="forge-stroke" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
        <stop stop-color="#27272a" />
        <stop offset="1" stop-color="#22d3ee" stopOpacity="0.6" />
      </linearGradient>
    </defs>
  </svg>
)

export const FeatureIcon = ({ name, className }) => {
  const map = {
    rocket: Rocket,
    terminal: TerminalSquare,
    activity: Activity,
    cubes: Boxes,
    code2: Code2,
    users: Users,
  }
  const C = map[name] ?? Box
  return <C className={className} aria-hidden="true" />
}