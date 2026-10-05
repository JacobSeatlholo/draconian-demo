import { DraconianLogo } from "./logo";
import { SITE, NAV_LINKS } from "@/lib/site-data";
import { ShieldCheck, Hammer } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-[#0a0d12]">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2.5 text-primary">
              <DraconianLogo className="h-8 w-8" />
              <span className="font-display text-xl font-bold tracking-tight text-foreground">
                Draconian
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              {SITE.tagline} South Africa&apos;s oldest dedicated IP
              surveillance house — serving clients nationwide from Centurion,
              Gauteng since {SITE.established}.
            </p>
            <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
              <ShieldCheck className="h-3.5 w-3.5 text-[#3ddc97]" />
              Vivotek SAI Member
            </div>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground">
              Explore
            </h3>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground">
              Accountability
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
              <li>
                <a href={SITE.sla} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-foreground">
                  Standard service level agreement
                </a>
              </li>
              <li>
                <a href={SITE.eula} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-foreground">
                  Software license agreement
                </a>
              </li>
              <li>
                <a href={SITE.privacy} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-foreground">
                  Privacy statement
                </a>
              </li>
              <li>
                <a href={SITE.helpdesk} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-foreground">
                  Helpdesk
                </a>
              </li>
            </ul>
            <div className="mt-6 space-y-1 text-sm text-muted-foreground">
              <p>{SITE.address}</p>
              <p>{SITE.phone}</p>
              <p>{SITE.email}</p>
            </div>
          </div>
        </div>

        <div className="mt-12 space-y-3 border-t border-border/70 pt-6 text-xs text-muted-foreground">
          <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
            <p>© {SITE.established}–2026 Draconian cc. All Rights Reserved.</p>
            <p className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1.5 font-medium text-foreground/90">
              <Hammer className="h-3.5 w-3.5 text-primary" />
              Built working demo by{" "}
              <span className="font-semibold text-brand-soft">business hustle</span>
            </p>
          </div>
          <p className="text-center text-[11px] text-muted-foreground/70 sm:text-left">
            Concept demo refresh built from{" "}
            <a
              href={SITE.original}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-muted-foreground"
            >
              draconian.co.za
            </a>{" "}
            content &amp; imagery
          </p>
        </div>
      </div>
    </footer>
  );
}
