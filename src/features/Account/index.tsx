import { useState } from "react";
import { Truck, Heart, MapPin, TicketPercent, User } from "lucide-react";
import Profile from "./Profile";
//import OrdersTab from "./OrdersTab";
//import FavoritesTab from "./FavoritesTab";
import ShippingAddress from "./Addresses";
import GiftCards from "./GiftCards";
import Favorites from "./Favorites";
import Orders from "./Orders";

export const getTabs = () => [
  { key: "orders", label: "الطلبات", icon: <Truck size={28} /> },
  { key: "favorites", label: "المفضلة", icon: <Heart size={28} /> },
  { key: "addresses", label: "العناوين", icon: <MapPin size={28} /> },
  { key: "gifts", label: "بطاقات الهدايا", icon: <TicketPercent size={28} /> },
  { key: "profile", label: "الملف الشخصى", icon: <User size={28} /> },
];

export default function AccountFeature({ dir = "rtl" }) {
  const [activeTab, setActiveTab] = useState("profile");
  const tabs = getTabs();

  // Mapping tab keys to components
  const tabComponents = {
    orders: <Orders />,
    favorites: <Favorites />,
    addresses: <ShippingAddress />,
    gifts: <GiftCards />,
    profile: <Profile />,
  };

  return (
    <div
      dir={dir}
      className="w-[85%] mx-auto mt-15 bg-white/60 border border-[#F5841E] rounded-lg overflow-hidden p-15 flex flex-col gap-15"
    >
      {/* Title */}
      <div className="flex flex-col gap-3">
        <p className="text-blue font-bold font-arabic text-[30px]">الحساب الخاص بك</p>
        <div className="w-full h-[2px] bg-[#C9E1E6]" />
      </div>

      <div className="flex ">
        {/* Sidebar / Tabs */}
        <div className="flex flex-col gap-7 w-1/4 ">
          {tabs.map((tab) => (
            <div
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex items-center font-arabic  font-bold text-[24px] justify-start gap-4 cursor-pointer ${activeTab === tab.key
                ? "text-orange "
                : "text-blue"
                }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </div>
          ))}
        </div>

        {/* Active Tab Body */}
        <div className="flex-1">{tabComponents[activeTab]}</div>
      </div>
    </div>
  );
}