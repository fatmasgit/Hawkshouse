import React from "react";
import { ShoppingCart } from "lucide-react"; // Lucide icon
import { useNavigate } from "react-router-dom";

export default function Orders({ dir = "rtl" }) {
    const navigate = useNavigate();

    const handleShopNow = () => {
        navigate("/"); // adjust this path to your shop page
    };

    return (
        <div
            dir={dir}
            className="flex flex-col items-center justify-start flex-1 gap-6 h-full"
        >
            <h2 className="text-blue font-arabic font-bold text-[22px] pb-5">لا يوجد طلبات</h2>

            <ShoppingCart className="text-orange" size={80} />

            <button
                onClick={handleShopNow}
                className="mt-4 px-6 py-2 bg-orange text-white font-semibold rounded "
            >
                ابدأ في التسوق
            </button>
        </div>
    );
}