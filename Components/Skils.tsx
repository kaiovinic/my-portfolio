import React from "react";
import SkilsItem from "./SkilsItem";
import SkilsLanguage from "./SkilsLanguage";

const Skils = () => {
  return (
    <div className="pt-[4rem] md:pt-[8rem] pb-[5rem] bg-cardBg border-b border-cardBorder">
      <h1 className="heading mb-[4rem] font-heading">
        Hard <span className="text-cta">Skills</span>
      </h1>
      <div className="w-[80%] mx-auto pt-[2rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-start">
        {/* Left Column - Frontend */}
        <div>
          <SkilsItem
            title="React & Next.js"
            text="React é uma biblioteca JavaScript para a criação de interfaces de usuário reativas, enquanto Next.js é seu principal framework de produção que provê renderização híbrida no lado do servidor (SSR/SSG), gerando aplicações de alto desempenho e otimizadas para SEO."
          />
          <SkilsItem
            title="Angular Developer"
            text="Angular é o framework estruturado do Google voltado para o desenvolvimento de SPAs de grande escala e nível corporativo. Utiliza modularização rígida, injeção de dependência e programação reativa assíncrona com RxJS."
          />
          <SkilsItem
            title="TypeScript Specialist"
            text="TypeScript estende o ecossistema JavaScript adicionando tipagem estática opcional. Essencial para garantir a detecção precoce de erros no ambiente de desenvolvimento, facilitando refatorações seguras e aumentando a escalabilidade do código."
          />
          <SkilsLanguage
            skill1="React & Next.js"
            skill2="TypeScript"
            skill3="Angular"
            level1="w-[85%]"
            level2="w-[80%]"
            level3="w-[75%]"
          />
        </div>

        {/* Right Column - Backend & CRM */}
        <div>
          <SkilsItem
            title="Node.js Developer"
            text="Node.js é um ambiente de execução JavaScript server-side com arquitetura orientada a eventos e I/O não-bloqueante. Ideal para a construção de microsserviços rápidos, APIs REST robustas e servidores altamente concorrentes."
          />
          <SkilsItem
            title="C# & .NET Developer"
            text="C# é uma linguagem robusta orientada a objetos da Microsoft. Junto à plataforma .NET, é amplamente utilizada para criar APIs seguras, Web Services corporativos e sistemas distribuídos de alta performance, utilizando Clean Architecture."
          />
          <SkilsItem
            title="Salesforce Developer"
            text="Desenvolvimento no ecossistema de CRM número um do mundo. Implementação de regras de negócio complexas através de linguagem Apex no backend, automações e criação de interfaces dinâmicas com Lightning Web Components (LWC)."
          />
          <SkilsLanguage
            skill1="Node.js"
            skill2="C# / .NET"
            skill3="Salesforce & Apex"
            level1="w-[75%]"
            level2="w-[70%]"
            level3="w-[70%]"
          />
        </div>
      </div>
    </div>
  );
};

export default Skils;
