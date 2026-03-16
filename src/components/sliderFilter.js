"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";
function SliderFilter() {
    const [value, setValue] = useState([0, 500]);
    return (_jsxs("div", { className: "w-full flex flex-col gap-4 border-t-2 py-5", children: [_jsx("span", { className: " font-bold text-blue font-arabic text-[28px]", children: "\u0627\u0644\u0633\u0639\u0631" }), _jsxs("div", { className: "flex justify-between mb-2 text-sm font-medium text-gray-700", children: [_jsxs("span", { className: "border rounded-md px-3 py-2 text-blue  ", children: [" ", value[0]] }), _jsxs("span", { className: "border rounded-md px-3 py-2 text-blue ", children: ["  ", value[1]] })] }), _jsx(Slider, { id: "slider-price", value: value, onValueChange: setValue, min: 0, max: 500, step: 1, dir: "rtl" }), _jsxs("div", { className: "flex justify-between mt-2 text-xs text-gray-400", children: [_jsx("span", { className: " text-blue  ", children: "EGP 0" }), _jsx("span", { className: " text-blue   font-semibold", children: "EGP 500" })] })] }));
}
export default SliderFilter;
