import { useState } from 'react'
import { restaurants } from './data/restaurant'
import { RestaurantList } from './components/RestaurantList'
import { HomePageHeader } from './pages/HomePageHeader'
import { Footer } from './pages/Footer'
import './App.css'
import type { Restaurant } from './types/restaurant'

export function App() {
  const [selectedRestaurant, setSelectedRestaurant] = useState<Restaurant | null>(null);

  function HandleSelectedRestaurant(restaurant: Restaurant): void {
    setSelectedRestaurant(restaurant);
  }

  return (
    <main className="app-shell">
      <HomePageHeader />
      <RestaurantList
        restaurants={restaurants}
        title='Où manger ce soir ?'
        onSelect={HandleSelectedRestaurant}
      />
      {selectedRestaurant &&
        <div className="selected-restaurant">
          <h2>Restaurant sélectionné: {selectedRestaurant.name}</h2>
        </div>
      }
      <Footer />
    </main>
  )
}

