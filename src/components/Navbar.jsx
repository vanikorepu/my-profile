import './Navbar.css'

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">Vani Korepu</h1>
      <ul>
        <li><a href="#hero">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#work">Work</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  )
}
