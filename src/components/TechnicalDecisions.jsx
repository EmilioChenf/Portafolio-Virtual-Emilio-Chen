import { technicalDecisions } from '../data/technicalDecisions.js'

function TechnicalDecisions() {
  return (
    <section className="section decisions-section" id="decisiones">
      <div className="section-heading reveal">
        <p className="eyebrow">Decisiones tecnicas</p>
        <h2>Por que elegi estas tecnologias?</h2>
        <p>
          Cada herramienta fue elegida por como ayuda a resolver problemas reales dentro de mis proyectos: separar
          responsabilidades, facilitar despliegues, manejar datos y mantener codigo entendible.
        </p>
      </div>
      <div className="decisions-grid">
        {technicalDecisions.map((decision) => (
          <article className="decision-card reveal" key={decision.title}>
            <h3>{decision.title}</h3>
            <p>{decision.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default TechnicalDecisions
