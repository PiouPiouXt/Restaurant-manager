import type { Restaurant, Cuisine } from "../types/restaurant";
import './RestaurantFilter.css';
// import { useRef } from "react";

type RestaurantFilterProps = {
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
  { searchTerm, selectedCuisine, onlyOpen, ChangeSearch, handleCuisineChange, title, handleOpenChange }
    : RestaurantFilterProps) {
  return (
    <div>
      {/* Search Term filter */}
      <div className="restaurant-filter">
        <h1>{title}</h1>
        <input type="text"
          value={searchTerm}
          onChange={(event) => ChangeSearch(event.target.value)}
          placeholder="🔍 Rechercher un restaurant..."
          className="filter-btn"
        // ref={searchInputRef}
        />

        {/* <button onClick={() => searchInputRef.current?.focus()} className="filter-btn">
          <span role="img" aria-label="search">🔍</span>
        </button> */}

        {/* Cuisine Filter */}
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
          <option value="Thaïe">Thaïe</option>
        </select>

        {/* Open Only Filter */}
        <div>
          <input type="checkbox" name="onlyOpen" id="onlyOpen" className="filter-btn"
            checked={onlyOpen} onChange={(event) => handleOpenChange(event.target.checked)} />
          <label htmlFor="onlyOpen">Ouvert uniquement</label>
        </div>
      </div>
    </div>
  )
}