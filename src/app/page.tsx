import Header from '@/components/layout/Header'
import Hero from '@/components/sections/Hero'
import Services from '@/components/sections/Services'
import Testimonials from '@/components/sections/Testimonals'
import Work from '@/components/sections/Work'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/layout/Footer'
import FloatingElements from '@/components/animations/FloatingElements'

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <FloatingElements />
      <Header />
      <Hero />
      <Services />
      <Work />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}
