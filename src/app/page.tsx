import { Footer } from "@/components/site/footer";
import { ScrollReveal } from "@/components/site/scroll-reveal";
import { StickyChrome } from "@/components/site/sticky-chrome";
import { Hero } from "@/components/sections/hero";
import { Empathy } from "@/components/sections/empathy";
import { Overview } from "@/components/sections/overview";
import { Results } from "@/components/sections/results";
import { Consult } from "@/components/sections/consult";
import { Training } from "@/components/sections/training";
import { Followup } from "@/components/sections/followup";
import { Ventures } from "@/components/sections/ventures";
import { Venue } from "@/components/sections/venue";
import { Instructor } from "@/components/sections/instructor";
import { Process } from "@/components/sections/process";
import { Faq } from "@/components/sections/faq";
import { FinalCta } from "@/components/sections/final-cta";

// モック borderless-tonemanner-mock.html の構成・順番を再現。
// 中央寄せの cream カラム（モバイル幅）を、greige 地の上に置く。
export default function Home() {
  return (
    <div className="min-h-screen bg-cream">
      <main className="overflow-hidden">
        <Hero />
        <Empathy />
        <Overview />
        <Results />
        <Consult />
        <Training />
        <Followup />
        <Ventures />
        <Venue />
        <Instructor />
        <Process />
        <Faq />
        <FinalCta />
        <Footer />
      </main>
      <StickyChrome />
      <ScrollReveal />
    </div>
  );
}
