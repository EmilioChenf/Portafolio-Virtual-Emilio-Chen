import { technologies } from '../data/technologies.js'

function TechStack() {
  return (
    <section className="section" id="tecnologias">
      <div className="section-heading reveal">
        <p className="eyebrow">Tecnologias utilizadas</p>
        <h2>Stack que uso con criterio, segun lo que necesita cada proyecto.</h2>
        <p>
          Mi enfoque es combinar herramientas conocidas con buenas practicas: separar responsabilidades, conectar
          servicios por APIs y documentar lo suficiente para que otra persona pueda ejecutar el proyecto.
        </p>
      </div>
      <div className="tech-grid">
        {technologies.map((tech, index) => (
          <article className="tech-card reveal" style={{ '--delay': `${index * 55}ms` }} key={tech.name}>
            <span>{tech.group}</span>
            <h3>{tech.name}</h3>
            <p>{tech.detail}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default TechStack
