import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contact</h2>

      <p className="contact-intro">
        Interested in working together, discussing a project, or just getting in touch?
        Feel free to reach out.
      </p>

      <div className="contact-links">
        <a
          className="contact-link"
          href="mailto:motycka.alexandr@gmail.com"
        >
          Email
          <span>motycka.alexandr@gmail.com</span>
        </a>

        <a
          className="contact-link"
          href="https://www.linkedin.com/in/jan-alexandr-motyčka-7177a9193/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
          <span>View profile</span>
        </a>

        <a
          className="contact-link"
          href="https://github.com/JanAlexandrMotycka"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
          <span>View projects</span>
        </a>
      </div>
    </section>
  );
}

export default Contact;