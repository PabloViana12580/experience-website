import Link from "next/link";

import { primaryNavigation } from "@/assets/navigation";
import { siteConfig } from "@/lib/constants";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-xl">
      <div className="container flex min-h-20 flex-col items-start justify-center gap-4 py-4 md:flex-row md:items-center md:justify-between md:py-0">
        <Link href="/" className="font-display text-xl font-semibold tracking-[0.16em] uppercase" aria-label={`${siteConfig.name} home`}>
          {siteConfig.name}
        </Link>
        <nav aria-label="Primary navigation" className="flex flex-wrap items-center gap-x-6 gap-y-3 md:gap-8">
          {primaryNavigation.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:text-foreground">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
