import { HomePage } from './pages/HomePage';
import { RestaurantProvider } from './context/RestaurantProvider';

export function App() {

  return (
    <RestaurantProvider>
      <HomePage />
    </RestaurantProvider> 
  );
}