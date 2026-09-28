import { RestaurantProvider } from './provider/RestaurantProvider';
import { RestaurantManager } from './pages/RestaurantManager'
// import { Counter } from './hooks/Counter'

export function App() {

  return (
    <RestaurantProvider>
      <RestaurantManager />
      {/* <Counter /> */}
    </RestaurantProvider>
  );
}