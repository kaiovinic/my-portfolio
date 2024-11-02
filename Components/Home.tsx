import React from "react";
import Particle from "./Particle";
import TextEffect from "./TextEffect";
import Image from "next/image";
import { ArrowDownTrayIcon } from "@heroicons/react/20/solid";
import { IoLogoWhatsapp } from "react-icons/io";

const Home = () => {
  return (
    <div
      className="h-[88vh] bg-[url('/images/banner.jpg')] mt-[10vh] bg-cover bg-center"
      id="nav"
    >
      <Particle />
      <div className="w-[80%] grid-cols-1 mx-auto lg:grid-cols-2 gap-[3rem] h-[100%] items-center grid">
        <div>
          <h1 className="text-[35px] lg:text-[50px] font-bold text-white">
            OLÁ, EU SOU <span className="text-yellow-400">KAIO VINICIUS!</span>
          </h1>
          <TextEffect />
          <p className="mt-[1.5rem] text-[18px] text-[#ffffff92]">
            Sou um Desenvolvedor de Software Frontend, altamente motivado e
            dedicado, atualmente cursando Análise e Desenvolvimento de Sistemas.
          </p>
          <div className="mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6">
            <a
              href="https://docs.google.com/document/d/1UijNrB7JvNWO8PxhwHwJlY23A8W3wl_2Tjpfb9MOrew/export?format=pdf


              "
              download="KaioCurriculo.pdf"
              className="px-[2rem] hover:bg-yellow-400 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-[#55e6e5] text-black flex items-center space-x-2"
            >
              <p>Download Cv</p>
              <ArrowDownTrayIcon className="w-[1.6rem] h-[1.7rem] text-black" />
            </a>
            <a
              href="https://wa.me/5571986497888"
              className="flex items-center space-x-2"
              target="_blank"
              rel="noreferrer"
            >
              <IoLogoWhatsapp className="w-[4rem] h-[4rem] text-[#55e6e5] hover:text-yellow-400 transition-all duration-200" />
              <p className="text-[20px] font-semibold text-white">Whatsapp</p>
            </a>
          </div>
        </div>
        <div className="w-[500px] hidden bg-[#55e6e5] relative lg:flex items-center rounded-full h-[500px]">
          <Image
            src="/images/perfil03.jpeg"
            alt="user"
            fill
            style={{ objectFit: "cover" }}
            className="rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
