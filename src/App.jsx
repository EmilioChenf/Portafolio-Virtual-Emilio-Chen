import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import TechStack from './components/TechStack.jsx'
import TechnicalDecisions from './components/TechnicalDecisions.jsx'
import Projects from './components/Projects.jsx'
import Workflow from './components/Workflow.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <TechStack />
        <TechnicalDecisions />
        <Projects />
        <Workflow />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
