import React from "react";
import TextEffect from "./TextEffect";
import Image from "next/image";
import { FaAngular, FaReact, FaNodeJs, FaSalesforce, FaWhatsapp, FaDownload } from "react-icons/fa";
import { SiCsharp, SiDotnet } from "react-icons/si";

const Home = () => {
  return (
    <div className="bg-backgroundColor pt-[16vh] pb-[4rem] min-h-screen flex items-center" id="nav">
      <div className="w-[85%] mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 items-stretch">
        
        {/* Card 1: Principal Intro (col-span-3) */}
        <div className="md:col-span-3 card-bento flex flex-col justify-between gap-6 min-h-[350px]">
          <div>
            <h1 className="text-[32px] sm:text-[40px] md:text-[50px] font-bold text-textColor leading-tight font-heading">
              OLÁ, EU SOU <span className="text-cta">KAIO VINICIUS!</span>
            </h1>
            <div className="mt-2 min-h-[4rem]">
              <TextEffect />
            </div>
            <p className="mt-4 text-[16px] sm:text-[18px] text-secondaryColor font-body leading-relaxed max-w-[90%]">
              Sou um Desenvolvedor de Software Full-Stack, focado em criar arquiteturas backend robustas com C#/.NET e Node.js, interfaces ricas com Angular/React e customizações de grande escala no ecossistema Salesforce.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4 items-center">
            <a
              href="https://drive.google.com/uc?export=download&id=1Yl-QVDPG_cWifiUmlT17uxxUDyLu1eBI"
              download="KaioCurriculo.pdf"
              className="btn-primary flex items-center gap-2 text-[16px]"
            >
              <span>Download CV</span>
              <FaDownload className="w-[1rem] h-[1rem]" />
            </a>
            <a
              href="https://wa.me/5571986497888"
              className="btn-secondary flex items-center gap-2 text-[16px]"
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp className="w-[1.2rem] h-[1.2rem] text-textColor group-hover:text-white" />
              <span>Fale Comigo</span>
            </a>
          </div>
        </div>

        {/* Card 2: Profile Picture (col-span-1, row-span-2) */}
        <div className="md:col-span-1 md:row-span-2 card-bento p-0 overflow-hidden relative group min-h-[350px]">
          <Image
            src="/images/perfil.png"
            alt="Kaio Vinicius - Profile"
            fill
            sizes="(max-width: 768px) 100vw, 25vw"
            priority
            style={{ objectFit: "cover" }}
            className="transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* Card 3: Availability (col-span-1) */}
        <div className="md:col-span-1 card-bento flex items-center gap-4">
          <div className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </div>
          <p className="text-[14px] sm:text-[15px] font-semibold text-textColor font-body">
            Disponível para novos projetos
          </p>
        </div>

        {/* Card 4: Tech Stack Grid (col-span-2) */}
        <div className="md:col-span-2 card-bento flex flex-col justify-between gap-4">
          <div>
            <h3 className="text-[18px] font-bold text-textColor font-heading">
              Principais Tecnologias
            </h3>
            <p className="text-[14px] text-secondaryColor font-body">
              Minhas ferramentas mais fortes de ponta a ponta.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-3">
            <div className="flex items-center gap-2 p-2.5 rounded-lg border border-cardBorder bg-badgeBg hover:opacity-85 transition-opacity duration-200 cursor-default">
              <FaAngular className="w-5 h-5 text-red-600 shrink-0" />
              <span className="text-xs font-semibold text-textColor">Angular</span>
            </div>
            <div className="flex items-center gap-2 p-2.5 rounded-lg border border-cardBorder bg-badgeBg hover:opacity-85 transition-opacity duration-200 cursor-default">
              <FaReact className="w-5 h-5 text-sky-500 shrink-0" />
              <span className="text-xs font-semibold text-textColor">React</span>
            </div>
            <div className="flex items-center gap-2 p-2.5 rounded-lg border border-cardBorder bg-badgeBg hover:opacity-85 transition-opacity duration-200 cursor-default">
              <FaNodeJs className="w-5 h-5 text-green-600 shrink-0" />
              <span className="text-xs font-semibold text-textColor">Node.js</span>
            </div>
            <div className="flex items-center gap-2 p-2.5 rounded-lg border border-cardBorder bg-badgeBg hover:opacity-85 transition-opacity duration-200 cursor-default">
              <SiCsharp className="w-5 h-5 text-violet-600 shrink-0" />
              <span className="text-xs font-semibold text-textColor">C#</span>
            </div>
            <div className="flex items-center gap-2 p-2.5 rounded-lg border border-cardBorder bg-badgeBg hover:opacity-85 transition-opacity duration-200 cursor-default">
              <SiDotnet className="w-5 h-5 text-indigo-600 shrink-0" />
              <span className="text-xs font-semibold text-textColor">.NET</span>
            </div>
            <div className="flex items-center gap-2 p-2.5 rounded-lg border border-cardBorder bg-badgeBg hover:opacity-85 transition-opacity duration-200 cursor-default">
              <FaSalesforce className="w-5 h-5 text-sky-600 shrink-0" />
              <span className="text-xs font-semibold text-textColor">Salesforce</span>
            </div>
          </div>
        </div>

        {/* Card 5: Quick Stats (col-span-1) */}
        <div className="md:col-span-1 card-bento flex flex-col justify-center items-center text-center p-6 gap-2">
          <span className="text-[36px] sm:text-[44px] font-bold text-cta leading-none font-heading">
            3+
          </span>
          <span className="text-xs sm:text-sm font-semibold uppercase text-secondaryColor tracking-wider font-body">
            Anos de Código
          </span>
          <div className="w-8 h-[2px] bg-cardBorder my-1"></div>
          <span className="text-[20px] font-bold text-textColor font-heading">
            15+ Projetos
          </span>
          <span className="text-xs text-secondaryColor font-body">
            Desenvolvidos & Entregues
          </span>
        </div>

      </div>
    </div>
  );
};

export default Home;
