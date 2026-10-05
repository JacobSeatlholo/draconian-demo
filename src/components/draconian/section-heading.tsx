import { Reveal } from "./reveal";

export function SectionHeading({
  kicker,
  title,
  lead,
  align = "center",
}: {
  kicker: string;
  title: React.ReactNode;
  lead?: string;
  align?: "center" | "left";
}) {
  return (
    <Reveal
      className={`mb-12 max-w-3xl ${
        align === "center" ? "mx-auto text-center" : "text-left"
      }`}
    >
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-primary">
        {kicker}
      </p>
      <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {lead && (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          {lead}
        </p>
      )}
    </Reveal>
  );
}
