// import React from 'react';
// import Carousel from 'react-bootstrap/Carousel';
// import graves from '../../graves.jpeg';
// import gate from '../../gate.jpeg';

// const CarouselComponent = () => {
//   return (
//     <Carousel>
//       <Carousel.Item>
//         <div id="overlay">
//           <img
//             id="gate-img"
//             className="d-block w-100"
//             src={gate}
//             alt="First slide"
//             style={{ height: "65vh" }}
//           />
//         </div>
//         <Carousel.Caption >
//           {/* <a href="#buttons"><Button className="bg-yellow-500 text-white font-bold py-2 px-4 mx-2 rounded-full"
// >Visiting Hours</Button></a> */}
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <div id="overlay">
//           <img
//             id="gate-img"
//             className="d-block w-100"
//             src={graves}
//             alt="Second slide"
//             style={{ height: "65vh" }}
//           />
//         </div>
//         <Carousel.Caption>
//           {/* <a href="#buttons"><Button className="bg-yellow-500 text-white font-bold py-2 px-4 mx-2 rounded-full"
// >Burial Services</Button></a> */}
//         </Carousel.Caption>
//       </Carousel.Item>
//     </Carousel>
//   );
// };

// export default CarouselComponent;

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import graves from '../../graves.jpeg';
import gate from '../../gate.jpeg';
import 'bootstrap-icons/font/bootstrap-icons.css'; 

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
    <div className="w-screen">
      <Slider {...settings}>
        <div>
          <img src={gate} alt="gate" className="mx-auto h-[calc(100vh/2)]" />
        </div>
        <div>
          <img
            src={graves}
            alt="graves"
            className="mx-auto h-[calc(100vh/2)]"
          />
        </div>
      </Slider>
    </div>
  );
};

export default ImageCarousel;
