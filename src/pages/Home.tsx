import React from "react";
import NavBar from "../components/NavBar";
import HomePage from "../components/Home/HomePage";
import WelcomePage from "../components/Home/WelcomePage";
import Services from "../components/Home/services";

function Home() {
  return (
    <div>
      <NavBar />
      <HomePage />
      <WelcomePage />
      <Services />
    </div>
  );
}

export default Home;
