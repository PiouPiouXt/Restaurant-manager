import { useEffect, useState } from "react";
import type { Restaurant } from "../types/restaurant";

export function useRestaurants() {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchRestaurants() {
      try {
        const response = await fetch("/restaurants.json");

        if (!response.ok) {
          throw new Error("Impossible de charger les restaurants");
        }

        const data: Restaurant[] = await response.json();

        setRestaurants(data);
      } catch {
        setError("Impossible de charger les restaurants");
      } finally {
        setLoading(false);
      }
    }

    fetchRestaurants();
  }, [])


  return {
    restaurants,
    loading,
    error,
  };
}