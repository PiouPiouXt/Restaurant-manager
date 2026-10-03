import type { Restaurant } from "../types/restaurant";
import { Link } from "react-router-dom";
import { useRestaurantContext } from "../hooks/useRestaurantContext";

type RestaurantCardProps = {
  restaurant: Restaurant;
};

export function RestaurantCard({ restaurant }: RestaurantCardProps) {
  const { setSelectedRestaurant } = useRestaurantContext();

  return (
    <div
      className="group overflow-hidden bg-sage rounded-xl cursor-pointer transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_16px_30px_rgba(32,35,31,.11)]"
      onClick={() => setSelectedRestaurant(restaurant)}
    >
      {/* ── Image ── */}
      <div className="relative aspect-[1.18/1] overflow-hidden">
        <img
          className="w-full h-full block object-cover saturate-[.82] transition-transform duration-500 ease-out group-hover:scale-[1.04]"
          src={restaurant.image}
          alt={restaurant.name}
        />
        <span
          className={`absolute top-3.5 left-3.5 inline-flex items-center gap-1.5 py-1.5 px-2.5 text-paper font-bold text-[10px] tracking-[.05em] uppercase rounded-md ${restaurant.isOpen ? "bg-ink-glass" : "bg-ink-glass-light"
            }`}
        >
          <span
            aria-hidden="true"
            className={`w-1.5 h-1.5 rounded-full ${restaurant.isOpen ? "bg-green-dot" : "bg-red-dot"
              }`}
          />
          {restaurant.isOpen ? "Ouvert" : "Fermé"}
        </span>
        <span className="absolute right-3.5 bottom-3 text-paper font-heading text-lg">
          0{restaurant.id}
        </span>
      </div>

      {/* ── Content ── */}
      <div className="px-5 pt-5 pb-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="m-0 mb-1 text-coral text-[10px] font-bold tracking-[.12em] uppercase">
              {restaurant.cuisine}
            </p>
            <h3 className="m-0 text-ink font-heading text-[29px] font-normal tracking-[-0.04em] leading-none">
              {restaurant.name}
            </h3>
          </div>
          <span className="text-coral text-[22px] leading-none transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true">
            ↗
          </span>
        </div>
        <div className="flex gap-4 mt-6 text-muted text-xs">
          <span>
            <strong className="text-coral text-sm">★</strong> {restaurant.rating}
          </span>
          <span>{restaurant.deliveryTime} min</span>
          <span>{"€".repeat(restaurant.priceRange)}</span>
        </div>
      </div>

      {/* ── Action ── */}
      <div className="px-5 pb-5 pt-0">
        <Link
          to={`/restaurants/${restaurant.id}`}
          className="block w-full text-center py-2.5 rounded-lg bg-coral text-paper text-xs font-bold uppercase tracking-[.08em] no-underline transition-all duration-200 hover:opacity-90 hover:shadow-md"
          onClick={(e) => e.stopPropagation()}
        >
          Voir le restaurant
        </Link>
      </div>
    </div>
  );
}