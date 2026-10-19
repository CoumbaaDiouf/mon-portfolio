import About from './components/About'
import Contact from './components/Contact'
import Education from './components/Education'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'

function App() {
  return (
    <div className="min-h-screen bg-cream">
      <a
        href="#accueil"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-60 focus:rounded-full focus:bg-bordeaux focus:px-5 focus:py-2.5 focus:font-semibold focus:text-cream"
      >
        Aller au contenu
      </a>

      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App
