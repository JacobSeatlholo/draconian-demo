"use client";

import { ShieldCheck, ShieldX, BadgeCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { TRUSTED_VENDORS, BLACKLIST } from "@/lib/site-data";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";

export function Technology() {
  return (
    <section id="technology" className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Security & responsibility"
          title={
            <>
              We refuse to install{" "}
              <span className="text-gradient-brand">known-insecure systems</span>
            </>
          }
          lead="Draconian pledges to only install equipment that is safe for your network. Should an exploit become known, we minimize your exposure and supply firmware or software remediation as a matter of high importance."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Trusted */}
          <Reveal>
            <Card className="h-full border-[#3ddc97]/25 bg-gradient-to-b from-[#3ddc97]/[0.07] to-card">
              <CardContent className="p-7">
                <div className="mb-6 flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#3ddc97]/15 text-[#3ddc97]">
                    <ShieldCheck className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold">
                      Vendors we stand behind
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      Exclusively. Focus makes us precise.
                    </p>
                  </div>
                </div>
                <ul className="space-y-4">
                  {TRUSTED_VENDORS.map((v) => (
                    <li
                      key={v.name}
                      className="flex items-start justify-between gap-4 rounded-xl border border-border/80 bg-card/60 px-4 py-3.5"
                    >
                      <div className="flex items-start gap-3">
                        <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#3ddc97]" />
                        <div>
                          <p className="font-semibold">{v.name}</p>
                          <p className="text-sm text-muted-foreground">{v.area}</p>
                        </div>
                      </div>
                      <span className="whitespace-nowrap rounded-full bg-[#3ddc97]/12 px-2.5 py-1 text-[11px] font-medium text-[#3ddc97]">
                        {v.note}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                  Cameras from <span className="text-foreground">Vivotek</span>,
                  access control from{" "}
                  <span className="text-foreground">Virdi</span> and wireless
                  systems from{" "}
                  <span className="text-foreground">Ubiquiti</span> — integrated
                  natively in our controller software.
                </p>
              </CardContent>
            </Card>
          </Reveal>

          {/* Blacklist */}
          <Reveal delay={0.1}>
            <Card className="h-full border-destructive/25 bg-gradient-to-b from-destructive/[0.06] to-card">
              <CardContent className="p-7">
                <div className="mb-6 flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-destructive/15 text-destructive">
                    <ShieldX className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold">
                      Our security blacklist
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      Vendors we will not install on your network.
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {BLACKLIST.map((v) => (
                    <div
                      key={v.name}
                      className="rounded-xl border border-border/80 bg-card/60 px-4 py-4"
                    >
                      <p className="font-semibold text-foreground/90">{v.name}</p>
                      <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                        {v.reason}
                      </p>
                    </div>
                  ))}
                </div>
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                  We avoid systems that are known to be insecure or that have
                  been deemed a risk by international security agencies —
                  because your surveillance platform must never become the
                  breach.
                </p>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
