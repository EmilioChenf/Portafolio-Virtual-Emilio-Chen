import ProjectCard from './ProjectCard.jsx'
import { projects } from '../data/projects.js'

function Projects() {
  return (
    <section className="section" id="proyectos">
      <div className="section-heading reveal">
        <p className="eyebrow">Proyectos</p>
        <h2>Trabajo real con repositorios, despliegue y decisiones tecnicas visibles.</h2>
        <p>
          Estos proyectos muestran practica en interfaces, consumo y construccion de APIs, bases de datos, Docker,
          documentacion y publicacion.
        </p>
      </div>
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  )
}

export default Projects
