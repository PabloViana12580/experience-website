export function HomepageHero() {
  return (
    <section className="container grid min-h-[calc(100svh-5rem)] items-center gap-12 py-20 md:grid-cols-[0.9fr_1.1fr] md:py-28" aria-labelledby="homepage-title">
      <div className="max-w-3xl">
        <h1 id="homepage-title" className="font-display text-5xl font-semibold tracking-tight md:text-7xl">
          The evening finds you before the restaurant does.
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl md:leading-9">
          Start at the waterline. Follow sand, boards, palms, and bamboo until the light gets warmer and the table feels inevitable.
        </p>
      </div>
      <div className="scene-frame scene-frame--hero relative min-h-[72svh] overflow-hidden rounded-[2.5rem] border border-border/70 bg-gradient-to-br from-takoah-pacific/35 via-takoah-sand/35 to-takoah-golden/20 p-8">
        <div className="scene-frame__horizon" />
        <div className="scene-frame__sun" />
        <div className="scene-frame__path" />
      </div>
    </section>
  );
}
