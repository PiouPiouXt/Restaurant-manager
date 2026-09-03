import type { Restaurant } from "../types/restaurant";

export const restaurants: Restaurant[] = [
  {
    id: 1,
    name: "Pizza Bella",
    cuisine: "Italienne",
    rating: 4.7,
    deliveryTime: 30,
    priceRange: 2,
    isOpen: true,
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002"
  },
  {
    id: 2,
    name: "Sushi House",
    cuisine: "Japonaise",
    rating: 4.9,
    deliveryTime: 25,
    priceRange: 3,
    isOpen: true,
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c"
  },
  {
    id: 3,
    name: "Burger Factory",
    cuisine: "Burger",
    rating: 4.4,
    deliveryTime: 20,
    priceRange: 2,
    isOpen: false,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd"
  }
];