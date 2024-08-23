import React from "react";

interface Props {
  title: string;
}

const SkilsItem = ({ title }: Props) => {
  return (
    <div className="mb-[4rem] md:mb-[8rem]">
      <h1 className="mt-[2rem] uppercase font-semibold mb-[1rem] text-[20px] sm:text-[25px] md:text-[30px] text-white">
        {title}
      </h1>
      <p className="text-[#aaaaaa] font-normal w-[80%] text-[18px] opacity-80">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
        aperiam repellendus doloribus amet illum quas id provident aliquam
        deleniti commodi itaque atque ipsa aliquid temporibus odit tenetur
        tempora, voluptatibus praesentium!
      </p>
    </div>
  );
};

export default SkilsItem;
