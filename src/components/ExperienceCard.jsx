import './ExperienceCard.css';

function ExperienceCard({ job }) {
    return (
        <article className="experience-card" id={job.id}>

            <img
                src={job.image}
                alt={`${job.title} screenshot`}
            />

            <h3>{job.title}</h3>

            <div className="technologies">
                {job.technologies.map(technology => (
                    <span key={technology}>
                        {technology}
                    </span>
                ))}
            </div>

            <p>{job.description}</p>

        </article>
    );
}

export default ExperienceCard;