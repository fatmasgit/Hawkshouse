import { ShieldCheck, Truck, Tag } from "lucide-react";

function IconsDiv() {
  return (
    <div className="w-[70%] mx-auto my-15 flex justify-around ">

<div className="flex  flex-col items-center justify-center gap-2 w-[300px] h-[150px] bg-white shadow-[0px_3px_6px_rgba(0,0,0,0.16)] rounded-[10px]">
     < ShieldCheck  size={40}/> 
      <p className="text-[#f5841e] text-[26px]  font-bold ">
      جودة عالية
        </p>
</div>

<div className="flex  flex-col items-center justify-center gap-3 w-[300px] h-[150px] bg-white shadow-[0px_3px_6px_rgba(0,0,0,0.16)] rounded-[10px]">
     < Truck size={40}/> 
      <p className="text-[#f5841e] text-[26px]  font-bold ">
         توصيل سريع
        </p>
</div><div className="flex  flex-col items-center justify-center gap-3 w-[300px] h-[150px] bg-white shadow-[0px_3px_6px_rgba(0,0,0,0.16)] rounded-[10px]">
     < Tag  size={40}/> 
      <p className="text-[#f5841e] text-[26px]  font-bold ">
  أسعار منخفضة
        </p>
</div>


 
    </div>
  );
}

export default IconsDiv;
