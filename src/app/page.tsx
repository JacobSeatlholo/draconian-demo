import { Navbar } from "@/components/draconian/navbar";
import { Hero } from "@/components/draconian/hero";
import { Services } from "@/components/draconian/services";
import { WhyUs } from "@/components/draconian/why-us";
import { Technology } from "@/components/draconian/technology";
import { Customers } from "@/components/draconian/customers";
import { Sla } from "@/components/draconian/sla";
import { Support } from "@/components/draconian/support";
import { Contact } from "@/components/draconian/contact";
import { Footer } from "@/components/draconian/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Services />
        <WhyUs />
        <Technology />
        <Customers />
        <Sla />
        <Support />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
