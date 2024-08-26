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
      <h1 className="text-[25px] mt-[1rem] text-white">{name}</h1>
      <p className="text-[18px] text-white opacity-75 mt-[0.5rem] mb-[1.4rem]"></p>
      <p className="text-[16px] text-white opacity-50 w-[90%] mx-auto md:w-[50%]">
        {assessment}
      </p>
    </div>
  );
};

export default ClientReview;
