export type Restaurant = {
  id: number;
  name: string;
  cuisine: string;
  rating: number;
  deliveryTime: number;
  priceRange: 1 | 2 | 3;
  isOpen: boolean;
  image: string  
}