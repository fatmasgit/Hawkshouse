import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// GiftCards.jsx
import { TicketPercent } from "lucide-react";
export default function GiftCards({ dir = "rtl" }) {
    const coupons = [
        { title: "كود الخصم %", date: "صالحة حتى 2/8/2023" },
        { title: "كود الخصم ج.م 00", date: "صالحة حتى 2/8/2023" },
        { title: "كود الخصم %", date: "صالحة حتى 2/8/2023" },
    ];
    return (_jsx("div", { dir: dir, className: "flex flex-col items-start gap-10 flex-1", children: coupons.map((coupon, index) => (_jsxs("div", { className: "flex items-start gap-6", children: [_jsx(TicketPercent, { size: 35, className: "text-[#2F3A5F]" }), _jsxs("div", { className: "flex flex-col items-start gap-1", children: [_jsx("span", { className: "text-orange font-arabic font-bold text-[22px]", children: coupon.title }), _jsx("span", { className: "text-blue font-arabic font-medium text-[18px]", children: coupon.date })] })] }, index))) }));
}
