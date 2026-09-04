import { RestaurantCard } from './components/RestaurantCard'
import { restaurants } from './data/restaurant'
import './App.css'

export function App() {
  return (
    <main className="app-shell">
      <header className="site-header">
        <a className="brand" href="/" aria-label="Table locale home">
          <span className="brand-mark">TL</span>
          <span>Table locale</span>
        </a>

        <nav className="site-nav" aria-label="Navigation principale">
          <a className="nav-link nav-link-active" href="#restaurants">
            Restaurants
          </a>

          <a className="nav-link" href="#about">
            À propos
          </a>
        </nav>

        <button className="location-button" type="button">
          <span aria-hidden="true">⌖</span>
          <span>Antananarivo, Madagascar</span>
        </button>

      </header>

      <section className="hero" id="about">
        <div className="hero-copy">
          <p className="eyebrow">La ville, à votre table</p>
          <h1>Les bonnes adresses commencent ici.</h1>
          <p className="hero-intro">Une sélection de restaurants singuliers, choisis pour les envies du jour.
          </p>
          <a className="hero-link" href="#restaurants">Explorer la sélection
            <span aria-hidden="true">↘</span>
          </a>
        </div>
        <div className="hero-note" aria-label="Sélection de la semaine">
          <span className="note-number">03</span>
          <span className="note-label">adresses à découvrir
            <br />cette semaine</span>
        </div>
      </section>

      <section className="restaurant-section" id="restaurants">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Sélection du moment</p>
            <h2>Où manger ce soir ?</h2>
          </div>
          <p className="section-count">01 — 03</p>
        </div>
        <div className="restaurant-grid">
          {restaurants.map((restaurant) =>
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />)
          }
        </div>
      </section>
      <footer className="site-footer">
        <span>Table locale</span>
        <span>Bien manger, simplement.</span>
      </footer>
    </main>
  )
}

