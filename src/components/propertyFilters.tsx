import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FilterOptionProps {
  title: string;
  options: string[];
  selectedOption: string;
  onSelect: (value: string) => void;
}

const FilterOption: React.FC<FilterOptionProps> = ({
  title,
  options,
  selectedOption,
  onSelect,
}) => {
  const [open, setOpen] = useState(true);

  return (
    <div className="w-[327px] border-b last:border-b-0 pb-6 pe-4" dir="rtl">
      {/* Header */}
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <h2 className="text-[#243A76] font-bold text-[20px]">{title}</h2>

        {/* Arrow: Down when closed, Up when open */}
  <ChevronDown
  size={25}
  className={`text-[#F5841E] transition-transform duration-300 ${
    open ? "rotate-180" : "rotate-0"
  }`}
/>

      </div>

      {/* Options */}
      {open && (
        <div className="mt-4 flex flex-col gap-4">
          {options.map((item) => {
            const isActive = selectedOption === item;

            return (
              <label
                key={item}
                className="flex items-center gap-3 cursor-pointer"
                onClick={() => onSelect(item)}
              >
                {/* Custom Radio */}
                <div className="w-[32px] h-[32px] rounded-[14px] border-2 border-[#243A76] bg-white flex items-center justify-center">
                  {isActive && (
                    <div className="w-[22px] h-[22px] bg-[#F5841E] rounded-[10px]" />
                  )}
                </div>

                {/* Text */}
                <span className="text-[#243A76] text-[16px] font-medium">
                  {item}
                </span>
              </label>
            );
          })}
        </div>
      )}
    </div>
  );
};

const Filters: React.FC = () => {
  const [selectedBrand, setSelectedBrand] = useState("نوفارم");
  const [selectedCategory, setSelectedCategory] = useState("بودر");
  const [selectedSeller, setSelectedSeller] = useState("أسم البائع1");

  return (
    <div className="flex flex-col gap-6">
      <FilterOption
        title="ماركة"
        options={["نوفارم", "جرينرج", "حماية"]}
        selectedOption={selectedBrand}
        onSelect={setSelectedBrand}
      />

      <FilterOption
        title="نوع السماد"
        options={["بودر", "سائل", "معلق"]}
        selectedOption={selectedCategory}
        onSelect={setSelectedCategory}
      />

      <FilterOption
        title="البائع"
        options={["أسم البائع1", "أسم البائع2", "أسم البائع3"]}
        selectedOption={selectedSeller}
        onSelect={setSelectedSeller}
      />
    </div>
  );
};

export default Filters;
