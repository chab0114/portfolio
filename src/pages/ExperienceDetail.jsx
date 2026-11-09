import { Link, useParams } from 'react-router'
import { experience } from '../data/experience'

export default function ExperienceDetail() {
    const { slug } = useParams()
    const job = experience.find((item) => item.slug === slug)

    if (!job) {
        return (
            <main>
                <h1>Page not found</h1>
                <p>
                    <Link to="/">
                        Back to home
                    </Link>
                </p>

            </main>
        )
    }

    return (
        <main>
            <p>
                <Link to="/" className='underline'>
                    Back to home
                </Link>
            </p>
            
            <h1>{job.title}</h1>
      <p>
        {job.company} · {job.location} · {job.dates}
      </p>

            <ul>
                {job.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                ))}
            </ul>
        </main>
    )
}