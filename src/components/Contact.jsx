import { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    message: "",
    email: "",
    first: "",
    last: ""
  });
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Build mailto link with form data
    const subject = encodeURIComponent(`Hey Vani! Message from ${formData.first} ${formData.last}`);
    const body = encodeURIComponent(
      `${formData.message}\n\n—\n${formData.first} ${formData.last}\n${formData.email}`
    );
    
    // Open mailto link
    window.location.href = `mailto:vkorepu.cs@gmail.com?subject=${subject}&body=${body}`;
    
    // Show success message
    setStatus("Opening your email client...");
    
    // Reset form after a delay
    setTimeout(() => {
      setFormData({ message: "", email: "", first: "", last: "" });
      setStatus("");
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" aria-label="Contact">
      <div className="contact-hero">
        <div className="contact-badge">☕ Always brewing ideas</div>
        <h2>LET'S WORK TOGETHER</h2>
        <div className="contact-underline" />
        <p className="contact-tagline">
          Got a project? Want to collaborate? Or just want to chat about tech over coffee?
        </p>
      </div>

      <div className="contact-wrap">
        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="message">
            YOUR MESSAGE <span className="req">(REQUIRED)</span>
          </label>
          <textarea 
            id="message" 
            name="message" 
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell me about your project, idea, or just say hi..."
            required 
          />

          <label htmlFor="email">
            EMAIL ADDRESS <span className="req">(REQUIRED)</span>
          </label>
          <input 
            id="email" 
            name="email" 
            type="email" 
            value={formData.email}
            onChange={handleChange}
            placeholder="your.email@example.com"
            required 
          />

          <div className="name-row">
            <div>
              <label htmlFor="first">FIRST NAME</label>
              <input 
                id="first" 
                name="first" 
                type="text" 
                value={formData.first}
                onChange={handleChange}
                placeholder="Mark"
              />
            </div>
            <div>
              <label htmlFor="last">LAST NAME</label>
              <input 
                id="last" 
                name="last" 
                type="text" 
                value={formData.last}
                onChange={handleChange}
                placeholder="Zuckerberg"
              />
            </div>
          </div>

          <button type="submit" className="outline-btn">
            SEND MESSAGE
          </button>
          
          {status && (
            <div className="status-message">
              {status}
            </div>
          )}
        </form>

        <div className="contact-stats">
          <div className="stat-item">
            <div className="stat-number">~24H</div>
            <div className="stat-label">Response Time</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">☕ ∞</div>
            <div className="stat-label">Coffee Consumed</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">100%</div>
            <div className="stat-label">Excited to Connect</div>
          </div>
        </div>

        <div className="alt-contact">
          Prefer email?{" "}
          <a href="mailto:vkorepu.cs@gmail.com">vkorepu.cs@gmail.com</a>
        </div>
      </div>
    </section>
  );
}