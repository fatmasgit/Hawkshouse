import { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";

function SignUprFeature({ dir = "rtl" }) {
  const [accountType, setAccountType] = useState(""); // selected value
  const [open, setOpen] = useState(false); // dropdown open state
  const types = ["عميل", "تاجر"]; // dropdown options
  const dropdownRef = useRef<HTMLDivElement>(null); // properly typed ref

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node; // ensure type for contains
      if (dropdownRef.current && !dropdownRef.current.contains(target)) {
        setOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div
      dir={dir}
      className="
        w-[85%]
        mx-auto
        bg-white/60
        border
        border-[#F5841E]
        rounded-lg
        overflow-hidden
        p-8
        flex
        flex-col
        gap-6
        mt-15
      "
    >
      {/* title */}
      <div className="flex flex-col gap-3 w-9/10 mx-auto">
        <h2 className="text-blue text-[22px] font-bold font-arabic">
          تسجيل حساب جديد
        </h2>
        <div className="h-[2px] bg-[#C9E1E6]" />
      </div>

      {/* form */}
      <form className="flex flex-col w-1/3 gap-10 mx-auto pt-5">
        {/* name */}
        <div className="flex flex-col gap-2">
          <label className="text-blue text-[22px] font-bold font-arabic">
            الاسم كامل :
          </label>
          <input
            type="text"
            className="
              w-full
              border
              border-gray-300
              rounded-md
              px-3
              h-12
              outline-none
              focus:border-[#F5841E]
            "
          />
        </div>

        {/* phone */}
        <div className="flex flex-col gap-2">
          <label className="text-blue text-[22px] font-bold font-arabic">
            رقم الهاتف :
          </label>
          <input
            type="tel"
            className="
              w-full
              border
              border-gray-300
              rounded-md
              px-3
              h-12
              outline-none
              focus:border-[#F5841E]
            "
          />
        </div>

        {/* custom account type dropdown */}
        <div className="flex flex-col gap-2 relative" ref={dropdownRef}>
          <label className="text-blue text-[22px] font-bold font-arabic">
            نوع الحساب :
          </label>

          {/* Dropdown box */}
          <div className="relative w-1/2">
            <div
              onClick={() => setOpen(!open)}
              className="flex items-center justify-between border border-black rounded-md px-4 h-12 text-orange font-medium cursor-pointer"
            >
              <span>{accountType || "اختر نوع الحساب"}</span>
              <ChevronDown size={18} />
            </div>

            {open && (
              <div className="absolute left-0 mt-1 w-full bg-white border border-black rounded-md overflow-hidden shadow-md z-20">
                {types.map((item) => (
                  <div
                    key={item}
                    onClick={() => {
                      setAccountType(item);
                      setOpen(false);
                    }}
                    className={`px-4 py-2 text-start cursor-pointer transition
                      ${accountType === item ? "bg-orange text-white" : "hover:bg-orange/20"}`}
                  >
                    {item}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* password */}
        <div className="flex flex-col gap-2">
          <label className="text-blue text-[22px] font-bold font-arabic">
            كلمة المرور :
          </label>
          <input
            type="password"
            className="
              w-full
              border
              border-gray-300
              rounded-md
              px-3
              h-12
              outline-none
              focus:border-[#F5841E]
            "
          />
        </div>

        {/* confirm password */}
        <div className="flex flex-col gap-2">
          <label className="text-blue text-[22px] font-bold font-arabic">
            أعد كتابة كلمة المرور :
          </label>
          <input
            type="password"
            className="
              w-full
              border
              border-gray-300
              rounded-md
              px-3
              h-12
              outline-none
              focus:border-[#F5841E]
            "
          />
        </div>

        {/* button */}
        <button
          type="submit"
          className="
            mt-3
            mx-auto
            bg-[#F5841E]
            text-white
            px-10
            py-2
            rounded-md
            shadow
            hover:opacity-90
          "
        >
          تسجيل
        </button>
      </form>
    </div>
  );
}

export default SignUprFeature;