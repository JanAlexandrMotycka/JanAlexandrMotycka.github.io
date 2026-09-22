function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="#hero">Home</a></li>
        <li>
          <details>
            <summary>Projects</summary>
            <ul>
              <li>
                <a href="#clicksmith">Clicksmith</a>
              </li>

              <li>
                <a href="#cosmos-industry">Cosmo's Industry</a>
              </li>

              <li>
                <a href="#wreckingball">WreckingBall</a>
              </li>
            </ul>
          </details>
        </li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}
export default Navbar;