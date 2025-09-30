import Projects from './Projects'
import Experience from './Experience'
import './Work.css'

export default function Work() {
  return (
    <section id="work" className="work">
      <h2>My Work</h2>
      <Projects />
      <Experience />
    </section>
  )
}
