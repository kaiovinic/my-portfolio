import { UserCircleIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import React from "react";

const Blog = () => {
  return (
    <div className="pt-[4rem] md:pt-[8rem] pb-[4rem] bg-[#02050a]">
      <h1 className="heading">
        Minhas <span className="text-yellow-400">redes sociais</span>
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mt-[4rem] gap-[3rem] w-[80%] mx-auto">
        <div>
          <div className="w-[100%] relative h-[400px]">
            <Image
              src="/images/linkedin.png"
              alt="linkedin"
              layout="fill"
              className="object-contain"
            />
          </div>
          <div className="w-[90%] text-center mx-auto bg-[#09101a] relative p-[2rem] mt-[-1rem]">
            <a
              href="https://www.linkedin.com/in/kaioviniciussilva/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                className="w-fit px-[2rem] py-[1rem] bg-[#55e6e5] relative mt-[-3rem] text-black font-semibold text-[17px]
            mx-auto"
              >
                Conecte-se comigo no Linkedin
              </button>
            </a>
          </div>
        </div>

        <div>
          <div className="w-[100%] relative h-[400px]">
            <Image
              src="/images/instagram.png"
              alt="instagram"
              layout="fill"
              className="object-contain"
            />
          </div>
          <div className="w-[90%] text-center mx-auto bg-[#09101a] relative p-[2rem] mt-[-1rem]">
            <a
              href="https://www.instagram.com/kaio31vinicius/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                className="w-fit px-[2rem] py-[1rem] bg-[#55e6e5] relative mt-[-3rem] text-black font-semibold text-[17px]
            mx-auto"
              >
                Conecte-se comigo no Instagram
              </button>
            </a>
          </div>
        </div>

        <div>
          <div className="w-[100%] relative h-[400px]">
            <Image
              src="/images/github.png"
              alt="instagram"
              layout="fill"
              className="object-contain"
            />
          </div>
          <div className="w-[90%] text-center mx-auto bg-[#09101a] relative p-[2rem] mt-[-1rem]">
            <a
              href="https://github.com/kaiovinic"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                className="w-fit px-[2rem] py-[1rem] bg-[#55e6e5] relative mt-[-3rem] text-black font-semibold text-[17px]
            mx-auto"
              >
                Venha conhece mais projetos no meu Github
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
