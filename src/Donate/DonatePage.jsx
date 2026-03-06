import Footer from "../LandingPage/Footer/Footer";
import HeroSection from "./DonateHero/DonateHero";
import DonationSection from "./DonateSection/DonateSection";

const DonationPage = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100">
      <div className="relative flex min-h-screen flex-col">
        
        <main className="flex-1">
          <HeroSection />
          <DonationSection />
        </main>
        
      </div>
      <Footer />
    </div>
  );
};

export default DonationPage;