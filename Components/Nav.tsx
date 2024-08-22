import { Bars3Icon } from "@heroicons/react/16/solid";
import React from "react";

interface Props {
  openNav: () => void;
}

const Nav = ({ openNav }: Props) => {
  return (
    <div className="w-[100%] fixed z-[10000] top-0 h-[12vh] bg-[#141c27] shadow-md">
      <div className="flex justify-between items-center w-[80%] h-[100%] mx-auto">
        <h1 className=" flex-[0.6] cursor-pointer text-[25px] text-white font-bold">
          KAIO
          <span className="text-yellow-300">DEV</span>
        </h1>
        <div className="nav-link">HOME</div>
        <div className="nav-link">SERVIÇOS</div>
        <div className="nav-link">SOBRE</div>
        <div className="nav-link">PROJETOS</div>
        <div className="nav-link">LINKEDIN</div>
        <div className="nav-link">CONTATO</div>
        <div onClick={openNav}>
          <Bars3Icon className="w-[2rem] md:hidden h-[2rem] cursor-pointer text-yellow-300" />
        </div>
      </div>
    </div>
  );
};

export default Nav;
