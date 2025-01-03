import Navigation from './components/ui/Navigation'
import Hero from './components/sections/Hero'
import PartnersSlider from './components/sections/PartnersSlider'
import Features from './components/sections/Features'
import HowItWorks from './components/sections/HowItWorks'
import Waitlist from './components/sections/Waitlist'
import Footer from './components/ui/Footer'

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <PartnersSlider />
      <Features />
      <HowItWorks />
      <Waitlist />
      <Footer />
    </main>
  )
}