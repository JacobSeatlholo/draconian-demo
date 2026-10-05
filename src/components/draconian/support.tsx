"use client";

import {
  MonitorSmartphone,
  LifeBuoy,
  Timer,
  ExternalLink,
  BookOpen,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SITE, KB_ARTICLES } from "@/lib/site-data";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";

const CHANNELS = [
  {
    icon: MonitorSmartphone,
    title: "Remote support — Rustdesk",
    text: "A password-protected, custom Rustdesk-based app gives customers a safe and convenient way to request support. It works ONLY on Draconian systems.",
    points: ["Rustdesk for Windows & Android", "DW Admin remote access platform", "No extra cost on SLA"],
  },
  {
    icon: LifeBuoy,
    title: "Helpdesk & knowledgebase",
    text: "Our HESK-powered helpdesk takes tickets, tracks history and publishes solutions to the issues we see most often in the field.",
    points: ["Submit & track tickets", "Top knowledgebase articles", "View your ticket history"],
  },
  {
    icon: Timer,
    title: "Response you can plan around",
    text: "SLA clients get same-day service for critical failures and two-day turnaround for general issues — with loan equipment available while you wait.",
    points: ["Same-day critical response", "Loan equipment pool", "Unlimited remote fixes"],
  },
];

export function Support() {
  return (
    <section id="support" className="relative py-20 sm:py-24">
      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"
        aria-hidden="true"
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Support"
          title={
            <>
              Most problems are fixed{" "}
              <span className="text-gradient-brand">before we ever drive out</span>
            </>
          }
          lead="Remote diagnostics are how we keep your total cost of ownership low — callouts are the exception, not the routine."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {CHANNELS.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.08}>
              <Card className="h-full border-border bg-card/80 transition-colors hover:border-primary/35">
                <CardContent className="p-7">
                  <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/12 text-primary">
                    <c.icon className="h-5.5 w-5.5" />
                  </span>
                  <h3 className="font-display text-lg font-semibold">{c.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                    {c.text}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {c.points.map((p) => (
                      <li key={p} className="flex items-center gap-2 text-sm text-foreground/85">
                        <span className="h-1 w-1 rounded-full bg-primary" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8">
          <div className="rounded-2xl border border-border bg-card/70 p-6 sm:p-7">
            <div className="mb-5 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <BookOpen className="h-5 w-5 text-primary" />
                <h3 className="font-display text-lg font-semibold">
                  Straight from our knowledgebase
                </h3>
              </div>
              <Button asChild variant="outline" className="border-border bg-transparent hover:bg-secondary">
                <a href={SITE.helpdesk} target="_blank" rel="noopener noreferrer">
                  Open helpdesk <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {KB_ARTICLES.map((a) => (
                <a
                  key={a}
                  href={SITE.helpdesk}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-xl border border-border/70 bg-secondary/40 px-4 py-3.5 text-sm leading-snug text-foreground/85 transition-colors hover:border-primary/40 hover:bg-primary/8"
                >
                  {a}
                  <span className="mt-1.5 block text-xs text-muted-foreground">
                    Knowledgebase article — read on helpdesk
                  </span>
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
