
import type { Restaurant } from "../types/restaurant";
import { RestaurantCard } from "./RestaurantCard";
import "../App.css";

type RestaurantListProps = {
  restaurants: Restaurant[];
  title: string;
  onSelect: (restaurant: Restaurant) => void;
};

export function RestaurantList({ restaurants, title, onSelect }: RestaurantListProps) {

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
          <RestaurantCard key={restaurant.id} restaurant={restaurant} onSelect={onSelect} />
        )}
      </div>
    </section>
  )
}