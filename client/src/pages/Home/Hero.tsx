export function Hero() {
  return (
    <>
      {/* ── Header ── */}
      <header className="min-h-[88px] flex items-center justify-between border-b border-line max-md:min-h-[72px] sticky top-0 z-50 bg-paper/80 backdrop-blur-md">
        <a
          className="flex items-center gap-2.5 text-ink font-heading text-[15px] font-bold tracking-[.02em] uppercase no-underline"
          href="/"
          aria-label="Table locale home"
        >
          <span className="grid w-8 h-8 place-items-center rounded-full text-paper bg-coral font-heading text-xs">
            PB
          </span>
          <span>Piou Babasha</span>
        </a>

        <nav className="flex gap-8 max-md:hidden" aria-label="Navigation principale">
          <a
            className="text-ink text-sm font-bold no-underline hover:text-coral transition-colors"
            href="#restaurants"
          >
            Restaurants
          </a>
          <a
            className="text-muted text-sm no-underline hover:text-coral transition-colors"
            href="#about"
          >
            À propos
          </a>
        </nav>

        <button
          className="border-0 py-2.5 px-0 text-ink bg-transparent font-[inherit] text-[13px] cursor-pointer flex items-center gap-1.5"
          type="button"
        >
          <span aria-hidden="true" className="text-coral text-lg">⌖</span>
          <span>Antananarivo, Madagascar</span>
        </button>
      </header>

      {/* ── Hero section ── */}
      <section
        className="flex min-h-[410px] items-end justify-between pt-[86px] pb-16 border-b border-line max-md:block max-md:min-h-auto max-md:pt-[72px] max-md:pb-[54px]"
        id="about"
      >
        <div className="max-w-[710px]">
          <p className="m-0 mb-[18px] text-coral text-[11px] font-bold tracking-[.14em] uppercase">
            La ville, à votre table
          </p>
          <h1 className="max-w-[680px] m-0 text-ink font-heading font-normal tracking-[-0.065em] leading-[.91] text-[clamp(3rem,7vw,6.7rem)] max-md:text-[clamp(3.4rem,16vw,5rem)]">
            Les bonnes adresses commencent ici.
          </h1>
          <p className="max-w-[390px] mt-7 mb-[26px] text-muted text-base">
            Une sélection de restaurants singuliers, choisis pour les envies du jour.
          </p>
          <a
            className="text-ink text-[13px] font-bold no-underline hover:text-coral transition-colors inline-flex items-center gap-2"
            href="#restaurants"
          >
            Explorer la sélection
            <span aria-hidden="true" className="text-coral text-lg">↘</span>
          </a>
        </div>

        <div
          className="flex items-end gap-[11px] pb-1 text-muted max-md:mt-[54px]"
          aria-label="Sélection de la semaine"
        >
          <span className="text-coral font-heading text-[56px] leading-[.8]">03</span>
          <span className="text-[11px] leading-[1.35] uppercase">
            adresses à découvrir
            <br />cette semaine
          </span>
        </div>
      </section>
    </>
  );
}