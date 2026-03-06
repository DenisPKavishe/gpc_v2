import Footer from "../LandingPage/Footer/Footer";
import CenterStats from "./CenterStat/CenterStat";
import DonationSection from "./DonationSection/DonationSection";
import EventInfo from "./EventInfo/Eventinfo";
import EventPosters from "./EventPoster/EventPoster";
import UpcomingHero from "./Hero/Hero";
import RegistrationForm from "./RegistrationForm/RegistrationForm";

export default function UpcomingEvent(){
    return(
        <>
            <div className="px-2 sm:px-9">
                <UpcomingHero />
                <CenterStats />
                <EventInfo />
                <EventPosters />
                <RegistrationForm />
                <DonationSection />
                <Footer />
            </div>
        </>
    );
}