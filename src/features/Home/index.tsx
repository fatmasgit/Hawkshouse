import PromotedProducts from "./PromotedProducts";
import BestSellingProducts from "./BestSellingProducts";
import ShopNow from "./ShopNow";
import CallUs from "./CallUs";
import Homecarousel from '../../components/homeCarousel'
import IconsDiv from './iconsDiv'
import Catogories from './Catogories'

function HomeFeatures() {
  return (
    <div className="w-full">
      <Homecarousel />
      <Catogories/>
      <PromotedProducts />
      <ShopNow />
      <BestSellingProducts />
      <IconsDiv />
      <CallUs />

    </div>
  );
}

export default HomeFeatures;
