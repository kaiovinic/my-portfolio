import React from "react";
import TestimonialSlider from "./TestimonialSlider";

const Testimonial = () => {
  return (
    <div className="bg-cardBg border-b border-cardBorder pt-[4rem] md:pt-[8rem] pb-[4rem]" id="testimonials">
      <h1 className="heading font-heading">
        Avaliações de <span className="text-cta">Clientes</span>
      </h1>
      <div className="pt-[5rem] pb-[4rem] w-[80%] mx-auto">
        <TestimonialSlider />
      </div>
    </div>
  );
};

export default Testimonial;
