import { HomePage } from './pages/HomePage';
import { RestaurantProvider } from './provider/RestaurantProvider';

export function App() {

  return (
    <RestaurantProvider>
      <HomePage />
    </RestaurantProvider> 
  );
}