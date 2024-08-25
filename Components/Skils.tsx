import React from "react";
import SkilsItem from "./SkilsItem";
import SkilsLanguage from "./SkilsLanguage";

const Skils = () => {
  return (
    <div className="pt-[4rem] md:pt-[8rem] pb-[5rem] bg-[#09101a]">
      <h1 className="heading">
        Hard <span className="text-yellow-400">Skills</span>
      </h1>
      <div className="w-[80%] mx-auto pt-[4rem] md:pt-[8rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center">
        <div>
          <SkilsItem
            title="React.js Developer"
            text="React é uma biblioteca JavaScript de código aberto, mantida pelo Facebook, que facilita a criação de interfaces de usuário interativas e dinâmicas. Utilizando componentes reutilizáveis e um fluxo de dados unidirecional, React melhora a eficiência do desenvolvimento frontend, tornando a construção de aplicações web rápidas e escaláveis."
          />
          <SkilsItem
            title="Next.js Developer"
            text="Next.js é um framework React que permite a construção de aplicações web rápidas e otimizadas, oferecendo recursos como renderização híbrida, rotas dinâmicas, e suporte a server-side rendering (SSR). É ideal para criar sites com alta performance, SEO aprimorado e uma excelente experiência de desenvolvedor."
          />
          <SkilsLanguage
            skill1="HTMl"
            skill2="CSS"
            skill3="JavaScript"
            level1="w-[60%]"
            level2="w-[60%]"
            level3="w-[70%]"
          />
        </div>
        <div>
          <SkilsItem
            title="TypeScript Developer"
            text="TypeScript é uma linguagem de programação open-source que estende o JavaScript adicionando tipagem estática. Desenvolvida pela Microsoft, ela permite detectar erros de forma antecipada e melhorar a manutenção do código, tornando o desenvolvimento de aplicações JavaScript mais robusto e escalável."
          />
          <SkilsItem
            title="Node.js Developer"
            text="Node.js é um ambiente de execução JavaScript que permite executar código no servidor. Baseado no motor V8 do Chrome, Node.js é conhecido por sua alta performance, escalabilidade e capacidade de lidar com operações assíncronas, tornando-o ideal para construir aplicações web rápidas e escaláveis, como APIs e servidores."
          />
          <SkilsLanguage
            skill1="React.js"
            skill2="Next.js"
            skill3="TypeScript"
            level1="w-[70%]"
            level2="w-[80%]"
            level3="w-[60%]"
          />
        </div>
      </div>
    </div>
  );
};

export default Skils;
