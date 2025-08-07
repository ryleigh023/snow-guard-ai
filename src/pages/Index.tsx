import { Navigation } from '@/components/ui/navigation';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { HowItWorksSection } from '@/components/sections/HowItWorksSection';
import { LiveDetectionSection } from '@/components/sections/LiveDetectionSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { Footer } from '@/components/ui/footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <HowItWorksSection />
      <LiveDetectionSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
