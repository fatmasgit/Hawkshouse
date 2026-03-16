import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// Carousel.tsx
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const images = [
    "https://media.istockphoto.com/id/1501984364/photo/farmer-examining-sunflower-seedlings-at-sunset.jpg?s=1024x1024&w=is&k=20&c=h4ePjldX2cEqlImWVH-Ez8aEmkl7C6i8GP-coiECwb4=",
    "https://media.istockphoto.com/id/824796632/photo/tractor-spraying-pesticides-on-soybean-field-with-sprayer-at-spring.jpg?s=1024x1024&w=is&k=20&c=pOPtwj2XfWKbv08AGnijndrQ2BXfMBrO6u6yuaXSaOY=",
    "https://chicagoshadydealer.com/wp-content/uploads/2024/02/beautiful-corn.jpg",
];
const Carousel = () => {
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
    return (_jsxs("div", { className: "w-[90%] mx-auto relative py-10  ", dir: "rtl", children: [_jsxs("div", { className: "absolute top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-10", children: [_jsx("p", { className: "text-[48px] font-arabic font-normal mb-4 mt-4", children: "\u0648\u062C\u0647\u062A\u0643 \u0627\u0644\u0632\u0631\u0627\u0639\u064A\u0629 \u0627\u0644\u0623\u062D\u062F\u062B \u0648\u0627\u0644\u0627\u0642\u0631\u0628" }), _jsx("button", { className: "\r\n  text-[18px] \r\n  font-bold \r\n  text-white \r\n  text-center \r\n  w-[173px] \r\n    bg-orange py-2 rounded-full\r\n    mb-5 mt-2\r\n\r\n", children: " \u062A\u0633\u0648\u0642 \u0627\u0644\u0622\u0646" })] }), _jsx(Slider, { ...settings, className: "rounded-lg overflow-hidden", children: images.map((src, index) => (_jsx("div", { children: _jsx("img", { src: src, alt: `Slide ${index + 1}`, className: "w-full h-[450px] object-cover rounded-lg overflow-hidden" }) }, index))) })] }));
};
export default Carousel;
