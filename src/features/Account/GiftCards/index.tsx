// GiftCards.jsx
import { TicketPercent } from "lucide-react";

export default function GiftCards({ dir = "rtl" }) {
  const coupons = [
    { title: "كود الخصم %", date: "صالحة حتى 2/8/2023" },
    { title: "كود الخصم ج.م 00", date: "صالحة حتى 2/8/2023" },
    { title: "كود الخصم %", date: "صالحة حتى 2/8/2023" },
  ];

  return (
    <div dir={dir} className="flex flex-col items-start gap-10 flex-1">

      {coupons.map((coupon, index) => (
        <div
          key={index}

          className="flex items-start gap-6"
        >
          <TicketPercent
            size={35}
            className="text-[#2F3A5F]"
          />


          {/* text */}
          <div className="flex flex-col items-start gap-1">

            <span className="text-orange font-arabic font-bold text-[22px]">
              {coupon.title}
            </span>

            <span className="text-blue font-arabic font-medium text-[18px]">
              {coupon.date}
            </span>
          </div>



        </div>
      ))}

    </div>
  );
}