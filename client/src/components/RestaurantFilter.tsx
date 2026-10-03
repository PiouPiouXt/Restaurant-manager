import type { Restaurant, Cuisine } from "../types/restaurant";
import { useRestaurantFilters } from "../hooks/useRestaurantFilters";

type RestaurantFilterProps = {
  restaurants: Restaurant[];
  title: string;
};

export function RestaurantFilter({ title }: RestaurantFilterProps) {
  const {
    searchTerm,
    selectedCuisine,
    onlyOpen,
    setSearch,
    setCuisine,
    setOnlyOpen,
  } = useRestaurantFilters();

  return (
    <div className="mt-10 max-md:mt-7">
      {/* ── Filter bar ── */}
      <div className="rounded-2xl bg-sage-glass border border-line p-6 max-md:p-5 shadow-sm">
        {/* Title */}
        <h1 className="m-0 mb-5 text-ink font-heading text-[27px] font-normal tracking-[-0.04em] leading-none">
          {title}
        </h1>

        {/* Controls row */}
        <div className="flex items-end gap-4 max-md:flex-col max-md:items-stretch max-md:gap-3.5">
          {/* Search */}
          <div className="flex-[1.5] min-w-[220px]">
            <input
              type="text"
              value={searchTerm}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="🔍 Rechercher un restaurant..."
              className="w-full min-h-[46px] border border-line rounded-lg text-ink bg-paper font-[inherit] text-[13px] outline-none px-4 placeholder:text-muted placeholder:opacity-100 transition-all duration-200 focus:border-coral focus:shadow-[0_0_0_3px_var(--color-coral-ring)] focus:bg-warm-white"
            />
          </div>

          {/* Cuisine select */}
          <div className="flex-[0.7] min-w-[150px]">
            <p className="m-0 mb-1.5 text-muted text-[10px] font-bold tracking-[.12em] uppercase max-md:mt-1">
              Cuisine:
            </p>
            <select
              value={selectedCuisine}
              onChange={(event) => setCuisine(event.target.value as Cuisine)}
              className="w-full min-h-[46px] border border-line rounded-lg text-ink bg-paper font-[inherit] text-[13px] outline-none px-3.5 pr-8 cursor-pointer transition-all duration-200 focus:border-coral focus:shadow-[0_0_0_3px_var(--color-coral-ring)] focus:bg-warm-white"
            >
              <option value="Tous">Toutes</option>
              <option value="Japonaise">Japonaise</option>
              <option value="Italienne">Italienne</option>
              <option value="Burger">Burger</option>
              <option value="Malagasy">Malagasy</option>
            </select>
          </div>

          {/* Open toggle */}
          <div className="flex min-h-[46px] items-center gap-2.5 whitespace-nowrap">
            <input
              type="checkbox"
              name="onlyOpen"
              id="onlyOpen"
              className="toggle-switch"
              checked={onlyOpen}
              onChange={(event) => setOnlyOpen(event.target.checked)}
            />
            <label
              htmlFor="onlyOpen"
              className="text-ink text-xs font-bold cursor-pointer"
            >
              Ouvert uniquement
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}