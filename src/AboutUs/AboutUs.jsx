import Footer from "../LandingPage/Footer/Footer";
import HeroSection from "./AboutHero/AboutHero";
import CoreValues from "./CoreValues/CoreValues";
import CTASection from "./CTA/CTA";
import MissionVision from "./MissionandVision/MissionandVision";
import HistorySection from "./OurHistory/OurHistory";
import TeamSection from "./TeamSection/TeamSection";


const AboutPage = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display">
      <main>
        <HeroSection />
        <MissionVision />
        <HistorySection />
        <CoreValues />
        <TeamSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;