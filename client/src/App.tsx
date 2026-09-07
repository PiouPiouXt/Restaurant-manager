import { useState } from 'react'
import { restaurants } from './data/restaurant'
import { RestaurantList } from './components/RestaurantList'
import { HomePageHeader } from './pages/HomePageHeader'
import { Footer } from './pages/Footer'
import type { Cuisine, Restaurant } from './types/restaurant'
import './App.css'
import { RestaurantFilter } from './components/RestaurantFilter'

export function App() {
  const [selectedRestaurant, setSelectedRestaurant] = useState<Restaurant | null>(null);
  const [selectedCuisine, setSelectedCuisine] = useState<Cuisine>("Tous");
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [onlyOpen, setOnlyOpen] = useState<boolean>(false);

  function HandleSelectedRestaurant(restaurant: Restaurant): void {
    setSelectedRestaurant(restaurant);
  }

  function HandleOpenChange(onlyOpen: boolean): void {
    setOnlyOpen(onlyOpen);
  }

  function HandleCuisineChange(cuisine: string): void {
    setSelectedCuisine(cuisine);
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
      <RestaurantFilter
        restaurants={restaurants}
        searchTerm={searchTerm}
        selectedCuisine={selectedCuisine}
        onlyOpen={onlyOpen}
        ChangeSearch={setSearchTerm}
        HandleCuisineChange={HandleCuisineChange}
        onSelect={HandleSelectedRestaurant}
        HandleOpenChange={HandleOpenChange}
      />
      <Footer />
    </main>
  )
}

