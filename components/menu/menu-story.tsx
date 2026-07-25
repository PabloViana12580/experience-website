import Image from "next/image";

import type { MenuStory as MenuStoryContent } from "@/assets/menu-content";
import { editorialBlurDataUrl } from "@/lib/image";

type MenuStoryProps = MenuStoryContent & {
  index: number;
};

export function MenuStory({ id, eyebrow, title, description, image, index }: MenuStoryProps) {
  const isReversed = index % 2 === 1;
  const headingId = `${id}-title`;

  return (
    <section className="py-20 md:py-32" aria-labelledby={headingId}>
      <div className={`container grid items-center gap-10 md:grid-cols-2 md:gap-16 ${isReversed ? "md:[&>*:first-child]:order-2" : ""}`}>
        <div className="relative min-h-[70svh] overflow-hidden rounded-[2.5rem] bg-muted md:min-h-[38rem]">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(min-width: 1280px) 560px, (min-width: 768px) 50vw, 100vw"
            quality={82}
            placeholder="blur"
            blurDataURL={editorialBlurDataUrl}
            className="object-cover"
          />
        </div>
        <div className="max-w-xl">
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.28em] text-muted-foreground">{eyebrow}</p>
          <h2 id={headingId} className="font-display text-4xl font-semibold tracking-tight md:text-6xl">
            {title}
          </h2>
          <p className="mt-7 text-base leading-8 text-muted-foreground md:text-lg">{description}</p>
        </div>
      </div>
    </section>
  );
}
