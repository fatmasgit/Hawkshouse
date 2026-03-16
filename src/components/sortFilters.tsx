import { useLocation } from "react-router-dom";
import { useState } from "react";

function SortFilters() {
  const location = useLocation();
  const [activeFilter, setActiveFilter] = useState<string>("الكل"); // track selected filter

  // Define filters per page
  let filters: string[] = [];

  if (location.pathname === "/seeds") {
    filters = ["خضروات", "الفاكهة", "المحاصيل الحقلية"];
  } else if (location.pathname === "/nutrients") {
    filters = ["منشط النمو"];
  } else if (location.pathname === "/pesticides") {
    filters = ["مبيدات حشرية", "مبيدات فطرية", "مبيدات النيماتودا", "مبيدات الحشائش"];
  }

  // Always add "الكل" at the beginning
  filters = [...filters, "الكل"];

  return (
    <div className="flex justify-center gap-6 my-10 flex-wrap" dir="rtl">
      {filters.map((filter) => {
        const isActive = activeFilter === filter;
        return (
          <span
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`
              font-bold
              font-arabic
              text-[30px]
              cursor-pointer
              transition
              ${isActive ? "text-orange border-b-2 border-orange pb-1" : "text-blue hover:text-orange"}
            `}
          >
            {filter}
          </span>
        );
      })}
    </div>
  );
}

export default SortFilters;
