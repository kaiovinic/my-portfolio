import React from "react";

interface Props {
  title: string;
  text: string;
}

const SkilsItem = ({ title, text }: Props) => {
  return (
    <div className="mb-[4rem] md:mb-[6rem]">
      <h3 className="mt-[1.5rem] uppercase font-bold mb-[1rem] text-[20px] sm:text-[22px] md:text-[26px] text-textColor font-heading">
        {title}
      </h3>
      <p className="text-secondaryColor font-normal w-[90%] text-[15px] sm:text-[16px] leading-relaxed font-body">
        {text}
      </p>
    </div>
  );
};

export default SkilsItem;
