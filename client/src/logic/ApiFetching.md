RestaurantManager
       ↓
useRestaurants()
       ↓
fetch("/restaurants.json")
       ↓
┌──────┴──────┐
↓             ↓
loading      données
↓             ↓
UI          filters