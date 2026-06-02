import { ExternalLink, Github } from 'lucide-react'

function ProjectCard({ project }) {
  return (
    <article className="project-card reveal">
      <div className="project-topline">
        <span>{project.type}</span>
        <small>{project.status}</small>
      </div>
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      <div className="tag-list" aria-label={`Tecnologias de ${project.name}`}>
        {project.technologies.map((tech) => (
          <span key={tech}>{tech}</span>
        ))}
      </div>
      <div className="contribution">
        <strong>Mi aporte principal</strong>
        <p>{project.contribution}</p>
      </div>
      <div className="project-actions">
        {project.repo ? (
          <a className="button secondary compact" href={project.repo} target="_blank" rel="noreferrer">
            <Github size={17} /> {project.repoLabel || 'Repositorio'}
          </a>
        ) : (
          <span className="button disabled compact">Repositorio pendiente</span>
        )}
        {project.secondaryRepo && (
          <a className="button secondary compact" href={project.secondaryRepo} target="_blank" rel="noreferrer">
            <Github size={17} /> Backend
          </a>
        )}
        {project.demo ? (
          <a className="button primary compact" href={project.demo} target="_blank" rel="noreferrer">
            <ExternalLink size={17} /> Demo
          </a>
        ) : (
          <span className="button disabled compact">Demo proximamente</span>
        )}
      </div>
    </article>
  )
}

export default ProjectCard
