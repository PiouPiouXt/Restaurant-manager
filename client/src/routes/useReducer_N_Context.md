# L'architecture
src/
│
├── context/
│   └── RestaurantContext.tsx
│       │
│       ├── RestaurantContextType
│       └── RestaurantContext
│
├── providers/
│   └── RestaurantProvider.tsx
│       │
│       ├── selectedRestaurant
│       ├── filterState
│       ├── useReducer
│       └── Provider
│
├── reducers/
│   └── restaurantFilterReducer.ts
│       │
│       ├── FilterState
│       ├── FilterAction
│       ├── initialFilterState
│       └── filterReducer
│
└── hooks/
    └── useRestaurantContext.ts

# le Flux

                     RestaurantProvider
                         │
              ┌──────────┴──────────┐
              ↓                     ↓
       selectedRestaurant       filterState
              │                     │
              │                 dispatch
              │                     │
              └──────────┬──────────┘
                         ↓
                RestaurantContext
                         ↓
              useRestaurantContext()
                         ↓
              composants React