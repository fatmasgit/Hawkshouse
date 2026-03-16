import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import OrderCard from "../../../components/OrderCard";
export default function Favorites({ dir = "rtl" }) {
    return (_jsxs("div", { dir: dir, className: "flex flex-col items-start gap-10 flex-1", children: [_jsx("p", { className: "text-orange font-arabic font-bold text-[22px]", children: "\u0627\u0644\u0645\u0646\u062A\u062C\u0627\u062A \u0627\u0644\u0645\u0641\u0636\u0644\u0629" }), _jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-5 w-full", children: [_jsx(OrderCard, {}), _jsx(OrderCard, {}), _jsx(OrderCard, {}), _jsx(OrderCard, {})] })] }));
}
