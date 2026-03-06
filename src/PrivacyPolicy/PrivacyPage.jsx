import Footer from "../LandingPage/Footer/Footer";
import PrivacyContent from "./PrivacyContent/PrivacyContent";
import PrivacyHero from "./PrivacyHero/PrivacyHero";

const PrivacyPolicy = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <div className="relative flex min-h-screen flex-col">
        <main className="flex-grow">
          <PrivacyHero />
          <PrivacyContent />
        </main>
        
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;