import React from "react";
import Particle from "./Particle";
import TextEffect from "./TextEffect";
import Image from "next/image";
import { ArrowDownTrayIcon, PlayCircleIcon } from "@heroicons/react/20/solid";

const Home = () => {
  return (
    <div className="h-[88vh] bg-[url('/images/banner.jpg')] mt-[10vh] bg-cover bg-center">
      <Particle />
      <div className="w-[80%]  grid-cols-1 mx-auto lg:grid-cols-2 gap-[3rem] h-[100%] items-center grid">
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
            <button
              className="px-[2rem] hover:bg-yellow-400 transition-all duration-200 py-[1rem] text-[18px] font-bold
            uppercase bg-[#55e6e5] text-black flex items-center space-x-2"
            >
              <p>Download Cv</p>
              <ArrowDownTrayIcon className="w-[1.6rem] h-[1.7rem] text-black" />
            </button>
            <button className="flex items-center space-x-2">
              <PlayCircleIcon className="w-[4rem] h-[4rem] hover:text-yellow-400 transition-all duration-200 text-[#55e6e5]" />
              <p className="text-[20px] font-semibold text-white">
                Assista ao vídeo
              </p>
            </button>
          </div>
        </div>
        <div className="w-[500px] hidden bg-[#55e6e5] relative lg:flex items-center rounded-full h-[500px]">
          <Image
            src="/images/perfil03.jpeg"
            alt="user"
            layout="fill"
            className="object-cover rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
