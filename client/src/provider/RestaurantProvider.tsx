// 3- Provider
import React, { useState } from "react";
import { RestaurantContext } from "../context/RestaurantContext";
import type { Restaurant } from "../types/restaurant";

export function RestaurantProvider({ children }: { children: React.ReactNode }) {
  const [selectedRestaurant, setSelectedRestaurant] = useState<Restaurant | null>(null);

  return (
    <RestaurantContext.Provider
      value={{ selectedRestaurant, setSelectedRestaurant }}
    >
      {children}
    </RestaurantContext.Provider>
  );
}