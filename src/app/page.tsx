import Header from '@/components/layout/Header'
import Hero from '@/components/sections/Hero'
import Services from '@/components/sections/Services'
import Work from '@/components/sections/Work'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/layout/Footer'
import FloatingElements from '@/components/animations/FloatingElements'
import Features from '@/components/sections/Features'
import Process from '@/components/sections/Process'
import Testimonials from '@/components/sections/Testimonals'
import FAQ from '@/components/sections/FAQ'
export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <FloatingElements />
      <Header />
      <Hero />
      <Features />
      <Process />
      <Services />
      <Work />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  )
}
