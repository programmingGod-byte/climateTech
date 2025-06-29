import Navigation from '@/components/navigation';
import HeroSection from '@/components/hero-section';
import RobotIntroSection from '@/components/robot-intro-section';
import ProductsSection from '@/components/products-section';
import AboutSection from '@/components/about-section';
import SensorsSection from '@/components/sensors-section';
import FeaturesSection from '@/components/features-section';
import ImpactSection from '@/components/impact-section';
import TestimonialsSection from '@/components/testimonials-section';
import TeamSection from '@/components/team-section';
import CollaboratorsSection from '@/components/collaborators-section';
import ContactSection from '@/components/contact-section';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <RobotIntroSection />
        <ProductsSection />
        <AboutSection />
        <SensorsSection />
        <FeaturesSection />
        <ImpactSection />
        <TestimonialsSection />
        <TeamSection />
        <CollaboratorsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}