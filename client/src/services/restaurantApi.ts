import type { Restaurant } from "../types/restaurant";

const API_URL = "/restaurants.json";

export async function getRestaurants(): Promise<Restaurant[]> {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error(
      `Erreur lors du chargement des restaurants : ${response.status}`
    );
  }

  return response.json();
}