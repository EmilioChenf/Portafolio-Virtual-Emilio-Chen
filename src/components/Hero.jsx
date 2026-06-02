import { ArrowRight, Box, Code2, Database, Github, Mail, Network } from 'lucide-react'

const stackChips = [
  ['React', Code2],
  ['APIs', Network],
  ['SQL', Database],
  ['Docker', Box],
]

const contactEmail = 'che24841@uvg.edu.gt'
const outlookComposeUrl = `https://outlook.office.com/mail/deeplink/compose?to=${encodeURIComponent(contactEmail)}`

function Hero() {
  return (
    <section className="hero section" id="inicio">
      <div className="hero-content reveal">
        <p className="hero-status">Disponible para proyectos</p>
        <h1>
          Emilio <span>Chen</span>
        </h1>
        <h2>Desarrollador Web Full-Stack Junior</h2>
        <p className="hero-copy">
          Construyo aplicaciones web funcionales, ordenadas y pensadas para usuarios reales. Me enfoco en frontend,
          backend, bases de datos, APIs REST, Docker y visualizacion de datos.
        </p>
        <div className="stack-chips" aria-label="Stack principal">
          {stackChips.map(([label, Icon]) => (
            <span key={label}>
              <Icon size={15} />
              {label}
            </span>
          ))}
        </div>
        <div className="hero-actions">
          <a className="button primary" href="#proyectos">
            Ver proyectos <ArrowRight size={18} />
          </a>
          <a className="button secondary" href="https://github.com/EmilioChenf" target="_blank" rel="noreferrer">
            <Github size={18} /> Ver GitHub
          </a>
          <a className="button ghost" href={outlookComposeUrl} target="_blank" rel="noreferrer">
            <Mail size={18} /> Contactarme
          </a>
        </div>
      </div>

      <div className="hero-visual reveal delay-1" aria-hidden="true">
        <div className="chip-visual">
          <div className="chip-core" />
        </div>
      </div>

      <aside className="hero-panel reveal delay-1" aria-label="Resumen tecnico">
        <div>
          <span className="metric">2026</span>
          <p>portafolio listo para publicar</p>
        </div>
        <div>
          <span className="metric">5</span>
          <p>proyectos destacados</p>
        </div>
        <div>
          <span className="metric">100%</span>
          <p>full-stack focus</p>
        </div>
      </aside>
    </section>
  )
}

export default Hero
