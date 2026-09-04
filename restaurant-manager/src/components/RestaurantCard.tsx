import type { Restaurant } from "../types/restaurant";
import "./RestaurantCard.css";

type RestaurantCardProps = {
  restaurant: Restaurant;
};

export function RestaurantCard({ restaurant }: RestaurantCardProps) {
  return (
    <article className="restaurant-card">
      <div className="restaurant-image-wrap">
        <img className="restaurant-image" src={restaurant.image} alt={restaurant.name} />
        <span className={`status-badge ${restaurant.isOpen ? "status-open" : "status-closed"}`}>
          <span className="status-dot" aria-hidden="true" />
          {restaurant.isOpen ? "Ouvert" : "Fermé"}
        </span>
        <span className="card-index">0{restaurant.id}</span>
      </div>
      <div className="restaurant-content">
        <div className="restaurant-title-row">
          <div>
            <p className="restaurant-cuisine">{restaurant.cuisine}</p>
            <h3>{restaurant.name}</h3>
          </div>
          <span className="card-arrow" aria-hidden="true">↗</span>
        </div>
        <div className="restaurant-meta">
          <span><strong>★</strong> {restaurant.rating}</span>
          <span>{restaurant.deliveryTime} min</span>
          <span>{"€".repeat(restaurant.priceRange)}</span>
        </div>
      </div>
    </article>
  )
}