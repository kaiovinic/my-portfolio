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
      autoPlaySpeed={2000}
    >
      <ClientReview
        image="/images/c1.jpg"
        name="Karen Vanesca"
        role="Web Developer"
      />
      <ClientReview
        image="/images/c2.png"
        name="Giovanna Leite"
        role="React Developer"
      />
      <ClientReview
        image="/images/c3.png"
        name="Lucas Otino"
        role="Next Developer"
      />
      <ClientReview
        image="/images/c4.png"
        name="Daniele Vilares"
        role="Web Developer"
      />
    </Carousel>
  );
};

export default TestimonialSlider;
