import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import LoadingScreen from './components/LoadingScreen'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import About from './sections/About'
import Stack from './sections/Stack'
import Projects from './sections/Projects'
import Services from './sections/Services'
import Experience from './sections/Experience'
import Contact from './sections/Contact'

export default function App() {
  const [loaded, setLoaded] = useState(false)

  return (
    <>
      <AnimatePresence>
        {!loaded && <LoadingScreen onDone={() => setLoaded(true)} />}
      </AnimatePresence>

      {loaded && (
        <div className="min-h-screen bg-surface-900 text-white overflow-x-hidden">
          <Navbar />
          <main>
            <Hero />
            <About />
            <Stack />
            <Projects />
            <Services />
            <Experience />
            <Contact />
          </main>
          <Footer />
        </div>
      )}
    </>
  )
}
