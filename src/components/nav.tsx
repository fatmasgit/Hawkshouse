import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { User, ShoppingCart, Search, ChevronDown, Instagram, Twitter, Facebook } from "lucide-react";


export default function Navbar() {
  const [showUserMenu, setShowUserMenu] = useState(false);

  const categories = [
    { label: "بذور", path: "/seeds" },
    { label: "مغذيات", path: "/nutrients" },
    { label: "مبيدات", path: "/pesticides" },
  ];

  // Close dropdown when clicking outside
  const handleClickOutside = (e) => {
    if (!e.target.closest("#user-menu")) {
      setShowUserMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <nav dir="rtl" className="w-full">
      {/* Top Gradient Bar */}
      <div className="w-full h-[58px] text-white px-32 flex items-center justify-between text-sm"
        style={{ background: "linear-gradient(180deg, #0D4F8B 0%, #121D3B 100%)", opacity: 1 }}>
        {/* Social Media */}
        <div className="flex items-center gap-3">
          <span>تابعونا</span>
          <div className="flex gap-2">
            {[Instagram, Twitter, Facebook].map((Icon, i) => (
              <div key={i} className="w-6 h-6 rounded-full bg-white flex items-center justify-center cursor-pointer hover:bg-white/30 transition">
                <Icon size={14} color="#17293D" />
              </div>
            ))}
          </div>
        </div>

        {/* Language Selector */}
        <div className="flex items-center gap-1 cursor-pointer">
          <span>العربية</span>
          <ChevronDown size={14} />
        </div>
      </div>

      {/* Main Navbar */}
      <div className="bg-white px-8 py-4 flex items-center justify-between border-b mx-32 border-[#F5841E]">
        <Link to="/" className="flex items-center gap-2">
          <img src="/images/logo.png" alt="logo" className="h-15 object-cover cursor-pointer" />
        </Link>

        <ul className="flex items-center gap-8 font-semibold text-[#0B3C6D]">
          <li className="cursor-pointer font-arabic text-[20px] font-bold transition hover:text-orange">
            <Link to="/">الرئيسية</Link>
          </li>
          <li className="cursor-pointer font-arabic font-bold text-[20px] transition hover:text-orange">من نحن</li>
          <li className="cursor-pointer font-arabic font-bold text-[20px] transition hover:text-orange">تواصل معنا</li>
        </ul>

        {/* User / Cart / Search */}
        <div className="flex items-center gap-5 text-[#0B3C6D]">
          <Search size={22} className="cursor-pointer" color="#17293D" />

          <Link to="/cart">
            <div className="relative cursor-pointer">
              <ShoppingCart size={22} color="#17293D" />
              <span className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-orange text-white text-xs flex items-center justify-center">
                0
              </span>
            </div>
          </Link>

          {/* User Icon with Click Dropdown */}
          <div id="user-menu" className="relative">
            <div
              className="w-8 h-8 rounded-full border-2 border-[#0B3C6D] flex items-center justify-center cursor-pointer hover:bg-[#0B3C6D]/10 transition"
              onClick={(e) => {
                e.stopPropagation(); // Prevent immediate closing
                setShowUserMenu(!showUserMenu);
              }}
            >
              <User size={22} color="#17293D" />
            </div>

            {showUserMenu && (
              <div className="absolute right-0 mt-2 w-36 bg-white shadow-lg rounded-md overflow-hidden text-center z-50">
                <Link
                  to="/login"
                  className="block py-2 px-4 hover:bg-orange hover:text-white transition"
                  onClick={() => setShowUserMenu(false)}
                >
                  تسجيل دخول
                </Link>
                <Link
                  to="/signup"
                  className="block py-2 px-4  hover:bg-orange hover:text-white transition"
                  onClick={() => setShowUserMenu(false)}
                >
                  إنشاء حساب
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="bg-white py-5 flex justify-center gap-10 font-semibold text-[#0B3C6D]"
        style={{ boxShadow: "0px 4px 4px -2px #00000029" }}>
        {categories.map((cat) => (
          <Link
            key={cat.path}
            to={cat.path}
            className="cursor-pointer transition font-arabic text-[18px] font-bold hover:text-orange"
          >
            {cat.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}