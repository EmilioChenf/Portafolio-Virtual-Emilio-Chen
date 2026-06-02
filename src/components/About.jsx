import { GraduationCap, MapPin, Sparkles } from 'lucide-react'

function About() {
  return (
    <section className="section split" id="sobre-mi">
      <div className="section-heading reveal">
        <p className="eyebrow">Sobre mi</p>
        <h2>Un perfil junior con base tecnica y ganas de construir bien.</h2>
      </div>
      <div className="about-grid reveal delay-1">
        <article className="text-panel">
          <p>
            Soy Emilio Chen, estudiante de Ingenieria en Ciencias de la Computacion y desarrollador web junior en
            Guatemala. Me interesa crear aplicaciones web que no solo se vean bien, sino que tengan estructura clara,
            datos bien manejados y una experiencia util para quien las usa.
          </p>
          <p>
            He trabajado proyectos academicos e individuales con frontend, backend, bases de datos, contenedores y
            despliegue. Mi objetivo es seguir creciendo como full-stack developer, cuidando la organizacion del codigo,
            la documentacion y la forma en que cada pieza se conecta.
          </p>
        </article>
        <div className="info-list" aria-label="Datos personales">
          <div>
            <GraduationCap size={22} />
            <span>Estudiante de Ciencias de la Computacion</span>
          </div>
          <div>
            <MapPin size={22} />
            <span>Guatemala</span>
          </div>
          <div>
            <Sparkles size={22} />
            <span>Frontend, backend, datos y APIs REST</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
