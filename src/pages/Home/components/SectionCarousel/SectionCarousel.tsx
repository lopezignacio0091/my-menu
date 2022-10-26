import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import image1 from "../../../../assets/carousel2.jpg";
import image2 from "../../../../assets/carousel3.jpg";
import image3 from "../../../../assets/carousel4.jpg";
const SectionCarrousel = () => {
  const items = [
    {
      name: "Legend1",
      image: image3,
    },
    {
      name: "Legend2",
      image: image2,
    },
    {
      name: "Legend3",
      image: image1,
    },
  ];

  return (
    <div className="carousel-wrapper">
      <Carousel infiniteLoop  autoPlay showThumbs={false}>
        {items.map((elem) => (
          <img key={elem.name} src={elem.image} alt={elem.name} height={700} />
        ))}
      </Carousel>
    </div>
  );
};

export default SectionCarrousel;
