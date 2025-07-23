import { Header } from '@/components/commons/Header';
import Footer from '@/components/commons/Footer';
import { BackgroundGradientAnimation } from '@/components/ui/background-gradient-animation';
import DiscordSection from '@/components/landing/apple/DiscordSection';

export default function Contact() {
  return (
    <>
      <Header />
      <main className="min-h-screen relative z-10">
        <DiscordSection />
      </main>
      <Footer />
      
      {/* Background Gradient Animation */}
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
          size="100%"
          blendingValue="hard-light"
          interactive={true}
          containerClassName="fixed inset-0 -z-10"
        />
      </div>
    </>
  );
} 