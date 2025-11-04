import "./Contact.css";

export default function Contact() {
  return (
    <section id="contact" aria-label="Contact">
      {/* Hero (pink) */}
      <div className="contact-hero">
        <h2>Let's Chat!</h2>
      </div>

      {/* Paper area (buttery) */}
      <div className="contact-wrap">
        {/* Human note */}
        <div className="contact-intro">
          <p>
            You send me an email. We chat further there or set up a call.
            And when I say chat, I mean like actual people.
          </p>
        </div>

        {/* Form */}
        <form
          className="contact-form"
          action="mailto:vkorepu.cs@gmail.com"
          method="post"
          encType="text/plain"
        >
          <label htmlFor="message">
            Message <span className="req">(required)</span>
          </label>
          <textarea id="message" name="message" required />

          <label htmlFor="email">
            Email <span className="req">(required)</span>
          </label>
          <input id="email" name="email" type="email" required />

          <div className="name-row">
            <div>
              <label htmlFor="first">First Name</label>
              <input id="first" name="first" type="text" />
            </div>
            <div>
              <label htmlFor="last">Last Name</label>
              <input id="last" name="last" type="text" />
            </div>
          </div>

          <button type="submit" className="outline-btn">Submit</button>

          <div className="alt-contact">
            or email directly:{" "}
            <a href="mailto:vkorepu.cs@gmail.com">vkorepu.cs@gmail.com</a>
          </div>
        </form>
      </div>
    </section>
  );
}