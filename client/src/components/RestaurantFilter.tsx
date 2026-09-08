import type { Restaurant,Cuisine } from "../types/restaurant";
import { RestaurantList } from "./RestaurantList";
import './RestaurantFilter.css';

type RestaurantFilterProps = {
  restaurants: Restaurant[];
  onSelect: (restaurant: Restaurant) => void;
  searchTerm: string;
  ChangeSearch: (searchTerm: string) => void;
  selectedCuisine: Cuisine;
  handleCuisineChange: (cuisine: Cuisine) => void;
  onlyOpen: boolean;
  title: string;
  handleOpenChange: (onlyOpen: boolean) => void;
};

export function RestaurantFilter(
  { restaurants, searchTerm, selectedCuisine, onlyOpen, ChangeSearch, handleCuisineChange, title, onSelect, handleOpenChange }
    : RestaurantFilterProps) {

  const filteredRestaurant = restaurants.filter((restaurant) => {
    const matchesSearch = restaurant.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesCuisine =
      selectedCuisine === "Tous" ||
      restaurant.cuisine === selectedCuisine;

    const matchesOpen =
      !onlyOpen || restaurant.isOpen;

    return matchesSearch && matchesCuisine && matchesOpen;
  });

  return (
    <div>
      <div className="restaurant-filter">
        <h1>{title}</h1>
        <input type="text"
          value={searchTerm}
          onChange={(event) => ChangeSearch(event.target.value)}
          placeholder="🔍 Rechercher un restaurant..."
          className="filter-btn"
        />
        <p>Cuisine:</p>

        <select value={selectedCuisine} 
        onChange={
          //as Cuisine bcz we typed it cuisine instead of string
          (event) => handleCuisineChange(event.target.value as Cuisine)
        } 
        className="filter-btn">
          <option value="Tous">Toutes</option>
          <option value="Japonaise">Japonaise</option>
          <option value="Italienne">Italienne</option>
          <option value="Burger">Burger</option>
        </select>

        <div>
          <input type="checkbox" name="onlyOpen" id="onlyOpen" className="filter-btn"
            checked={onlyOpen} onChange={(event) => handleOpenChange(event.target.checked)} />
          <label htmlFor="onlyOpen">Ouvert uniquement</label>
        </div>
      </div>

      <RestaurantList restaurants={filteredRestaurant} onSelect={onSelect} title={title} />
    </div>
  )
}