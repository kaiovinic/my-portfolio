import { XMarkIcon } from "@heroicons/react/20/solid";
import { Link as ScrollLink } from "react-scroll";
import { FaSun, FaMoon } from "react-icons/fa";
import React, { useState, useEffect } from "react";

interface Props {
  nav: boolean;
  closeNav: () => void;
}

const MobileNav = ({ nav, closeNav }: Props) => {
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
  const navAnimation = nav ? "translate-x-0" : "translate-x-[100%]";

  return (
    <div
      className={`fixed ${navAnimation} transform transition-all duration-300 top-0 left-0 right-0 bottom-0 z-[1000000] bg-backgroundColor/95 backdrop-blur-md`}
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
            REDES
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
        
        {/* Mobile Theme Toggle */}
        <div className="mt-8 flex items-center gap-3">
          <span className="text-[16px] text-textColor/60 font-body">Tema:</span>
          <button
            onClick={toggleTheme}
            className="px-4 py-2.5 rounded-xl border border-cardBorder bg-cardBg text-textColor font-semibold text-[15px] flex items-center gap-2 shadow-sm cursor-pointer hover:bg-badgeBg transition-colors duration-200"
          >
            {isDark ? (
              <>
                <FaSun className="w-[1.1rem] h-[1.1rem] text-cta" />
                <span>Modo Claro</span>
              </>
            ) : (
              <>
                <FaMoon className="w-[1.1rem] h-[1.1rem] text-cta" />
                <span>Modo Escuro</span>
              </>
            )}
          </button>
        </div>
      </div>
      <div
        onClick={closeNav}
        className="absolute z-[100000000] cursor-pointer top-[2rem] right-[2rem] w-[2.5rem] h-[2.5rem] text-textColor hover:text-cta transition-colors duration-200"
      >
        <XMarkIcon />
      </div>
    </div>
  );
};

export default MobileNav;
