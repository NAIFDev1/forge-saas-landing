import Announcement from './components/Announcement'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import Ecosystem from './sections/Ecosystem'
import Features from './sections/Features'
import CLISection from './sections/CLISection'
import GitWorkflow from './sections/GitWorkflow'
import Dashboard from './sections/Dashboard'
import CodeIntegration from './sections/CodeIntegration'
import API from './sections/API'
import Changelog from './sections/Changelog'
import Pricing from './sections/Pricing'
import FAQ from './sections/FAQ'
import FinalCTA from './sections/FinalCTA'

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-clip">
      <Announcement />
      <Navbar />
      <main>
        <Hero />
        <Ecosystem />
        <Features />
        <CLISection />
        <GitWorkflow />
        <Dashboard />
        <CodeIntegration />
        <API />
        <Changelog />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}