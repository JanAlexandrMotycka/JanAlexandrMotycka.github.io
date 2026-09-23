import './Navbar.css';

import { projects } from '../data/projects';
import { school } from '../data/school';
import { work } from '../data/work';

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="#hero">Home</a></li>
        <li>
          <details>
            <summary><a href="#projects">Projects</a></summary>
            <ul>
              {projects.map(project => (
                <li key={project.slug}>
                  <a href={`#${project.slug}`}>{project.title}</a>
                </li>
              ))}
            </ul>
          </details>
        </li>
        <li><a href="#skills">Skills</a></li>
        <li>
            <details><summary><a href="#experience">Experience</a></summary>
            <ul>
              {work.map(job => (
                <li key={job.id}>
                  <a href={`#${job.id}`}>{job.title}</a>
                </li>
              ))}
            </ul>
          </details>
          </li>
        <li><a href="#school">Education</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}
export default Navbar;