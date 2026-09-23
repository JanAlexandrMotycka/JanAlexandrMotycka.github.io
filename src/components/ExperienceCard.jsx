import './ExperienceCard.css';

function ExperienceCard({ job }) {
    return (
        <article className="experience-card" id={job.id}>

            <img
                src={job.image}
                alt={`${job.title} screenshot`}
            />

            <h3>{job.title}</h3>
            
            <h4 className="subtitle">{job.subtitle}</h4>

            <p className="description">{job.description}</p>

            <h4>Used technologies:</h4>
            <div className="technologies">
                {job.technologies.map(technology => (
                    <span key={technology}>
                        {technology}
                    </span>
                ))}
            </div>


        </article>
    );
}

export default ExperienceCard;