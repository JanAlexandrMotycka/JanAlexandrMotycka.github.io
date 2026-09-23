import './Experience.css';

import { school } from '../data/school';
import { work } from '../data/work';
import ExperienceCard from './ExperienceCard';

function Experience() {
    return (
        <section>
            <h2 id="school">Education</h2>
                 <p>School</p>
            <h2 id="Experience">Work Experience</h2>
                {work.map(job => (
                    <ExperienceCard key={job.id} job={job} />
                ))}
        </section>
    );
}

export default Experience;