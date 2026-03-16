import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
const FilterOption = ({ title, options, selectedOption, onSelect, }) => {
    const [open, setOpen] = useState(true);
    return (_jsxs("div", { className: "w-[327px] border-b last:border-b-0 pb-6 pe-4", dir: "rtl", children: [_jsxs("div", { className: "flex items-center justify-between cursor-pointer", onClick: () => setOpen(!open), children: [_jsx("h2", { className: "text-blue font-bold font-arabic text-[28px]", children: title }), _jsx(ChevronDown, { size: 25, className: `text-orange transition-transform duration-300 ${open ? "rotate-180" : "rotate-0"}` })] }), open && (_jsx("div", { className: "mt-4 flex flex-col gap-4", children: options.map((item) => {
                    const isActive = selectedOption === item;
                    return (_jsxs("label", { className: "flex items-center gap-3 cursor-pointer ", onClick: () => onSelect(item), children: [_jsx("div", { className: "w-[32px] h-[32px] rounded-[14px] border-2 border-blue bg-white flex items-center justify-center", children: isActive && (_jsx("div", { className: "w-[22px] h-[22px] bg-orange rounded-[10px]" })) }), _jsx("span", { className: "text-blue text-[16px] font-arabic font-semibold", children: item })] }, item));
                }) }))] }));
};
const Filters = () => {
    const [selectedBrand, setSelectedBrand] = useState("نوفارم");
    const [selectedCategory, setSelectedCategory] = useState("بودر");
    const [selectedSeller, setSelectedSeller] = useState("أسم البائع1");
    return (_jsxs("div", { className: "flex flex-col gap-6", children: [_jsx(FilterOption, { title: "\u0645\u0627\u0631\u0643\u0629", options: ["نوفارم", "جرينرج", "حماية"], selectedOption: selectedBrand, onSelect: setSelectedBrand }), _jsx(FilterOption, { title: "\u0646\u0648\u0639 \u0627\u0644\u0633\u0645\u0627\u062F", options: ["بودر", "سائل", "معلق"], selectedOption: selectedCategory, onSelect: setSelectedCategory }), _jsx(FilterOption, { title: "\u0627\u0644\u0628\u0627\u0626\u0639", options: ["أسم البائع1", "أسم البائع2", "أسم البائع3"], selectedOption: selectedSeller, onSelect: setSelectedSeller })] }));
};
export default Filters;
