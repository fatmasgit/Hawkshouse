"use client";

import { Slider } from "@/components/ui/slider";
import { useState } from "react";

function SliderFilter() {
    const [value, setValue] = useState<[number, number]>([0, 500]);

    return (
        <div className="w-full flex flex-col gap-4 border-t-2 py-5">
            <span className=" font-bold text-blue font-arabic text-[28px]">السعر</span>
            {/* Labels above the handles */}
            <div className="flex justify-between mb-2 text-sm font-medium text-gray-700">
                <span className="border rounded-md px-3 py-2 text-blue  "> {value[0]}</span>
                <span className="border rounded-md px-3 py-2 text-blue ">  {value[1]}</span>
            </div>

            {/* Slider */}
            <Slider
                id="slider-price"
                value={value}
                onValueChange={setValue}
                min={0}
                max={500}
                step={1}
                dir="rtl"
            />

            {/* Min/Max text below the slider */}
            <div className="flex justify-between mt-2 text-xs text-gray-400">
                <span className=" text-blue  ">EGP 0</span>
                <span className=" text-blue   font-semibold">EGP 500</span>
            </div>
        </div>
    );
}

export default SliderFilter;