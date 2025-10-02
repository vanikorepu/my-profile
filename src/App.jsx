import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Work from './components/Work'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />   {/* now your nav is visible at the top */}
      <main>
        <Hero />
        <About />
        <Work />
        <Contact />
        <Footer />
      </main>
    </>
  )
}

export default App
