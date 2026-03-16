import { jsx as _jsx } from "react/jsx-runtime";
import { useLocation } from "react-router-dom";
import { useState } from "react";
function SortFilters() {
    const location = useLocation();
    const [activeFilter, setActiveFilter] = useState("الكل"); // track selected filter
    // Define filters per page
    let filters = [];
    if (location.pathname === "/seeds") {
        filters = ["خضروات", "الفاكهة", "المحاصيل الحقلية"];
    }
    else if (location.pathname === "/nutrients") {
        filters = ["منشط النمو"];
    }
    else if (location.pathname === "/pesticides") {
        filters = ["مبيدات حشرية", "مبيدات فطرية", "مبيدات النيماتودا", "مبيدات الحشائش"];
    }
    // Always add "الكل" at the beginning
    filters = [...filters, "الكل"];
    return (_jsx("div", { className: "flex justify-center gap-6 my-10 flex-wrap", dir: "rtl", children: filters.map((filter) => {
            const isActive = activeFilter === filter;
            return (_jsx("span", { onClick: () => setActiveFilter(filter), className: `
              font-bold
              font-arabic
              text-[30px]
              cursor-pointer
              transition
              ${isActive ? "text-orange border-b-2 border-orange pb-1" : "text-blue hover:text-orange"}
            `, children: filter }, filter));
        }) }));
}
export default SortFilters;
