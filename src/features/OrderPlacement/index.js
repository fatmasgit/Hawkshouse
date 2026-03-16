import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import OrderSummary from "./OrderSummary";
import CartOrder from "./CartOrder";
function OrderPlacementFeature({ dir = "rtl" }) {
    return (_jsxs("div", { dir: dir, className: '    w-[85%]\r\n        mx-auto\r\n        bg-white/60\r\n        border\r\n        border-[#F5841E]\r\n        rounded-lg\r\n        overflow-hidden\r\n        p-6\r\n        flex\r\n        flex-col\r\n        gap-15\r\n        pb-20\r\n            mt-15\r\n      ', children: [_jsxs("div", { className: "w-9/10 mx-auto flex flex-col items-center gap-6", children: [_jsx("h2", { className: " text-blue  text-center font-arabic text-[30px] font-bold", children: "\u062A\u0645 \u0627\u0631\u0633\u0627\u0644 \u0637\u0644\u0628\u0643 \u0628\u0646\u062C\u0627\u062D" }), _jsx("img", { src: "/images/ok.png", alt: "Success", className: " h-40" })] }), _jsxs("div", { className: 'flex  ', children: [_jsx("div", { className: "w-1/2 flex flex-col   ", children: _jsx(OrderSummary, {}) }), _jsx("div", { className: "w-1/2  flex flex-col justify-start  ", children: _jsx(CartOrder, {}) })] })] }));
}
export default OrderPlacementFeature;
