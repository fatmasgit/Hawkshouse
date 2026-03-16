import { useState } from "react";
import product from "./product.jpg";
import { ChevronDown } from "lucide-react";

function ProductFeature({ dir = "rtl" }) {
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("");
  const [open, setOpen] = useState(false);

  const increase = () => setQuantity((prev) => prev + 1);
  const decrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const sizes = ["1 لتر", "5 لتر", "20 لتر"];

  return (
    <div
      dir={dir}
      className="w-[85%] mx-auto bg-white/60 border border-[#e59753] rounded-lg overflow-hidden p-6 flex flex-col gap-12"
    >
      {/* TOP ROW */}
      <div className="flex gap-8">
        {/* IMAGE SIDE */}
        <div className="w-1/2 px-6 flex flex-col gap-6">
          <div className="relative bg-gray-100 h-[420px] rounded-lg overflow-hidden flex items-center justify-center">
            <span className="absolute top-4 left-4 bg-orange text-white text-sm px-3 py-1 rounded-md">
              15% off
            </span>

            <img
              src={product}
              alt="product"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex gap-4 w-full">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center h-[150px] cursor-pointer hover:border hover:border-orange transition w-1/3"
              >
                <img
                  src={product}
                  alt="thumb"
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* DETAILS SIDE */}
        <div className="w-1/2 px-6 flex flex-col justify-start gap-5">
          <h2 className="text-3xl font-arabic text-[30px] py-1 font-bold text-teal">اسم المنتج</h2>

          <div className="flex flex-col gap-5 text-gray-700 ">
            <div className="flex items-start gap-3">
              <span className="font-bold font-arabic text-blue min-w-[90px] text-[18px]">
                المميزات :
              </span>
              <p className="text-blue font-bold  font-arabic text-[18px]">
                مجموع خضري قوي لون الورقه ازرق داكن من بداية الزرع حتى نهاية
                المحصول يوفر في كمية الازوت خلال العروة أطول فتره جمع بين كل
                الأصناف ثمره تسويقية بطول من 16 إلى 18 سم
              </p>
            </div>

            <div className="flex gap-1">
              <span className="font-bold font-arabic text-blue min-w-[90px] text-[18px]">
                المتجر :
              </span>
              <p className="text-blue font-bold font-arabic  text-[18px]">اسم المتجر هنا</p>
            </div>

            <div className="flex gap-1">
              <span className="font-bold font-arabic text-blue min-w-[90px] text-[18px]">
                الفئة :
              </span>
              <p className="text-blue font-bold font-arabic  text-[18px]" >مبيدات</p>
            </div>

            <div className="flex items-center gap-2">
              {/* Green circle only */}
              <span className="w-3 h-3 bg-green-500 rounded-full"></span>

              <span className="font-bold text-blue min-w-[90px] text-[18px]">
                متوفر
              </span>
            </div>

          </div>

          {/* PRICE */}
          <div className="mt-10">
            <h3 className="text-3xl font-bold font-arabic text-teal text-[30px]">
              EPG 00.00
            </h3>

            <div className="h-[2px] bg-gray-300 mt-4 w-full"></div>

            {/* ACTIONS */}
            <div className="mt-8 flex items-center gap-4 flex-wrap">
              {/* QUANTITY */}
              <div className="flex items-center gap-2">
                <button
                  onClick={increase}
                  className="w-10 h-12 border border-orange  font-bold rounded-md hover:bg-gray-100 transition"
                >
                  +
                </button>

                <div className="w-10 h-12 border border-orange rounded-md flex items-center justify-center font-medium">
                  {quantity}
                </div>

                <button
                  onClick={decrease}
                  className="w-10 h-12 border border-orange  font-bold rounded-md hover:bg-gray-100 transition"
                >
                  −
                </button>
              </div>

              {/* CUSTOM SIZE SELECT */}
              <div className="relative w-[120px]">
                <div
                  onClick={() => setOpen(!open)}
                  className="flex items-center justify-between border border-orange rounded-md px-4 h-12 text-orange font-medium cursor-pointer"
                >
                  <span>{size || "الحجم"}</span>
                  <ChevronDown
                    size={18}
                  />
                </div>

                {open && (
                  <div className="absolute left-0 mt-1 w-full bg-white border border-orange rounded-md overflow-hidden shadow-md z-20">
                    {sizes.map((item) => (
                      <div
                        key={item}
                        onClick={() => {
                          setSize(item);
                          setOpen(false);
                        }}
                        className={`px-4 py-2 text-start cursor-pointer transition
                        ${size === item
                            ? "bg-orange text-white"
                            : "hover:bg-orange/20"
                          }`}
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* ADD TO CART */}
              <button className="bg-orange text-white px-8 py-3 rounded-md font-semibold shadow-md hover:opacity-90 transition">
                أضف للسلة
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM SECTION */}
      <div className="w-full pt-10 px-6">
        <div className="w-full text-center">
          <h2 className="text-2xl font-semibold text-orange border-b-2 border-orange pb-1 inline-block">
            تفاصيل عن المنتج
          </h2>
        </div>

        <p className="mt-6 mx-auto text-gray-700  text-lg text-start px-6">
          منتج من مخلفات نباتية وحيوانية عضوية معالجة حرارياً ومتحللة غنية
          بالعناصر الصغرى والكبرى والنيتروجين والكربون والهيوميك أسيد والكائنات
          الدقيقة المفيدة. يوصى بإضافة الكمبوست عند بداية الزراعة وخلطه مع
          التربة قبل غرس الأشجار والنباتات لأن ذلك أسهل بكثير من إضافته بعد
          الزراعة.
        </p>
      </div>
    </div>
  );
}

export default ProductFeature;