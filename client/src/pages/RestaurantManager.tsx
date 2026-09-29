import { useEffect, useRef, useMemo } from 'react'

import { useRestaurantContext } from '../hooks/useRestaurantContext'


import { restaurants } from '../data/restaurant'
import { RestaurantList } from '../components/RestaurantList'
import { Hero } from './Hero'
import { Footer } from './Footer'
import type { Cuisine } from '../types/restaurant'
// import { getSavedCuisine } from '../utils/getSavedCuisine'
import './RestaurantManager.css'
import { RestaurantFilter } from '../components/RestaurantFilter'

export function RestaurantManager() {
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

  //Synchronisation restaurant

  // useEffect(() => {
  //   const interValid = setInterval(() => {
  //     console.log("Synchronisation des restaurants...")
  //   }, 5000)
  //   return () => clearInterval(interValid);
  // }, []);


  //resize window detector
  // useEffect(() => {
  //   const handleResize = () => {
  //     console.log(`Fenêtre redimensionnée: ${window.innerWidth} x ${window.innerHeight}`)
  //   };
  //   window.addEventListener("resize", handleResize);
  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, [])

  // useEffect(() => {
  //   console.log(`abonnement creé pour ${selectedRestaurant?.name}`)
  //   return () => {
  //     console.log(`abonnement supprimé pour ${selectedRestaurant?.name} `)
  //   }
  // }, [selectedRestaurant])

  //useRef compteur component render


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
  }, [searchTerm, selectedCuisine, onlyOpen]);

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
      <Hero />
      <RestaurantFilter
        title="Restaurant filtrés"
        restaurants={restaurants}
      />
      <RestaurantList
        restaurants={filteredRestaurant}
        title="Où manger ce soir ?" />
      {/* *don't work, we already use Custom Hook useRestaurantContext in RestaurantList.tsx */}
      {selectedRestaurant &&
        <div>
          <h2>Restaurant sélectionné: {selectedRestaurant.name}</h2>
        </div>
      }
      <Footer />
    </main>
  )
}

