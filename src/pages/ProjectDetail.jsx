import { Link, useParams } from "react-router";
import { projects } from "../data/projects";

export default function ProjectDetail() {
    const { slug } = useParams()
    const project = projects.find((item) => item.slug === slug)

    if (!project) {
        return (
            <main>
                <h1>Page not found</h1>
                <p>
                    <Link to="/">Back to home</Link>
                </p>
            </main>
        )
    }

    return (
        <main>
            <p>
                <Link to="/">Back to home</Link>
            </p>
    
            <h1>{project.title}</h1>
            <p>{project.summary}</p>
    
            <ul>
                {project.highlights.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
    
            <p>Stack: {project.stack.join(', ')}</p>
    
            {project.links.length > 0 && (
                <ul>
                    {project.links.map((link) => (
                        <li key={link.label}>
                            <a href={link.url} target="_blank" rel="noopener noreferrer">
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </main>
    )
}
