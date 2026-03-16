import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import PromotedProducts from "./PromotedProducts";
import BestSellingProducts from "./BestSellingProducts";
import ShopNow from "./ShopNow";
import CallUs from "./CallUs";
import Homecarousel from '../../components/homeCarousel';
import IconsDiv from './iconsDiv';
import Catogories from './Catogories';
function HomeFeatures() {
    return (_jsxs("div", { className: "w-full", children: [_jsx(Homecarousel, {}), _jsx(Catogories, {}), _jsx(PromotedProducts, {}), _jsx(ShopNow, {}), _jsx(BestSellingProducts, {}), _jsx(IconsDiv, {}), _jsx(CallUs, {})] }));
}
export default HomeFeatures;
