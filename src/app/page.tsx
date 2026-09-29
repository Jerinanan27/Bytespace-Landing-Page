import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PartnerLogos from "@/components/PartnerLogos";
import CoursesSection from "@/components/CoursesSection";
import CategoriesSection from "@/components/CategoriesSection";
import FeatureSections from "@/components/FeatureSections";
import CTABand from "@/components/CTABand";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <PartnerLogos />
      <CoursesSection />
      <CategoriesSection />
      <FeatureSections />
      <CTABand />
      <Testimonials />
      <Footer />
    </main>
  );
}
