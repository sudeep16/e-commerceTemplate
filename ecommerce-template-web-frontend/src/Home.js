import React from "react";
import CategoryNavbar from "./Navbar/CategoryNavbar";
import Navbars from "./Navbar/Navbar";
import LandingPage from "./homepage/LandingPage";
import RecentProducts from "./RecentProducts/RecentProducts";
import CardProducts from "./CardProducts/CardProducts";
function Home() {
  return (
    <>
      <Navbars />
      <CategoryNavbar />
      <LandingPage />
      <RecentProducts />
      <CardProducts />
    </>
  );
}

export default Home;
