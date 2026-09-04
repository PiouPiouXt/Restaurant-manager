import { restaurants } from './data/restaurant'
import './App.css'
import { RestaurantList } from './components/RestaurantList'
import { HomePageHeader } from './pages/HomePageHeader'
import { Footer } from './pages/Footer'

export function App() {
  return (
    <main className="app-shell">
      <HomePageHeader />
      <RestaurantList restaurants={restaurants} />
      <Footer />
    </main>
  )
}

