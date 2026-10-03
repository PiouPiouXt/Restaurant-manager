import type { Restaurant } from "../types/restaurant";

export async function getRestaurants(): Promise<Restaurant[]> {
  const response = await fetch("/restaurants.json");

  if (!response.ok) {
    throw new Error("Impossible de charger les restaurants");
  }

  const data: Restaurant[] = await response.json();

  return data;
}