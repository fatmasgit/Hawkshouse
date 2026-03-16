import CartForm from "./CartForm";
import CartOrder from "./CartOrder";


function CartFeature({ dir = "rtl" }) {

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
      <div className="w-9/10 mx-auto flex flex-col gap-3">
        <p className=" text-blue font-bold  font-arabic text-[30px] " >
          سلة التسوق
        </p>

        <div className=" w-full h-[1px] bg-teal opacity-40" />
      </div>


      {/* TOP ROW (Image + Details) */}
      <div
        className='flex  '
      >


        {/* IMAGE SIDE */}
        <div className="w-1/2 flex flex-col   ">
          <CartForm />
        </div>


        {/* LEFT SIDE */}
        <div className="w-1/2  flex flex-col justify-start  " >
          <CartOrder />
        </div>


      </div>

    </div>
  );
}

export default CartFeature;