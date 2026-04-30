import { LenisProvider } from "@/components/lenis-provider"
import { CustomCursor } from "@/components/custom-cursor"
import { HeroSection } from "@/components/sections/hero-section"
import { ManifestoSection } from "@/components/sections/manifesto-section"
import { FeaturesSection } from "@/components/sections/features-section"
import { CarouselSection } from "@/components/sections/carousel-section"
import { ScheduleSection } from "@/components/sections/schedule-section"
import { PricingSection } from "@/components/sections/pricing-section"
import { TrialSection } from "@/components/sections/trial-section"
import { FooterSection } from "@/components/sections/footer-section"

const Index = () => {
  return (
    <LenisProvider>
      <main className="custom-cursor bg-background">
        <CustomCursor />
        <HeroSection />
        <ManifestoSection />
        <FeaturesSection />

        <CarouselSection />
        <ScheduleSection />
        <PricingSection id="pricing" />
        <TrialSection />
        <FooterSection />
      </main>
    </LenisProvider>
  )
}

export default Index