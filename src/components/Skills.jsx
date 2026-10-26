import { site } from '../data/site'

// Skills
export default function Skills() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-8">
      <h2 className="text-2xl font-bold">Skills</h2>

      {site.skills.map((group) => (
        <div key={group.group} className="mt-4">
          <h3 className="font-semibold">{group.group}</h3>
          <p>{group.items.join(', ')}</p>
        </div>
      ))}
    </section>
  )
}