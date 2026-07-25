import type { HomepageScene } from "@/assets/homepage-content";

type ScenePlaceholderProps = {
  label: string;
  palette: string;
  time: string;
  frameKind: HomepageScene["frameKind"];
};

export function ScenePlaceholder({ label, palette, time, frameKind }: ScenePlaceholderProps) {
  return (
    <div
      className={`scene-frame scene-frame--${frameKind} relative min-h-[70svh] overflow-hidden rounded-[2rem] border border-border/60 bg-gradient-to-br ${palette} p-6 md:min-h-[34rem]`}
      aria-label={`${label}, scene ${time}`}
      role="img"
    >
      <div className="scene-frame__horizon" />
      <div className="scene-frame__sun" />
      <div className="scene-frame__path" />
      <div className="scene-frame__texture" />
      <div className="scene-frame__table" />
    </div>
  );
}
