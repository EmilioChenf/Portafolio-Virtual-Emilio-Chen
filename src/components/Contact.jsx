import { ArrowUpRight, Check, Code2, Copy, Github, Mail, ShieldCheck, Zap } from 'lucide-react'
import { useState } from 'react'

const email = 'che24841@uvg.edu.gt'
const outlookComposeUrl = `https://outlook.office.com/mail/deeplink/compose?to=${encodeURIComponent(email)}`

const reasons = [
  ['Mentalidad de resolucion', 'Abordo los problemas descomponiendolos en piezas logicas y eficientes.', Code2],
  ['Adaptacion', 'Capacidad de aprendizaje rapido en nuevos stacks y metodologias agiles.', Zap],
  ['Calidad de codigo', 'Compromiso con codigo limpio, legible y documentado desde el primer dia.', ShieldCheck],
]

function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1800)
    } catch {
      window.location.href = `mailto:${email}`
    }
  }

  return (
    <section className="section contact-section" id="contacto">
      <div className="contact-heading reveal">
        <p className="eyebrow">Contacto</p>
        <h2>Disponible para proyectos junior, practicas y colaboraciones academicas.</h2>
        <span className="availability-pill">
          <span />
          Estado actual: buscando oportunidades
        </span>
      </div>

      <div className="contact-layout">
        <div className="contact-left reveal">
          <p className="contact-intro">
            Estoy en una etapa de crecimiento exponencial, buscando un entorno donde mis bases tecnicas en full-stack
            puedan impactar en productos reales mientras aprendo de equipos experimentados.
          </p>

          <article className="why-card">
            <h3>Por que trabajar conmigo?</h3>
            {reasons.map(([title, description, Icon]) => (
              <div className="reason-row" key={title}>
                <Icon size={19} />
                <div>
                  <strong>{title}</strong>
                  <p>{description}</p>
                </div>
              </div>
            ))}
          </article>

          <div className="code-preview" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
        </div>

        <div className="contact-right reveal delay-1">
          <article className="email-card">
            <Mail size={34} />
            <h3>Hablemos por email</h3>
            <p>Para propuestas directas o consultas sobre mi disponibilidad academica.</p>
            <div className="email-actions">
              <button className="email-copy" type="button" onClick={copyEmail} aria-live="polite">
                <span>{email}</span>
                {copied ? <Check size={18} /> : <Copy size={18} />}
              </button>
              <a className="button primary" href={outlookComposeUrl} target="_blank" rel="noreferrer">
                Enviar mensaje
              </a>
            </div>
          </article>

          <div className="social-card-grid">
            <a className="social-card" href="https://github.com/EmilioChenf" target="_blank" rel="noreferrer">
              <Github size={21} />
              <ArrowUpRight size={20} />
              <span>Repositorios</span>
              <strong>GitHub</strong>
              <p>Explora mi codigo, contribuciones y proyectos personales.</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
