import { Bars3Icon } from "@heroicons/react/24/solid";
import { Link as ScrollLink } from "react-scroll";
import { FaSun, FaMoon } from "react-icons/fa";
import React, { useState, useEffect } from "react";

interface Props {
  openNav: () => void;
}

const Nav = ({ openNav }: Props) => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggleTheme = () => {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };
  return (
    <div className="w-[100%] fixed z-[10000] top-0 h-[12vh] bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-cardBorder shadow-sm transition-all duration-300">
      <div className="flex justify-between items-center w-[80%] h-[100%] mx-auto">
        <h1 className="flex-[0.6] cursor-pointer text-[35px] text-textColor font-bold font-heading">
          KAIO
          <span className="text-cta">DEV</span>
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
            REDES
          </ScrollLink>
        </div>
        <div className="nav-link">
          <ScrollLink to="contact" smooth={true} duration={500} offset={-70}>
            CONTATO
          </ScrollLink>
        </div>
        
        <div className="flex items-center gap-4">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg border border-cardBorder bg-cardBg hover:bg-badgeBg text-textColor hover:text-cta transition-all duration-200 cursor-pointer shadow-sm flex items-center justify-center"
            aria-label={isDark ? "Mudar para tema claro" : "Mudar para tema escuro"}
          >
            {isDark ? (
              <FaSun className="w-[1.1rem] h-[1.1rem]" />
            ) : (
              <FaMoon className="w-[1.1rem] h-[1.1rem]" />
            )}
          </button>
          
          <div onClick={openNav} className="md:hidden">
            <Bars3Icon className="w-[2rem] h-[2rem] cursor-pointer text-textColor hover:text-cta transition-colors duration-200" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
