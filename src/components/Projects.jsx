import { projects } from '../data/projects'

// Projects section
export default function Projects() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-8">
      <h2 className="text-2xl font-bold">Projects</h2>

      {projects.map((project) => (
        <article key={project.id} className="mt-6">
          <h3 className="text-lg font-semibold">{project.title}</h3>
          <p>{project.summary}</p>

          <ul className="mt-2 list-disc pl-6">
            {project.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <p className="mt-2">Stack: {project.stack.join(', ')}</p>

          {project.links.length > 0 && (
            <ul className="mt-2 flex gap-4">
              {project.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </article>
      ))}
    </section>
  )
}