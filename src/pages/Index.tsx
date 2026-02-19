import SiteHeader from "@/components/SiteHeader";
import HeroBanner from "@/components/HeroBanner";
import IntroSection from "@/components/IntroSection";
import TrustedExpertsSection from "@/components/TrustedExpertsSection";
import ProblemSignsSection from "@/components/ProblemSignsSection";
import BenefitsSection from "@/components/BenefitsSection";
import WaterIssuesSection from "@/components/WaterIssuesSection";
import FAQSection from "@/components/FAQSection";
import AboutCitySection from "@/components/AboutCitySection";
import GuaranteesSection from "@/components/GuaranteesSection";
import CTASection from "@/components/CTASection";
import SiteFooter from "@/components/SiteFooter";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main>
        <HeroBanner />
        <IntroSection />
        <TrustedExpertsSection />
        <CTASection />
        <ProblemSignsSection />
        <BenefitsSection />
        <WaterIssuesSection />
        <FAQSection />
        <GuaranteesSection />
        <AboutCitySection />
      </main>
      <SiteFooter />
    </div>
  );
};

export default Index;
