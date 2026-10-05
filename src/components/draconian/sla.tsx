"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FileCheck, BadgeCheck, CircleDollarSign } from "lucide-react";
import { SLA_POINTS, WARRANTY } from "@/lib/site-data";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";

export function Sla() {
  return (
    <section id="sla" className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Managed solutions"
          title={
            <>
              An SLA that costs less than{" "}
              <span className="text-gradient-brand">one hour of support</span>
            </>
          }
          lead="Draconian specializes in maintained solutions. SLA systems are actively upgraded as manufacturers release new software — so you keep getting the latest features, network security and mobile compatibility."
        />

        <div className="grid gap-6 lg:grid-cols-5">
          <Reveal className="lg:col-span-3">
            <div className="rounded-2xl border border-border bg-card p-2">
              <Accordion type="single" collapsible className="w-full px-4">
                <AccordionItem value="entitlements" className="border-border">
                  <AccordionTrigger className="py-5 text-left font-display text-base font-semibold hover:no-underline">
                    <span className="flex items-center gap-3">
                      <BadgeCheck className="h-5 w-5 text-primary" />
                      SLA entitlements — the full list
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-5">
                    <ol className="space-y-3">
                      {SLA_POINTS.map((p, i) => (
                        <li key={i} className="flex gap-3 text-sm leading-relaxed">
                          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded bg-primary/15 text-[11px] font-bold text-primary">
                            {i + 1}
                          </span>
                          <span className="text-foreground/85">{p}</span>
                        </li>
                      ))}
                    </ol>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="warranty" className="border-border">
                  <AccordionTrigger className="py-5 text-left font-display text-base font-semibold hover:no-underline">
                    <span className="flex items-center gap-3">
                      <FileCheck className="h-5 w-5 text-primary" />
                      Returns & warranties
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-5">
                    <ul className="space-y-3">
                      {WARRANTY.map((w, i) => (
                        <li
                          key={i}
                          className="flex gap-3 text-sm leading-relaxed text-foreground/85"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                          {w}
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="exclusions" className="border-b-0">
                  <AccordionTrigger className="py-5 text-left font-display text-base font-semibold hover:no-underline">
                    <span className="flex items-center gap-3">
                      <CircleDollarSign className="h-5 w-5 text-primary" />
                      Standard SLA exclusions
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6">
                    <p className="text-sm leading-relaxed text-foreground/85">
                      OEM licence costs, travel, install fees, delivery fees,
                      special equipment hire and hardware replacements are
                      excluded from the standard SLA.
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      The full agreement is published at{" "}
                      <a
                        href="http://www.draconian.co.za/sla"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary underline underline-offset-4 hover:text-brand-soft"
                      >
                        www.draconian.co.za/sla
                      </a>
                      .
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-2">
            <div className="flex h-full flex-col rounded-2xl border border-primary/25 bg-gradient-to-b from-primary/12 to-card p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-soft">
                The SLA promise
              </p>
              <p className="mt-4 font-display text-2xl font-bold leading-snug">
                Same-day service for critical failures.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Two days for general support. Cloud backup of every setting
                means a complete system recovery — even from the most severe
                catastrophic failure — within one hour.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="rounded-xl border border-border/80 bg-card/60 p-4 text-center">
                  <p className="font-display text-2xl font-bold text-primary">1 hr</p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Full system recovery
                  </p>
                </div>
                <div className="rounded-xl border border-border/80 bg-card/60 p-4 text-center">
                  <p className="font-display text-2xl font-bold text-primary">Same day</p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Critical failure response
                  </p>
                </div>
                <div className="rounded-xl border border-border/80 bg-card/60 p-4 text-center">
                  <p className="font-display text-2xl font-bold text-primary">∞</p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Remote & phone support
                  </p>
                </div>
                <div className="rounded-xl border border-border/80 bg-card/60 p-4 text-center">
                  <p className="font-display text-2xl font-bold text-primary">2-3 yr</p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Camera warranty
                  </p>
                </div>
              </div>
              <a
                href="#contact"
                className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Request SLA pricing
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
