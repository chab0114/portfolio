import { education } from '../data/education'

// Education section
export default function Education() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-8">
      <h2 className="text-2xl font-bold">Education</h2>

      {education.map((item) => (
        <article key={`${item.school}-${item.dates}`} className="mt-4">
          <h3 className="font-semibold">{item.program}</h3>
          <p>
            {item.school}, {item.location} · {item.dates}
          </p>
        </article>
      ))}
    </section>
  )
}