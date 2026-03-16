import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
    return (_jsxs("nav", { dir: "rtl", className: "w-full", children: [_jsxs("div", { className: "w-full h-[58px] text-white px-32 flex items-center justify-between text-sm", style: { background: "linear-gradient(180deg, #0D4F8B 0%, #121D3B 100%)", opacity: 1 }, children: [_jsxs("div", { className: "flex items-center gap-3", children: [_jsx("span", { children: "\u062A\u0627\u0628\u0639\u0648\u0646\u0627" }), _jsx("div", { className: "flex gap-2", children: [Instagram, Twitter, Facebook].map((Icon, i) => (_jsx("div", { className: "w-6 h-6 rounded-full bg-white flex items-center justify-center cursor-pointer hover:bg-white/30 transition", children: _jsx(Icon, { size: 14, color: "#17293D" }) }, i))) })] }), _jsxs("div", { className: "flex items-center gap-1 cursor-pointer", children: [_jsx("span", { children: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629" }), _jsx(ChevronDown, { size: 14 })] })] }), _jsxs("div", { className: "bg-white px-8 py-4 flex items-center justify-between border-b mx-32 border-[#F5841E]", children: [_jsx(Link, { to: "/", className: "flex items-center gap-2", children: _jsx("img", { src: "/images/logo.png", alt: "logo", className: "h-15 object-cover cursor-pointer" }) }), _jsxs("ul", { className: "flex items-center gap-8 font-semibold text-[#0B3C6D]", children: [_jsx("li", { className: "cursor-pointer font-arabic text-[20px] font-bold transition hover:text-orange", children: _jsx(Link, { to: "/", children: "\u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629" }) }), _jsx("li", { className: "cursor-pointer font-arabic font-bold text-[20px] transition hover:text-orange", children: "\u0645\u0646 \u0646\u062D\u0646" }), _jsx("li", { className: "cursor-pointer font-arabic font-bold text-[20px] transition hover:text-orange", children: "\u062A\u0648\u0627\u0635\u0644 \u0645\u0639\u0646\u0627" })] }), _jsxs("div", { className: "flex items-center gap-5 text-[#0B3C6D]", children: [_jsx(Search, { size: 22, className: "cursor-pointer", color: "#17293D" }), _jsx(Link, { to: "/cart", children: _jsxs("div", { className: "relative cursor-pointer", children: [_jsx(ShoppingCart, { size: 22, color: "#17293D" }), _jsx("span", { className: "absolute -top-2 -right-2 w-4 h-4 rounded-full bg-orange text-white text-xs flex items-center justify-center", children: "0" })] }) }), _jsxs("div", { id: "user-menu", className: "relative", children: [_jsx("div", { className: "w-8 h-8 rounded-full border-2 border-[#0B3C6D] flex items-center justify-center cursor-pointer hover:bg-[#0B3C6D]/10 transition", onClick: (e) => {
                                            e.stopPropagation(); // Prevent immediate closing
                                            setShowUserMenu(!showUserMenu);
                                        }, children: _jsx(User, { size: 22, color: "#17293D" }) }), showUserMenu && (_jsxs("div", { className: "absolute right-0 mt-2 w-36 bg-white shadow-lg rounded-md overflow-hidden text-center z-50", children: [_jsx(Link, { to: "/login", className: "block py-2 px-4 hover:bg-orange hover:text-white transition", onClick: () => setShowUserMenu(false), children: "\u062A\u0633\u062C\u064A\u0644 \u062F\u062E\u0648\u0644" }), _jsx(Link, { to: "/signup", className: "block py-2 px-4  hover:bg-orange hover:text-white transition", onClick: () => setShowUserMenu(false), children: "\u0625\u0646\u0634\u0627\u0621 \u062D\u0633\u0627\u0628" })] }))] })] })] }), _jsx("div", { className: "bg-white py-5 flex justify-center gap-10 font-semibold text-[#0B3C6D]", style: { boxShadow: "0px 4px 4px -2px #00000029" }, children: categories.map((cat) => (_jsx(Link, { to: cat.path, className: "cursor-pointer transition font-arabic text-[18px] font-bold hover:text-orange", children: cat.label }, cat.path))) })] }));
}
