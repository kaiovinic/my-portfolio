import React from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ClientReview from "./ClientReview";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const TestimonialSlider = () => {
  return (
    <Carousel
      additionalTransfrom={0}
      arrows={true}
      centerMode={false}
      itemClass="item"
      responsive={responsive}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={5000}
    >
      <ClientReview
        image="/images/c1.jpg"
        name="Karen Vanesca"
        assessment="Trabalhar com o Kaio foi uma experiência incrível! Ele capturou exatamente o que eu precisava para o meu projeto, entregando tudo dentro do prazo e com uma qualidade acima do esperado. Sua atenção aos detalhes e habilidade em resolver problemas rapidamente me impressionaram. Com certeza, continuarei a trabalhar com ele em projetos futuros."
      />
      <ClientReview
        image="/images/c2.png"
        name="Giovanna Leite"
        assessment="Kaio demonstrou um profissionalismo exemplar durante todo o desenvolvimento do nosso site. Sua expertise fez toda a diferença, resultando em uma plataforma rápida e responsiva que elevou nosso negócio a outro patamar. Ele foi sempre muito comunicativo e aberto a sugestões, tornando a colaboração muito produtiva."
      />
      {/* <ClientReview
        image="/images/c3.png"
        name="Lucas Otino"
        assessment="Fiquei muito satisfeito com o trabalho do Kaio! Desde o início, ele se mostrou dedicado e comprometido com a qualidade do projeto. Ele superou todas as minhas expectativas, entregando um site moderno, funcional e otimizado para SEO. Recomendo Kaio sem hesitar para qualquer um que precise de um desenvolvedor frontend talentoso."
      />
      <ClientReview
        image="/images/c4.png"
        name="Daniele Vilares"
        assessment="O Kaio é um desenvolvedor excepcional! Ele transformou nossa ideia em um site incrível, com uma interface intuitiva e design impecável. Sua capacidade de entender e implementar as necessidades do cliente, aliada à sua experiência com tecnologias modernas, garantiu um resultado final que superou todas as expectativas. Sem dúvida, é um profissional que faz a diferença!"
      /> */}
    </Carousel>
  );
};

export default TestimonialSlider;
