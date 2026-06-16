import { StarIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import React from "react";

interface Props {
  name: string;
  image: string;
  assessment: string;
}

const ClientReview = ({ name, image, assessment }: Props) => {
  return (
    <div className="flex flex-col text-center justify-center">
      <div className="relative w-[100px] h-[100px] mx-auto mb-[2rem]">
        <Image
          src={image}
          alt={name}
          fill
          style={{ objectFit: "contain" }}
          className="rounded-full"
        />
      </div>
      <div className="flex items-center mx-auto">
        <StarIcon className="w-[2rem] h-[2rem] text-yellow-400" />
        <StarIcon className="w-[2rem] h-[2rem] text-yellow-400" />
        <StarIcon className="w-[2rem] h-[2rem] text-yellow-400" />
        <StarIcon className="w-[2rem] h-[2rem] text-yellow-400" />
        <StarIcon className="w-[2rem] h-[2rem] text-yellow-400" />
      </div>
      <h4 className="text-[22px] mt-[1rem] text-textColor font-bold font-heading">{name}</h4>
      <p className="text-[15px] sm:text-[16px] text-secondaryColor leading-relaxed w-[90%] mx-auto md:w-[60%] font-body mt-2">
        {assessment}
      </p>
    </div>
  );
};

export default ClientReview;
