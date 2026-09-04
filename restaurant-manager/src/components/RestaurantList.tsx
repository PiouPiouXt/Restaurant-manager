import type { Restaurant } from "../types/restaurant";
import { RestaurantCard } from "./RestaurantCard";
import "../App.css";

export function RestaurantList({ restaurants }: { restaurants: Restaurant[] }) {
  return (
    <section className="restaurant-section" id="restaurants">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Sélection du moment</p>
          <h2>Où manger ce soir ?</h2>
        </div>
        <p className="section-count">01 — 03</p>
      </div>
      <div className="restaurant-grid">
        {restaurants.map((restaurant) =>
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />)
        }
      </div>
    </section>
  )
}