"use client";

import { useState } from "react";
import {
  Cctv,
  BellRing,
  TrafficCone,
  Wifi,
  BrickWall,
  Check,
  ArrowUpRight,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { SERVICES, type Service } from "@/lib/site-data";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";

const ICONS: Record<string, React.ElementType> = {
  cctv: Cctv,
  intercom: BellRing,
  boom: TrafficCone,
  wifi: Wifi,
  firewall: BrickWall,
};

function ServiceCard({
  service,
  index,
  onOpen,
}: {
  service: Service;
  index: number;
  onOpen: (s: Service) => void;
}) {
  const Icon = ICONS[service.icon] ?? Cctv;
  return (
    <Reveal delay={index * 0.07}>
      <Card className="group flex h-full flex-col overflow-hidden border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_20px_50px_-20px_rgba(79,163,232,0.25)]">
        <CardHeader className="pb-0">
          <div className="relative mb-4 overflow-hidden rounded-xl border border-border/70 bg-secondary/40">
            <img
              src={service.image}
              alt={service.title}
              className="mx-auto h-44 w-auto object-contain py-3 transition-transform duration-500 group-hover:scale-[1.06]"
              loading="lazy"
            />
            <Badge className="absolute left-3 top-3 border-primary/30 bg-primary/15 text-[10px] font-semibold uppercase tracking-wider text-brand-soft">
              {service.highlight}
            </Badge>
          </div>
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/12 text-primary">
              <Icon className="h-5 w-5" />
            </span>
            <h3 className="font-display text-lg font-semibold">{service.title}</h3>
          </div>
        </CardHeader>
        <CardContent className="flex-1 pt-3">
          <p className="text-sm leading-relaxed text-muted-foreground">
            {service.short}
          </p>
          <ul className="mt-4 space-y-2">
            {service.features.slice(0, 4).map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm">
                <Check className="h-3.5 w-3.5 shrink-0 text-[#3ddc97]" />
                <span className="text-foreground/85">{f}</span>
              </li>
            ))}
            {service.features.length > 4 && (
              <li className="pl-5 text-xs text-muted-foreground">
                +{service.features.length - 4} more capabilities
              </li>
            )}
          </ul>
        </CardContent>
        <CardFooter>
          <Button
            variant="ghost"
            className="w-full justify-between text-primary hover:bg-primary/10 hover:text-brand-soft"
            onClick={() => onOpen(service)}
            aria-label={`More about ${service.title}`}
          >
            Full details
            <ArrowUpRight className="h-4 w-4" />
          </Button>
        </CardFooter>
      </Card>
    </Reveal>
  );
}

export function Services() {
  const [active, setActive] = useState<Service | null>(null);

  return (
    <section id="services" className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="What we do"
          title={
            <>
              Five disciplines. <span className="text-gradient-brand">One security core.</span>
            </>
          }
          lead="Every discipline runs on the same Draconian core — so access control, WiFi and surveillance work together instead of against each other."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <ServiceCard key={s.id} service={s} index={i} onOpen={setActive} />
          ))}

          {/* CTA card filling the 6th grid slot */}
          <Reveal delay={0.35}>
            <Card className="flex h-full flex-col justify-between border-primary/25 bg-gradient-to-br from-primary/12 via-card to-card p-6">
              <div>
                <h3 className="font-display text-xl font-semibold">
                  Need something bespoke?
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  We write our own software — if your estate, business or
                  industrial site needs a unique combination of these systems,
                  we tailor every installation to be a perfect fit, not a
                  generic recipe imposed on you.
                </p>
              </div>
              <Button asChild className="mt-6 bg-primary text-primary-foreground hover:bg-primary/90">
                <a href="#contact">Talk to us</a>
              </Button>
            </Card>
          </Reveal>
        </div>
      </div>

      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-h-[85vh] overflow-y-auto border-border bg-popover custom-scrollbar sm:max-w-lg">
          {active && (
            <>
              <DialogHeader>
                <div className="mb-2 flex items-center justify-center rounded-xl border border-border bg-secondary/40 p-4">
                  <img
                    src={active.image}
                    alt={active.title}
                    className="h-32 w-auto object-contain"
                  />
                </div>
                <DialogTitle className="font-display text-xl">
                  {active.title}
                </DialogTitle>
                <DialogDescription className="text-sm leading-relaxed">
                  {active.short}
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-3 pt-2">
                {active.details.map((d, i) => (
                  <p key={i} className="text-sm leading-relaxed text-foreground/85">
                    {d}
                  </p>
                ))}
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {active.features.map((f) => (
                  <Badge
                    key={f}
                    variant="outline"
                    className="border-border bg-secondary/60 text-xs text-foreground/85"
                  >
                    {f}
                  </Badge>
                ))}
              </div>
              <Button asChild className="mt-5 w-full bg-primary text-primary-foreground hover:bg-primary/90">
                <a href="#contact" onClick={() => setActive(null)}>
                  Request a quote for {active.title.toLowerCase()}
                </a>
              </Button>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
