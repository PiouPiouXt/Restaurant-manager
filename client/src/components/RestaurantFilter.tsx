import type { Restaurant, Cuisine } from "../types/restaurant";
import { useRestaurantFilters } from "../hooks/useRestaurantFilters";
import './RestaurantFilter.css';

type RestaurantFilterProps = {

  restaurants: Restaurant[];
  title: string;
};

export function RestaurantFilter({ title }: RestaurantFilterProps) {


  const {
    searchTerm,
    selectedCuisine,
    onlyOpen,
    setSearch,
    setCuisine,
    setOnlyOpen,
  } = useRestaurantFilters();


  // const {
  //   searchTerm,
  //   selectedCuisine,
  //   onlyOpen,
  // } = filterState;

  return (
    <div>
      {/* Search Term filter */}
      <div className="restaurant-filter">
        <h1>{title}</h1>
        <input type="text"
          value={searchTerm}
          onChange={
            (event) => {
              setSearch(event.target.value)
            }
          }
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
            (event) => {
              setCuisine(event.target.value as Cuisine)
            }
          }
          className="filter-btn">
          <option value="Tous">Toutes</option>
          <option value="Japonaise">Japonaise</option>
          <option value="Italienne">Italienne</option>
          <option value="Burger">Burger</option>
          <option value="Malagasy">Malagasy</option>
        </select>

        {/* Open Only Filter */}
        <div>
          <input type="checkbox" name="onlyOpen" id="onlyOpen" className="filter-btn"
            checked={onlyOpen} onChange={(event) => {
              setOnlyOpen(event.target.checked)
            }
            } />
          <label htmlFor="onlyOpen">Ouvert uniquement</label>
        </div>
      </div>
    </div>
  )
}