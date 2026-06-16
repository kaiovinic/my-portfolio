import { EnvelopeIcon, MapIcon } from "@heroicons/react/20/solid";
import { Link as ScrollLink } from "react-scroll";
import React from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="pt-[6rem] pb-[4rem] bg-cardBg border-t border-cardBorder" id="contact">
      <div
        className="grid border-b-[1px] pb-[6rem] border-cardBorder grid-cols-1 lg:grid-cols-3 md:grid-cols-2
         w-[80%] mx-auto gap-[3rem]"
      >
        {/* Localização */}
        <div className="flex items-center space-x-6">
          <div
            className="md:w-[5.5rem] md:h-[5.5rem] w-[4.5rem] h-[4.5rem] flex items-center justify-center 
          rounded-2xl bg-cta/10 border border-cta/20 text-cta shrink-0"
          >
            <MapIcon className="md:w-[3rem] md:h-[3rem] w-[2.2rem] h-[2.2rem]" />
          </div>
          <div>
            <h4 className="text-[20px] mb-[0.2rem] text-textColor font-bold font-heading">
              Localização
            </h4>
            <p className="text-[15px] text-secondaryColor font-body">
              Salvador-BA
            </p>
          </div>
        </div>

        {/* Whatsapp */}
        <div className="flex items-center space-x-6">
          <a
            href="https://wa.me/5571986497888"
            target="_blank"
            rel="noreferrer"
            className="md:w-[5.5rem] md:h-[5.5rem] w-[4.5rem] h-[4.5rem] flex items-center justify-center 
          rounded-2xl bg-cta/10 border border-cta/20 text-cta shrink-0 hover:bg-cta hover:text-white transition-all duration-200"
            aria-label="Entrar em contato via Whatsapp"
          >
            <IoLogoWhatsapp className="md:w-[3rem] md:h-[3rem] w-[2.2rem] h-[2.2rem]" />
          </a>
          <div>
            <h4 className="text-[20px] mb-[0.2rem] text-textColor font-bold font-heading">
              Whatsapp
            </h4>
            <p className="text-[15px] text-secondaryColor font-body">
              +55 (71) 98649-7888
            </p>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-center space-x-6">
          <a
            href="mailto:silvasantoskaiovinicius@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="md:w-[5.5rem] md:h-[5.5rem] w-[4.5rem] h-[4.5rem] flex items-center justify-center 
          rounded-2xl bg-cta/10 border border-cta/20 text-cta shrink-0 hover:bg-cta hover:text-white transition-all duration-200"
            aria-label="Enviar um e-mail"
          >
            <EnvelopeIcon className="md:w-[3rem] md:h-[3rem] w-[2.2rem] h-[2.2rem]" />
          </a>
          <div>
            <h4 className="text-[20px] mb-[0.2rem] text-textColor font-bold font-heading">
              Envie um Email
            </h4>
            <p className="text-[15px] text-secondaryColor font-body break-all">
              silvasantoskaiovinicius@gmail.com
            </p>
          </div>
        </div>
      </div>

      <div className="w-[80%] mx-auto mt-[2rem] grid grid-cols-1 md:grid-cols-2 items-center justify-between gap-4">
        <ScrollLink to="nav" smooth={true} duration={500} offset={-70}>
          <h1 className="flex-[0.6] cursor-pointer text-[35px] text-textColor font-bold font-heading">
            KAIO
            <span className="text-cta">DEV</span>
          </h1>
        </ScrollLink>

        <div className="text-[15px] text-secondaryColor/80 font-body md:text-right">
          <p>
            &copy; {new Date().getFullYear()}{" "}
            <a
              href="https://www.linkedin.com/in/kaioviniciussilva/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold hover:text-cta transition-colors cursor-pointer"
            >
              <span>Kaio Vinícius</span>
            </a>
            . Todos os direitos reservados.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
