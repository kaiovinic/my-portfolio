import Image from "next/image";
import React from "react";
import { IoLogoWhatsapp } from "react-icons/io";

const About = () => {
  return (
    <div className="bg-[#121121] pb-[3rem] pt-[4rem] md:pt-[8rem]" id="about">
      <div className="grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-center">
        <div>
          <h1 className="text-[20px] font-bold uppercase text-[#55e6e5] mb-[1rem] ">
            SOBRE MIM
          </h1>
          <h2
            className="text-[25px] font-bold md:text-[35px] lg:text-[45px] md:leading-[3rem] leading-[2rem] capitalize mb-[3rem]
          text-white"
          >
            Transformando <span className="text-yellow-400">Visões</span>
          </h2>
          <div className="mb-[3rem] flex items-center md:space-x-10">
            <span className="w-[100px] hidden md:block h-[5px]  bg-slate-400 rounded-sm"></span>
            <p className="text-[19px] text-slate-300 w-[80%] ">
              Como Desenvolvedor Fullstack, acredito que a tecnologia é a ponte para transformar visões complexas em soluções completas e escaláveis. Unindo o melhor do desenvolvimento frontend (React e Angular) com um ecossistema backend robusto (C#, .NET, Node.js) e a robustez corporativa de Salesforce, crio soluções end-to-end integradas e eficientes. Para mim, desenvolver software vai além de escrever linhas de código: trata-se de arquitetar soluções robustas e projetar experiências que trazem impacto real, otimizando processos de ponta a ponta. Vamos transformar suas visões em realidade.
            </p>
          </div>
          <a
            href="https://wa.me/5571986497888"
            className="flex items-center space-x-2 "
            target="_blank"
            rel="noreferrer"
          >
            <IoLogoWhatsapp className="w-[4rem] h-[4rem]  text-[#55e6e5] hover:text-yellow-400 transition-all duration-200" />
            <p className="text-[20px] font-semibold text-white">Whatsapp</p>
          </a>
        </div>
        <div
          data-aos="fade-left"
          className="lg:w-[500px] lg:h-[500px] relative mx-auto md:mx-0 mt-[2rem] lg:mt-0 w-[300px] h-[300px]"
        >
          <Image
            src="/images/user06.jpeg"
            alt="user"
            fill
            style={{ objectFit: "contain" }}
            className="relative z-[11] object-contain"
          />
          <div className="absolute w-[80%] h-[100%] z-[10] bg-[#55e6e5] top-[-2rem] right-[1.5rem]"></div>
        </div>
      </div>
    </div>
  );
};

export default About;
