import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import HeroSection from './sections/HeroSection'
import ServicesSection from './sections/ServicesSection'
import AiSection from './sections/AiSection'
import WorkSection from './sections/WorkSection'
import ContactSection from './sections/ContactSection'

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <AiSection />
        <WorkSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
