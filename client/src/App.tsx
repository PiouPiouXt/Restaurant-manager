import { RestaurantProvider } from './provider/RestaurantProvider';
import { HomePage } from './pages/HomePage'

export function App() {
  return (
    <RestaurantProvider>
      <HomePage />
    </RestaurantProvider>
  );
}