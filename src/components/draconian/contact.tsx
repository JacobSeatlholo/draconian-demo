"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  Printer,
  MapPin,
  Facebook,
  Send,
  Loader2,
  CheckCircle2,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { SITE, SERVICES } from "@/lib/site-data";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";

const CONTACT_ITEMS = [
  { icon: Mail, label: "Email", value: SITE.email, href: `mailto:${SITE.email}` },
  {
    icon: Phone,
    label: "Telephone",
    value: SITE.phone,
    href: `tel:${SITE.phone.replace(/\s/g, "")}`,
  },
  { icon: Printer, label: "Fax", value: SITE.fax, href: null },
  {
    icon: MapPin,
    label: "Address",
    value: SITE.address,
    href: "https://www.google.com/maps/search/?api=1&query=24+Bruarfoss+Rd+Centurion+Gauteng+0157",
  },
  { icon: Facebook, label: "Facebook", value: "Draconian.co.za", href: SITE.facebook },
];

export function Contact() {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [service, setService] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = {
      name: String(fd.get("name") || ""),
      email: String(fd.get("email") || ""),
      phone: String(fd.get("phone") || ""),
      service: service,
      message: String(fd.get("message") || ""),
    };

    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || "Something went wrong");
      }
      setDone(true);
      toast({
        title: "Request received",
        description:
          "Thank you — your enquiry has been logged. Draconian will contact you shortly.",
      });
      form.reset();
      setService("");
    } catch (err) {
      toast({
        title: "Could not submit",
        description:
          err instanceof Error
            ? err.message
            : "Please try again, or email info@draconian.co.za directly.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="contact" className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Contact us"
          title={
            <>
              Let&apos;s secure your site —{" "}
              <span className="text-gradient-brand">references included</span>
            </>
          }
          lead="Tell us about your property or business and we will put together a tailored proposal, with client references attached to every quote."
        />

        <div className="grid gap-8 lg:grid-cols-5">
          {/* info column */}
          <Reveal className="lg:col-span-2">
            <div className="flex h-full flex-col gap-4">
              {CONTACT_ITEMS.map((item) => {
                const inner = (
                  <>
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/12 text-primary">
                      <item.icon className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block text-xs uppercase tracking-wider text-muted-foreground">
                        {item.label}
                      </span>
                      <span className="block text-sm font-medium text-foreground/90">
                        {item.value}
                      </span>
                    </span>
                  </>
                );
                const cls =
                  "flex items-center gap-4 rounded-xl border border-border bg-card/80 px-5 py-4 transition-colors hover:border-primary/40";
                return item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className={cls}
                  >
                    {inner}
                  </a>
                ) : (
                  <div key={item.label} className={cls}>
                    {inner}
                  </div>
                );
              })}

              <div className="mt-auto rounded-xl border border-primary/25 bg-primary/8 px-5 py-4">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  <span className="font-semibold text-foreground">
                    Vivotek SAI member
                  </span>{" "}
                  — view our official partner listing at{" "}
                  <a
                    href={SITE.vivotekPartner}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline underline-offset-4 hover:text-brand-soft"
                  >
                    vivotek.com/partner_app_draconian
                  </a>
                </p>
              </div>
            </div>
          </Reveal>

          {/* form column */}
          <Reveal delay={0.1} className="lg:col-span-3">
            <Card className="border-border bg-card">
              <CardContent className="p-7 sm:p-8">
                {done ? (
                  <div className="flex flex-col items-center py-12 text-center">
                    <CheckCircle2 className="mb-4 h-14 w-14 text-[#3ddc97]" />
                    <h3 className="font-display text-xl font-semibold">
                      Enquiry logged
                    </h3>
                    <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                      Thank you — your request has been captured. Draconian will
                      reach out using the details you provided. You can also
                      email us directly at {SITE.email}.
                    </p>
                    <Button
                      variant="outline"
                      className="mt-6 border-border bg-transparent hover:bg-secondary"
                      onClick={() => setDone(false)}
                    >
                      Send another enquiry
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={onSubmit} className="space-y-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full name *</Label>
                        <Input
                          id="name"
                          name="name"
                          required
                          placeholder="Jane van der Merwe"
                          className="bg-secondary/50"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          placeholder="jane@company.co.za"
                          className="bg-secondary/50"
                        />
                      </div>
                    </div>
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="+27 82 000 0000"
                          className="bg-secondary/50"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="service">Service needed</Label>
                        <Select value={service} onValueChange={setService}>
                          <SelectTrigger id="service" className="w-full bg-secondary/50">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent className="bg-popover">
                            {SERVICES.map((s) => (
                              <SelectItem key={s.id} value={s.title}>
                                {s.title}
                              </SelectItem>
                            ))}
                            <SelectItem value="other">
                              Multiple / not sure yet
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">How can we help? *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        placeholder="Tell us about your site — estate, business, number of cameras needed, current systems…"
                        className="resize-none bg-secondary/50"
                      />
                    </div>
                    <Button
                      type="submit"
                      disabled={submitting}
                      className="h-12 w-full bg-primary text-base font-semibold text-primary-foreground hover:bg-primary/90"
                    >
                      {submitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Sending…
                        </>
                      ) : (
                        <>
                          Send enquiry <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                    <p className="text-center text-xs text-muted-foreground">
                      This demo form stores your enquiry securely in the site
                      database — no information is shared with third parties.
                    </p>
                  </form>
                )}
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
