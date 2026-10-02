import { useParams } from "react-router-dom";
import { useRestaurants } from "../hooks/useRestaurants";

//?check how here Readme ../../logic/DetailPage.md

export function RestaurantDetailPage() {
  const { id } = useParams();
  const { restaurants, error, loading } = useRestaurants();

  if (loading) {
    return <p>Chargement du restaurant...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  const restaurant = restaurants.find(
    (restaurant) => restaurant.id === Number(id)
  );

  if (!restaurant) {
    return <p>Restaurant introuvable.</p>;
  }

  return (
    <div>
      <h1>{restaurant.name}</h1>
      <p>Cuisine : {restaurant.cuisine}</p>
      <p>Note : {restaurant.rating}/5</p>
      <p>
        Statut : {restaurant.isOpen ? "Ouvert" : "Fermé"}
      </p>
    </div>
  );
}