import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
export default function ShippingAddress({ dir = "rtl" }) {
    const [active, setActive] = useState(0);
    const [showForm, setShowForm] = useState(false);
    const addresses = [
        {
            city: "القاهرة مصر الجديدة",
            street: "36 شارع الدليفرااند",
            floor: "الدور 2",
            phone: "+012345678",
        },
        {
            city: "القاهرة مصر الجديدة",
            street: "36 شارع الدليفرااند",
            floor: "الدور 2",
            phone: "+012345678",
        },
    ];
    // Custom dropdown state
    const [selectedCity, setSelectedCity] = useState("");
    const [cityOpen, setCityOpen] = useState(false);
    const [selectedArea, setSelectedArea] = useState("");
    const [areaOpen, setAreaOpen] = useState(false);
    const cities = ["القاهرة", "الجيزة"];
    const areas = ["مصر الجديدة", "مدينة نصر"];
    if (showForm) {
        return (_jsxs("div", { dir: dir, className: "flex flex-col gap-6 w-[420px]", children: [_jsx("h2", { className: "text-orange text-lg font-semibold", children: "\u062A\u0639\u062F\u064A\u0644 \u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0634\u062D\u0646" }), _jsxs("div", { className: "relative w-full", children: [_jsxs("div", { onClick: () => setCityOpen(!cityOpen), className: "flex items-center justify-between border border-black  rounded-md px-4 h-12 text-orange font-medium cursor-pointer", children: [_jsx("span", { children: selectedCity || "المحافظة" }), _jsx(ChevronDown, { size: 18 })] }), cityOpen && (_jsx("div", { className: "absolute left-0 mt-1 w-full bg-white border border-black  rounded-md overflow-hidden shadow-md z-20", children: cities.map((item) => (_jsx("div", { onClick: () => {
                                    setSelectedCity(item);
                                    setCityOpen(false);
                                }, className: `px-4 py-2 text-start cursor-pointer transition
                    ${selectedCity === item ? "bg-orange text-white" : "hover:bg-[#F5841E]/20"}
                  `, children: item }, item))) }))] }), _jsxs("div", { className: "relative w-full", children: [_jsxs("div", { onClick: () => setAreaOpen(!areaOpen), className: "flex items-center justify-between  border border-black  rounded-md px-4 h-12 text-orange font-medium cursor-pointer", children: [_jsx("span", { children: selectedArea || "المنطقة" }), _jsx(ChevronDown, { size: 18 })] }), areaOpen && (_jsx("div", { className: "absolute left-0 mt-1 w-full bg-white border border-black   rounded-md overflow-hidden shadow-md z-20", children: areas.map((item) => (_jsx("div", { onClick: () => {
                                    setSelectedArea(item);
                                    setAreaOpen(false);
                                }, className: `px-4 py-2 text-start cursor-pointer transition
                    ${selectedArea === item ? "bg-orange text-white" : "hover:bg-[#F5841E]/20"}
                  `, children: item }, item))) }))] }), _jsx("input", { className: "border rounded-md p-3", placeholder: "\u0627\u0644\u0639\u0646\u0648\u0627\u0646" }), _jsx("input", { className: "border rounded-md p-3", placeholder: "\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062A\u0641" }), _jsx("button", { className: "bg-orange text-white px-8 py-2 rounded-md w-fit", onClick: () => setShowForm(false), children: "\u0627\u0636\u0627\u0641\u0629" })] }));
    }
    return (_jsxs("div", { dir: dir, className: "flex flex-col items-start gap-10 flex-1", children: [_jsx("h2", { className: "text-orange font-arabic font-bold text-[22px]", children: "\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0634\u062D\u0646" }), addresses.map((address, index) => {
                const isActive = active === index;
                return (_jsxs("div", { className: "flex items-start gap-4 cursor-pointer", onClick: () => setActive(index), children: [_jsx("div", { className: "w-[32px] h-[32px] rounded-[14px] border-2 border-blue flex items-center justify-center", children: isActive && (_jsx("div", { className: "w-[22px] h-[22px] bg-orange rounded-[10px]" })) }), _jsxs("div", { className: " text-blue leading-7", children: [_jsx("p", { className: "text-blue font-arabic font-medium text-[18px]", children: address.city }), _jsx("p", { className: "text-blue font-arabic font-medium text-[18px]", children: address.street }), _jsx("p", { className: "text-blue font-arabic font-medium text-[18px]", children: address.floor }), _jsxs("p", { className: "text-blue font-arabic font-medium text-[18px]", children: ["\u0627\u0644\u0647\u0627\u062A\u0641 ", address.phone] })] })] }, index));
            }), _jsxs("div", { className: "flex gap-6 mt-4 self-end me-20", children: [_jsx("button", { className: "border  text-orange px-8 py-2 rounded-md", onClick: () => setShowForm(true), children: "\u062A\u0639\u062F\u064A\u0644" }), _jsx("button", { className: "bg-orange text-white px-8 py-2 rounded-md", onClick: () => setShowForm(true), children: "\u0627\u0636\u0627\u0641\u0629" })] })] }));
}
