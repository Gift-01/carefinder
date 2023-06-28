import NavBar from "../components/NavBar";
import HomePage from "../components/Home/HomePage";
import WelcomePage from "../components/Home/Welcome";
import Services from "../components/Home/services";
import ServiceBreakdown from "../components/Home/ServiceBreakdown";
import BookAppointment from "../components/Home/BookAppointment";
import TestimonialSection from "../components/Home/TestimonialSection";
import Footer from "../components/Home/Footer";

function Home() {
  return (
    <div>
      <NavBar />
      <HomePage />
      <WelcomePage />
      <Services />
      <ServiceBreakdown />
      <BookAppointment />
      <TestimonialSection />
      <Footer />
    </div>
  );
}

export default Home;
