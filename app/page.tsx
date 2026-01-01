import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { ExpertiseSection } from "@/components/expertise-section"
import { ProcessSection } from "@/components/process-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <div id="services">
          <ServicesSection />
        </div>
        <div id="expertise">
          <ExpertiseSection />
        </div>
        <div id="process">
          <ProcessSection />
        </div>
        <div id="contact">
          <CTASection />
        </div>
      </main>
      <Footer />
    </div>
  )
}
