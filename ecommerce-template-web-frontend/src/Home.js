import React from "react";
import CategoryNavbar from "./components/Navbar/CategoryNavbar";
import Navbars from "./components/Navbar/Navbar";
import LandingPage from "./pages/homepage/LandingPage";
import RecentProducts from "./pages/homepage/RecentProducts/RecentProducts";
import CardProducts from "./pages/homepage/CardProducts/CardProducts";
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
