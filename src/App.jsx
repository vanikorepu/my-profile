import './App.css'
import Projects from './Projects'
import Experience from './Experience'
import Contact from './Contact'

function App() {
  return (
    <main style={{ textAlign: "center", padding: "40px" }}>
      <h1>Hi, I’m Vani Korepu 👋</h1>
      <h2>Frontend Engineer | React • UX • Accessibility</h2>
      <p>I build responsive, inclusive interfaces.</p>

      <Projects />
      <Experience />
      <Contact />
    </main>
  )
}

export default App
