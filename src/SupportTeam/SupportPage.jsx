import Footer from "../LandingPage/Footer/Footer";
import Navbar from "../LandingPage/Navbar/Navbar";
import CTAHelpDesk from "./CTAhelpdesk/CTAhelpdesk";
import TeamGrid from "./TeamGrid/TeamGrid";
import TeamHero from "./TeamHero/TeamHero";


const SupportTeam = () => {
  return (
    <div className="bg-background-light font-display text-slate-900 min-h-screen">
      <div className="bg-blue-100 layout-container flex flex-col items-center">
        <Navbar />
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