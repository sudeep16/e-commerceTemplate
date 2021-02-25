import React from "react";
import CategoryNavbar from "./Navbar/CategoryNavbar";
import Navbars from "./Navbar/Navbar";
import LandingPage from "./homepage/LandingPage";
function Home() {
  return (
    <>
      <Navbars />
      <CategoryNavbar />
      <LandingPage />
    </>
  );
}

export default Home;
