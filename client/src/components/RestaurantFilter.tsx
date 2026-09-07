import type { Restaurant,Cuisine } from "../types/restaurant";
import { RestaurantList } from "./RestaurantList";
import './RestaurantFilter.css';

type RestaurantFilterProps = {
  restaurants: Restaurant[];
  onSelect: (restaurant: Restaurant) => void;
  searchTerm: string;
  ChangeSearch: (searchTerm: string) => void;
  selectedCuisine: string | null;
  HandleCuisineChange: (cuisine: string) => void;
  onlyOpen: boolean;
  title: string;
  HandleOpenChange: (onlyOpen: boolean) => void;
};

export function RestaurantFilter(
  { restaurants, searchTerm, selectedCuisine, onlyOpen, ChangeSearch, HandleCuisineChange, title, onSelect, HandleOpenChange }
    : RestaurantFilterProps) {

  const filteredRestaurant = restaurants.filter((restaurant) => {
    const matchesSearch = restaurant.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesCuisine =
      selectedCuisine === "Tous" ||
      selectedCuisine === null ||
      restaurant.cuisine === selectedCuisine;

    const matchesOpen =
      !onlyOpen || restaurant.isOpen;

    return matchesSearch && matchesCuisine && matchesOpen;
  });

  return (
    <div>
      <div className="restaurant-filter">
        <input type="text"
          value={searchTerm}
          onChange={(event) => ChangeSearch(event.target.value)}
          placeholder="🔍 Rechercher un restaurant..."
          className="filter-btn"
        />
        <p>Cuisine:</p>

        <select value={selectedCuisine ?? "Tous"} onChange={(event) => HandleCuisineChange(event.target.value)} className="filter-btn">
          <option value="Tous">Toutes</option>
          <option value="Italienne">Italienne</option>
          <option value="Burger">Burger</option>
        </select>

        <div>
          <input type="checkbox" name="onlyOpen" id="onlyOpen" className="filter-btn"
            checked={onlyOpen} onChange={(event) => HandleOpenChange(event.target.checked)} />
          <label htmlFor="onlyOpen">Ouvert uniquement</label>
        </div>

      </div>

      <h2>{title}</h2>
      <RestaurantList restaurants={filteredRestaurant} onSelect={onSelect} />
    </div>
  )
}