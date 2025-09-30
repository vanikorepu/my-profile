import './Hero.css'
import profilePic from '../assets/vani.png'

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-image">
        <img src={profilePic} alt="Vani Korepu"/>
      </div>

      <div className="hero-content">
        <h1>
          Hiya, I’m <span className="highlight">Vani!</span>
        </h1>
        <p className="tagline">
          A coffee-fueled frontend engineer who codes with React, UX, and accessibility in mind.
        </p>
        <p className="location">📍 Based in Massachusetts, USA</p>
        <div className="hero-links">
          <a href="https://www.linkedin.com/in/vanikorepu" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/vanikorepu" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="mailto:vanikorepu@gmail.com">Email</a>
        </div>
      </div>

     
    </section>
  )
}
