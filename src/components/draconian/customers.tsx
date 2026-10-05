"use client";

import { Building2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { CUSTOMERS } from "@/lib/site-data";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";

export function Customers() {
  return (
    <section id="customers" className="relative py-20 sm:py-24">
      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"
        aria-hidden="true"
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Some of our customers"
          title={
            <>
              Trusted by brands{" "}
              <span className="text-gradient-brand">you already trust</span>
            </>
          }
          lead="From national fuel stations and hotel groups to hospitals and blood services — estates, retailers and industry leaders have run on Draconian systems for years."
        />

        <div className="grid items-center gap-8 lg:grid-cols-5">
          <Reveal className="lg:col-span-3">
            <Card className="overflow-hidden border-border bg-card">
              <CardContent className="p-3 sm:p-4">
                <div className="overflow-hidden rounded-xl border border-border/70">
                  <img
                    src="/images/Customers.png"
                    alt="Logo wall of Draconian customers: Vodacom, Engen, Protea Hotels, Volvo, Marriott, Steers, Debonairs and more"
                    className="w-full object-cover"
                    loading="lazy"
                  />
                </div>
              </CardContent>
            </Card>
          </Reveal>

          <div className="lg:col-span-2">
            <Reveal delay={0.1}>
              <div className="rounded-2xl border border-border bg-card/80 p-7">
                <Building2 className="mb-4 h-8 w-8 text-primary" />
                <p className="font-display text-xl font-semibold leading-snug">
                  References with every quote
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  We provide references with quotes so you can hear it from our
                  clients directly. Names below are drawn straight from the
                  Draconian customer wall.
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {CUSTOMERS.slice(0, 10).map((c) => (
                    <span
                      key={c}
                      className="rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-medium text-foreground/80"
                    >
                      {c}
                    </span>
                  ))}
                  <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-brand-soft">
                    + many more
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
