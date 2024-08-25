import { Bars3Icon } from "@heroicons/react/24/solid";
import { Link as ScrollLink } from "react-scroll";

import React from "react";

interface Props {
  openNav: () => void;
}

const Nav = ({ openNav }: Props) => {
  return (
    <div className="w-[100%] fixed z-[10000] top-0 h-[12vh] bg-[#141c27] shadow-md">
      <div className="flex justify-between items-center w-[80%] h-[100%] mx-auto">
        <h1 className=" flex-[0.6] cursor-pointer text-[35px] text-white font-bold home">
          KAIO
          <span className="text-yellow-300">DEV</span>
        </h1>
        <div className="nav-link">
          <ScrollLink to="nav" smooth={true} duration={500} offset={-70}>
            HOME
          </ScrollLink>
        </div>
        <div className="nav-link">
          <ScrollLink to="about" smooth={true} duration={500} offset={-70}>
            SOBRE
          </ScrollLink>
        </div>
        <div className="nav-link">
          <ScrollLink to="services" smooth={true} duration={500} offset={-70}>
            SERVIÇOS
          </ScrollLink>
        </div>
        <div className="nav-link">
          <ScrollLink to="projects" smooth={true} duration={500} offset={-70}>
            PROJETOS
          </ScrollLink>
        </div>
        <div className="nav-link">
          <ScrollLink to="blogs" smooth={true} duration={500} offset={-70}>
            BLOGS
          </ScrollLink>
        </div>
        <div className="nav-link">
          <ScrollLink to="contact" smooth={true} duration={500} offset={-70}>
            CONTATO
          </ScrollLink>
        </div>
        <div onClick={openNav}>
          <Bars3Icon className="w-[2rem] md:hidden h-[2rem] cursor-pointer text-yellow-300" />
        </div>
      </div>
    </div>
  );
};

export default Nav;
