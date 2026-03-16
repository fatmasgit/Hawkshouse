import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import SortFilters from "../../components/sortFilters";
import PropertyFilters from "../../components/propertyFilters";
import Card from "../../components/Card";
import BreadCrumb from '../../components/breadcrumb';
import SliderFilter from "../../components/sliderFilter";
function PesticidesFeature() {
    return (_jsxs("div", { className: "w-full", dir: "rtl", children: [_jsx(BreadCrumb, {}), _jsxs("div", { className: "\r\nw-[85%]\r\n    mx-auto\r\n    bg-white/60\r\n    border\r\n    border-[#F5841E]\r\n    rounded-[10px]\r\n    pb-15\r\n  ", children: [_jsx("div", { children: _jsx(SortFilters, {}) }), _jsxs("div", { className: "w-full  px-10 flex gap-12 ", children: [_jsxs("div", { children: [_jsx(PropertyFilters, {}), _jsx(SliderFilter, {})] }), _jsxs("div", { className: "w-[905px] flex justify-between  flex-wrap ", children: [_jsx(Card, {}), _jsx(Card, {}), _jsx(Card, {}), _jsx(Card, {}), _jsx(Card, {}), _jsx(Card, {})] })] })] })] }));
}
export default PesticidesFeature;
