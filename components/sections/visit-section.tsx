import Link from "next/link";

import { homepageVisit } from "@/assets/homepage-content";
import { visitLinks } from "@/assets/visit-content";
import { Button } from "@/components/ui/button";

const googleMapsLink = visitLinks.find((link) => link.label === "Google Maps");

export function VisitSection() {
  return (
    <section id={homepageVisit.id} className="cinematic-scene scroll-mt-24 py-24 md:py-36" aria-labelledby="visit-title">
      <div className="container">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-border bg-card/90 p-8 md:p-14">
          <div className="absolute inset-x-8 top-8 h-px bg-border/70" />
          <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
            <div className="max-w-2xl">
              <p className="mb-5 text-sm font-medium uppercase tracking-[0.28em] text-muted-foreground">{homepageVisit.eyebrow}</p>
              <h2 id="visit-title" className="font-display text-4xl font-semibold tracking-tight md:text-6xl">
                {homepageVisit.title}
              </h2>
              <p className="mt-7 text-base leading-8 text-muted-foreground md:text-lg">{homepageVisit.description}</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
              <Button asChild>
                <Link href="/visit">Plan your visit</Link>
              </Button>
              {googleMapsLink ? (
                <Button asChild variant="secondary">
                  <Link href={googleMapsLink.href} target="_blank" rel="noreferrer" aria-label="Open Takoah in Google Maps; opens in a new tab">
                    Open Google Maps
                    <span className="sr-only"> in a new tab</span>
                  </Link>
                </Button>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
