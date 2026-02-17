
import mobidat from './mobidat.png'
import mogazyat from './mogazyat.png'
import seeds from './seeds.png'

function Catogories() {
  return (
    <div className="w-[75%] mx-auto my-15 flex justify-around ">

<div className="flex  justify-between p-10 items-center w-[320px] h-[150px] bg-white shadow-[0px_3px_6px_rgba(0,0,0,0.16)] rounded-[10px]">
      < img  className="h-28" src={mobidat}/> 
      <p className="text-[#243A76] text-[26px]  font-bold">
مبيدات
        </p>

</div>

<div className="flex   items-center justify-between p-10  w-[320px] h-[150px] bg-white shadow-[0px_3px_6px_rgba(0,0,0,0.16)] rounded-[10px]">
       < img  className="h-28" src={mogazyat}/> 
      <p className="text-[#243A76] text-[26px]  font-bold">
مغذيات
        </p>
</div><div className="flex   items-center justify-between p-10 w-[320px] h-[150px] bg-white shadow-[0px_3px_6px_rgba(0,0,0,0.16)] rounded-[10px]">
     < img  className="h-28" src={seeds}/> 
      <p className="text-[#243A76] text-[26px]  font-bold">
   بذور
        </p>
</div>


 
    </div>
  );
}

export default Catogories;
