export const NAV_LINKS = [
  { label: 'Product', href: '#product' },
  { label: 'Developers', href: '#developers' },
  { label: 'Resources', href: '#changelog' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Changelog', href: '#changelog' },
]

export const ECOSYSTEM = ['React', 'Next.js', 'Node.js', 'Python', 'Docker', 'GitHub', 'PostgreSQL', 'AWS']

export const FEATURES = [
  {
    icon: 'rocket',
    title: 'Instant Deployments',
    description: 'Deploy projects directly from your Git repository.',
  },
  {
    icon: 'terminal',
    title: 'Powerful CLI',
    description: 'Control your entire workflow from the terminal.',
  },
  {
    icon: 'activity',
    title: 'Real-Time Logs',
    description: 'Inspect builds, deployments, and application logs instantly.',
  },
  {
    icon: 'cubes',
    title: 'Environment Management',
    description: 'Manage development, staging, and production environments.',
  },
  {
    icon: 'code2',
    title: 'API First',
    description: 'Automate your workflow using a powerful REST API.',
  },
  {
    icon: 'users',
    title: 'Team Workflows',
    description: 'Collaborate with developers while keeping deployments organized.',
  },
]

export const CLI_COMMANDS = [
  {
    cmd: 'forge login',
    out: ['✓ Authenticated as developer@forge.dev'],
  },
  {
    cmd: 'forge init',
    out: ['✓ Initialized project in current directory', '  ├─ forge.config.json created', '  └─ Connected to git repository'],
  },
  {
    cmd: 'forge dev',
    out: ['● Running dev server at http://localhost:3000', '  Watching for changes…'],
  },
  {
    cmd: 'forge test',
    out: ['✓ Running 248 tests', '  ✓ 248 passed · 0 failed · 1 skipped', '  Duration: 1.24s'],
  },
  {
    cmd: 'forge deploy',
    out: [
      '✓ Building application',
      '✓ Running tests',
      '✓ Optimizing assets',
      '✓ Creating deployment',
      '',
      'Deployment successful',
      'https://app.forge.dev/project/prod-1842',
    ],
  },
  {
    cmd: 'forge logs',
    out: ['2026-09-29T09:41:02Z  INFO  server listening on :8080', '2026-09-29T09:41:03Z  INFO  connected to database postgres', '2026-09-29T09:41:07Z  GET  /health  200  2ms'],
  },
]

export const GIT_FLOW = ['Build', 'Tests', 'Preview', 'Production']

export const DEPLOY_TREE = [
  { cmd: 'main', depth: 0 },
  { cmd: 'Build ✓', depth: 1, ok: true },
  { cmd: 'Tests ✓', depth: 1, ok: true },
  { cmd: 'Preview ✓', depth: 1, ok: true },
  { cmd: 'Production ✓', depth: 1, ok: true },
]

export const BUILD_HISTORY = [
  { id: 'prod-1842', branch: 'main', state: 'success', time: '2m ago' },
  { id: 'prod-1841', branch: 'main', state: 'success', time: '31m ago' },
  { id: 'prod-1840', branch: 'fix/auth', state: 'failed', time: '1h ago' },
  { id: 'prod-1839', branch: 'main', state: 'success', time: '3h ago' },
  { id: 'prod-1838', branch: 'feature/api', state: 'building', time: 'now' },
]

export const RECENT_LOGS = [
  { time: '09:41:02', level: 'INFO', msg: 'server listening on :8080' },
  { time: '09:41:03', level: 'INFO', msg: 'connected to database postgres' },
  { time: '09:41:07', level: 'INFO', msg: 'GET /health 200 2ms' },
  { time: '09:41:12', level: 'WARN', msg: 'slow query detected (38ms) on users' },
  { time: '09:41:20', level: 'INFO', msg: 'deployment prod-1842 ready' },
]

export const CHANGELOG = [
  { version: '2.0.0', title: 'Improved deployment engine', tag: 'Featured', body: 'Faster incremental builds, smarter cache layers, and full rollback support.' },
  { version: '1.8.0', title: 'New CLI commands', tag: 'CLI', body: 'Added forge logs, forge rollback, and interactive forge init.' },
  { version: '1.7.0', title: 'Faster build pipeline', tag: 'Performance', body: 'Parallel asset optimization cuts build times by up to 40%.' },
  { version: '1.6.0', title: 'Improved developer dashboard', tag: 'Dashboard', body: 'Redesigned metrics view with CPU, memory, and request graphs.' },
]

export const PRICING = [
  {
    name: 'Free',
    description: 'For personal projects.',
    price: '$0',
    period: 'forever',
    cta: 'Start free',
    features: ['1 project', 'Preview deployments', 'Community support', 'Basic CLI'],
  },
  {
    name: 'Pro',
    description: 'For professional developers.',
    price: '$12',
    period: '/ month',
    cta: 'Get Pro',
    highlight: true,
    badge: 'Most popular',
    features: ['Unlimited projects', 'Production deployments', 'Real-time logs', 'Environment management', 'REST API', 'Priority support'],
  },
  {
    name: 'Team',
    description: 'For development teams.',
    price: '$29',
    period: '/ member / month',
    cta: 'Start Team',
    features: ['Everything in Pro', 'Team workflows', 'Role-based access', 'Audit logs', 'Usage analytics', 'Dedicated support'],
  },
]

export const FAQS = [
  {
    question: 'What is Forge?',
    answer:
      'Forge is a modern developer platform designed for building, testing, debugging, and deploying applications. It combines a powerful CLI, a REST API, and a web dashboard so you can move from a git push to a live deployment in seconds.',
  },
  {
    question: 'Does Forge work with my existing Git repository?',
    answer:
      'Yes. Forge connects directly to any Git repository. Push to a branch and Forge builds, tests, and deploys it automatically through configurable pipeline stages.',
  },
  {
    question: 'Can I use Forge from the command line?',
    answer:
      'Absolutely. The CLI is a first-class interface for Forge. You can write code, run tests, manage environments, deploy, and inspect logs without ever leaving the terminal.',
  },
  {
    question: 'Does Forge provide an API?',
    answer:
      'Yes. Forge exposes a REST API for deployments, projects, environments, and more, so you can fully automate your workflow with scripts and integrations.',
  },
  {
    question: 'Can I manage multiple environments?',
    answer:
      'Forge supports development, staging, and production environments, each with its own configuration, variables, and deployment history.',
  },
  {
    question: 'Is Forge suitable for team projects?',
    answer:
      'Yes. Team plans add role-based access, shared workflows, audit logs, and usage analytics so multiple developers can collaborate safely.',
  },
]

export const FOOTER_COLUMNS = [
  {
    title: 'Product',
    links: ['Features', 'CLI', 'API', 'Integrations', 'Changelog'],
  },
  {
    title: 'Developers',
    links: ['Documentation', 'Guides', 'API Reference', 'Examples'],
  },
  {
    title: 'Resources',
    links: ['Blog', 'Community', 'Status'],
  },
  {
    title: 'Company',
    links: ['About', 'Contact', 'GitHub'],
  },
]