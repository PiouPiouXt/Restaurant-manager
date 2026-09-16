import { useEffect, useRef, useState } from 'react'
import { restaurants } from '../data/restaurant'
import { RestaurantList } from '../components/RestaurantList'
import { Hero } from './Hero'
import { Footer } from './Footer'
import type { Cuisine, Restaurant } from '../types/restaurant'
import { getSavedCuisine } from '../utils/getSavedCuisine'
import './HomePage.css'
import { RestaurantFilter } from '../components/RestaurantFilter'

export function HomePage() {
  const [selectedRestaurant, setSelectedRestaurant] = useState<Restaurant | null>(null);
  const [selectedCuisine, setSelectedCuisine] = useState<Cuisine>((getSavedCuisine));
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [onlyOpen, setOnlyOpen] = useState<boolean>(false);

  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current += 1;
    console.log(`Nombre de renders : ${renderCount.current}`);
  });


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

  //Synchronisation restaurant

  // useEffect(() => {
  //   const interValid = setInterval(() => {
  //     console.log("Synchronisation des restaurants...")
  //   }, 5000)
  //   return () => clearInterval(interValid);
  // }, []);


  //resize window detector
  useEffect(() => {
    const handleResize = () => {
      console.log(`Fenêtre redimensionnée: ${window.innerWidth} x ${window.innerHeight}`)
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [])

  useEffect(() => {
    console.log(`abonnement creé pour ${selectedRestaurant?.name}`)
    return () => {
      console.log(`abonnement supprimé pour ${selectedRestaurant?.name} `)
    }
  }, [selectedRestaurant])

  //useRef compteur component render


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
      <Hero />
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

