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
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.first} ${formData.last}`);
    const body = encodeURIComponent(
      `Message: ${formData.message}\n\nFrom: ${formData.first} ${formData.last}\nEmail: ${formData.email}`
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
        <h2>Let's Chat!</h2>
      </div>

      <div className="contact-wrap">
        <div className="contact-intro">
          <p>
            I'd love to hear from you! Whether you have a question, want to collaborate, or just want to say hi, feel free to reach out.
          </p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="message">
            Message <span className="req">(required)</span>
          </label>
          <textarea 
            id="message" 
            name="message" 
            value={formData.message}
            onChange={handleChange}
            required 
          />

          <label htmlFor="email">
            Email <span className="req">(required)</span>
          </label>
          <input 
            id="email" 
            name="email" 
            type="email" 
            value={formData.email}
            onChange={handleChange}
            required 
          />

          <div className="name-row">
            <div>
              <label htmlFor="first">First Name</label>
              <input 
                id="first" 
                name="first" 
                type="text" 
                value={formData.first}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="last">Last Name</label>
              <input 
                id="last" 
                name="last" 
                type="text" 
                value={formData.last}
                onChange={handleChange}
              />
            </div>
          </div>

          <button type="submit" className="outline-btn">Submit</button>
          
          {status && (
            <div style={{ textAlign: "center", marginTop: "1rem", color: "var(--purple)", fontWeight: 600 }}>
              {status}
            </div>
          )}

          <div className="alt-contact">
            or email directly:{" "}
            <a href="mailto:vkorepu.cs@gmail.com">vkorepu.cs@gmail.com</a>
          </div>
        </form>
      </div>
    </section>
  );
}