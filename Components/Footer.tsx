import {
  DevicePhoneMobileIcon,
  EnvelopeIcon,
  MapIcon,
} from "@heroicons/react/20/solid";
import React from "react";

const Footer = () => {
  return (
    <div className="pt-[8rem] pb-[4rem] bg-[#02050a]">
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
          <div
            className="md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center 
          rounded-full bg-[#55e6e5]"
          >
            <DevicePhoneMobileIcon className="md:w-[5rem] md:h-[5rem] w-[3rem] h-[3rem] text-black" />
          </div>
          <div>
            <h1 className="text-[25px] mb-[0.2rem] text-white font-semibold ">
              Contato
            </h1>
            <p className="text-[17px] w-[90%] text-white opacity-60">
              (71)986497888
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-6">
          <div
            className="md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center 
          rounded-full bg-[#55e6e5]"
          >
            <EnvelopeIcon className="md:w-[5rem] md:h-[5rem] w-[3rem] h-[3rem] text-black" />
          </div>
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
