
function Catogories() {
  return (
    <div className="w-[75%] mx-auto my-15 flex justify-around " dir="rtl" >

      <div className="flex  justify-between p-10 items-center w-[320px] h-[150px] bg-white shadow-[0px_3px_6px_rgba(0,0,0,0.16)] rounded-[10px]">
        <p className="text-blue  text-[26px]  font-bold">
          مبيدات
        </p>
        < img className="h-28" src="/images/mobidat.png" />


      </div>

      <div className="flex   items-center justify-between p-10  w-[320px] h-[150px] bg-white shadow-[0px_3px_6px_rgba(0,0,0,0.16)] rounded-[10px]">
        <p className="text-blue  text-[26px]  font-bold">
          مغذيات
        </p>
        < img className="h-28" src="/images/mogazyat.png" />

      </div><div className="flex   items-center justify-between p-10 w-[320px] h-[150px] bg-white shadow-[0px_3px_6px_rgba(0,0,0,0.16)] rounded-[10px]">
        <p className="text-blue  text-[26px]  font-bold">
          بذور
        </p>
        < img className="h-28" src="/images/seeds.png" />

      </div>



    </div>
  );
}

export default Catogories;
