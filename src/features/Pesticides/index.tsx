import SortFilters from "../../components/sortFilters";
import PropertyFilters from "../../components/propertyFilters";
import Card from "../../components/Card";
import BreadCrumb from '../../components/breadcrumb'
import SliderFilter from "../../components/sliderFilter";


function PesticidesFeature() {
    return (
        <div className="w-full" dir="rtl">
            <BreadCrumb />
            <div
                className="
w-[85%]
    mx-auto
    bg-white/60
    border
    border-[#F5841E]
    rounded-[10px]
    pb-15
  "
            >
                <div>
                    <SortFilters />
                </div>
                <div className="w-full  px-10 flex gap-12 ">
                    <div>
                        <PropertyFilters />
                        < SliderFilter />
                    </div>
                    <div className="w-[905px] flex justify-between  flex-wrap ">
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </div>

                </div>
            </div>
        </div>
    );
}

export default PesticidesFeature;
