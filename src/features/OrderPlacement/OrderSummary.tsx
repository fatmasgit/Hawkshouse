function OrderSummary({ dir = "rtl" }) {
  return (
    <div
      dir={dir}
      className="
        bg-white/60
        border
        border-[#F5841E]
        rounded-lg
        p-10
        w-[85%]
        mx-auto
        flex
        flex-col
        gap-8
      "
    >
      {/* Address Details */}
      <div className="flex flex-col items-start gap-2">
        <h3 className="text-orange self-center  font-arabic font-bold text-[26px] py-1">
          العنوان بالتفصيل
        </h3>

        <p className="text-blue font-arabic font-medium ">القاهرة، مصر الجديدة</p>
        <p className="text-blue font-arabic font-medium">36 شارع الدليفاند</p>
        <p className="text-blue font-arabic font-medium">الدور 2</p>

        <div className="flex gap-2 text-blue font-arabic font-medium">
          <span className="font-medium text-blue font-arabic ">الهاتف</span>
          <span className="font-medium text-blue font-arabic ">+012345678</span>
        </div>
      </div>

      {/* Order Summary */}
      <div className="flex flex-col gap-5">
        <h3 className="text-center text-orange  font-arabic font-bold text-[26px]">
          ملخص الطلبية
        </h3>
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
    </div>
  );
}

export default OrderSummary;