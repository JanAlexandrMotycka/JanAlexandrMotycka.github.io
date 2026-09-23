import './Skills.css';

import { projects } from '../data/projects';
import { school } from '../data/school';
import { work } from '../data/work';

function Skills() {
    const technologies = [
        ...new Set(
            [
                ...projects.flatMap(project => project.technologies),
                ...school.flatMap(project => project.technologies),
                ...work.flatMap(project => project.technologies)
            ]
        )
    ];

    return (
        <section id="skills">
            <h2>Tech stack</h2>

            <ul>
                {technologies.map(tech => (
                    <li key={tech}>{tech}</li>
                ))}
            </ul>
        </section>
    );
}

export default Skills;