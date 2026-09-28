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