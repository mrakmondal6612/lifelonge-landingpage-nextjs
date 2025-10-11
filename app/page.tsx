import { SiteHeader } from "@/components/site-header"
import Footer from "@/components/footer"
import Hero from "@/components/hero"
import About from "@/components/about"
import Services from "@/components/services"
import WhyChooseUs from "@/components/why-choose-us"
import Testimonial from "@/components/testimonial"
import HowItWorks from "@/components/how-it-works"
import FAQ from "@/components/faq"
import Contact from "@/components/contact"
import Gallery from "@/components/gallery"

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Services Section */}
      <Services />

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Testimonial Section */}
      <Testimonial />

      {/* How It Works Section */}
      <HowItWorks />

      {/* FAQ Section */}
      <FAQ />
      
      {/* Galary section */}
      <Gallery />

      {/* Contact Section */}
      <Contact />

      <Footer />
    </main>
  )
}