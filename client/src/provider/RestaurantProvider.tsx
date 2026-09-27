// 3- Provider
import React, { useState, useReducer } from "react";
import { RestaurantContext } from "../context/RestaurantContext";
import type { Restaurant } from "../types/restaurant";
import { filterReducer, initialFilterState } from "../reducers/restaurantFilterReducer";

export function RestaurantProvider({ children }: { children: React.ReactNode }) {
  const [selectedRestaurant, setSelectedRestaurant] = useState<Restaurant | null>(null);

  const [filterState, dispatch] = useReducer(
    filterReducer,
    initialFilterState
  );

  return (
    <RestaurantContext.Provider
      value={{
        selectedRestaurant,
        setSelectedRestaurant,
        filterState,
        dispatch
      }}
    >
      {children}
    </RestaurantContext.Provider>
  );
}