import { site } from '../data/site'

// Top section
export default function Hero() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <p>{site.role}</p>

      <h1 className="text-4xl font-bold">{site.name}</h1>

      <p className="mt-4">{site.pitch}</p>

      <p className="mt-4">
        {site.location} ·{' '}
        <a href={`mailto:${site.email}`} className="underline">
          {site.email}
        </a>
      </p>

      <ul className="mt-6 flex gap-4">
        {site.links.map((link) => (
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
    </section>
  )
}