import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import HeroSection from './sections/HeroSection'
import ServicesSection from './sections/ServicesSection'
import WorkSection from './sections/WorkSection'
import ContactSection from './sections/ContactSection'

function App() {
  return (
    <div className="app-wrapper">
      <div className="bg-glow bg-glow-blue"></div>
      <div className="bg-glow bg-glow-orange"></div>
      
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <WorkSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
