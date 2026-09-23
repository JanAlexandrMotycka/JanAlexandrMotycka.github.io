import './Navbar.css';
import { useState } from 'react';

import { projects } from '../data/projects';
import { work } from '../data/work';

function Navbar() {
  const [projectsOpen, setProjectsOpen] = useState(false);
  const [experienceOpen, setExperienceOpen] = useState(false);

  return (
    <nav className="navbar">
      <ul>
        <li><a href="#hero">Home</a></li>

        <li>
          <button onClick={() => setProjectsOpen(!projectsOpen)}>
            Projects
          </button>

          <ul className={`nav-submenu ${projectsOpen ? 'open' : ''}`}>
            {projects.map(project => (
              <li key={project.slug}>
                <a href={`#${project.slug}`}>{project.title}</a>
              </li>
            ))}
          </ul>
        </li>

        <li><a href="#skills">Skills</a></li>

        <li>
          <button onClick={() => setExperienceOpen(!experienceOpen)}>
            Experience
          </button>

          <ul className={`nav-submenu ${experienceOpen ? 'open' : ''}`}>
            {work.map(job => (
              <li key={job.id}>
                <a href={`#${job.id}`}>{job.title}</a>
              </li>
            ))}
          </ul>
        </li>

        <li><a href="#school">Education</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;