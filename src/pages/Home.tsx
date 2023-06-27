import React from "react";
import NavBar from "../components/NavBar";
import HomePage from "../components/Home/HomePage";
import WelcomePage from "../components/Home/Welcome";
import Services from "../components/Home/services";
import ServiceBreakdown from "../components/Home/ServiceBreakdown";
import BookAppointment from "../components/Home/BookAppointment";

function Home() {
  return (
    <div>
      <NavBar />
      <HomePage />
      <WelcomePage />
      <Services />
      <ServiceBreakdown />
      <BookAppointment/>
    </div>
  );
}

export default Home;
