import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Eye, Heart } from "lucide-react";
import { ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";
const ProductCard = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        // Navigate to the product page
        navigate(`/product/1`);
        // Optionally, add to cart logic here
    };
    return (_jsxs("div", { className: "w-61.25 h-[346px] flex flex-col font-sans    rounded-lg overflow-hidden mb-10", children: [_jsxs("div", { className: "relative w-61.25 h-[225px] border border-[#D2D1D1] rounded-[10px] overflow-hidden mx-auto mt-2", children: [_jsx("img", { src: '/images/product.jpg', alt: "\u0627\u0633\u0645 \u0627\u0644\u0645\u0646\u062A\u062C", className: "w-full h-full object-cover" }), _jsxs("div", { className: "absolute top-2 right-2 flex flex-col gap-2", children: [_jsx("div", { className: "border-2 border-orange rounded-full p-1 cursor-pointer flex justify-center items-center", children: _jsx(Eye, { size: 20, color: "#F97316" }) }), _jsx("div", { className: "border-2 border-orange rounded-full p-1 cursor-pointer flex justify-center items-center", children: _jsx(Heart, { size: 20, color: "#F97316" }) })] })] }), _jsxs("div", { className: "flex flex-col gap-1  flex-1", dir: "rtl", children: [_jsx("h3", { className: "font-bold font-arabic text-[16px] m-0", children: "\u0627\u0633\u0645 \u0627\u0644\u0645\u0646\u062A\u062C" }), _jsx("p", { className: "text-[14px] font-arabic text-gray-600 m-0", children: "\u0648\u0635\u0641 \u0627\u0644\u0645\u0646\u062A\u062C" }), _jsx("p", { className: "font-bold font-arabic text-[16px]  m-0", children: "50 EGP" }), _jsxs("button", { onClick: handleClick, className: "w-full bg-orange font-arabic text-white py-2 rounded-md cursor-pointer flex items-center justify-center gap-2", children: [_jsx(ShoppingCart, { size: 18, color: "white" }), "\u0623\u0636\u0641 \u0644\u0644\u0633\u0644\u0629"] })] })] }));
};
export default ProductCard;
