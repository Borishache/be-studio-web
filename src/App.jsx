import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import HeroSection from './sections/HeroSection'
import ScrollPhraseSection from './sections/ScrollPhraseSection'
import ServicesSection from './sections/ServicesSection'
import AiSection from './sections/AiSection'
import WorkSection from './sections/WorkSection'
import ContactSection from './sections/ContactSection'
import DynamicBackground from './components/DynamicBackground'
import useScrollReveal from './hooks/useScrollReveal'

function App() {
  useScrollReveal();

  return (
    <div className="app-wrapper">
      <DynamicBackground />
      <Header />
      <main>
        <HeroSection />
        <ScrollPhraseSection />
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
