import Link from "next/link";

import type { visitLinks } from "@/assets/visit-content";

type VisitAction = (typeof visitLinks)[number];

export function VisitActionCard({ label, description, href }: VisitAction) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={`${description} using ${label}; opens in a new tab`}
      className="group rounded-[2rem] border border-border bg-card/85 p-6 transition-colors hover:bg-card"
    >
      <span className="block text-sm font-medium uppercase tracking-[0.24em] text-muted-foreground">{label}</span>
      <span className="mt-5 block text-2xl font-semibold tracking-tight text-foreground">{description}</span>
      <span className="mt-8 block text-sm text-muted-foreground transition-colors group-hover:text-foreground">
        Open <span aria-hidden="true">→</span>
        <span className="sr-only"> in a new tab</span>
      </span>
    </Link>
  );
}
