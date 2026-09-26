import type { Cuisine } from '../types/restaurant'

export type FilterState = {
  searchTerm: string;
  selectedCuisine: Cuisine;
  onlyOpen: boolean;
}

export const initialFilterState: FilterState = {
  searchTerm: "",
  selectedCuisine: "Tous",
  onlyOpen: false,
};

export type FilterAction =
  | {
    type: "SET_SEARCH";
    value: string;
  }
  | {
    type: "SET_CUISINE";
    value: Cuisine;
  }
  | {
    type: "SET_ONLY_OPEN";
    value: boolean;
  };

export function filterReducer(
  state: FilterState,
  action: FilterAction
): FilterState {
  switch (action.type) {
    case "SET_SEARCH":
      return {
        ...state,
        searchTerm: action.value
      }

    case "SET_CUISINE":
      return {
        ...state,
        selectedCuisine: action.value
      }

    case "SET_ONLY_OPEN":
      return {
        ...state,
        onlyOpen: action.value,
      }
    default:
      return state;

  }


}