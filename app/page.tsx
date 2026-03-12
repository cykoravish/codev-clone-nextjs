import Header from "@/components/header"
import Hero from "@/components/hero"
import LogoBar from "@/components/logo-bar"
import PhotoStrip from "@/components/photo-strip"
import Mission from "@/components/mission"
import WhyCoDev from "@/components/why-codev"
import Services from "@/components/services"
import Testimonials from "@/components/testimonials"
import HowItWorks from "@/components/how-it-works"
import Process from "@/components/process"
import CTASection from "@/components/cta-section"
import Footer from "@/components/footer"

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <LogoBar />
      <PhotoStrip />
      <Mission />
      <WhyCoDev />
      <Services />
      <Testimonials />
      <HowItWorks />
      <Process />
      <CTASection />
      <Footer />
    </main>
  )
}
