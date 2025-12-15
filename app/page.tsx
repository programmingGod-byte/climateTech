// import Head from 'next/head';
import Navigation from '@/components/navigation';
import HeroSection from '@/components/hero-section';
import ServicesSection from '@/components/services-section';
import RobotIntroSection from '@/components/robot-intro-section';
import ProductsSection from '@/components/products-section';
import AboutSection from '@/components/about-section';
import SensorsSection from '@/components/sensors-section';
import DashboardShowcaseSection from '@/components/dashboard-showcase-section';
import FeaturesSection from '@/components/features-section';

import ImpactSection from '@/components/impact-section';
import TestimonialsSection from '@/components/testimonials-section';
import TeamSection from '@/components/team-section';
import CollaboratorsSection from '@/components/collaborators-section';
import ContactSection from '@/components/contact-section';
import Footer from '@/components/footer';

import ScrollToTopButton from '@/components/scroll-to-top-button';

export default function Home() {
//  <Head>
//         <title>Climmatech | Smart Energy & Robotics Solutions</title>
//         <meta
//           name="description"
//           content="Climmatech provides smart energy and robotics solutions for homes and businesses, offering innovative products, dashboards, and sensors to optimize efficiency."
//         />
//         {/* Open Graph for social sharing */}
//         <meta property="og:title" content="Climmatech | Smart Energy & Robotics Solutions" />
//         <meta
//           property="og:description"
//           content="Climmatech provides smart energy and robotics solutions for homes and businesses."
//         />
//         <meta property="og:url" content="https://www.climmatech.com" />
//         <meta property="og:type" content="website" />
//       </Head>


  return (
    
    <div className="min-h-screen relative">
      {
        /*
        
        */
      }

      <Navigation />
      <main>
        <HeroSection />
        <RobotIntroSection />
        <ImpactSection />
        <ProductsSection />
        <DashboardShowcaseSection/>
        <FeaturesSection />
        {/* <AboutSection /> */}
        {/* <SensorsSection /> */}
        {/* <CoverageSection /> */}
        {/* <TestimonialsSection /> */}
        {/* <ServicesSection /> */}
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
