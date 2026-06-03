import { Github, Menu, TerminalSquare, X } from 'lucide-react'
import { useState } from 'react'

const links = [
  ['Inicio', '#inicio', true],
  ['Sobre mi', '#sobre-mi'],
  ['Tecnologias', '#tecnologias'],
  ['Decisiones', '#decisiones'],
  ['Proyectos', '#proyectos'],
  ['Proceso', '#proceso'],
  ['Contacto', '#contacto'],
]

function Navbar() {
  const [open, setOpen] = useState(false)

  const closeMenu = () => setOpen(false)

  return (
    <header className="navbar">
      <a className="brand" href="#inicio" aria-label="Ir al inicio">
        EMILIO.DEV
      </a>

      <button
        className="icon-button nav-toggle"
        type="button"
        aria-label={open ? 'Cerrar menu' : 'Abrir menu'}
        aria-expanded={open}
        onClick={() => setOpen((current) => !current)}
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>

      <nav className={open ? 'nav-links is-open' : 'nav-links'} aria-label="Navegacion principal">
        {links.map(([label, href, active]) => (
          <a className={active ? 'nav-link is-active' : 'nav-link'} key={href} href={href} onClick={closeMenu}>
            {label}
          </a>
        ))}
        <a
          className="github-pill"
          href="https://github.com/EmilioChenf"
          target="_blank"
          rel="noreferrer"
          aria-label="Abrir GitHub de Emilio Chen"
        >
          <TerminalSquare size={17} />
          GitHub
        </a>
      </nav>
    </header>
  )
}

export default Navbar
