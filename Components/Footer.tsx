import { EnvelopeIcon, MapIcon } from "@heroicons/react/20/solid";
import { Link as ScrollLink } from "react-scroll";
import React from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="pt-[8rem] pb-[4rem] bg-[#02050a]" id="contact">
      <div
        className="grid border-b-[1px] pb-[6rem] border-gray-400 grid-cols-1 lg:grid-cols-3 md:grid-cols-2
         w-[80%] mx-auto gap-[3rem]"
      >
        <div className="flex items-center space-x-6">
          <div
            className="md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center 
          rounded-full bg-[#55e6e5]"
          >
            <MapIcon className="md:w-[5rem] md:h-[5rem] w-[3rem] h-[3rem] text-black" />
          </div>
          <div>
            <h1 className="text-[25px] mb-[0.2rem] text-white font-semibold ">
              Localização
            </h1>
            <p className="text-[17px] w-[90%] text-white opacity-60">
              Salvador-BA
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-6">
          <a
            href="https://wa.me/5571986497888"
            target="_blank"
            rel="noreferrer"
            className="md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center 
          rounded-full bg-[#55e6e5]"
          >
            <IoLogoWhatsapp className="md:w-[5rem] md:h-[5rem] w-[3rem] h-[3rem] text-black hover:text-white" />
          </a>
          <div className="flex flex-col items-center">
            <h1 className="text-[25px] mb-[0.2rem] text-white font-semibold ">
              Whatsapp
            </h1>
          </div>
        </div>

        <div className="flex items-center space-x-6">
          <a
            href="mailto:silvasantoskaiovinicius@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center 
          rounded-full bg-[#55e6e5]"
          >
            <EnvelopeIcon className="md:w-[5rem] md:h-[5rem] w-[3rem] h-[3rem] text-black hover:text-white" />
          </a>
          <div>
            <h1 className="text-[25px] mb-[0.2rem] text-white font-semibold ">
              Envie um Email
            </h1>
            <p className="text-[17px] w-[90%] text-white opacity-60">
              silvasantoskaiovinicius@gmail.com
            </p>
          </div>
        </div>
      </div>

      <div className="w-[80%] mx-auto mt-[2rem] grid grid-cols-1 md:grid-cols-2 items-center justify-between">
        <ScrollLink to="nav" smooth={true} duration={500} offset={-70}>
          <h1 className=" flex-[0.6] cursor-pointer text-[35px] text-white font-bold">
            KAIO
            <span className="text-yellow-300">DEV</span>
          </h1>
        </ScrollLink>

        <div className="text-[18px] text-white opacity-20 mb-[2rem] md:mb-0">
          <p>
            &copy; {new Date().getFullYear()}{" "}
            <a
              href="https://www.linkedin.com/in/kaioviniciussilva/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <span>Kaio Vinícius</span>
            </a>
            - Todos os direitos reservados.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
