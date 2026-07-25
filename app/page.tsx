import type { Metadata } from "next";

import { homepageScenes } from "@/assets/homepage-content";
import { TimeOfDayBackdrop } from "@/components/journey/time-of-day-backdrop";
import { HomepageHero } from "@/components/sections/homepage-hero";
import { StoryScene } from "@/components/sections/story-scene";
import { VisitSection } from "@/components/sections/visit-section";
import { createPageMetadata, seoConfig } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata: Metadata = createPageMetadata({
  title: "Tacos, Tequila & Golden Hour in El Paredón",
  description: seoConfig.defaultDescription,
});

export default function Home() {
  return (
    <>
      <TimeOfDayBackdrop />
      <HomepageHero />
      {homepageScenes.map((scene, index) => (
        <StoryScene
          key={scene.id}
          id={scene.id}
          time={scene.time}
          eyebrow={scene.eyebrow}
          title={scene.title}
          description={scene.description}
          sensoryCue={scene.sensoryCue}
          palette={scene.palette}
          frameKind={scene.frameKind}
          index={index}
        />
      ))}
      <VisitSection />
    </>
  );
}
