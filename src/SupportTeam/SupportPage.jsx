import Footer from "../LandingPage/Footer/Footer";
import CTAHelpDesk from "./CTAhelpdesk/CTAhelpdesk";
import TeamGrid from "./TeamGrid/TeamGrid";
import TeamHero from "./TeamHero/TeamHero";


const SupportTeam = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 min-h-screen">
      <div className="layout-container flex flex-col items-center">
        <main className="max-w-7xl w-full px-4 sm:px-6 lg:px-8 py-12">
          <TeamHero />
          <TeamGrid />
          <CTAHelpDesk />
        </main>
        
      </div>
      <Footer />
    </div>
  );
};

export default SupportTeam;