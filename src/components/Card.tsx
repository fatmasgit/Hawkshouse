import React from "react";
import { Eye, Heart } from "lucide-react";
import product from './product.jpg'
import { ShoppingCart } from "lucide-react";


const ProductCard: React.FC = () => {
  return (
    <div className="w-61.25 h-[346px] flex flex-col font-sans   rounded-lg overflow-hidden mb-10">
      {/* Image container */}
      <div className="relative w-61.25 h-[225px] border border-[#D2D1D1] rounded-[10px] overflow-hidden mx-auto mt-2">
        <img
          src={product} alt="اسم المنتج"
          className="w-full h-full object-cover"
        />


        {/* Vertical Icons with orange border */}
        <div className="absolute top-2 right-2 flex flex-col gap-2">
          <div className="border-2 border-orange-500 rounded-full p-1 cursor-pointer flex justify-center items-center">
            <Eye size={20} color="#F97316" />
          </div>
          <div className="border-2 border-orange-500 rounded-full p-1 cursor-pointer flex justify-center items-center">
            <Heart size={20} color="#F97316" />
          </div>
        </div>
      </div>

      {/* Text and button */}
      <div className="flex flex-col gap-1  flex-1" dir="rtl">
        <h3 className="font-bold text-[16px] m-0">اسم المنتج</h3>
        <p className="text-[14px] text-gray-600 m-0">وصف المنتج</p>
        <p className="font-bold text-[16px]  m-0">50 EGP</p>
     <button className="w-full bg-[#F5841E] text-white py-2 rounded-md cursor-pointer flex items-center justify-center gap-2">
  <ShoppingCart size={18} color="white" />
  أضف للسلة
</button>

      </div>
    </div>
  );
};

export default ProductCard;
