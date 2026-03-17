import HeroSection from '@/components/home/hero-section';
import HowItWorks from '@/components/home/how-it-works';
import CoreCapabilities from '@/components/home/core-capabilities';
import WhyAmplit from '@/components/home/why-amplit';
import KeyFeatures from '@/components/home/key-features';
import CTASection from '@/components/home/cta-section';
import TrustSection from '@/components/home/trust-section';

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustSection />
      <WhyAmplit />
      <HowItWorks />
      <CoreCapabilities />
      <KeyFeatures />
      <CTASection />
    </>
  );
}
