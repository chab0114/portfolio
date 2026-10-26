import { experience } from '../data/experience'

// Work experience section
export default function Experience() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-8">
      <h2 className="text-2xl font-bold">Experience</h2>

      {experience.map((job) => (
        <article key={`${job.company}-${job.dates}`} className="mt-6">
          <h3 className="text-lg font-semibold">
            {job.title}, {job.company}
          </h3>
          <p>
            {job.dates} · {job.location}
          </p>
          <ul className="mt-2 list-disc pl-6">
            {job.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        </article>
      ))}
    </section>
  )
}