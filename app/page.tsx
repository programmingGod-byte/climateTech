import Navigation from '@/components/navigation';
import HeroSection from '@/components/hero-section';
import RobotIntroSection from '@/components/robot-intro-section';
import ImpactSection from '@/components/impact-section';
import FeaturesSection from '@/components/features-section';
import Footer from '@/components/footer';
import ScrollToTopButton from '@/components/scroll-to-top-button';
import dynamic from 'next/dynamic';

// Dynamically import heavy and below-the-fold components to reduce initial JS load blockages
const ProductsSection = dynamic(() => import('@/components/products-section'), {
  ssr: false,
  loading: () => <div className="py-20 text-center text-white/50">Loading products...</div>
});
const DashboardShowcaseSection = dynamic(() => import('@/components/dashboard-showcase-section'), { ssr: false });
const ComparisonSection = dynamic(() => import('@/components/comparison-section'), { ssr: false });
const TeamSection = dynamic(() => import('@/components/team-section'), { ssr: false });
const CollaboratorsSection = dynamic(() => import('@/components/collaborators-section'), { ssr: false });
const ContactSection = dynamic(() => import('@/components/contact-section'), { ssr: false });

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
        <DashboardShowcaseSection/>
        <FeaturesSection />
        <ComparisonSection />
        <ProductsSection />
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
