import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Timeline from './components/Timeline'   // ✅ fixed path
import Projects from './components/Projects';
import Contact from './components/Contact'
import Footer from './components/Footer'


function App() {
  return (
    <>
      <Navbar />   {/* now your nav is visible at the top */}
      <main>
        <Hero />
        <About />
        <Timeline />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  )
}

export default App
