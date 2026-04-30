import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { Pipeline } from "@/components/Pipeline";
import { WhatsReal } from "@/components/WhatsReal";
import { TechStack } from "@/components/TechStack";
import { Philosophy } from "@/components/Philosophy";
import { Team } from "@/components/Team";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <Hero />
      <Problem />
      <Pipeline />
      <WhatsReal />
      <TechStack />
      <Philosophy />
      <Team />
      <Contact />
      <Footer />
    </main>
  );
}
