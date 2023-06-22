import React from "react";
import NavBar from "../components/NavBar";
import HomePage from "../components/Home/HomePage";
import WelcomePage from "../components/Home/WelcomePage";
import Services from "../components/Home/services";
import ServiceBreakdown from "../components/Home/ServiceBreakdown";

function Home() {
  return (
    <div>
      <NavBar />
      <HomePage />
      <WelcomePage />
      <Services />
      <ServiceBreakdown />
    </div>
  );
}

export default Home;
