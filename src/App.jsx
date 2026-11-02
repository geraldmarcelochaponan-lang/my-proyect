import './App.css'
import Menu from './components/Menu'
import heroImage from './assets/hero.png'

const features = [
  { icon: '01', title: 'Entrenamiento', text: 'Planes creados para tu nivel y objetivos.' },
  { icon: '02', title: 'Nutrición', text: 'Hábitos realistas que mejoran tu rendimiento.' },
  { icon: '03', title: 'Resultados', text: 'Medimos tu progreso y ajustamos el plan.' },
]

function App() {
  return (
    <div className="app-shell">
      <Menu />

      <main>
        <section className="hero" id="inicio">
          <div className="hero__content" id="nosotros">
            <p className="eyebrow"><span /> Tu mejor versión empieza aquí</p>
            <h1>Construye fuerza.<br /><em>Domina tu energía.</em></h1>
            <p className="hero__text">
              Entrena con propósito, sigue un plan diseñado para ti y convierte cada semana en una nueva victoria.
            </p>
            <div className="hero__actions">
              <a className="button button--primary" href="#programas">Ver programas</a>
              <a className="button button--ghost" href="#nosotros">Conocer más <span>↗</span></a>
            </div>
          </div>

          <div className="hero__visual" aria-label="Disciplina y progreso">
            <div className="hero__glow" />
            <img src={heroImage} alt="Ilustración abstracta de progreso y entrenamiento" />
            <div className="stat-card">
              <strong>12</strong>
              <span>semana de<br />transformación</span>
            </div>
          </div>
        </section>

        <section className="features" id="programas" aria-label="Programas de entrenamiento">
          {features.map((feature) => (
            <article className="feature" key={feature.title}>
              <span className="feature__number">{feature.icon}</span>
              <div>
                <h2>{feature.title}</h2>
                <p>{feature.text}</p>
              </div>
            </article>
          ))}
        </section>
      </main>
    </div>
  )
}

export default App
