import Image from "next/image";
import React from "react";

const Projects = () => {
  return (
    <div
      className="bg-[#02050a] pt-[4rem] md:pt-[8rem] pb-[1rem]"
      id="projects"
    >
      <h1 className="heading">
        Pro<span className="text-yellow-400">jetos</span>
      </h1>
      <div className="w-[80%] mx-auto pt-[2rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem] lg:grid-cols-3">
        <div data-aos="fade-up">
          <div className="trasnsform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-full h-[200px] md:h-[300px]">
            <a href="">
              <Image
                src="/images/meu-portifolio.png"
                alt="portfolio"
                fill
                className="object-contain"
                style={{ objectFit: "contain" }}
              />
            </a>
          </div>
        </div>

        <div data-aos="fade-up" data-aos-delay="300">
          <div className="trasnsform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-full h-[200px] md:h-[300px]">
            <Image
              src="/images/site-karen.png"
              alt="portfolio"
              fill
              className="object-contain"
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>

        <div data-aos="fade-up" data-aos-delay="600">
          <div className="trasnsform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-full h-[200px] md:h-[300px]">
            <Image
              src="/images/api-github.png"
              alt="portfolio"
              fill
              className="object-contain"
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>

        <div data-aos="fade-up" data-aos-delay="900">
          <div className="trasnsform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-full h-[200px] md:h-[300px]">
            <Image
              src="/images/black-next.png"
              alt="portfolio"
              fill
              className="object-contain"
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>

        <div data-aos="fade-up" data-aos-delay="1200">
          <div className="trasnsform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-full h-[200px] md:h-[300px]">
            <Image
              src="/images/jogo-da-memoria.png"
              alt="portfolio"
              fill
              className="object-contain"
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>

        <div data-aos="fade-up" data-aos-delay="1500">
          <div className="trasnsform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-full h-[200px] md:h-[300px]">
            <Image
              src="/images/api-github.png"
              alt="portfolio"
              fill
              className="object-contain"
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
