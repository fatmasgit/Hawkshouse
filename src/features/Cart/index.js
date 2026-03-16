import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import CartForm from "./CartForm";
import CartOrder from "./CartOrder";
function CartFeature({ dir = "rtl" }) {
    return (_jsxs("div", { dir: dir, className: '    w-[85%]\r\n        mx-auto\r\n        bg-white/60\r\n        border\r\n        border-[#F5841E]\r\n        rounded-lg\r\n        overflow-hidden\r\n        p-6\r\n        flex\r\n        flex-col\r\n             gap-15\r\n                pb-20\r\n                    mt-15\r\n      ', children: [_jsxs("div", { className: "w-9/10 mx-auto flex flex-col gap-3", children: [_jsx("p", { className: " text-blue font-bold  font-arabic text-[30px] ", children: "\u0633\u0644\u0629 \u0627\u0644\u062A\u0633\u0648\u0642" }), _jsx("div", { className: " w-full h-[1px] bg-teal opacity-40" })] }), _jsxs("div", { className: 'flex  ', children: [_jsx("div", { className: "w-1/2 flex flex-col   ", children: _jsx(CartForm, {}) }), _jsx("div", { className: "w-1/2  flex flex-col justify-start  ", children: _jsx(CartOrder, {}) })] })] }));
}
export default CartFeature;
