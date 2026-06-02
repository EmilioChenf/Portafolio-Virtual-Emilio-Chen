import { Boxes, Database, GitBranch, LayoutTemplate, ShieldCheck, Workflow as WorkflowIcon } from 'lucide-react'

const steps = [
  ['Planificacion', 'Defino alcance, entidades, pantallas y flujo antes de programar.', LayoutTemplate],
  ['Componentes', 'Separo UI, datos y servicios para mantener el codigo claro.', Boxes],
  ['APIs y datos', 'Consumo y construyo endpoints REST con validaciones y respuestas JSON.', Database],
  ['Git y README', 'Uso repositorios, commits por avance y documentacion ejecutable.', GitBranch],
  ['Docker', 'Cuando aplica, preparo contenedores para backend, frontend y base de datos.', WorkflowIcon],
  ['Calidad', 'Cuido responsive design, errores visibles, contraste y builds sin fallos.', ShieldCheck],
]

function Workflow() {
  return (
    <section className="section workflow-section" id="proceso">
      <div className="section-heading reveal">
        <p className="eyebrow">Proceso / Forma de trabajo</p>
        <h2>No solo construyo pantallas: intento que el proyecto sea entendible y mantenible.</h2>
      </div>
      <div className="workflow-grid">
        {steps.map(([title, description, Icon]) => (
          <article className="workflow-card reveal" key={title}>
            <Icon size={24} />
            <h3>{title}</h3>
            <p>{description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Workflow
