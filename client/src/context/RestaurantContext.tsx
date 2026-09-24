import { createContext } from "react";
import type { Restaurant } from "../types/restaurant";


// 1- Type des données disponibles dans le Context
type RestaurantContextType = {
  selectedRestaurant: Restaurant | null;
  setSelectedRestaurant: React.Dispatch<
    React.SetStateAction<Restaurant | null>
  >;
  //coorespond aux useState : 
  //const [selectedRestaurant, setSelectedRestaurant] = useState<Restaurant | null>(null);
};

// 2- Création du Context
export const RestaurantContext = createContext<RestaurantContextType | undefined>(
  undefined
);



