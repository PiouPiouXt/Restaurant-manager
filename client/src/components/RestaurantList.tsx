import type { Restaurant } from "../types/restaurant";
import { RestaurantCard } from "./RestaurantCard";
import { useRestaurantContext } from "../hooks/useRestaurantContext";

type RestaurantListProps = {
  restaurants: Restaurant[];
  title: string;
};

export function RestaurantList({ restaurants, title }: RestaurantListProps) {
  const { selectedRestaurant } = useRestaurantContext();

  return (
    <section className="py-[72px] pb-24 max-md:py-[54px] max-md:pb-[68px]" id="restaurants">
      {/* ── Section heading ── */}
      <div className="flex items-end justify-between mb-8">
        <div>
          <p className="m-0 mb-3 text-coral text-[11px] font-bold tracking-[.14em] uppercase">
            Sélection du moment
          </p>
          <h2 className="m-0 text-ink font-heading text-[38px] font-normal tracking-[-0.05em] max-md:text-[31px]">
            {title}
          </h2>
        </div>
        <span className="text-muted text-xs tracking-[.08em] tabular-nums">
          {restaurants.length} résultat{restaurants.length !== 1 ? "s" : ""}
        </span>
      </div>

      {/* ── Grid ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-md:gap-4">
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>

      {/* ── Selected indicator ── */}
      {selectedRestaurant && (
        <p className="p-5 font-bold text-center text-ink mt-6">
          Restaurant sélectionné : {selectedRestaurant.name}
        </p>
      )}
    </section>
  );
}