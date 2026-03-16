import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Truck, Heart, MapPin, TicketPercent, User } from "lucide-react";
import Profile from "./Profile";
import ShippingAddress from "./Addresses";
import GiftCards from "./GiftCards";
import Favorites from "./Favorites";
import Orders from "./Orders";
// Tabs array with icons, labels, and keys
export const tabsArray = [
    { key: "orders", label: "الطلبات", icon: _jsx(Truck, { size: 28 }) },
    { key: "favorites", label: "المفضلة", icon: _jsx(Heart, { size: 28 }) },
    { key: "addresses", label: "العناوين", icon: _jsx(MapPin, { size: 28 }) },
    { key: "gifts", label: "بطاقات الهدايا", icon: _jsx(TicketPercent, { size: 28 }) },
    { key: "profile", label: "الملف الشخصى", icon: _jsx(User, { size: 28 }) },
];
// Mapping each tab key to its component
const tabComponents = {
    orders: _jsx(Orders, {}),
    favorites: _jsx(Favorites, {}),
    addresses: _jsx(ShippingAddress, {}),
    gifts: _jsx(GiftCards, {}),
    profile: _jsx(Profile, {}),
};
export default function AccountFeature({ dir = "rtl" }) {
    const [activeTab, setActiveTab] = useState("profile");
    return (_jsxs("div", { dir: dir, className: "w-[85%] mx-auto mt-15 bg-white/60 border border-[#F5841E] rounded-lg overflow-hidden p-15 flex flex-col gap-15", children: [_jsxs("div", { className: "flex flex-col gap-3", children: [_jsx("p", { className: "text-blue font-bold font-arabic text-[30px]", children: "\u0627\u0644\u062D\u0633\u0627\u0628 \u0627\u0644\u062E\u0627\u0635 \u0628\u0643" }), _jsx("div", { className: "w-full h-[2px] bg-[#C9E1E6]" })] }), _jsxs("div", { className: "flex", children: [_jsx("div", { className: "flex flex-col gap-7 w-1/4", children: tabsArray.map((tab) => (_jsxs("div", { onClick: () => setActiveTab(tab.key), className: `flex items-center font-arabic font-bold text-[24px] justify-start gap-4 cursor-pointer ${activeTab === tab.key ? "text-orange" : "text-blue"}`, children: [tab.icon, _jsx("span", { children: tab.label })] }, tab.key))) }), _jsx("div", { className: "flex-1", children: tabComponents[activeTab] })] })] }));
}
