import { useEffect, useState } from 'react'
import { restaurants } from '../data/restaurant'
import { RestaurantList } from '../components/RestaurantList'
import { HomePageHeader } from './HomePageHeader'
import { Footer } from './Footer'
import type { Cuisine, Restaurant } from '../types/restaurant'
import './HomePage.css'
import { RestaurantFilter } from '../components/RestaurantFilter'

export function HomePage() {
  const [selectedRestaurant, setSelectedRestaurant] = useState<Restaurant | null>(null);
  const [selectedCuisine, setSelectedCuisine] = useState<Cuisine>((getSavedCuisine));
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [onlyOpen, setOnlyOpen] = useState<boolean>(false);

  function handleSelectedRestaurant(restaurant: Restaurant): void {
    setSelectedRestaurant(restaurant);
  }

  function handleCuisineChange(cuisine: Cuisine): void {
    setSelectedCuisine(cuisine);
  }

  //localStorage SelectedCuisine
  useEffect(() => {
    localStorage.setItem("cuisineSaved", selectedCuisine);
  }, [selectedCuisine]);

  function getSavedCuisine(): Cuisine {
    const savedCuisine = localStorage.getItem("cuisineSaved");

    if (savedCuisine === null) {
      return "Tous";
    }

    if (
      savedCuisine === "Tous" ||
      savedCuisine === "Italienne" ||
      savedCuisine === "Japonaise" ||
      savedCuisine === "Burger" ||
      savedCuisine === "Thaïe"
    ) {
      return savedCuisine;
    }

    return "Tous";
  }

  //filteredRestaurant logic
  const filteredRestaurant = restaurants.filter((restaurant) => {
    const matchesSearch = restaurant.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesCuisine =
      selectedCuisine === "Tous" ||
      restaurant.cuisine === selectedCuisine;

    const matchesOpen =
      !onlyOpen || restaurant.isOpen;

    return matchesSearch && matchesCuisine && matchesOpen;
  });

  //title
  useEffect(() => {
    if (filteredRestaurant.length === 0) {
      document.title = "Restaurant Manager — Aucun restaurant";
    } else if (filteredRestaurant.length === 1) {
      document.title = "Restaurant Manager — 1 restaurant";
    } else {
      document.title = `Restaurant Manager — ${filteredRestaurant.length} restaurants`;
    }
  }, [filteredRestaurant])

  return (
    <main className="app-shell">
      <HomePageHeader />
      <RestaurantFilter
        title="Restaurant filtrés"
        searchTerm={searchTerm}
        selectedCuisine={selectedCuisine}
        onlyOpen={onlyOpen}
        ChangeSearch={setSearchTerm}
        handleCuisineChange={handleCuisineChange}
        onSelect={handleSelectedRestaurant}
        handleOpenChange={setOnlyOpen}
      />
      <RestaurantList restaurants={filteredRestaurant} onSelect={handleSelectedRestaurant} title="Où manger ce soir ?" />
      {selectedRestaurant &&
        <div className="selected-restaurant">
          <h2>Restaurant sélectionné: {selectedRestaurant.name}</h2>
        </div>
      }
      <Footer />
    </main>
  )
}

