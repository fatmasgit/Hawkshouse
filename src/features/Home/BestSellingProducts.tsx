import Card from "../../components/Card"


function BestSellingProducts() {
    return (
        <div dir="rtl">
            <span
              className="text-[30px] font-bold text-[#243A76] w-[85%] mx-auto my-5  block "
              >المنتجات الأكثر مبيعآ</span>
            <div className="w-[80%]  flex mx-auto justify-between">
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    );
}

export default BestSellingProducts;
