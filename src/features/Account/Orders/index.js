import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ShoppingCart } from "lucide-react"; // Lucide icon
import { useNavigate } from "react-router-dom";
export default function Orders({ dir = "rtl" }) {
    const navigate = useNavigate();
    const handleShopNow = () => {
        navigate("/"); // adjust this path to your shop page
    };
    return (_jsxs("div", { dir: dir, className: "flex flex-col items-center justify-start flex-1 gap-6 h-full", children: [_jsx("h2", { className: "text-blue font-arabic font-bold text-[22px] pb-5", children: "\u0644\u0627 \u064A\u0648\u062C\u062F \u0637\u0644\u0628\u0627\u062A" }), _jsx(ShoppingCart, { className: "text-orange", size: 80 }), _jsx("button", { onClick: handleShopNow, className: "mt-4 px-6 py-2 bg-orange text-white font-semibold rounded ", children: "\u0627\u0628\u062F\u0623 \u0641\u064A \u0627\u0644\u062A\u0633\u0648\u0642" })] }));
}
