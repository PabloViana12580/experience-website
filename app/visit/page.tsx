import type { Metadata } from "next";
import Image from "next/image";

import { arrivalNotes, visitIntro, visitLinks } from "@/assets/visit-content";
import { VisitActionCard } from "@/components/visit/visit-action-card";
import { createPageMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata: Metadata = createPageMetadata({
  title: "Visit Us",
  description: "Find Takoah in Playa El Paredón with Google Maps, Waze, WhatsApp, Instagram, and a handcrafted illustrated map.",
  path: "/visit",
});

export default function VisitPage() {
  return (
    <>
      <section className="container grid min-h-[calc(100svh-5rem)] items-center gap-12 py-20 md:grid-cols-[0.82fr_1.18fr] md:py-28" aria-labelledby="visit-title">
        <div className="max-w-2xl">
          <p className="mb-6 text-sm font-medium uppercase tracking-[0.3em] text-muted-foreground">{visitIntro.eyebrow}</p>
          <h1 id="visit-title" className="font-display text-5xl font-semibold tracking-tight md:text-7xl">
            {visitIntro.title}
          </h1>
          <p className="mt-8 text-lg leading-8 text-muted-foreground md:text-xl md:leading-9">{visitIntro.description}</p>
        </div>
        <div className="relative overflow-hidden rounded-[2.5rem] border border-border bg-card p-3 shadow-sm">
          <Image
            src="/images/visit/el-paredon-map.svg"
            alt="Handcrafted illustrated map of El Paredón highlighting Takoah with a taco-shaped marker"
            width={1400}
            height={1000}
            priority
            fetchPriority="high"
            unoptimized
            className="h-auto w-full rounded-[2rem]"
          />
        </div>
      </section>

      <section className="py-12 md:py-20" aria-label="Open directions and contact links">
        <div className="container grid gap-4 md:grid-cols-4">
          {visitLinks.map((link) => (
            <VisitActionCard key={link.label} {...link} />
          ))}
        </div>
      </section>

      <section className="py-20 md:py-28" aria-labelledby="arrival-title">
        <div className="container grid gap-12 md:grid-cols-[0.8fr_1.2fr] md:items-start">
          <div>
            <p className="mb-5 text-sm font-medium uppercase tracking-[0.28em] text-muted-foreground">No friction</p>
            <h2 id="arrival-title" className="font-display text-4xl font-semibold tracking-tight md:text-6xl">
              Everything you need to arrive relaxed.
            </h2>
          </div>
          <div className="grid gap-4">
            {arrivalNotes.map((note) => (
              <article key={note.title} className="rounded-[2rem] border border-border bg-card/85 p-6 md:p-8">
                <h3 className="text-xl font-semibold tracking-tight">{note.title}</h3>
                <p className="mt-4 leading-7 text-muted-foreground">{note.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
