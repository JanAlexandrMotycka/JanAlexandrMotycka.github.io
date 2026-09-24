import './Skills.css';

import { projects } from '../data/projects';
import { school } from '../data/school';
import { work } from '../data/work';

function Skills() {
  const technologies = [
    ...new Set([
      ...projects.flatMap(project => project.technologies),
      ...school.flatMap(item => item.technologies),
      ...work.flatMap(job => job.technologies)
    ])
  ];

  return (
    <section id="skills" className="skills-section">
      <h2>Tech Stack</h2>

      <div className="skills-list">
        {technologies.map(tech => (
          <span key={tech} className="skill-tag">
            {tech}
          </span>
        ))}
      </div>
    </section>
  );
}

export default Skills;