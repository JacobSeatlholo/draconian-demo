import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const display = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Draconian | Dedicated IP Surveillance & Security — Centurion, South Africa",
  description:
    "South Africa's oldest dedicated IP surveillance house. Enterprise-grade IP surveillance, intercoms, booms & turnstiles, enterprise WiFi and firewall appliances — built, integrated and maintained by Draconian, Centurion.",
  keywords: [
    "IP surveillance",
    "CCTV South Africa",
    "Vivotek",
    "Virdi access control",
    "Ubiquiti UniFi",
    "estate intercom",
    "boom gates",
    "firewall appliances",
    "Centurion",
    "Draconian",
  ],
  authors: [{ name: "Draconian cc" }],
  openGraph: {
    title: "Draconian — Dedicated IP Surveillance & Security",
    description:
      "A precision instrument, not just another camera system. IP surveillance, access control, intercoms, booms, WiFi and firewalls — integrated and maintained.",
    siteName: "Draconian",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${display.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
