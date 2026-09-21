function ProjectCard({ project }) {
    return (
        <article className="project-card">

            <img
                src={project.image}
                alt={`${project.title} screenshot`}
            />

            <h3>{project.title}</h3>

            <div className="technologies">
                {project.technologies.map(technology => (
                    <span key={technology}>
                        {technology}
                    </span>
                ))}
            </div>

            <p>{project.description}</p>

            <a
                href={project.steamUrl}
                target="_blank"
                rel="noopener noreferrer"
            >
                View on Steam
            </a>

        </article>
    );
}

export default ProjectCard;