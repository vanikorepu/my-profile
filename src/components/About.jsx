import './About.css'
import { 
  SiReact, 
  SiTypescript, 
  SiNextdotjs, 
  SiTailwindcss, 
  SiFigma 
} from "react-icons/si";
import profilePic from '../assets/vani.png'
import { FaReact, FaGithub } from "react-icons/fa";

export default function About() {
  return (
    <section id="about" className="about">

      <div className="about-container">
       
        {/* Left side headline */}
        <div className="about-left">
          <h2>
            Boston-based Frontend Engineer passionate <br /> 
            about UX, accessibility & Gen AI.
          </h2>
        </div>

        {/* Right side text */}
        <div className="about-right">
          <p>
            Experience across research labs, academia, and software teams, 
            specializing in building intuitive, accessible, and performant interfaces. 
            I’ve worked as a Research Engineer on Generative AI, a Software Developer 
            at UMass Amherst Libraries, and spends all day with coffee, Figma, NextJS, and Tailwind CSS.
          </p>
          <p className="location">📍 Currently in Massachusetts, USA.</p>

          {/* Skills row */}
          <div className="skills">
            <div><SiFigma color="#F24E1E" /></div>        {/* Figma official */}
            <div><SiReact color="#61DAFB" /></div>        {/* React swirl */}
            <div><SiTypescript color="#3178C6" /></div>   {/* TS */}
            <div><SiNextdotjs color="#000000" /></div>    {/* Next.js */}
            <div><SiTailwindcss color="#38BDF8" /></div>  {/* Tailwind */}
          </div>
        </div>
      </div>

      {/* A bit about me section */}
      <div className="about-bio">
        <h2>☕ A bit about me ☕</h2>
        <ul>
          <li> - UMass CS grad, really majored in “usable things.”</li>
          <li> - Playing with GenAI, teaching machines to cite.</li>
          <li> - Built RAG + WCAG tools so libraries don’t suffer.</li>
          <li> - Living in the overlap of design × code × AI.</li>
          <li> - Substack notes on tech, media, connection.</li>
        </ul>

      </div>
    </section>
  );
}
