import type { Cuisine } from '../types/restaurant';

export function getSavedCuisine(): Cuisine {
    const savedCuisine = localStorage.getItem("cuisineSaved");

    if (savedCuisine === null) {
      return "Tous";
    }

    if (
      savedCuisine === "Tous" ||
      savedCuisine === "Italienne" ||
      savedCuisine === "Japonaise" ||
      savedCuisine === "Burger" ||
      savedCuisine === "Malagasy"
    ) {
      return savedCuisine;
    }

    return "Tous";
  }