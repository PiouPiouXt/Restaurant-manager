// Default logic
App
└── HomePage
    ├── RestaurantFilter
    ├── RestaurantList
    │   └── RestaurantCard
    └── Footer

//Custom hooks
RestaurantProvider (src/provider/RestaurantProvider.tsx)
│
└── HomePage
     │
     ├── RestaurantFilter
     │
     └── RestaurantList
              │
              └── useRestaurantContext()


//SRC
src/
│
├── components/
│
├── context/
│   └── RestaurantContext.tsx
│
├── hooks/
│   └── useRestaurantContext.ts
│
├── types/
│   └── Restaurant.ts
│
└── App.tsx