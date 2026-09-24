// import { memo } from "react";
import type { Restaurant } from "../types/restaurant";
import { RestaurantCard } from "./RestaurantCard";
import { useRestaurantContext } from "../hooks/useRestaurantContext";
import "../pages/HomePage.css";

type RestaurantListProps = {
  restaurants: Restaurant[];
  title: string;
};

export function RestaurantList({ restaurants, title }: RestaurantListProps) {
  // export const RestaurantList = memo(({ restaurants, title, onSelect }: RestaurantListProps) => {


  const { selectedRestaurant, setSelectedRestaurant } = useRestaurantContext();

  return (
    <section className="restaurant-section" id="restaurants">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Sélection du moment</p>
          <h2>{title}</h2>
        </div>
      </div>
      <div className="restaurant-grid">
        {restaurants.map((restaurant) =>
          <RestaurantCard key={restaurant.id} restaurant={restaurant} onSelect={setSelectedRestaurant} />
        )}
      </div>

      {selectedRestaurant && (
      <p className="p-5 font-bold text-center">
        Restaurant sélectionné : {selectedRestaurant.name}
      </p>
    )}
    </section>
  )
};

// export default RestaurantList;