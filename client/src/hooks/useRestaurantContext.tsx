import { useContext } from "react";
import { RestaurantContext } from "../context/RestaurantContext";

// 4- Hook pour utiliser le Context
export function useRestaurantContext() {
  const context = useContext(RestaurantContext);

  if (context === undefined) {
    throw new
      Error(
        "useRestaurantContext must be used inside RestaurantProvider"
      );
  }
  return context;
}

