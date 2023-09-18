import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import graves from '../../images/graves.jpeg';
import gate from '../../images/gate.jpeg';
import 'bootstrap-icons/font/bootstrap-icons.css'; 
import './ImageCarousel.css';

const ImageCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <i className="bi bi-chevron-left"></i>,
    nextArrow: <i className="bi bi-chevron-right"></i>,
  };

  return (
    <div className="imageCarouselWrapper">
      <Slider {...settings}>
        <div>
          <img src={gate} alt="gate" className="imageCarouselImage mx-auto h-[calc(100vh/2)]" />
        </div>
        <div>
          <img src={graves} alt="graves" className="imageCarouselImage mx-auto h-[calc(100vh/2)]"/>
        </div>
      </Slider>
    </div>
  );
};

export default ImageCarousel;
