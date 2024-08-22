import About from "@/Components/About";
import Home from "@/Components/Home";
import MobileNav from "@/Components/MobileNav";
import Nav from "@/Components/Nav";
import Services from "@/Components/Services";
import Skils from "@/Components/Skils";
import React from "react";

const HomePage = () => {
  const [nav, setNav] = React.useState(false);
  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);

  return (
    <div className="overflow-x-hidden">
      <div>
        <MobileNav nav={nav} closeNav={closeNav} />
        <Nav openNav={openNav} />
        <Home />
        <div className="relative z-[30]">
          <About />
          <Services />
          <Skils />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
