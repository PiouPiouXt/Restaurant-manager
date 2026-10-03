export function Footer() {
  return (
    <footer className="flex justify-between items-center py-6 pb-8 border-t border-line text-muted text-[11px] uppercase tracking-[.08em] max-md:flex-col max-md:items-start max-md:gap-1 max-md:leading-8">
      <div className="flex items-center gap-2.5">
        <span className="grid w-6 h-6 place-items-center rounded-full text-paper bg-coral font-heading text-[8px]">
          PB
        </span>
        <span>Table locale</span>
      </div>
      <span className="max-md:ml-[34px]">Bien manger, simplement.</span>
    </footer>
  );
}