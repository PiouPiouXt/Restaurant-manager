URL
 │
 │ /restaurants/3
 ↓
<Route path="/restaurants/:id">
 │
 ↓
RestaurantDetailPage
 │
 ↓
useParams()
 │
 ↓
id = "3"
 │
 ↓
Number(id)
 │
 ↓
3
 │
 ↓
useRestaurants()
 │
 ↓
restaurants.find(...)
 │
 ↓
Restaurant correspondant