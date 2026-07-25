import { siteConfig } from "@/lib/constants";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/70 bg-background">
      <div className="container flex flex-col gap-3 py-8 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
        <p>{siteConfig.name}. See you tonight.</p>
        <p>{siteConfig.location}</p>
      </div>
    </footer>
  );
}
