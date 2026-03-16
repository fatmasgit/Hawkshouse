import { useState } from "react";
import { useLocation } from "react-router-dom";
import { ChevronDown, X } from "lucide-react";


function OrderCard({ dir = "rtl", quantity: initialQuantity = 1 }) {
  const { pathname } = useLocation();
  const isCart = pathname === "/cart";
  const isOrderPlaced = pathname === "/order-placed";
  const isAccount = pathname === "/account"; // New condition

  const [quantity, setQuantity] = useState(initialQuantity);
  const [size, setSize] = useState("");
  const [open, setOpen] = useState(false);
  const sizes = ["صغير", "متوسط", "كبير"];

  const increase = () => setQuantity((prev) => prev + 1);
  const decrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div dir={dir} className="relative flex items-start gap-6 pb-6">
      {/* Remove button (cart only) */}
      {isCart && (
        <button
          className={`absolute top-0 text-gray-400 text-xl ${dir === "rtl" ? "left-0" : "right-0"
            }`}
        >
          <X size={24} />
        </button>
      )}

      {/* Image + quantity for order placed */}
      <div className="flex items-start gap-3">
        {isOrderPlaced && (
          <span className="text-orange font-semibold">{quantity}X</span>
        )}
        <div className="w-[120px] h-[110px] rounded-md flex items-center justify-center overflow-hidden">
          <img
            src='/images/product.jpg'
            alt="product"
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 justify-between gap-6">
        {/* Product info */}
        <div className="flex flex-col gap-3">
          <h3 className="text-teal font-arabic text-[18px] font-bold">
            اسم المنتج
          </h3>
          <p className="text-gray-500 text-sm font-medium font-arabic leading-relaxed">
            الميزان: مجموعة مكيّف قوي أو الواقي شفاف على كامل الجوانب
            حتى يتناسب مع جميع أنواع الحليب كما يمكن فتح الغطاء بسهولة
            خلال الرضاعة بطول 16 – 18 سم
          </p>

          {/* Price + Add to Cart button on /account */}
          {isAccount ? (
            <div className="flex items-center justify-between gap-3">
              <span className="text-teal font-arabic text-[18px] font-bold">
                EGP00.00
              </span>
              <button className="px-3 py-1.5 bg-orange text-white text-[14px] rounded-md font-arabic font-medium">
                أضف للسلة
              </button>
            </div>
          ) : (
            <span className="text-teal font-arabic text-[16px] font-bold">
              EGP00.00
            </span>
          )}
        </div>

        {/* Cart controls (quantity + size) */}
        {isCart && !isAccount && (
          <div
            className={`flex flex-col gap-3 self-end ${dir === "rtl" ? "items-end" : "items-start"
              }`}
          >
            {/* Quantity controls */}
            <div
              className={`flex gap-2 w-[120px] ${dir === "rtl" ? "flex-row-reverse" : "flex-row"
                }`}
            >
              <button
                onClick={increase}
                className="w-10 h-7 flex items-center justify-center border border-orange rounded-md"
              >
                +
              </button>
              <span className="w-10 h-7 flex items-center justify-center border border-orange rounded-md text-center">
                {quantity}
              </span>
              <button
                onClick={decrease}
                className="w-10 h-7 flex items-center justify-center border border-orange rounded-md"
              >
                -
              </button>
            </div>

            {/* Size selector */}
            <div className="relative w-[120px]">
              <div
                onClick={() => setOpen(!open)}
                className="flex items-center justify-between border border-orange rounded-md px-4 h-7 text-orange font-medium cursor-pointer"
              >
                <span className="text-[16px] font-arabic font-medium">
                  {size || "الحجم"}
                </span>
                <ChevronDown size={18} />
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
                      className={`px-4 h-7 text-start cursor-pointer transition font-arabic font-medium
                        ${size === item ? "bg-orange text-white" : "hover:bg-orange/20"}`}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default OrderCard;