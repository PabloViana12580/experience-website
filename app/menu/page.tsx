import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { menuFinal, menuHighlights, menuIntro, menuStories } from "@/assets/menu-content";
import { MenuStory } from "@/components/menu/menu-story";
import { Button } from "@/components/ui/button";
import { editorialBlurDataUrl } from "@/lib/image";
import { createPageMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata: Metadata = createPageMetadata({
  title: "Menu",
  description: "An editorial look at Takoah tacos, tequila, drinks, and shared evenings in Playa El Paredón.",
  path: "/menu",
});

export default function MenuPage() {
  return (
    <>
      <section className="container grid min-h-[calc(100svh-5rem)] items-center gap-12 py-20 md:grid-cols-[0.8fr_1.2fr] md:py-28" aria-labelledby="menu-title">
        <div className="max-w-2xl">
          <p className="mb-6 text-sm font-medium uppercase tracking-[0.3em] text-muted-foreground">{menuIntro.eyebrow}</p>
          <h1 id="menu-title" className="font-display text-5xl font-semibold tracking-tight md:text-7xl">
            {menuIntro.title}
          </h1>
          <p className="mt-8 text-lg leading-8 text-muted-foreground md:text-xl md:leading-9">{menuIntro.description}</p>
        </div>
        <div className="relative min-h-[72svh] overflow-hidden rounded-[2.5rem] bg-muted">
          <Image
            src="https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?auto=format&fit=crop&w=2000&q=85"
            alt="Editorial restaurant table with tacos, drinks, and warm natural light"
            fill
            priority
            fetchPriority="high"
            sizes="(min-width: 1280px) 720px, (min-width: 768px) 60vw, 100vw"
            quality={84}
            placeholder="blur"
            blurDataURL={editorialBlurDataUrl}
            className="object-cover"
          />
        </div>
      </section>

      <section className="py-12 md:py-20" aria-label="Menu highlights">
        <div className="container grid gap-4 md:grid-cols-4">
          {menuHighlights.map((highlight) => (
            <div key={highlight} className="border-t border-border pt-5 text-sm uppercase tracking-[0.18em] text-muted-foreground">
              {highlight}
            </div>
          ))}
        </div>
      </section>

      {menuStories.map((story, index) => (
        <MenuStory key={story.id} index={index} {...story} />
      ))}

      <section className="py-20 md:py-32" aria-labelledby="menu-visit-title">
        <div className="container">
          <div className="grid gap-10 rounded-[2.5rem] border border-border bg-card/90 p-8 md:grid-cols-[1fr_auto] md:items-end md:p-14">
            <div className="max-w-2xl">
              <p className="mb-5 text-sm font-medium uppercase tracking-[0.28em] text-muted-foreground">{menuFinal.eyebrow}</p>
              <h2 id="menu-visit-title" className="font-display text-4xl font-semibold tracking-tight md:text-6xl">
                {menuFinal.title}
              </h2>
              <p className="mt-7 text-base leading-8 text-muted-foreground md:text-lg">{menuFinal.description}</p>
            </div>
            <Button asChild>
              <Link href="/visit">Visit Takoah</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
