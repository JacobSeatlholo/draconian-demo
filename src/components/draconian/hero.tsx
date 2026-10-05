"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ShieldCheck, MapPin, ArrowRight, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site-data";

function useClock() {
  const [now, setNow] = useState<Date | null>(null);
  useEffect(() => {
    const update = () => setNow(new Date());
    const r = requestAnimationFrame(update);
    const t = setInterval(update, 1000);
    return () => {
      cancelAnimationFrame(r);
      clearInterval(t);
    };
  }, []);
  return now;
}

const STATS = [
  { value: "10+", label: "Years in dedicated IP security" },
  { value: "30+", label: "Corporate & estate clients" },
  { value: "5", label: "Integrated service lines" },
  { value: "24/7", label: "Unlimited SLA remote support" },
];

function FeedMonitor() {
  const now = useClock();
  const stamp = now
    ? now.toLocaleDateString("en-ZA") + " " + now.toLocaleTimeString("en-GB")
    : "--/--/---- --:--:--";

  return (
    <div className="relative mx-auto w-full max-w-md">
      {/* glow */}
      <div className="absolute -inset-6 rounded-3xl bg-primary/10 blur-2xl" aria-hidden="true" />

      <div className="scanlines relative overflow-hidden rounded-2xl border border-border bg-[#0d1219] card-glow">
        {/* monitor header */}
        <div className="flex items-center justify-between border-b border-border/70 px-4 py-2.5">
          <div className="flex items-center gap-2">
            <span className="rec-dot h-2.5 w-2.5 rounded-full bg-[#e5484d]" />
            <span className="font-mono text-[11px] font-semibold tracking-widest text-[#e5484d]">
              REC
            </span>
          </div>
          <span className="font-mono text-[11px] text-muted-foreground">CAM 01 — PERIMETER</span>
          <span className="font-mono text-[11px] tabular-nums text-muted-foreground">
            {stamp}
          </span>
        </div>

        {/* feed area */}
        <div className="bg-blueprint relative aspect-[4/3] overflow-hidden">
          {/* radar sweep — circular, centered, soft-edged */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="radar-sweep relative aspect-square w-[135%] rounded-full"
              style={{
                background:
                  "conic-gradient(from 0deg, rgba(79,163,232,0.30), rgba(79,163,232,0.10) 55deg, transparent 80deg)",
                maskImage:
                  "radial-gradient(circle, black 0%, black 62%, transparent 71%)",
                WebkitMaskImage:
                  "radial-gradient(circle, black 0%, black 62%, transparent 71%)",
              }}
            />
          </div>

          {/* center reticle */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative h-28 w-28">
              <div className="absolute inset-0 rounded-full border border-primary/40" />
              <div className="absolute inset-0 rounded-full border border-primary/20 scale-125" />
              <Camera className="absolute inset-0 m-auto h-9 w-9 text-primary/80" />
              {/* corner ticks */}
              <span className="absolute -top-1 left-1/2 h-3 w-px -translate-x-1/2 bg-primary/60" />
              <span className="absolute -bottom-1 left-1/2 h-3 w-px -translate-x-1/2 bg-primary/60" />
              <span className="absolute -left-1 top-1/2 h-px w-3 -translate-y-1/2 bg-primary/60" />
              <span className="absolute -right-1 top-1/2 h-px w-3 -translate-y-1/2 bg-primary/60" />
            </div>
          </div>

          {/* viewfinder brackets */}
          <div className="absolute inset-4" aria-hidden="true">
            <span className="absolute left-0 top-0 h-6 w-6 border-l-2 border-t-2 border-primary/70 rounded-tl-sm" />
            <span className="absolute right-0 top-0 h-6 w-6 border-r-2 border-t-2 border-primary/70 rounded-tr-sm" />
            <span className="absolute bottom-0 left-0 h-6 w-6 border-b-2 border-l-2 border-primary/70 rounded-bl-sm" />
            <span className="absolute bottom-0 right-0 h-6 w-6 border-b-2 border-r-2 border-primary/70 rounded-br-sm" />
          </div>

          {/* telemetry */}
          <div className="absolute bottom-3 left-4 space-y-1 font-mono text-[10px] leading-relaxed text-primary/80">
            <p>MOTION ZONES ......... 3 ACTIVE</p>
            <p>NUMBER PLATE ....... ARMED</p>
            <p>PEOPLE COUNTER ..... ONLINE</p>
          </div>
          <div className="absolute right-4 top-3 rounded border border-primary/30 bg-primary/10 px-2 py-1 font-mono text-[10px] text-primary">
            180° SATURATION VIEW
          </div>
        </div>
      </div>

      {/* floating badge */}
      <motion.div
        className="floaty absolute -right-5 -top-9 hidden items-center gap-2 rounded-xl border border-border bg-card px-3.5 py-2.5 shadow-lg sm:flex"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6 }}
      >
        <ShieldCheck className="h-4 w-4 text-[#3ddc97]" />
        <div className="text-xs">
          <p className="font-semibold">Vivotek SAI Member</p>
          <p className="text-muted-foreground">Authorized partner</p>
        </div>
      </motion.div>
    </div>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-16 pt-28 sm:pt-32 lg:pb-24">
      <div className="bg-blueprint absolute inset-0 opacity-60" aria-hidden="true" />
      <div
        className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-background to-transparent"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-10 lg:px-8">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1.5 text-xs font-medium text-brand-soft"
          >
            <ShieldCheck className="h-3.5 w-3.5" />
            {SITE.claim} — since {SITE.established}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="font-display text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.4rem]"
          >
            Security that is a{" "}
            <span className="text-gradient-brand">precision instrument</span>,
            not just another camera system.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.16 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            Draconian builds, integrates and maintains enterprise-grade IP
            surveillance, access control, intercoms, booms, enterprise WiFi and
            firewall appliances — powered by our own software and backed by
            unlimited SLA support.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.24 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <Button
              asChild
              size="lg"
              className="h-12 bg-primary px-6 text-base font-semibold text-primary-foreground hover:bg-primary/90"
            >
              <a href="#contact">
                Get a Free Quote <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 border-border bg-transparent px-6 text-base font-medium hover:bg-secondary"
            >
              <a href="#services">Explore Services</a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.32 }}
            className="mt-8 flex items-center gap-2 text-sm text-muted-foreground"
          >
            <MapPin className="h-4 w-4 text-primary" />
            {SITE.address} — serving clients nationwide
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.2 }}
        >
          <FeedMonitor />
        </motion.div>
      </div>

      {/* stats strip */}
      <div className="relative mx-auto mt-16 max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border lg:grid-cols-4"
        >
          {STATS.map((s) => (
            <div key={s.label} className="bg-card/90 px-6 py-6 text-center sm:py-7">
              <p className="font-display text-3xl font-bold text-primary sm:text-4xl">
                {s.value}
              </p>
              <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                {s.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
