import Image from "next/image";
import React from "react";

const Blog = () => {
  return (
    <div className="pt-[4rem] md:pt-[8rem] pb-[6rem] bg-backgroundColor border-b border-zinc-200/60" id="blogs">
      <h1 className="heading mb-[4rem] font-heading">
        Minhas <span className="text-cta">redes sociais</span>
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 mt-[4rem] gap-[2.5rem] w-[85%] mx-auto items-stretch">
        
        {/* Linkedin */}
        <div data-aos="fade-up" className="flex flex-col bg-cardBg border border-cardBorder rounded-2xl shadow-sm overflow-hidden p-6 justify-between gap-6 hover:shadow-md transition-shadow duration-300">
          <div className="w-[100%] relative h-[250px] shrink-0">
            <Image
              src="/images/blog1.png"
              alt="linkedin"
              fill
              sizes="(max-width: 768px) 100vw, 30vw"
              style={{ objectFit: "contain" }}
              className="object-contain"
            />
          </div>
          <div className="text-center w-full">
            <a
              href="https://www.linkedin.com/in/kaioviniciussilva/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full"
            >
              <button className="btn-primary w-full text-[15px] py-2.5">
                Conecte-se comigo no LinkedIn
              </button>
            </a>
          </div>
        </div>

        {/* Instagram */}
        <div data-aos="fade-up" data-aos-delay="300" className="flex flex-col bg-cardBg border border-cardBorder rounded-2xl shadow-sm overflow-hidden p-6 justify-between gap-6 hover:shadow-md transition-shadow duration-300">
          <div className="w-[100%] relative h-[250px] shrink-0">
            <Image
              src="/images/instagran.png"
              alt="instagram"
              fill
              sizes="(max-width: 768px) 100vw, 30vw"
              style={{ objectFit: "contain" }}
              className="object-contain"
            />
          </div>
          <div className="text-center w-full">
            <a
              href="https://www.instagram.com/kaio31vinicius/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full"
            >
              <button className="btn-primary w-full text-[15px] py-2.5">
                Conecte-se comigo no Instagram
              </button>
            </a>
          </div>
        </div>

        {/* Github */}
        <div data-aos="fade-up" data-aos-delay="600" className="flex flex-col bg-cardBg border border-cardBorder rounded-2xl shadow-sm overflow-hidden p-6 justify-between gap-6 hover:shadow-md transition-shadow duration-300">
          <div className="w-[100%] relative h-[250px] shrink-0">
            <Image
              src="/images/github.png"
              alt="github"
              fill
              sizes="(max-width: 768px) 100vw, 30vw"
              style={{ objectFit: "contain" }}
              className="object-contain"
            />
          </div>
          <div className="text-center w-full">
            <a
              href="https://github.com/kaiovinic"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full"
            >
              <button className="btn-primary w-full text-[15px] py-2.5">
                Conhecer projetos no GitHub
              </button>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Blog;
