/**
 * Real content sourced from https://draconian.co.za/
 * (scraped October 2026 for this concept demo)
 */

export const SITE = {
  name: "Draconian",
  legalName: "Draconian cc",
  tagline: "A precision instrument, not just another camera system.",
  claim: "South Africa's oldest dedicated IP surveillance house",
  established: 2008, // "we have turned 10" on the 2018 site
  phone: "+27 12 030 1341",
  fax: "+27 86 564 7350",
  email: "info@draconian.co.za",
  address: "24 Bruarfoss Rd, Centurion, Gauteng, 0157",
  facebook: "https://www.facebook.com/Draconian.co.za/",
  vivotekPartner: "https://www.vivotek.com/partner_app_draconian",
  helpdesk: "http://www.draconian.co.za/helpdesk",
  sla: "http://www.draconian.co.za/sla",
  eula: "http://www.draconian.co.za/eula",
  privacy: "http://www.draconian.co.za/privacy",
  original: "https://draconian.co.za/",
};

export type Service = {
  id: string;
  title: string;
  short: string;
  image: string;
  icon: string; // lucide icon name key handled in component
  features: string[];
  details: string[];
  highlight?: string;
};

export const SERVICES: Service[] = [
  {
    id: "surveillance",
    title: "IP Surveillance",
    short:
      "Secure, enterprise-grade surveillance at an affordable price — powered by software we build ourselves for features other vendors simply cannot offer.",
    image: "/images/Vivotek.png",
    icon: "cctv",
    highlight: "Our own software. Our own edge.",
    features: [
      "People counting",
      "Time lapse",
      "Push notifications",
      "Number plate detection",
      "Thermographics",
      "Biometric access control",
    ],
    details: [
      "We build our own software to allow unique and powerful features not available from other vendors — including people counting, time lapse, push notifications, number plate detection and thermographics.",
      "Our camera controller servers natively support Virdi access control and biometric systems. This integration lowers the total cost of ownership while offering integration benefits, and can be upgraded to allow Time & Attendance.",
    ],
  },
  {
    id: "intercom",
    title: "Intercom Systems",
    short:
      "Authorized installers of the popular MK-II estate intercom system, fully integrated with your IP camera network.",
    image: "/images/Intercom.png",
    icon: "intercom",
    highlight: "MK-II authorized installers",
    features: [
      "Estate intercom (MK-II)",
      "Camera integration",
      "Push messages",
      "Event history",
      "Open from phone or PC",
    ],
    details: [
      "We are authorized installers of the popular MK-II estate intercom system.",
      "Our surveillance development allows us to integrate intercom systems with IP cameras to give you push messages, event history, as well as mobile phone and computer gate opening.",
    ],
  },
  {
    id: "booms",
    title: "Booms & Turnstiles",
    short:
      "Boom gate systems with bespoke features — networked biometric locks, number plate detection and high-resolution IP surveillance.",
    image: "/images/booms.png",
    icon: "boom",
    highlight: "Bespoke, networked, intelligent",
    features: [
      "Networked biometric locks",
      "Number plate detection",
      "High-res IP surveillance",
      "Long-term event storage",
      "Blacklisting",
    ],
    details: [
      "Looking for a boom gate system with bespoke features? Our booms and turnstiles can be fitted with networked biometric locks, number plate detection and high resolution IP surveillance.",
      "Unique features include long-term event storage on button presses and blacklisting.",
    ],
  },
  {
    id: "wifi",
    title: "Enterprise WiFi",
    short:
      "More than one WiFi location to cover? Central controller, multiple APs, self-healing — the only serious solution.",
    image: "/images/Unifi.png",
    icon: "wifi",
    highlight: "Ubiquiti controller, out of the box",
    features: [
      "Multiple APs, one controller",
      "Ubiquiti UniFi controller",
      "Runs as a system service",
      "Self-healing",
      "Java upgrade resilience",
    ],
    details: [
      "If you have more than one WiFi location to cover, then there is only one solution: Enterprise WiFi that allows multiple APs to be managed from a central controller.",
      "Our camera servers have a unique, out-of-the-box Ubiquiti controller. It runs as a system service with self-healing and Java upgrade resilience.",
    ],
  },
  {
    id: "firewall",
    title: "Firewall Appliances",
    short:
      "One of very few security companies taking your cyber security seriously. We avoid insecure systems because we know how bad they are.",
    image: "/images/Firewall.png",
    icon: "firewall",
    highlight: "Cyber security, taken seriously",
    features: [
      "Internet access control",
      "Intrusion detection",
      "Content filtering",
      "Geo-location blocking",
      "Full network management",
    ],
    details: [
      "We are one of very few security companies taking your cyber security serious. We avoid insecure systems because we know how bad they are!",
      "Our firewall systems manage your network while offering internet access control, intrusion detection, content filtering, geo-location blocking and much more.",
    ],
  },
];

export const WHY_US = [
  {
    icon: "medal",
    title: "A decade of endurance",
    text: "To our knowledge the oldest dedicated IP surveillance house in South Africa — we have turned 10, in an industry where few survived more than two years. We know how these solutions hold up after a decade, from cables to network gear.",
  },
  {
    icon: "shield",
    title: "Peace of mind",
    text: "We build managed solutions so you have assurance your systems are updated, compliant with the latest technologies — and not becoming a platform for security breaches.",
  },
  {
    icon: "handshake",
    title: "References with every quote",
    text: "We will provide references with quotes. Our rapid deployment and installation quality is legendary — we make sure our impact on your business is minimal.",
  },
  {
    icon: "coins",
    title: "Economy",
    text: "For a small monthly fee worth less than one hour of support, our clients get unlimited remote and telephone support. Remote access lets us deploy even new View Stations at no additional charge.",
  },
  {
    icon: "trending-up",
    title: "Potential for growth",
    text: "Draconian systems integrate niche technology that may benefit you — people counting, time lapse, even thermographic cameras — without the need for extra DVRs.",
  },
  {
    icon: "layers",
    title: "Versatility",
    text: "We combine access control and WiFi controllers with the surveillance core to get more value from a single computer.",
  },
  {
    icon: "infinity",
    title: "Lifespan",
    text: "These systems don't grow obsolete like analogue setups — they can be built upon literally decades after the initial installation. IP is the ongoing surveillance revolution.",
  },
  {
    icon: "piggy",
    title: "Lower total cost of ownership",
    text: "We do most repairs and diagnostics via remote support. That saving in callout fees alone will save you more than the price difference between ours and cheap DVRs.",
  },
  {
    icon: "wrench",
    title: "Unique abilities",
    text: "We have our own software systems that allow us to fully tailor every system to be a perfect fit — not a generic recipe imposed on you.",
  },
];

export const FIRSTS = [
  { year: "First", text: "to roll out Vivotek 360° cameras" },
  { year: "First", text: "to roll out 10 Terabyte surveillance drives" },
  { year: "First", text: "to standardise on Solid State Drives" },
  { year: "First", text: "to standardise on Windows 10 for servers" },
  { year: "First", text: "to roll out Vivotek stereoscopic people-counting cameras" },
  {
    year: "First",
    text: "to deprecate dome & bullet cameras in favour of 180° saturation cameras",
  },
];

export const TRUSTED_VENDORS = [
  { name: "Vivotek", area: "IP cameras", note: "SAI member partner" },
  { name: "Virdi", area: "Access control & biometrics", note: "Natively integrated" },
  { name: "Ubiquiti", area: "Wireless systems", note: "UniFi + AirControl" },
];

export const BLACKLIST = [
  { name: "Hikvision", reason: "Deemed a security risk" },
  { name: "Dahua", reason: "Deemed a security risk" },
  { name: "ZTE", reason: "Flagged by international agencies" },
  { name: "Huawei", reason: "Flagged by international agencies" },
];

export const SLA_POINTS = [
  "Unlimited remote support for Surveillance, Access Control, Firewalls, Ubiquiti UniFi, AirControl and our own systems",
  "Unlimited telephone support",
  "Unlimited client installs",
  "Unlimited firmware upgrades",
  "Perpetual software updates for Vivotek cameras, Virdi access control, Ubiquiti UniFi, Ubiquiti AirControl, Windows server OS and Draconian software",
  "Operating procedures for routine tasks — reducing staff training time and costs",
  "Premium Dynamic DNS that won't expire or need reactivation",
  "Cloud backup of all settings — a complete system can be recovered within one hour, even from the most severe catastrophic failure",
  "Faster turnaround: same-day service for critical failures, two days for general support",
  "Access to our loan equipment pool: switches, routers, power supplies, cameras, gate controllers and even Virdi biometric terminals",
  "SLA contracts available that include cleaning and maintenance on request",
];

export const WARRANTY = [
  "The final product is guaranteed free from defects and installation faults at project sign-off — any faults found will be repaired at no cost.",
  "All ICT hardware carries at least a one-year warranty. Cameras carry a two-year warranty, extendable to three years by arrangement.",
  "Access control, surveillance cameras and gate automation have local repair centers — your components are repaired swiftly and economically.",
  "We only source equipment from reputable suppliers that honour the manufacturer's warranty.",
];

export const KB_ARTICLES = [
  "Everything you need to know about hotfixes and antivirus systems flagging our software",
  "Installing or replacing a ZKTeco F16 in ZKAccess 3.5",
  "Allowing camera connections over CellC 3G",
  "Allowing camera connections over Vodacom 3G",
  "Virdi AC7000 won't connect to UNIS even if network settings are correct",
  "KB00036 — Fixing Event ID 129: slow machine with occasional crashing",
];

export const CUSTOMERS = [
  "Vodacom",
  "Engen",
  "Protea Hotels",
  "Marriott",
  "Volvo",
  "Beckman Coulter",
  "Business Connexion",
  "Debonairs",
  "Steers",
  "CMH",
  "Louis Pasteur Private Hospital",
  "SANBS",
  "Trafalgar",
  "Nexus Group",
  "Megamaster",
  "Airmaster",
];

export const NAV_LINKS = [
  { href: "#services", label: "Services" },
  { href: "#why-us", label: "Why Us" },
  { href: "#technology", label: "Technology" },
  { href: "#customers", label: "Customers" },
  { href: "#sla", label: "SLA" },
  { href: "#support", label: "Support" },
  { href: "#contact", label: "Contact" },
];
