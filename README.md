# Draconian — Website Concept Demo

A modern single-page website concept demo for **Draconian cc** — South Africa's oldest dedicated IP surveillance house, based in Centurion, Gauteng.

> 🔨 **Built working demo by business hustle** — a business-development pitch refresh of [draconian.co.za](https://draconian.co.za/) using the company's **real information and imagery** (scraped from the live site — a business development demo for the client).

## What's inside

- **Hero** — animated "live CCTV feed" monitor with working clock, radar sweep, REC pulse and telemetry, plus a stats strip derived from real company facts.
- **Services** — all 5 real service lines (IP Surveillance, Intercom Systems, Booms & Turnstiles, Enterprise WiFi, Firewall Appliances) with real feature lists and detail dialogs.
- **Why Us** — the 9 real differentiators from the original "Why choose our systems?" copy, plus the "First to roll out…" innovation strip.
- **Technology stance** — the vendors Draconian stands behind (Vivotek, Virdi, Ubiquiti) vs. its real security blacklist (Hikvision, Dahua, ZTE, Huawei).
- **Customers** — the real customer logo wall from the original site.
- **SLA** — the full 11-point SLA entitlements, warranty terms and exclusions from draconian.co.za/sla.
- **Support** — Rustdesk remote support, HESK helpdesk and real knowledgebase articles.
- **Contact** — working enquiry form that persists leads to SQLite via Prisma (POST `/api/contact`), plus real contact details and links.

## Real assets used

| File | Source |
|------|--------|
| `public/images/Vivotek.png` | draconian.co.za service icon |
| `public/images/Intercom.png` | draconian.co.za service icon |
| `public/images/booms.png` | draconian.co.za service icon |
| `public/images/Unifi.png` | draconian.co.za service icon |
| `public/images/Firewall.png` | draconian.co.za service icon |
| `public/images/Customers.png` | draconian.co.za customer wall |

All copy points (phone, fax, email, address, SLA terms, blacklist, "firsts", knowledgebase articles) come from the live site.

## Tech stack

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS 4 + shadcn/ui (New York)
- Framer Motion animations
- Prisma ORM + SQLite (contact lead capture)
- Lucide icons

## Running locally

```bash
bun install
bun run db:push   # create SQLite schema
bun run dev       # http://localhost:3000
```

## Contact

- Email: info@draconian.co.za
- Tel: +27 12 030 1341
- Address: 24 Bruarfoss Rd, Centurion, Gauteng, 0157
