import './Education.css';

import { school } from '../data/school';
import { work } from '../data/work';
import ExperienceCard from './ExperienceCard';

function Education() {
    return (
        <section>
            <h2 id="school">Education</h2>
                {school.map(school => (
                    <ExperienceCard key={school.id} job={school} />
                ))}
        </section>
    );
}

export default Education;