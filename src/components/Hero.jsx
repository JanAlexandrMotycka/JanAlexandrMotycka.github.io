import './Hero.css';

function Hero() {
  return (
    <section id="hero">
      <h1>Jan Alexandr Motyčka</h1>

      <h2>C# / Unity / Full-Stack / Software Developer</h2>

      <p>
        Software Development graduate focused on C#, Unity,
        web development and building complete software projects.
      </p>

      <div className="hero-actions">
        <a href="/CV_Motycka.pdf" download>Download CV</a>
      </div>
    </section>
  );
}

export default Hero;