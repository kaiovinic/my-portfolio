import { XMarkIcon } from "@heroicons/react/20/solid";
import { Link as ScrollLink } from "react-scroll";
import React from "react";

interface Props {
  nav: boolean;
  closeNav: () => void;
}

const MobileNav = ({ nav, closeNav }: Props) => {
  const navAnimation = nav ? "translate-x-0" : "translate-x-[100%]";

  return (
    <div
      className={`fixed ${navAnimation} transform transition-all duration-300 top-0 left-0 right-0 bottom-0 z-[1000000] bg-[#09101a]`}
    >
      <div className="w-[100vw] h-[100vh] flex flex-col items-center justify-center">
        <div className="nav-link-mobile">
          <ScrollLink
            to="home"
            smooth={true}
            duration={500}
            offset={-70}
            onClick={closeNav}
          >
            HOME
          </ScrollLink>
        </div>
        <div className="nav-link-mobile">
          <ScrollLink
            to="about"
            smooth={true}
            duration={500}
            offset={-70}
            onClick={closeNav}
          >
            SOBRE
          </ScrollLink>
        </div>
        <div className="nav-link-mobile">
          <ScrollLink
            to="services"
            smooth={true}
            duration={500}
            offset={-70}
            onClick={closeNav}
          >
            SERVIÇOS
          </ScrollLink>
        </div>
        <div className="nav-link-mobile">
          <ScrollLink
            to="projects"
            smooth={true}
            duration={500}
            offset={-70}
            onClick={closeNav}
          >
            PROJETOS
          </ScrollLink>
        </div>
        <div className="nav-link-mobile">
          <ScrollLink
            to="blogs"
            smooth={true}
            duration={500}
            offset={-70}
            onClick={closeNav}
          >
            BLOGS
          </ScrollLink>
        </div>
        <div className="nav-link-mobile">
          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            offset={-70}
            onClick={closeNav}
          >
            CONTATO
          </ScrollLink>
        </div>
      </div>
      <div
        onClick={closeNav}
        className="absolute z-[100000000] cursor-pointer top-[2rem] right-[2rem] w-[2rem] h-[2rem] text-yellow-400"
      >
        <XMarkIcon />
      </div>
    </div>
  );
};

export default MobileNav;
