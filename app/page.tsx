import { Header } from '@/components/commons/Header';
import Footer from '@/components/commons/Footer';
import { BackgroundGradientAnimation } from '@/components/ui/background-gradient-animation';

// Composants Apple Premium Ultra Minimaliste pour HEXPOZ
import AppleHeroSection from '@/components/landing/apple/AppleHeroSection';
import AppleProductShowcase from '@/components/landing/apple/AppleProductShowcase';
import AppleVisionSection from '@/components/landing/apple/AppleVisionSection';
import AppleCTASection from '@/components/landing/apple/AppleCTASection';
import AppleFAQSection from '@/components/landing/apple/AppleFAQSection';
import AppleTestimonialsSection from '@/components/landing/apple/AppleTestimonialsSection';
import AppleAboutSection from '@/components/landing/apple/AppleAboutSection';
import AppleFeaturesSection from '@/components/landing/apple/AppleFeaturesSection';
import AppleUrgencySection from '@/components/landing/apple/AppleUrgencySection';
import ApplePricingSection from '@/components/landing/apple/ApplePricingSection';

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen relative z-10">
        {/* STYLE APPLE PREMIUM ULTRA MINIMALISTE - HEXPOZ */}
        <AppleHeroSection />
        <AppleProductShowcase />
        <AppleVisionSection />
        <AppleAboutSection />
        <AppleFeaturesSection />
        {/* <AppleTestimonialsSection /> */}
        
        <ApplePricingSection />
        <AppleUrgencySection />
        <AppleFAQSection />
        <AppleCTASection />
      </main>
      <Footer />
      
      {/* Background Gradient Animation déplacé après le contenu principal */}
      <div className="fixed inset-0 -z-10">
        <BackgroundGradientAnimation
          gradientBackgroundStart="rgb(10, 10, 10)"
          gradientBackgroundEnd="rgb(17, 17, 17)"
          firstColor="100, 60, 255"
          secondColor="180, 80, 255" 
          thirdColor="80, 200, 255"
          fourthColor="255, 100, 150"
          fifthColor="255, 180, 80"
          pointerColor="120, 80, 255"
          size="80%"
          blendingValue="hard-light"
          interactive={false}
          containerClassName="fixed inset-0 -z-10"
        />
      </div>
    </>
  );
}
