import { useState } from 'react'
import './Menu.css'

const links = [
  ['Inicio', '#inicio'],
  ['Programas', '#programas'],
  ['Nosotros', '#nosotros'],
]

function Menu() {
  const [open, setOpen] = useState(false)

  return (
    <header className="menu">
      <a className="menu__brand" href="#inicio" aria-label="Entrena, ir al inicio">
        <span className="brand-mark">E</span>
        <span>ENTRENA</span>
      </a>

      <button className="menu__toggle" type="button" aria-expanded={open} aria-label="Abrir menú" onClick={() => setOpen((value) => !value)}>
        <span /><span /><span />
      </button>

      <nav className={`menu__nav ${open ? 'menu__nav--open' : ''}`} aria-label="Navegación principal">
        {links.map(([label, href]) => (
          <a key={label} href={href} onClick={() => setOpen(false)}>{label}</a>
        ))}
      </nav>

      <a className="menu__cta" href="#programas">Empieza ahora</a>
    </header>
  )
}

export default Menu