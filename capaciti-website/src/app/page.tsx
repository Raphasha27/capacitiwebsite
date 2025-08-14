import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import ProgrammesSection from '@/components/ProgrammesSection'
import ImpactSection from '@/components/ImpactSection'
import BlogSection from '@/components/BlogSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <ProgrammesSection />
      <ImpactSection />
      <BlogSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
