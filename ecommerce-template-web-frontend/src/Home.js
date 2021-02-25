import React from "react";
import CategoryNavbar from "./Navbar/CategoryNavbar";
import LandingPage from "./homepage/LandingPage";
import Navbar from "./Navbar/Navbar";
function Home() {
  return (
    <>
      <Navbar />
      <CategoryNavbar />
      <LandingPage />
    </>
  );
}

export default Home;
