
import OrderCard from "../../../components/OrderCard";



export default function Favorites({ dir = "rtl" }) {


    return (

        <div dir={dir} className="flex flex-col items-start gap-10 flex-1">
            <p className="text-orange font-arabic font-bold text-[22px]">المنتجات المفضلة</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full">
                <OrderCard />
                <OrderCard />
                <OrderCard />
                <OrderCard />
            </div>

        </div>
    );
}