import React from "react";
import { FaCode, FaServer, FaSalesforce } from "react-icons/fa";

const Services = () => {
  return (
    <div
      className="bg-backgroundColor border-b border-zinc-200/60 pt-[4rem] md:pt-[8rem] pb-[5rem]"
      id="services"
    >
      <p className="heading font-heading">
        Meus <span className="text-cta">Serviços</span>
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3rem] w-[80%] mx-auto items-stretch mt-[4rem] text-white">
        {/* Frontend Card */}
        <div data-aos="zoom-in" data-aos-delay="300" className="flex">
          <div className="bg-indigo-700 hover:scale-110 transform transition-all duration-300 hover:-rotate-6 uppercase font-semibold text-center p-[2rem] flex flex-col justify-between w-full rounded-md shadow-lg">
            <div>
              <FaCode className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8] mb-[1.5rem]" />
              <h1 className="text-[20px] md:text-[25px] mb-[1.5rem]">
                Frontend / Web Apps
              </h1>
              <p className="text-[15px] text-[#d3d2d2] font-normal normal-case leading-relaxed">
                Desenvolvimento de SPAs e aplicações com renderização híbrida usando Angular, React.js, Next.js, TypeScript e Tailwind CSS. Foco em interfaces limpas, responsividade impecável, acessibilidade e SEO estruturado.
              </p>
            </div>
          </div>
        </div>

        {/* Backend Card */}
        <div data-aos="zoom-in" data-aos-delay="500" className="flex">
          <div className="bg-teal-700 hover:scale-110 transform transition-all duration-300 hover:rotate-6 uppercase font-semibold text-center p-[2rem] flex flex-col justify-between w-full rounded-md shadow-lg">
            <div>
              <FaServer className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8] mb-[1.5rem]" />
              <h1 className="text-[20px] md:text-[25px] mb-[1.5rem]">
                Backend & APIs
              </h1>
              <p className="text-[15px] text-[#d3d2d2] font-normal normal-case leading-relaxed">
                Desenvolvimento de APIs robustas, microsserviços e sistemas backend escaláveis utilizando C# / .NET e Node.js. Aplicação de boas práticas (SOLID, Clean Architecture), segurança e bancos de dados SQL/NoSQL.
              </p>
            </div>
          </div>
        </div>

        {/* Salesforce Card */}
        <div data-aos="zoom-in" data-aos-delay="700" className="flex">
          <div className="bg-sky-600 hover:scale-110 transform transition-all duration-300 hover:-rotate-6 uppercase font-semibold text-center p-[2rem] flex flex-col justify-between w-full rounded-md shadow-lg">
            <div>
              <FaSalesforce className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8] mb-[1.5rem]" />
              <h1 className="text-[20px] md:text-[25px] mb-[1.5rem]">
                Salesforce CRM
              </h1>
              <p className="text-[15px] text-[#d3d2d2] font-normal normal-case leading-relaxed">
                Customização e desenvolvimento no ecossistema Salesforce. Implementação de regras de negócio avançadas com Apex, componentes ricos no frontend usando Lightning Web Components (LWC) e integrações de dados via APIs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
