export function TimeOfDayBackdrop() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-background">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,hsl(var(--takoah-pacific)/0.22),transparent_38%),linear-gradient(180deg,hsl(var(--background)),hsl(var(--takoah-sand)/0.22)_35%,hsl(var(--takoah-golden)/0.20)_58%,hsl(var(--takoah-sunset)/0.18)_75%,hsl(var(--takoah-night)/0.18))]" />
      <div className="cinematic-drift absolute left-1/2 top-12 h-48 w-48 -translate-x-1/2 rounded-full bg-takoah-golden/20 blur-3xl md:h-72 md:w-72" />
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
}
