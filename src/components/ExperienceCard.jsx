import './ExperienceCard.css';

function ExperienceCard({ job }) {
  return (
    <article className="experience-card" id={job.id}>
      <img
        className="experience-image"
        src={job.image}
        alt={`${job.title} logo`}
      />

      <div className="experience-info">
        <h3>{job.title}</h3>

        <h4 className="subtitle">
          {job.subtitle}
        </h4>

        <p className="description">
          {job.description}
        </p>

        <h4>Used technologies:</h4>

        <div className="technologies">
          {job.technologies.map(technology => (
            <span key={technology}>
              {technology}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

export default ExperienceCard;