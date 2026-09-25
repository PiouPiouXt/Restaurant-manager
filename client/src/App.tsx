import { RestaurantProvider } from './provider/RestaurantProvider';
import { HomePage } from './pages/HomePage'
// import { Counter } from './hooks/Counter'

export function App() {
  return (
    <RestaurantProvider>
      {/* <Counter /> */}
      <HomePage />
    </RestaurantProvider>
  );
}