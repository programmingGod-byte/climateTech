import Navigation from '@/components/navigation';
import HeroSection from '@/components/hero-section';
import ServicesSection from '@/components/services-section';
import RobotIntroSection from '@/components/robot-intro-section';
import ProductsSection from '@/components/products-section';
import AboutSection from '@/components/about-section';
import SensorsSection from '@/components/sensors-section';
import DashboardShowcaseSection from '@/components/dashboard-showcase-section';
import FeaturesSection from '@/components/features-section';
import CoverageSection from '@/components/coverage-section';
import ImpactSection from '@/components/impact-section';
import TestimonialsSection from '@/components/testimonials-section';
import TeamSection from '@/components/team-section';
import CollaboratorsSection from '@/components/collaborators-section';
import ContactSection from '@/components/contact-section';
import Footer from '@/components/footer';

import ScrollToTopButton from '@/components/scroll-to-top-button';

export default function Home() {
  return (
    <div className="min-h-screen relative">
      <Navigation />
      <main>
        <HeroSection />
        <ServicesSection />
        <DashboardShowcaseSection/>
        <RobotIntroSection />
        <ProductsSection />
        <AboutSection />
        <SensorsSection />
        <FeaturesSection />
        <CoverageSection />
        <ImpactSection />
        {/* <TestimonialsSection /> */}
        <TeamSection />
        <CollaboratorsSection />
        <ContactSection />
      </main>
      <Footer />

      {/* 🚀 Scroll to Top Button */}
      <ScrollToTopButton />
    </div>
  );
}
