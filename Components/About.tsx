import Image from "next/image";
import React from "react";
import { IoLogoWhatsapp } from "react-icons/io";

const About = () => {
  return (
    <div className="bg-cardBg border-t border-cardBorder pb-[3rem] pt-[4rem] md:pt-[8rem]" id="about">
      <div className="grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-center">
        <div>
          <h1 className="text-[20px] font-bold uppercase text-cta mb-[1rem] font-heading">
            SOBRE MIM
          </h1>
          <h2
            className="text-[25px] font-bold md:text-[35px] lg:text-[45px] md:leading-[3rem] leading-[2rem] capitalize mb-[3rem] text-textColor font-heading"
          >
            Transformando <span className="text-cta">Visões</span>
          </h2>
          <div className="mb-[3rem] flex items-center md:space-x-10">
            <span className="w-[100px] hidden md:block h-[5px] bg-zinc-300 rounded-sm"></span>
            <p className="text-[17px] sm:text-[18px] text-secondaryColor font-body leading-relaxed w-[85%]">
              Como Desenvolvedor Fullstack, acredito que a tecnologia é a ponte para transformar visões complexas em soluções completas e escaláveis. Unindo o melhor do desenvolvimento frontend (React e Angular) com um ecossistema backend robusto (C#, .NET, Node.js) e a robustez corporativa de Salesforce, crio soluções end-to-end integradas e eficientes. Para mim, desenvolver software vai além de escrever linhas de código: trata-se de arquitetar soluções robustas e projetar experiências que trazem impacto real, otimizando processos de ponta a ponta. Vamos transformar suas visões em realidade.
            </p>
          </div>
          <a
            href="https://wa.me/5571986497888"
            className="flex items-center space-x-2 group w-fit"
            target="_blank"
            rel="noreferrer"
          >
            <IoLogoWhatsapp className="w-[3rem] h-[3rem] text-cta group-hover:scale-105 transition-transform duration-200" />
            <p className="text-[18px] font-semibold text-textColor group-hover:text-cta transition-colors duration-200">Conversar no Whatsapp</p>
          </a>
        </div>
        <div
          data-aos="fade-left"
          className="lg:w-[450px] lg:h-[450px] relative mx-auto md:mx-0 mt-[2rem] lg:mt-0 w-[300px] h-[300px]"
        >
          <Image
            src="/images/user06.jpeg"
            alt="user"
            fill
            sizes="(max-width: 768px) 300px, 450px"
            style={{ objectFit: "contain" }}
            className="relative z-[11] object-contain rounded-2xl"
          />
          <div className="absolute w-[80%] h-[100%] z-[10] bg-cta/15 rounded-2xl border border-cta/25 top-[-1.5rem] right-[1rem]"></div>
        </div>
      </div>
    </div>
  );
};

export default About;
