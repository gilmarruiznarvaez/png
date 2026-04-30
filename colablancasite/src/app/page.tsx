import { Hero } from "@/components/sections/Hero/Hero";
import { ProofBar } from "@/components/sections/ProofBar/ProofBar";
import { About } from "@/components/sections/About/About";
import { Services } from "@/components/sections/Services/Services";
import { WhyUs } from "@/components/sections/WhyUs/WhyUs";
import { Memberships } from "@/components/sections/Memberships/Memberships";
import { LoyaltyTimeline } from "@/components/sections/LoyaltyTimeline/LoyaltyTimeline";
import { QualitySurvey } from "@/components/sections/QualitySurvey/QualitySurvey";
import { Reviews } from "@/components/sections/Reviews/Reviews";
import { Partnerships } from "@/components/sections/Partnerships/Partnerships";
import { Careers } from "@/components/sections/Careers/Careers";
import { Location } from "@/components/sections/Location/Location";
import { FinalCTA } from "@/components/sections/FinalCTA/FinalCTA";
import { Footer } from "@/components/sections/Footer/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <ProofBar />
      <About />
      <Services />
      <WhyUs />
      <Memberships />
      <LoyaltyTimeline />
      <QualitySurvey />
      <Reviews />
      <Partnerships />
      <Careers />
      <Location />
      <FinalCTA />
      <Footer />
    </main>
  );
}
