import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

function CartForm({ dir = "rtl" }) {
  const payments = ["الدفع نقدا عند الاستلام"];

  const governorates = ["القاهرة", "الجيزة", "الإسكندرية"];
  const areas = ["مدينة نصر", "المعادي", "التجمع"];

  const [activePayment, setActivePayment] = useState(payments[0]);

  const [gov, setGov] = useState("");
  const [area, setArea] = useState("");

  const [openGov, setOpenGov] = useState(false);
  const [openArea, setOpenArea] = useState(false);

  return (
    <div
      dir={dir}
      className="
        border
        border-orange
        rounded-lg
        overflow-hidden
        flex
        flex-col
        gap-6
        p-10
        w-[85%]
        mx-auto 
    
      "
    >
      {/* Title */}
      <h2 className="text-center text-blue font-bold font-arabic text-[26px]">
        إتمام الشراء
      </h2>

      {/* Shipping */}
      <div className="flex flex-col gap-3">
        <p className="text-blue font-bold font-arabic text-[20px] py-1">شحن إلى</p>

        {/* Governorate Select */}
        <div className="relative w-full">
          <div
            onClick={() => setOpenGov(!openGov)}
            className="flex items-center justify-between border rounded-md px-4 h-[44px] text-gray-600 cursor-pointer"
          >
            <span className="text-[14px] font-medium">
              {gov || "المحافظة"}
            </span>
            <ChevronDown size={18} />
          </div>

          {openGov && (
            <div className="absolute left-0 mt-1 w-full bg-white border rounded-md overflow-hidden shadow-md z-20">
              {governorates.map((item) => (
                <div
                  key={item}
                  onClick={() => {
                    setGov(item);
                    setOpenGov(false);
                  }}
                  className={`px-4 h-[40px] flex items-center cursor-pointer transition
                    ${gov === item
                      ? "bg-orange text-white"
                      : "hover:bg-orange-100"
                    }`}
                >
                  {item}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Area Select */}
        <div className="relative w-full">
          <div
            onClick={() => setOpenArea(!openArea)}
            className="flex items-center justify-between border rounded-md px-4 h-[44px] text-gray-600 cursor-pointer"
          >
            <span className="text-[14px] font-medium">
              {area || "المنطقة"}
            </span>
            <ChevronDown size={18} />
          </div>

          {openArea && (
            <div className="absolute left-0 mt-1 w-full bg-white border rounded-md overflow-hidden shadow-md z-20">
              {areas.map((item) => (
                <div
                  key={item}
                  onClick={() => {
                    setArea(item);
                    setOpenArea(false);
                  }}
                  className={`px-4 h-[40px] flex items-center cursor-pointer transition
                    ${area === item
                      ? "bg-orange text-white"
                      : "hover:bg-orange-100"
                    }`}
                >
                  {item}
                </div>
              ))}
            </div>
          )}
        </div>

        <input
          type="text"
          placeholder="اسم الشارع"
          className="border rounded-md p-3 text-sm outline-none"
        />

        <input
          type="text"
          placeholder="رقم العمارة، الدور"
          className="border rounded-md p-3 text-sm outline-none"
        />
      </div>

      {/* Payment */}
      <div className="flex flex-col gap-3 py-1">
        <p className="text-blue font-bold font-arabic text-[20px] text-start">
          طريقة الدفع
        </p>

        {payments.map((item) => {
          const isActive = activePayment === item;

          return (
            <label
              key={item}
              onClick={() => setActivePayment(item)}
              className="flex items-center justify-start gap-3 cursor-pointer"
            >
              <div className="w-[32px] h-[32px] rounded-[14px] border-2 border-blue bg-white flex items-center justify-center">
                {isActive && (
                  <div className="w-[22px] h-[22px] bg-orange rounded-[10px]" />
                )}
              </div>

              <span className="text-blue font-semibold font-arabic text-[18px]">
                {item}
              </span>
            </label>
          );
        })}
      </div>

      {/* Coupon */}
      <div className="flex flex-row-reverse border rounded-md overflow-hidden items-center">
        <button className="bg-orange text-white font-bold font-arabic px-6 py-2 text-sm m-2 rounded-md">
          تفعيل
        </button>

        <input
          type="text"
          placeholder="اكتب كود الخصم"
          className="flex-1 px-3 py-2 text-sm outline-none"
        />
      </div>

      {/* Order Summary */}
      <div className="flex flex-col gap-3">
        <p className="text-blue font-bold font-arabic text-[26px] text-center py-1">
          ملخص الطلبية
        </p>

        <div className="flex justify-between text-sm">
          <span className="text-blue font-semibold font-arabic text-[18px]">رسوم الشحن</span>
          <span className="text-teal font-semibold font-arabic text-[18px]">EGP00.00</span>
        </div>

        <div className="flex justify-between text-sm">
          <span className="text-blue font-semibold font-arabic text-[18px]">الضريبة</span>
          <span className="text-teal font-semibold font-arabic text-[18px]">EGP00.00</span>
        </div>

        <hr />

        <div className="flex justify-between text-sm font-semibold">
          <span className="text-blue font-bold font-arabic text-[18px]">الإجمالي</span>
          <span className="text-teal font-semibold font-arabic text-[18px]">EGP00.00</span>
        </div>
      </div>

      {/* Checkout Button */}
      <Link to="/order-placed">
        <button className="bg-orange text-white py-3 rounded-md font-bold text-[20px] hover:opacity-90 transition w-full">
          إتمام الشراء
        </button>
      </Link>
    </div>
  );
}

export default CartForm;