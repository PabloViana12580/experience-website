import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="container flex min-h-[60vh] flex-col items-start justify-center gap-6 py-24">
      <div>
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-muted-foreground">404</p>
        <h1 className="font-display text-4xl font-semibold tracking-tight">Page not found</h1>
      </div>
      <Button asChild>
        <Link href="/">Return home</Link>
      </Button>
    </div>
  );
}
