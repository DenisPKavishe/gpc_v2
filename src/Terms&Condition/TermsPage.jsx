import Footer from "../LandingPage/Footer/Footer";
import ContactCTA from "./ContactCTA/ContactCTA";
import PageHeader from "./TermsHero/TermsHero";
import TermsSections from "./TermsSection/TermsSection";
import Breadcrumbs from "./TopNavBarBreadcrumbs/Breadcrumbs";


const TermsConditions = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 transition-colors duration-200">
      <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
        <div className="layout-container flex h-full grow flex-col">
          <main className="flex-1 flex flex-col items-center">
            <div className="max-w-[960px] w-full px-6 md:px-10 py-10">
              <Breadcrumbs />
              <PageHeader />
              <TermsSections />
              <ContactCTA />
            </div>
          </main>
          
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TermsConditions;