import type { HomepageScene } from "@/assets/homepage-content";
import { ScenePlaceholder } from "@/components/sections/scene-placeholder";

type StorySceneProps = HomepageScene & {
  index: number;
};

export function StoryScene({ id, time, eyebrow, title, description, sensoryCue, palette, frameKind, index }: StorySceneProps) {
  const isReversed = index % 2 === 1;
  const isQuietScene = frameKind === "ocean" || frameKind === "night";

  return (
    <section id={id} className="cinematic-scene scroll-mt-24 py-24 md:min-h-screen md:py-36" aria-labelledby={`${id}-title`}>
      <div className={`container grid items-center gap-12 md:grid-cols-2 md:gap-20 ${isReversed ? "md:[&>*:first-child]:order-2" : ""}`}>
        <div className={isQuietScene ? "max-w-2xl" : "max-w-xl"}>
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.28em] text-muted-foreground">{eyebrow}</p>
          <h2 id={`${id}-title`} className="font-display text-4xl font-semibold tracking-tight md:text-6xl">
            {title}
          </h2>
          <p className="mt-7 text-base leading-8 text-muted-foreground md:text-lg">{description}</p>
          <p className="sr-only">{sensoryCue}</p>
        </div>
        <ScenePlaceholder label={eyebrow} palette={palette} time={time} frameKind={frameKind} />
      </div>
    </section>
  );
}
