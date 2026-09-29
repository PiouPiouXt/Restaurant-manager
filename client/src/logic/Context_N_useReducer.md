# Architecture on 560c573c5cea3c90d90cef83cd403d694c6bc5ae 

                 App
                  │
                  ↓
        RestaurantProvider
                  │
       ┌──────────┴──────────┐
       │                     │
selectedRestaurant       filterState
       │                     │
       │                  dispatch
       │                     │
       └──────────┬──────────┘
                  ↓
          RestaurantContext
                  │
        ┌─────────┴─────────┐
        ↓                   ↓
RestaurantManager     RestaurantFilter
        │                   │
        │                   └── useRestaurantContext()
        │
        └── onSelect

# More like that 

App
 │
 ↓
RestaurantProvider
 │
 ├── selectedRestaurant
 │      └── setSelectedRestaurant
 │
 └── filterState
        ├── searchTerm
        ├── selectedCuisine
        └── onlyOpen
             │
             └── dispatch
                    │
                    ↓
             filterReducer

Et :

RestaurantFilter
       │
       ↓
useRestaurantContext()
       │
       ├── filterState
       └── dispatch

Pendant que RestaurantManager peut récupérer :

const {
  selectedRestaurant,
  setSelectedRestaurant,
} = useRestaurantContext();


# Migration 4/6
RestaurantProvider
│
├── selectedRestaurant
├── setSelectedRestaurant
│
├── filterState
│   ├── searchTerm
│   ├── selectedCuisine
│   └── onlyOpen
│
└── dispatch
        │
        ├───────────────┐
        ↓               ↓
RestaurantFilter   RestaurantManager
        │               │
        │               ↓
        │        filteredRestaurant
        │               │
        └──────────────→ RestaurantList
                         │
                         ↓
                   RestaurantCard

## Flux
Utilisateur
   ↓
RestaurantFilter
   ↓
dispatch(action)
   ↓
filterReducer
   ↓
filterState
   ↓
filteredRestaurant
   ↓
RestaurantList