"use client";

import {
  Medal,
  ShieldCheck,
  Handshake,
  Coins,
  TrendingUp,
  Layers,
  Infinity as InfinityIcon,
  PiggyBank,
  Wrench,
  Rocket,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { WHY_US, FIRSTS } from "@/lib/site-data";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";

const ICONS: Record<string, React.ElementType> = {
  medal: Medal,
  shield: ShieldCheck,
  handshake: Handshake,
  coins: Coins,
  "trending-up": TrendingUp,
  layers: Layers,
  infinity: InfinityIcon,
  piggy: PiggyBank,
  wrench: Wrench,
};

export function WhyUs() {
  return (
    <section id="why-us" className="relative py-20 sm:py-24">
      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"
        aria-hidden="true"
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Why choose our systems?"
          title={
            <>
              Enduring where others{" "}
              <span className="text-gradient-brand">didn&apos;t survive two years</span>
            </>
          }
          lead="We endured in an industry where few survived more than two years — and that decade of experience is built into every system we install."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_US.map((item, i) => {
            const Icon = ICONS[item.icon] ?? ShieldCheck;
            return (
              <Reveal key={item.title} delay={(i % 3) * 0.08}>
                <Card className="h-full border-border bg-card/80 transition-colors duration-300 hover:border-primary/35">
                  <CardContent className="p-6">
                    <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/12 text-primary">
                      <Icon className="h-5.5 w-5.5" />
                    </span>
                    <h3 className="font-display text-base font-semibold">
                      {item.title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                      {item.text}
                    </p>
                  </CardContent>
                </Card>
              </Reveal>
            );
          })}
        </div>

        {/* First-to-market strip */}
        <Reveal className="mt-14">
          <div className="overflow-hidden rounded-2xl border border-primary/25 bg-gradient-to-br from-primary/10 via-card to-card">
            <div className="flex items-center gap-3 border-b border-border/70 px-6 py-4 sm:px-8">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-warm/15 text-amber-warm">
                <Rocket className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-display text-lg font-semibold">
                  Faster technology adoption
                </h3>
                <p className="text-xs text-muted-foreground">
                  When a breakthrough lands in South Africa, it lands in a Draconian install first.
                </p>
              </div>
            </div>
            <div className="grid gap-px bg-border/60 sm:grid-cols-2 lg:grid-cols-3">
              {FIRSTS.map((f, i) => (
                <div key={i} className="flex items-start gap-3 bg-card/95 px-6 py-4">
                  <span className="mt-0.5 shrink-0 rounded bg-amber-warm/15 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-amber-warm">
                    {f.year}
                  </span>
                  <p className="text-sm leading-snug text-foreground/85">{f.text}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
