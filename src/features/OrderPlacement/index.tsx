import OrderSummary from "./OrderSummary";
import CartOrder from "./CartOrder";



function OrderPlacementFeature({ dir = "rtl" }) {

  return (
    <div
      dir={dir}
      className='    w-[85%]
        mx-auto
        bg-white/60
        border
        border-[#F5841E]
        rounded-lg
        overflow-hidden
        p-6
        flex
        flex-col
        gap-15
        pb-20
            mt-15
      '
    >

      {/* title */}
      <div className="w-9/10 mx-auto flex flex-col items-center gap-6">
        <h2 className=" text-blue  text-center font-arabic text-[30px] font-bold" >
          تم ارسال طلبك بنجاح
        </h2>
        <img src="/images/ok.png" alt="Success" className=" h-40" />

      </div>


      {/* TOP ROW (Image + Details) */}
      <div
        className='flex  '
      >


        {/* IMAGE SIDE */}
        <div className="w-1/2 flex flex-col   ">
          <OrderSummary />
        </div>


        {/* LEFT SIDE */}
        <div className="w-1/2  flex flex-col justify-start  " >
          <CartOrder />
        </div>


      </div>

    </div>
  );
}

export default OrderPlacementFeature;