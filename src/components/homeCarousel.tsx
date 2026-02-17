// Carousel.tsx
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  "https://media.istockphoto.com/id/1501984364/photo/farmer-examining-sunflower-seedlings-at-sunset.jpg?s=1024x1024&w=is&k=20&c=h4ePjldX2cEqlImWVH-Ez8aEmkl7C6i8GP-coiECwb4=",
  "https://media.istockphoto.com/id/824796632/photo/tractor-spraying-pesticides-on-soybean-field-with-sprayer-at-spring.jpg?s=1024x1024&w=is&k=20&c=pOPtwj2XfWKbv08AGnijndrQ2BXfMBrO6u6yuaXSaOY=",
  "https://chicagoshadydealer.com/wp-content/uploads/2024/02/beautiful-corn.jpg",
];

const Carousel: React.FC = () => {
  const settings = {
    dots: false, // no dots
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <div className="w-[90%] mx-auto relative py-10">
      {/* Overlay content - fixed for all slides */}
      <div className="absolute top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-10">
        <p className="text-2xl md:text-4xl font-bold mb-4 mt-4">وجهتك الزراعية الأحدث والاقرب</p>
     <button className="
  text-[18px] 
  font-bold 
  text-white 
  text-center 
  w-[173px] 
    bg-orange-500 py-2 rounded-full
    mb-5 mt-2

"> تسوق الآن
        </button>
      </div>

      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index}>
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full h-[450px] object-cover rounded-lg overflow-hidden"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
