import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';

function Projects() {
    return (
        <section id="projects">

            <h2>Projects</h2>

            <div className="project-grid">
                {projects.map(project => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                    />
                ))}
            </div>

        </section>
    );
}

export default Projects;