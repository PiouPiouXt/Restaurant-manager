main.tsx
│
├── /                         → App
│                              │
│                              └── RestaurantProvider
│                                    │
│                                    └── HomePage
│                                         │
│                                         └── RestaurantManager
│                                              │
│                                              └── RestaurantList
│                                                   │
│                                                   └── RestaurantCard
│                                                        │
│                                                        │ Link
│                                                        ↓
│                                              /restaurants/:id
│                                                        │
│                                                        ↓
│                                              RestaurantDetailPage
│                                                        │
│                                                        └── useParams()
│
└── /about                    → AboutPage