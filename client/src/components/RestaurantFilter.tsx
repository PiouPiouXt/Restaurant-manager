import type { Restaurant } from "../types/restaurant";
import { RestaurantList } from "./RestaurantList";

type RestaurantFilterProps = {
  restaurants: Restaurant[];
  changeSearch: (searchTerm: string) => void;
  searchTerm: string;
  selectedCuisine: string | null;
  onlyOpen: boolean;
  title: string;
  onSelect: (restaurant: Restaurant) => void;
  HandleSwitchOpenClose: (onlyOpen: boolean) => void;
  // selectedRestaurant: Restaurant[] | null;
};

export function RestaurantFilter(
  { restaurants, searchTerm, selectedCuisine, onlyOpen, changeSearch, title, onSelect, HandleSwitchOpenClose }
    : RestaurantFilterProps) {

  const filteredRestaurant = restaurants.filter((restaurant) => {
    const matchesSearch = restaurant.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesCuisine = selectedCuisine == "Tous" || restaurant.cuisine === selectedCuisine;

    const matchesOpen =
      !onlyOpen || restaurant.isOpen;

    return matchesSearch && matchesCuisine && matchesOpen;
  })

  return (
    <div>
      <input type="text"
        value={searchTerm}
        onChange={(event) => changeSearch(event.target.value)}
        placeholder="🔍 Rechercher un restaurant..."
      />
      <p>Cuisine:</p>
      
      <select value={selectedCuisine ?? "Tous"} onChange={(event) => changeSearch(event.target.value)}>
        <option value="Tous">Toutes</option>
        <option value="Française">Française</option>
        <option value="Italienne">Italienne</option>
        <option value="Japonaise">Japonaise</option>
      </select>
      
      <input type="checkbox" name="onlyOpen" id="onlyOpen" 
      onChange={(event) => HandleSwitchOpenClose(event.target.checked)}
      />
      <label htmlFor="onlyOpen">Ouvert uniquement</label>

      <h2>{title}</h2>
      <RestaurantList restaurants={filteredRestaurant} onSelect={onSelect} />
    </div>
  )
} 