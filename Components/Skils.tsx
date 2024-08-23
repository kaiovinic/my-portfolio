import React from "react";
import SkilsItem from "./SkilsItem";
import SkilsLanguage from "./SkilsLanguage";

const Skils = () => {
  return (
    <div className="pt-[4rem] md:pt-[8rem] pb-[5rem] bg-[#09101a]">
      <h1 className="heading">
        Educação & <span className="text-yellow-400">Skill</span>
      </h1>
      <div className="w-[80%] mx-auto pt-[4rem] md:pt-[8rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center">
        <div>
          <SkilsItem title="React.js Developer" />
          <SkilsItem title="Next.js Developer" />
          <SkilsLanguage
            skill1="HTMl"
            skill2="CSS"
            skill3="JavaScript"
            level1="w-[90%]"
            level2="w-[80%]"
            level3="w-[70%]"
          />
        </div>
        <div>
          <SkilsItem title="TypeScript Developer" />
          <SkilsItem title="Node.js Developer" />
          <SkilsLanguage
            skill1="React.js"
            skill2="Next.js"
            skill3="TypeScript"
            level1="w-[10%]"
            level2="w-[80%]"
            level3="w-[50%]"
          />
        </div>
      </div>
    </div>
  );
};

export default Skils;
