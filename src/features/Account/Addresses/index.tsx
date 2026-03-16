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
    return (
      <div dir={dir} className="flex flex-col gap-6 w-[420px]">
        <h2 className="text-orange text-lg font-semibold">
          تعديل عنوان الشحن
        </h2>

        {/* CUSTOM CITY SELECT */}
        <div className="relative w-full">
          <div
            onClick={() => setCityOpen(!cityOpen)}
            className="flex items-center justify-between border border-black  rounded-md px-4 h-12 text-orange font-medium cursor-pointer"
          >
            <span>{selectedCity || "المحافظة"}</span>
            <ChevronDown size={18} />
          </div>

          {cityOpen && (
            <div className="absolute left-0 mt-1 w-full bg-white border border-black  rounded-md overflow-hidden shadow-md z-20">
              {cities.map((item) => (
                <div
                  key={item}
                  onClick={() => {
                    setSelectedCity(item);
                    setCityOpen(false);
                  }}
                  className={`px-4 py-2 text-start cursor-pointer transition
                    ${selectedCity === item ? "bg-orange text-white" : "hover:bg-[#F5841E]/20"}
                  `}
                >
                  {item}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* CUSTOM AREA SELECT */}
        <div className="relative w-full">
          <div
            onClick={() => setAreaOpen(!areaOpen)}
            className="flex items-center justify-between  border border-black  rounded-md px-4 h-12 text-orange font-medium cursor-pointer"
          >
            <span>{selectedArea || "المنطقة"}</span>
            <ChevronDown size={18} />
          </div>

          {areaOpen && (
            <div className="absolute left-0 mt-1 w-full bg-white border border-black   rounded-md overflow-hidden shadow-md z-20">
              {areas.map((item) => (
                <div
                  key={item}
                  onClick={() => {
                    setSelectedArea(item);
                    setAreaOpen(false);
                  }}
                  className={`px-4 py-2 text-start cursor-pointer transition
                    ${selectedArea === item ? "bg-orange text-white" : "hover:bg-[#F5841E]/20"}
                  `}
                >
                  {item}
                </div>
              ))}
            </div>
          )}
        </div>

        <input
          className="border rounded-md p-3"
          placeholder="العنوان"
        />

        <input
          className="border rounded-md p-3"
          placeholder="رقم الهاتف"
        />

        <button
          className="bg-orange text-white px-8 py-2 rounded-md w-fit"
          onClick={() => setShowForm(false)}
        >
          اضافة
        </button>
      </div>
    );
  }

  return (
    <div dir={dir} className="flex flex-col items-start gap-10 flex-1">
      <h2 className="text-orange font-arabic font-bold text-[22px]">
        عنوان الشحن
      </h2>

      {addresses.map((address, index) => {
        const isActive = active === index;

        return (
          <div
            key={index}
            className="flex items-start gap-4 cursor-pointer"
            onClick={() => setActive(index)}
          >
            <div className="w-[32px] h-[32px] rounded-[14px] border-2 border-blue flex items-center justify-center">
              {isActive && (
                <div className="w-[22px] h-[22px] bg-orange rounded-[10px]" />
              )}
            </div>

            <div className=" text-blue leading-7">
              <p className="text-blue font-arabic font-medium text-[18px]">{address.city}</p>
              <p className="text-blue font-arabic font-medium text-[18px]">{address.street}</p>
              <p className="text-blue font-arabic font-medium text-[18px]">{address.floor}</p>
              <p className="text-blue font-arabic font-medium text-[18px]">الهاتف {address.phone}</p>
            </div>
          </div>
        );
      })}

      <div className="flex gap-6 mt-4 self-end me-20">
        <button
          className="border  text-orange px-8 py-2 rounded-md"
          onClick={() => setShowForm(true)}
        >
          تعديل
        </button>

        <button
          className="bg-orange text-white px-8 py-2 rounded-md"
          onClick={() => setShowForm(true)}
        >
          اضافة
        </button>
      </div>
    </div>
  );
}