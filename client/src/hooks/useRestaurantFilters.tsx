import type { Cuisine } from "../types/restaurant";
import { useRestaurantContext } from "./useRestaurantContext";

export function useRestaurantFilters() {
  const {
    filterState,
    dispatch,
  } = useRestaurantContext();

  function setSearch(searchTerm: string) {
    dispatch({
      type: "SET_SEARCH",
      value: searchTerm,
    });
  }

  function setCuisine(cuisine: Cuisine) {
    dispatch({
      type: "SET_CUISINE",
      value: cuisine,
    });
  }

  function setOnlyOpen(onlyOpen: boolean) {
    dispatch({
      type: "SET_ONLY_OPEN",
      value: onlyOpen,
    });
  }

  return {
    searchTerm: filterState.searchTerm,
    selectedCuisine: filterState.selectedCuisine,
    onlyOpen: filterState.onlyOpen,

    setSearch,
    setCuisine,
    setOnlyOpen,
  };
}