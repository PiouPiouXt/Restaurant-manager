import { useEffect, useRef, useMemo } from 'react'
import { useRestaurantContext } from '../../hooks/useRestaurantContext'
import { useRestaurants } from '../../hooks/useRestaurants'
import { RestaurantList } from '../../components/RestaurantList'
import { Hero } from './Hero'
import { Footer } from '../../components/Footer'
import type { Cuisine } from '../../types/restaurant'
import { RestaurantFilter } from '../../components/RestaurantFilter'

export function RestaurantManager() {

  // Api Data Fetching restaurants.ts
  const {
    restaurants,
    loading,
    error,
  } = useRestaurants();

  const {
    selectedRestaurant,
    filterState,
  } = useRestaurantContext();

  const {
    searchTerm,
    selectedCuisine,
    onlyOpen,
  } = filterState;

  //*useRef
  const previousCuisine = useRef<Cuisine>("Tous");
  useEffect(() => {
    console.log(`Ancienne cuisine: ${previousCuisine.current}`);
    console.log(`Nouvelle cuisine: ${selectedCuisine}`);
    previousCuisine.current = selectedCuisine;
  }, [selectedCuisine]);

  //localStorage SelectedCuisine
  useEffect(() => {
    localStorage.setItem("cuisineSaved", selectedCuisine);
  }, [selectedCuisine]);

  //filteredRestaurant logic
  const filteredRestaurant = useMemo(() => {
    return restaurants.filter((restaurant) => {
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
  }, [restaurants, searchTerm, selectedCuisine, onlyOpen]);

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


  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-paper text-ink">
        <div className="w-10 h-10 border-3 border-line border-t-coral rounded-full animate-spin mb-4" />
        <p className="text-muted text-sm tracking-[.08em] uppercase">Chargement des restaurants…</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-paper text-ink">
        <span className="text-coral text-4xl mb-3">⚠</span>
        <p className="text-muted text-sm">{error}</p>
      </div>
    );
  }

  return (
    <main className="max-w-7xl mx-auto px-12 max-md:px-5">
      <Hero />
      <RestaurantFilter
        title="Restaurant filtrés"
        restaurants={restaurants}
      />
      <RestaurantList
        restaurants={filteredRestaurant}
        title="Où manger ce soir ?" />
      {selectedRestaurant &&
        <div className="text-center py-4">
          <h2 className="text-ink font-heading text-2xl font-normal">
            Restaurant sélectionné: {selectedRestaurant.name}
          </h2>
        </div>
      }
      <Footer />
    </main>
  )
}
