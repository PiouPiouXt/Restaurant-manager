# Filter
             Restaurant
                  │
        ┌─────────┼─────────┐
        ↓         ↓         ↓
    searchTerm   Cuisine   Open ?
        │         │         │
        └─────────┼─────────┘
                  ↓
              Display ?

# Architecture RestaurantFilter
App
 │
 ├── states
 │
 ├── filteredRestaurants
 │
 ├── RestaurantFilters
 │       ↑
 │       │ reçoit les states + callbacks
 │
 └── RestaurantList
         ↑
         │ reçoit filteredRestaurants
