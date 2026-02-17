import { useLocation, Link } from "react-router-dom";
import {
  User,
  ShoppingCart,
  Search,
  ChevronDown,
  Instagram,
  Twitter,
  Facebook,
} from "lucide-react";
import logo from './logo.jpeg'

export default function Navbar() {
  const location = useLocation();

  // Map category labels to paths
  const categories = [
    { label: "بذور", path: "/seeds" },
    { label: "مغذيات", path: "/nutrients" },
    { label: "مبيدات", path: "/pesticides" },
  ];

  return (
    <nav dir="rtl" className="w-full">
      {/* ===== Top Gradient Bar ===== */}
      <div
        className="w-full h-[58px] text-white px-32 flex items-center justify-between text-sm"
        style={{
          background: "linear-gradient(180deg, #0D4F8B 0%, #121D3B 100%)",
          opacity: 1,
        }}
      >
        {/* Social Media */}
        <div className="flex items-center gap-3">
          <span>تابعونا</span>
          <div className="flex gap-2">
            <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center cursor-pointer hover:bg-white/30 transition">
              <Instagram size={14} color="#17293D" />
            </div>
            <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center cursor-pointer hover:bg-white/30 transition">
              <Twitter size={14} color="#17293D" />
            </div>
            <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center cursor-pointer hover:bg-white/30 transition">
              <Facebook size={14} color="#17293D" />
            </div>
          </div>
        </div>

        {/* Language Selector */}
        <div className="flex items-center gap-1 cursor-pointer">
          <span>العربية</span>
          <ChevronDown size={14} />
        </div>
      </div>

      {/* ===== Main Navbar ===== */}
      <div className="bg-white px-8 py-4 flex items-center justify-between border-b mx-32 border-[#F5841E]">
        {/* Logo (clickable home) */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="logo" className="h-full object-cover cursor-pointer" />
        </Link>

        {/* Menu */}
        <ul className="flex items-center gap-8 font-semibold text-[#0B3C6D]">
          <li className={`cursor-pointer transition ${location.pathname === '/' ? 'text-orange-500' : ''}`}>
            <Link to="/">الرئيسية</Link>
          </li>
          <li className="cursor-pointer">من نحن</li>
          <li className="cursor-pointer">تواصل معنا</li>
        </ul>

        {/* User / Cart / Search */}
        <div className="flex items-center gap-5 text-[#0B3C6D]">
          <Search size={22} className="cursor-pointer" color="#17293D" />

          <div className="relative cursor-pointer">
            <ShoppingCart size={22} color="#17293D" />
            <span className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-orange-500 text-white text-xs flex items-center justify-center">
              0
            </span>
          </div>

          {/* User Icon */}
          <div className="w-8 h-8 rounded-full border-2 border-[#0B3C6D] flex items-center justify-center cursor-pointer hover:bg-[#0B3C6D]/10 transition">
            <User size={22} color="#17293D" />
          </div>
        </div>
      </div>

      {/* ===== Categories ===== */}
      <div
        className="bg-white py-5 flex justify-center gap-10 font-semibold text-[#0B3C6D]"
        style={{
          boxShadow: "0px 4px 4px -2px #00000029", // bottom only shadow
        }}
      >
        {categories.map((cat) => {
          const isActive = location.pathname === cat.path;
          return (
            <Link
              key={cat.path}
              to={cat.path}
              className={`cursor-pointer transition ${
                isActive ? "text-orange-500 " : ""
              }`}
            >
              {cat.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
