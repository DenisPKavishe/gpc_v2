import DonationSection from "../Donate/DonateSection/DonateSection";
import Footer from "../LandingPage/Footer/Footer";
import Navbar from "../LandingPage/Navbar/Navbar";
import CenterStats from "./CenterStat/CenterStat";
import EventInfo from "./EventInfo/Eventinfo";
import EventPosters from "./EventPoster/EventPoster";
import UpcomingHero from "./Hero/Hero";
import RegistrationForm from "./RegistrationForm/RegistrationForm";

export default function UpcomingEvent(){
    return(
        <>
                <Navbar />
                <div className="px-2 sm:px-20 bg-blue-100">
                
                <UpcomingHero />
                <CenterStats />
                <EventInfo />
                <EventPosters />
                <RegistrationForm />
                <div className="py-3">
                    <DonationSection />
                </div>
                
                
            </div>
            <Footer />
        </>
    );
}