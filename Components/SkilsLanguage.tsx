import React from "react";

interface Props {
  skill1: string;
  skill2: string;
  skill3: string;
  level1: string;
  level2: string;
  level3: string;
}

const SkilsLanguage = ({
  skill1,
  skill2,
  skill3,
  level1,
  level2,
  level3,
}: Props) => {
  return (
    <div className="w-[90%]">
      <div className="relative mb-[2.5rem] overflow-hidden rounded-xl border border-cardBorder bg-badgeBg shadow-sm">
        <h4 className="p-4 uppercase text-textColor text-[15px] sm:text-[16px] font-bold font-heading">
          {skill1}
        </h4>
        <span
          className={`${level1} bottom-0 h-[5px] absolute bg-cta`}
        ></span>
      </div>
      <div className="relative mb-[2.5rem] overflow-hidden rounded-xl border border-cardBorder bg-badgeBg shadow-sm">
        <h4 className="p-4 uppercase text-textColor text-[15px] sm:text-[16px] font-bold font-heading">
          {skill2}
        </h4>
        <span
          className={`${level2} bottom-0 h-[5px] absolute bg-cta`}
        ></span>
      </div>
      <div className="relative mb-[2.5rem] overflow-hidden rounded-xl border border-cardBorder bg-badgeBg shadow-sm">
        <h4 className="p-4 uppercase text-textColor text-[15px] sm:text-[16px] font-bold font-heading">
          {skill3}
        </h4>
        <span
          className={`${level3} bottom-0 h-[5px] absolute bg-cta`}
        ></span>
      </div>
    </div>
  );
};

export default SkilsLanguage;
