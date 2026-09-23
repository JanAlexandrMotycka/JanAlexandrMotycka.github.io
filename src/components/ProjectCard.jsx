import './ProjectCard.css';
import { useState } from 'react';


function ProjectCard({ project }) {

      const [open, setOpen] = useState(false);

    return (
        <article className="project-card" id={project.slug}>

            <div className="project-summary">
                <div className="project-summary-text">
                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <h4>Technologies used:</h4>

                <div className="technologies">
                    {project.technologies.map(technology => (
                    <span key={technology}>
                        {technology}
                    </span>
                    ))}
                </div>
                </div>

                <img
                className="project-image"
                src={project.image}
                alt={`${project.title} screenshot`}
                />
            </div>

            <button onClick={() => setOpen(!open)}>
                {open ? 'Hide project' : 'View project'}
            </button>

            <div className={`project-content ${open ? 'open' : ''}`}>
                <p>{project.description}</p>

                {project.content.map((block, index) => {
                    if (block.type === 'text') {
                    return <p key={index}>{block.text}</p>;
                }

            if (block.type === 'heading') {
                return <h4 key={index}>{block.text}</h4>;
            }

            if (block.type === 'image') {
                return (
                    <img
                    key={index}
                    src={block.src}
                    alt={block.alt}
              />
            );
          }
        })}

        <a
          href={project.steamUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          View on Steam
        </a>
      </div>

        </article>
    );
}

export default ProjectCard;